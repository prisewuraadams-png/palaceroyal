import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import AboutPreview from "@/components/AboutPreview";
import CurriculumDetails from "@/components/CurriculumDetails";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <AboutPreview />
        <CurriculumDetails />
      </main>
    </>
  );
}