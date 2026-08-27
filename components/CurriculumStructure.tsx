export default function CurriculumStructure() {
  const stages = [
    {
      number: "01",
      title: "Early Years",
      ages: "Reception | Ages 3–5",
      oxford: [
        "Communication & Language",
        "Early Mathematics",
        "Creative Expression",
        "Phonics & Literacy",
        "Physical Development",
      ],
      ges: [
        "Language & Literacy",
        "Numeracy",
        "Creative Arts",
        "Physical Development",
      ],
    },
    {
      number: "02",
      title: "Primary",
      ages: "Ages 6–11",
      oxford: [
        "English",
        "Mathematics",
        "Science",
        "Global Perspectives",
        "ICT",
        "Art & Design",
        "Physical Education",
      ],
      ges: [
        "English Language",
        "Mathematics",
        "Science",
        "History",
        "R.M.E",
        "Creative Arts",
        "French",
        "Asante Twi",
      ],
    },
    {
      number: "03",
      title: "Lower Secondary / JHS",
      ages: "Ages 12–14",
      oxford: [
        "English Language",
        "Mathematics",
        "Science",
        "Computing",
        "Business Studies",
        "Global Studies",
        "Creative Arts",
        "French",
      ],
      ges: [
        "English Language",
        "Mathematics",
        "Science",
        "History",
        "R.M.E",
        "Creative Arts",
        "French",
        "Asante Twi",
      ],
    },
  ];

  return (
    <section className="bg-[#F8F7F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
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
            Curriculum Structure
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
            Learning Pathways by Stage
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-gray-600

              sm:text-base
              sm:leading-7
            "
          >
            Our curriculum combines international exposure with strong
            Ghanaian academic foundations at every stage of learning.
          </p>

        </div>

        {/* =====================================================
            STAGES
        ====================================================== */}
        <div className="space-y-6 sm:space-y-8">

          {stages.map((stage) => (
            <div
              key={stage.number}
              className="
                rounded-[24px]
                border
                border-[#E9E3DB]
                bg-white
                p-5
                shadow-sm

                sm:rounded-[28px]
                sm:p-7

                lg:rounded-[32px]
                lg:p-8
              "
            >

              {/* Stage Heading */}
              <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#6D0F2C]
                    text-xs
                    font-bold
                    text-[#D4AF37]

                    sm:h-11
                    sm:w-11
                    sm:text-sm
                  "
                >
                  {stage.number}
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-tight
                      text-[#6D0F2C]

                      sm:text-2xl
                    "
                  >
                    {stage.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {stage.ages}
                  </p>
                </div>

              </div>

              {/* =================================================
                  CURRICULUM COLUMNS
              ================================================== */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">

                {/* Oxford */}
                <div
                  className="
                    rounded-[22px]
                    border
                    border-[#D4AF37]/40
                    bg-[#F8F1DD]
                    p-4

                    sm:rounded-3xl
                    sm:p-5
                  "
                >
                  <h4
                    className="
                      mb-4
                      text-sm
                      font-bold
                      leading-6
                      text-[#6D0F2C]

                      sm:mb-5
                      sm:text-base
                    "
                  >
                    Oxford International Curriculum
                  </h4>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {stage.oxford.map((subject) => (
                      <span
                        key={subject}
                        className="
                          rounded-full
                          border
                          border-[#E4D8C5]
                          bg-white
                          px-3
                          py-2
                          text-[11px]
                          leading-4
                          text-[#6D0F2C]

                          sm:text-xs
                        "
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GES */}
                <div
                  className="
                    rounded-[22px]
                    border
                    border-[#E7D8DD]
                    bg-[#FAF5F6]
                    p-4

                    sm:rounded-3xl
                    sm:p-5
                  "
                >
                  <h4
                    className="
                      mb-4
                      text-sm
                      font-bold
                      leading-6
                      text-[#6D0F2C]

                      sm:mb-5
                      sm:text-base
                    "
                  >
                    GES Curriculum
                  </h4>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {stage.ges.map((subject) => (
                      <span
                        key={subject}
                        className="
                          rounded-full
                          border
                          border-[#E4D8DD]
                          bg-white
                          px-3
                          py-2
                          text-[11px]
                          leading-4
                          text-[#6D0F2C]

                          sm:text-xs
                        "
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}