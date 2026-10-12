import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Timeline from "@/components/Timeline";
import CodingProfiles from "@/components/CodingProfiles";
import GithubSection from "@/components/GithubSection";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Timeline />
      <CodingProfiles />
      <GithubSection />
      <Achievements />
      <Contact />
    </>
  );
}
