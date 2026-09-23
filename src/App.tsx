import Hero from "./components/Hero";
import FlyerSlideshow from "./components/FlyerSlideshow";
import ProgramDetails from "./components/ProgramDetails";
import WhatsIncluded from "./components/WhatsIncluded";
import MeetCoach from "./components/MeetCoach";
import Scripture from "./components/Scripture";
import ProgramExperience from "./components/ProgramExperience";
import Pricing from "./components/Pricing";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-plum-900 text-cream-100 w-full">
      <Hero />
      <FlyerSlideshow />
      <ProgramDetails />
      <WhatsIncluded />
      <MeetCoach />
      <Scripture />
      <ProgramExperience />
      <Pricing />
      <InquiryForm />
      <Footer />
    </div>
  );
}
