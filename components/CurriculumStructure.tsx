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
    <section className="bg-[#F8F7F5] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Curriculum Structure
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#6D0F2C] md:text-5xl">
            Learning Pathways by Stage
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Our curriculum combines international exposure with strong
            Ghanaian academic foundations at every stage of learning.
          </p>
        </div>

        <div className="space-y-8">

          {stages.map((stage) => (
            <div
              key={stage.number}
              className="rounded-[32px] border border-[#E9E3DB] bg-white p-6 shadow-sm md:p-8"
            >
              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6D0F2C] text-sm font-bold text-[#D4AF37]">
                  {stage.number}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#6D0F2C]">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-gray-500">{stage.ages}</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                {/* Oxford */}
                <div className="rounded-3xl border border-[#D4AF37]/40 bg-[#F8F1DD] p-5">
                  <h4 className="mb-5 font-bold text-[#6D0F2C]">
                    Oxford International Curriculum
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {stage.oxford.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-[#E4D8C5] bg-white px-3 py-2 text-xs text-[#6D0F2C]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GES */}
                <div className="rounded-3xl border border-[#E7D8DD] bg-[#FAF5F6] p-5">
                  <h4 className="mb-5 font-bold text-[#6D0F2C]">
                    GES Curriculum
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {stage.ges.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-[#E4D8DD] bg-white px-3 py-2 text-xs text-[#6D0F2C]"
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