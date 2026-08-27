import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/news/hero.jpg"
        alt="Palace Royal International School"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D0612]/30 via-[#3A0817]/55 to-[#2D0612]/90" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-7xl px-5 pt-24 pb-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-20">

          {/* Eyebrow */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-sm sm:tracking-[0.35em]">
            Oxford International Curriculum
          </p>

          {/* Heading */}
          <h1
            className="
              max-w-5xl
              text-5xl
              font-black
              leading-[0.92]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Locally
            <br />
            Grounded.
            <br />
            Globally
            <br />
            Minded.
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-white/85
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            Raising future leaders through academic excellence,
            Christian values and an internationally recognised
            Oxford education.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">

            <Link
              href="/admissions"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#D4AF37]
                px-8
                py-3.5
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(212,175,55,.45)]
                active:scale-95
                sm:w-auto
                sm:py-4
              "
            >
              Apply Now
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white
                px-8
                py-3.5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#6D0F2C]
                active:scale-95
                sm:w-auto
                sm:py-4
              "
            >
              Book a Tour
            </Link>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-10
          -translate-x-1/2
          sm:bottom-8
          lg:bottom-12
        "
      >
        <ArrowDown
          className="animate-bounce text-[#D4AF37]"
          size={26}
        />
      </div>
    </section>
  );
}