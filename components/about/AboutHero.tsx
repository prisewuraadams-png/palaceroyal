import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Palace Royal International School"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#6D0F2C]/70" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            About Palace Royal
          </p>

          <h1 className="mt-6 text-6xl font-black leading-none text-white md:text-8xl">
            Building Future
            <br />
            Leaders with
            <br />
            Purpose.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/85">
            Where Oxford International learning meets Christian values,
            excellence and a nurturing community.
          </p>

        </div>
      </div>
    </section>
  );
}