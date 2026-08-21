import {
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: BookOpen,
    title: "Oxford International Curriculum",
    text: "A globally focused curriculum designed to develop confident, curious and capable learners.",
  },
  {
    icon: HeartHandshake,
    title: "Character & Christian Values",
    text: "We develop integrity, responsibility, compassion and strong values alongside academic growth.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Nurturing Environment",
    text: "A supportive school community where every child is encouraged to learn, grow and thrive.",
  },
  {
    icon: Sparkles,
    title: "Leadership & Future Readiness",
    text: "We prepare learners with confidence, creativity, critical thinking and leadership skills.",
  },
];

export default function WhyPalaceRoyal() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF8F6] py-24 md:py-32"
    >
      {/* Decorative burgundy shape */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#6D0F2C]/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6D0F2C]">
            Why Palace Royal
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D4AF37]" />

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#3A0817] md:text-5xl lg:text-6xl">
            Knowledge. Excellence. Honour.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            At Palace Royal International School, we believe education is
            about more than academic achievement. We nurture well-rounded
            students who are prepared to lead, serve and thrive in an evolving
            world.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-[28px] border border-[#6D0F2C]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6D0F2C]/10 text-[#6D0F2C] transition-all duration-300 group-hover:bg-[#6D0F2C] group-hover:text-[#D4AF37]">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug text-[#3A0817]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {reason.text}
                </p>

                <div className="mt-6 h-1 w-0 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}