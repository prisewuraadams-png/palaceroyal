

import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import CEOMessage from "@/components/about/CEOMessage";
import StaffProfiles from "@/components/about/StaffProfiles";
//import OurStory from "@/components/about/OurStory";


export default function AboutPage() {
  return (
    <>
  
     <main>
  <AboutHero />
  <MissionVision />
 {/* <OurStory /> */}
  <CEOMessage />
  <StaffProfiles />

        {/* Closing CTA */}
        <section className="bg-[#6D0F2C] px-6 py-24 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Palace Royal International School
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Knowledge. Excellence. Honour.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Discover a school committed to developing confident, principled
              and globally minded learners.
            </p>

            <a
              href="/admissions"
              className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]"
            >
              Explore Admissions
            </a>
          </div>
        </section>
      </main>

  
    </>
  );
}