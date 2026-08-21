import Image from "next/image";

export default function CurriculumDetails() {
  return (
    <section id="curriculum-details" className="bg-[#FAF8F6] py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">

        {/* Left Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Why Oxford?
          </p>

          <h2 className="mt-5 text-4xl font-black text-[#6D0F2C] md:text-5xl">
            Preparing Students for a Global Future
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-700">
            The Oxford International Curriculum develops students who are
            confident, responsible, reflective, innovative and engaged,
            combining internationally recognised academic standards with
            character development.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <span className="text-xl text-[#D4AF37]">✓</span>
              <p>Internationally recognised learning pathway.</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl text-[#D4AF37]">✓</span>
              <p>Critical thinking and problem-solving skills.</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl text-[#D4AF37]">✓</span>
              <p>Creativity, confidence and leadership development.</p>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
}