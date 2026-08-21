"use client";

import { Eye, Target, Globe, HeartHandshake, GraduationCap } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const highlights = [
  {
    icon: Globe,
    title: "Global Outlook",
    text: "International learning with local relevance.",
  },
  {
    icon: HeartHandshake,
    title: "Christian Values",
    text: "Character and integrity at every stage.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    text: "Preparing confident lifelong learners.",
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F6] py-28 md:py-36">

      {/* Decorative Background */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[#6D0F2C]/8 blur-3xl" />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[180px] font-black uppercase tracking-[0.3em] text-[#6D0F2C]/[0.03] md:text-[260px]">
          Purpose
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
              What We Stand For
            </p>

            <div className="mx-auto mt-5 h-20 w-px bg-[#D4AF37]" />

            <h2 className="mt-8 text-5xl font-black leading-tight text-[#2B0712] md:text-7xl">
              Purpose.
              <br />
              Vision.
              <br />
              Excellence.
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Every lesson, every interaction and every opportunity at Palace
              Royal is intentionally designed to develop confident, principled
              and globally minded learners.
            </p>

          </div>
        </FadeUp>

        {/* Mission & Vision Cards */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2">

          <FadeUp>
            <div className="group relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#6D0F2C] via-[#520A20] to-[#2F0611] p-12 text-white shadow-[0_30px_80px_rgba(58,8,23,0.25)] transition-all duration-500 hover:-translate-y-2">

              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/5" />

              <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-white/10 backdrop-blur transition duration-500 group-hover:rotate-6">
                <Target size={36} className="text-[#D4AF37]" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Our Mission
              </p>

              <h3 className="mt-4 text-4xl font-black">
                Educating with Purpose
              </h3>

              <p className="mt-8 text-lg leading-9 text-white/85">
                To impart knowledge, provide outstanding care, excellent
                education, and guide children in developing their gifts and
                abilities with honour.
              </p>

            </div>
          </FadeUp>

          <FadeUp>
            <div className="group relative overflow-hidden rounded-[42px] border border-[#E6DDD4] bg-white p-12 shadow-[0_30px_80px_rgba(58,8,23,0.08)] transition-all duration-500 hover:-translate-y-2">

              <div className="absolute -right-14 -bottom-14 h-56 w-56 rounded-full bg-[#D4AF37]/10" />

              <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-[#6D0F2C]/10 transition duration-500 group-hover:rotate-6">
                <Eye size={36} className="text-[#6D0F2C]" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Our Vision
              </p>

              <h3 className="mt-4 text-4xl font-black text-[#2B0712]">
                Shaping Tomorrow's Leaders
              </h3>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                We are a Christian school committed to delivering first-class,
                value-driven education focused on holistic development and
                global readiness.
              </p>

            </div>
          </FadeUp>

        </div>

        {/* Highlight Strip */}
        <FadeUp>
          <div className="mt-20 rounded-[36px] border border-[#E8DDD3] bg-white/70 p-8 backdrop-blur">

            <div className="grid gap-8 md:grid-cols-3">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6D0F2C]/10">
                    <Icon size={30} className="text-[#D4AF37]" />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#6D0F2C]">
                    {title}
                  </h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    {text}
                  </p>

                </div>
              ))}
            </div>

          </div>
        </FadeUp>

        {/* Signature Quote */}
        <FadeUp>
          <div className="mx-auto mt-24 max-w-4xl text-center">

            <div className="mx-auto mb-8 h-px w-24 bg-[#D4AF37]" />

            <blockquote className="text-3xl font-medium italic leading-relaxed text-[#6D0F2C] md:text-4xl">
              “Knowledge. Excellence. Honour.”
            </blockquote>

            <p className="mt-4 text-gray-500">
              The principles that shape every Palace Royal student.
            </p>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}