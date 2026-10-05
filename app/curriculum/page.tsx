import Navbar from "@/components/Navbar";
import CurriculumStructure from "@/components/CurriculumStructure";
import Image from "next/image";
import CurriculumComparison from "@/components/CurriculumComparison";
import AssessmentSection from "@/components/AssessmentSection";
import Link from "next/link";

export default function CurriculumPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* HERO */}
        <section className="relative h-[90vh] overflow-hidden">
          <Image
            src="/images/news/herotsx.jpg"
            alt="Palace Royal Campus"
            fill
            priority
            className="object-center"
          />

          <div className="absolute inset-0 bg-[#6D0F2C]/70" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-7xl px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Oxford International Curriculum
              </p>

              <h1 className="mt-6 text-5xl font-black leading-none text-white md:text-7xl lg:text-8xl">
                A World-Class
                <br />
                Education.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-white/85">
                International standards. Christian values. Confident learners.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-[#FAF8F6] py-24">
          <div className="mx-auto max-w-5xl px-8 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
              Our Curriculum
            </p>

            <div className="mx-auto my-8 h-16 w-px bg-[#D4AF37]" />

            <h2 className="text-5xl font-black text-[#6D0F2C] md:text-6xl">
              Building the foundation for excellence.
            </h2>
<p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-700">
  Palace Royal International School combines the Oxford International
  Curriculum with Christian values to develop confident, responsible,
  reflective, innovative and engaged learners prepared for success
  anywhere in the world.
</p>

          </div>
        </section>
<CurriculumStructure />
       <CurriculumComparison />
       <AssessmentSection />

        {/* CTA */}
        <section className="bg-[#6D0F2C] py-24">
          <div className="mx-auto max-w-4xl px-8 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
              Begin Your Journey
            </p>

            <h2 className="mt-5 text-5xl font-black text-white">
              Experience the Oxford Difference.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/80">
              Discover how Palace Royal International School prepares students
              to excel academically, grow in character and become confident
              global citizens.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <Link
    href="/admissions"
    className="rounded-full border-2 border-white bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
  >
    Apply Now
  </Link>

  <Link
    href="/contact"
    className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#6D0F2C]"
  >
    Book a Tour
  </Link>
</div>

            </div>

          </div>
        </section>

      </main>

     
    </>
  );
}