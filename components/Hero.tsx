import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

     <Image
  src="/images/hero.jpg"
  alt="Palace Royal International School"
  fill
  priority
  className="object-contain object-center"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D0612]/30 via-[#3A0817]/55 to-[#2D0612]/85" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Oxford International Curriculum
          </p>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl">

            Locally
            <br />
            Grounded.
            <br />
            Globally
            <br />
            Minded.

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85">

            Raising future leaders through academic excellence,
            Christian values and an internationally recognised
            Oxford education.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/admissions"
              className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.45)]"
            >
              Apply Now
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#6D0F2C]"
            >
              Book a Tour
            </Link>

          </div>

        </div>

      </div>

      {/* Scroll indicator */}

      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">

        <ArrowDown className="animate-bounce text-[#D4AF37]" size={30} />

      </div>

    </section>
  );
}