import { GraduationCap, ShieldCheck, Heart } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Knowledge",
    text: "Oxford International Curriculum",
  },
  {
    icon: ShieldCheck,
    title: "Excellence",
    text: "High academic standards",
  },
  {
    icon: Heart,
    title: "Honour",
    text: "Christian values",
  },
  
];

export default function Pillars() {
  return (
    <section className="relative -mt-28 z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:justify-between rounded-[32px] border border-[#D4AF37]/20 bg-black/45 px-8 py-10 backdrop-blur-lg">
          {pillars.map((item) => (
            <div key={item.title} className="text-center text-white">
              <item.icon className="mx-auto mb-4 text-[#D4AF37]" size={32} />

              <h3 className="mb-2 font-bold uppercase tracking-widest">
                {item.title}
              </h3>

              <p className="text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}