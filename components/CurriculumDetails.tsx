import Image from "next/image";

export default function CurriculumDetails() {
  return (
    <section
      id="curriculum-details"
      className="relative overflow-hidden bg-[#6D0F2C]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">

    
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#3A0817]/70" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-12
          lg:py-28
        "
      >
        <div className="max-w-4xl">

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
              lg:tracking-[0.35em]
            "
          >
            Why Oxford?
          </p>

          {/* Gold Divider */}
          <div
            className="
              mt-4
              h-12
              w-px
              bg-[#D4AF37]

              sm:mt-5
              sm:h-14

              lg:mt-6
              lg:h-16
            "
          />

          {/* Heading */}
          <h2
            className="
              mt-5
              text-3xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white

              sm:text-4xl

              md:text-5xl

              lg:text-6xl
            "
          >
            Preparing Students for a Global Future
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-white/85

              sm:mt-8
              sm:text-lg
              sm:leading-8

              lg:leading-9
            "
          >
            The Oxford International Curriculum develops students who are
            confident, responsible, reflective, innovative and engaged,
            combining internationally recognised academic standards with
            character development.
          </p>

          {/* Key Benefits */}
          <div
            className="
              mt-8
              space-y-4

              sm:mt-10
              sm:space-y-5

              lg:mt-12
            "
          >

            {/* Benefit 1 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span
                className="
                  mt-0.5
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  text-sm
                  font-bold
                  text-[#3A0817]

                  sm:h-7
                  sm:w-7
                "
              >
                ✓
              </span>

              <p
                className="
                  text-sm
                  leading-6
                  text-white/90

                  sm:text-base
                  sm:leading-7
                "
              >
                Internationally recognised learning pathway.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span
                className="
                  mt-0.5
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  text-sm
                  font-bold
                  text-[#3A0817]

                  sm:h-7
                  sm:w-7
                "
              >
                ✓
              </span>

              <p
                className="
                  text-sm
                  leading-6
                  text-white/90

                  sm:text-base
                  sm:leading-7
                "
              >
                Critical thinking and problem-solving skills.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span
                className="
                  mt-0.5
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  text-sm
                  font-bold
                  text-[#3A0817]

                  sm:h-7
                  sm:w-7
                "
              >
                ✓
              </span>

              <p
                className="
                  text-sm
                  leading-6
                  text-white/90

                  sm:text-base
                  sm:leading-7
                "
              >
                Creativity, confidence and leadership development.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}