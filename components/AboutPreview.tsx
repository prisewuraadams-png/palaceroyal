import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section
      id="curriculum"
      className="
        relative
        overflow-hidden
        bg-white
        py-16

        sm:py-20

        lg:py-28
      "
    >
      {/* =====================================================
          OXFORD ARTWORK
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-30px]
          top-0
          z-0
          w-[150px]
          opacity-70

          sm:right-[-20px]
          sm:w-[220px]
          sm:opacity-80

          md:w-[280px]

          lg:right-0
          lg:w-[360px]
          lg:opacity-100
        "
      >
        <Image
          src="/images/news/oic.jpg"
          alt="Oxford International Curriculum"
          width={360}
          height={360}
          className="h-auto w-full object-contain"
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5

          sm:px-8

          lg:px-12
        "
      >
        <div
          className="
            max-w-xl

            sm:max-w-2xl

            lg:max-w-3xl
          "
        >

          {/* Label */}
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]

              sm:text-xs
              sm:tracking-[0.4em]

              lg:text-sm
              lg:tracking-[0.45em]
            "
          >
            Oxford International Curriculum
          </p>

          {/* Gold Vertical Line */}
          <div
            className="
              my-5
              h-12
              w-px
              bg-[#D4AF37]

              sm:my-6
              sm:h-16

              lg:h-20
            "
          />

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-tight
              text-[#6D0F2C]

              sm:text-5xl

              md:text-6xl

              lg:text-7xl
            "
          >
            A World-Class
            <br />
            Education.
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-gray-600

              sm:mt-8
              sm:text-lg
              sm:leading-8

              lg:leading-9
            "
          >
            Palace Royal International School delivers the Oxford
            International Curriculum, equipping learners with critical
            thinking, creativity, confidence and leadership while nurturing
            strong Christian values and academic excellence.
          </p>

          {/* CTA */}
          <Link
            href="/curriculum"
            className="
              mt-8
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border-2
              border-[#D4AF37]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-[#D4AF37]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#D4AF37]
              hover:text-white

              sm:mt-10
              sm:w-auto
              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            Explore Our Curriculum →
          </Link>

        </div>
      </div>
    </section>
  );
}