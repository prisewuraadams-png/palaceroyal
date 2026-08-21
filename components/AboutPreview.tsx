import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Oxford artwork */}
      <div className="absolute top-0 right-0 w-[180px] md:w-[260px] lg:w-[360px] pointer-events-none">
        <Image
          src="/images/oxford.jpg"
          alt="Oxford International Curriculum"
          width={360}
          height={360}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
        <div className="max-w-2xl">

          <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#D4AF37]">
            Oxford International Curriculum
          </p>

          <div className="my-6 h-16 w-px bg-[#D4AF37]" />

          <h2 className="text-5xl font-black leading-[0.92] text-[#6D0F2C] md:text-6xl lg:text-7xl">
            A World-Class
            <br />
            Education.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Palace Royal International School delivers the Oxford International
            Curriculum, equipping learners with critical thinking, creativity,
            confidence and leadership while nurturing strong Christian values
            and academic excellence.
          </p>

          <Link
  href="/curriculum"
  className="mt-10 inline-flex items-center gap-3 rounded-full border-2 border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white hover:scale-105"
>
  Explore Our Curriculum →
</Link>

        </div>
      </div>
    </section>
  );
}