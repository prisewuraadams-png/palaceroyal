"use client";

import { FileCheck, BarChart3, Users, Award } from "lucide-react";
import FadeUp from "./FadeUp";

const items = [
  {
    icon: FileCheck,
    title: "Continuous Assessment",
    text: "Students are assessed regularly through classroom activities, projects and practical learning.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    text: "Parents receive clear feedback that monitors academic growth and personal development.",
  },
  {
    icon: Users,
    title: "Teacher Support",
    text: "Our teachers provide personalised guidance to help every learner reach their full potential.",
  },
  {
    icon: Award,
    title: "International Standards",
    text: "Assessment reflects Oxford International Curriculum expectations while supporting Ghanaian educational excellence.",
  },
];

export default function AssessmentSection() {
  return (
    <section className="bg-[#6D0F2C] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Assessment & Progress
          </p>

          <h2 className="mt-4 text-5xl font-black text-white md:text-6xl">
            Measuring Growth Beyond Grades
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            We believe assessment should build confidence, celebrate progress
            and prepare students for lifelong success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <FadeUp key={title}>
              <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:border-[#D4AF37]/40">
                <Icon className="mb-6 h-10 w-10 text-[#D4AF37]" />

                <h3 className="text-xl font-bold text-white">{title}</h3>

                <p className="mt-4 leading-7 text-white/70">{text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}