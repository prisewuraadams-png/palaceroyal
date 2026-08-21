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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Why Oxford?
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#6D0F2C] md:text-5xl">
            International Learning with Ghanaian Excellence
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-600">
            Our learners benefit from the internationally recognised Oxford
            International Curriculum while remaining grounded in Ghana's
            educational foundation through selected GES learning areas.
          </p>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-[#E8E2DB] bg-white shadow-lg">

          <div className="grid grid-cols-3 bg-[#6D0F2C] px-8 py-6 text-white">
            <div></div>
            <div className="text-center font-bold">Oxford</div>
            <div className="text-center font-bold">GES</div>
          </div>

          {comparison.map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-3 border-t border-[#EFE9E2] px-8 py-7"
            >
              <div className="font-semibold text-[#6D0F2C]">{row.title}</div>

              <div className="flex items-start justify-center gap-2 text-center text-gray-700">
                <Check className="mt-1 h-5 w-5 text-[#D4AF37]" />
                <span>{row.oxford}</span>
              </div>

              <div className="text-center text-gray-600">{row.ges}</div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}