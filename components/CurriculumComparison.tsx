import { Check } from "lucide-react";

const comparison = [
  {
    title: "Global Perspectives",
    oxford: "International mindset and real-world learning.",
    ges: "Primarily national curriculum focus.",
  },
  {
    title: "Critical Thinking",
    oxford: "Inquiry-based learning and problem solving.",
    ges: "More structured content delivery.",
  },
  {
    title: "Communication",
    oxford: "Strong emphasis on collaboration and presentation.",
    ges: "Traditional classroom communication.",
  },
  {
    title: "Future Readiness",
    oxford: "Leadership, creativity and innovation.",
    ges: "Core academic foundation.",
  },
];

export default function CurriculumComparison() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]

              sm:text-xs
              sm:tracking-[0.35em]
            "
          >
            Why Oxford?
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-[#6D0F2C]

              sm:text-4xl
              md:text-5xl
            "
          >
            International Learning with Ghanaian Excellence
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-sm
              leading-6
              text-gray-600

              sm:text-base
              sm:leading-7
            "
          >
            Our learners benefit from the internationally recognised Oxford
            International Curriculum while remaining grounded in Ghana's
            educational foundation through selected GES learning areas.
          </p>
        </div>

        {/* =====================================================
            DESKTOP / TABLET COMPARISON
        ====================================================== */}
        <div className="hidden overflow-hidden rounded-[30px] border border-[#E8E2DB] bg-white shadow-lg sm:block lg:rounded-[36px]">

          {/* Header */}
          <div className="grid grid-cols-3 bg-[#6D0F2C] px-6 py-5 text-white lg:px-8 lg:py-6">
            <div />

            <div className="text-center text-sm font-bold lg:text-base">
              Oxford
            </div>

            <div className="text-center text-sm font-bold lg:text-base">
              GES
            </div>
          </div>

          {/* Rows */}
          {comparison.map((row) => (
            <div
              key={row.title}
              className="
                grid
                grid-cols-3
                border-t
                border-[#EFE9E2]
                px-6
                py-6

                lg:px-8
                lg:py-7
              "
            >
              {/* Title */}
              <div className="pr-4 font-semibold text-[#6D0F2C]">
                {row.title}
              </div>

              {/* Oxford */}
              <div className="flex items-start justify-center gap-2 px-3 text-center text-sm text-gray-700 lg:text-base">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                  strokeWidth={2.5}
                />

                <span>{row.oxford}</span>
              </div>

              {/* GES */}
              <div className="px-3 text-center text-sm text-gray-600 lg:text-base">
                {row.ges}
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            MOBILE COMPARISON
        ====================================================== */}
        <div className="space-y-4 sm:hidden">

          {comparison.map((row) => (
            <div
              key={row.title}
              className="
                overflow-hidden
                rounded-[24px]
                border
                border-[#E8E2DB]
                bg-white
                shadow-sm
              "
            >
              {/* Topic */}
              <div className="bg-[#6D0F2C] px-5 py-4">
                <h3 className="text-base font-bold text-white">
                  {row.title}
                </h3>
              </div>

              {/* Oxford */}
              <div className="border-b border-[#EFE9E2] px-5 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Oxford
                </p>

                <div className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                    strokeWidth={2.5}
                  />

                  <p className="text-sm leading-6 text-gray-700">
                    {row.oxford}
                  </p>
                </div>
              </div>

              {/* GES */}
              <div className="px-5 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  GES
                </p>

                <p className="text-sm leading-6 text-gray-600">
                  {row.ges}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}