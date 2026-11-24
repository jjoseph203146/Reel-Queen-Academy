import coachHeadshot from "../assets/coach-headshot.jpg";

export default function MeetCoach() {
  return (
    <section className="bg-cream-50 text-plum-900 px-6 py-24 md:py-[100px]">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-14 md:mb-[60px]">
          <p className="m-0 mb-3 text-[13px] tracking-[3px] uppercase text-magenta-600 font-semibold">
            Meet Your Coach
          </p>
          <h2 className="m-0 font-display font-semibold text-[30px] sm:text-[36px]">
            The Woman Behind The Crown
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          <div
            className="relative w-full aspect-[4/5] rounded-md overflow-hidden"
            style={{ boxShadow: "0 24px 48px -12px rgba(42,15,53,0.35)" }}
          >
            <img
              src={coachHeadshot}
              alt="Coach headshot"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-[22px]">
            <div>
              <h3 className="m-0 mb-[6px] font-display font-bold text-[26px] sm:text-[30px] text-plum-900">
                Alicia Fitts, CCUFC, CUDE
              </h3>
              <p className="m-0 text-sm tracking-[1.5px] uppercase text-gold-500 font-semibold">
                Founder &amp; Lead Brand Coach, The Reel Queen Academy
              </p>
            </div>

            <p className="m-0 text-base leading-[1.8] text-[#3F2C46]">
              Alicia Fitts is a Wealth &amp; Branding Strategist, passionate
              Christian Business Coach, and the founder of Reel Queen
              Academy. With over 15 years of marketing experience and 8
              years in corporate business development, she helps
              entrepreneurs build profitable brands, increase their
              visibility, and create compelling content that attracts
              opportunities. She is also a Certified Credit Union
              Developmental Educator (CUDE). Alicia is passionate about
              empowering faith-driven women to grow their businesses with
              confidence, leverage their expertise, and create lasting
              wealth and impact through strategic branding, marketing, and
              authentic storytelling.
            </p>

            <div className="flex flex-col gap-[10px] px-6 py-[22px] bg-white border border-[#EADFCF] border-l-[3px] border-l-gold-500 rounded">
              <p className="m-0 text-xs tracking-[1.5px] uppercase text-[#8A7590] font-semibold">
                Experience &amp; Credentials
              </p>
              <p className="m-0 text-[15px] leading-[1.75] text-[#3F2C46]">
                Through years of serving and empowering women entrepreneurs,
                Alicia has helped women recognize the value of their gifts,
                clarify their message, and confidently share their work with
                the world. The Reel Queen Academy was created from a passion
                to help women walk boldly in their purpose and allow their
                light to shine.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="m-0 text-xs tracking-[1.5px] uppercase text-[#8A7590] font-semibold">
                Mission Statement
              </p>
              <p className="m-0 font-display italic font-medium text-lg leading-[1.7] text-[#8E1568]">
                &ldquo;The Reel Queen Academy exists to empower women to
                confidently show up, share their stories, and build impactful
                personal brands through authentic video content. Our mission
                is to equip aspiring and established entrepreneurs with the
                mindset, strategy, and skills needed to overcome fear,
                embrace their unique voice, and create reels and digital
                content that attract opportunities, build influence, and
                generate income. We are committed to helping every Queen step
                into her purpose, own her presence, and lead with confidence
                both online and beyond.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
