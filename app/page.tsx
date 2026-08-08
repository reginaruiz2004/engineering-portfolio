import Hero from "@/components/Hero";
import FocusStrip from "@/components/FocusStrip";
import SelectedWork from "@/components/SelectedWork";
import HowIBuild from "@/components/HowIBuild";
import Skills from "@/components/Skills";
import AboutTeaser from "@/components/AboutTeaser";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <FocusStrip />
      <SelectedWork />
      <HowIBuild />
      <Skills />
      <AboutTeaser />
      <ContactCTA />
    </div>
  );
}
