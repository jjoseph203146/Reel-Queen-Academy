import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  id: number;
  /** Flyer image to display. Leave undefined to show the placeholder. */
  image?: string;
  alt: string;
  /** Optional link the flyer points to (e.g. an event or sign-up page). */
  href?: string;
};

// Placeholder slides — import a flyer image and set `image` to replace one.
const slides: Slide[] = [
  { id: 1, alt: "Flyer 1" },
  { id: 2, alt: "Flyer 2" },
  { id: 3, alt: "Flyer 3" },
];

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40;

export default function FlyerSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = slides.length;

  const goTo = useCallback((i: number) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reducedMotion || count < 2) return;
    const timer = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, next, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (dx > SWIPE_THRESHOLD) prev();
      else if (dx < -SWIPE_THRESHOLD) next();
    }
    touchStartX.current = null;
    setPaused(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  };

  return (
    <section className="bg-cream-50 px-6 py-[64px]">
      <div
        className="relative max-w-[900px] mx-auto"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured flyers"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(42,15,53,0.35)]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className="w-full shrink-0 aspect-[16/9]"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={i !== index}
              >
                <SlideContent slide={slide} active={i === index} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous flyer"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-plum-900 shadow transition-colors"
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next flyer"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-plum-900 shadow transition-colors"
        >
          <Chevron direction="right" />
        </button>

        <div className="flex justify-center gap-2 mt-5">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to flyer ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-magenta-600" : "w-2.5 bg-[#D8C8DC] hover:bg-[#BFA8C5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideContent({ slide, active }: { slide: Slide; active: boolean }) {
  const content = slide.image ? (
    <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#F3E9F2] via-white to-[#EFE3F0] border-2 border-dashed border-[#D8C8DC] rounded-2xl text-plum-500">
      <span className="font-display font-semibold text-[22px] sm:text-[30px]">
        Flyer {slide.id}
      </span>
      <span className="text-xs sm:text-sm tracking-[2px] uppercase text-[#8A7590]">
        Placeholder
      </span>
    </div>
  );

  return slide.href ? (
    <a href={slide.href} tabIndex={active ? 0 : -1} className="block w-full h-full">
      {content}
    </a>
  ) : (
    content
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}
