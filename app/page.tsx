import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <FeaturedProjects />
      <Skills />
    </div>
  );
}