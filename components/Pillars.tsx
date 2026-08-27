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
    <section
      className="
        relative
        z-20
        -mt-14

        sm:-mt-16

        lg:-mt-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4

          sm:px-6

          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            overflow-hidden
            rounded-[24px]
            border
            border-[#D4AF37]/25
            bg-[#1F1217]/80
            shadow-2xl
            backdrop-blur-xl

            sm:grid-cols-3
            sm:rounded-[28px]

            lg:rounded-[32px]
          "
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-4
                  py-6
                  text-center
                  text-white

                  sm:min-h-[150px]
                  sm:px-5
                  sm:py-6

                  lg:min-h-[170px]
                  lg:px-8
                  lg:py-8

                  ${
                    index !== pillars.length - 1
                      ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <Icon
                  className="
                    mb-3
                    text-[#D4AF37]

                    sm:mb-4
                  "
                  size={28}
                  strokeWidth={1.8}
                />

                {/* Title */}
                <h3
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]

                    sm:text-sm
                    sm:tracking-[0.18em]

                    lg:text-base
                    lg:tracking-widest
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    max-w-[220px]
                    text-xs
                    leading-5
                    text-white/70

                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}