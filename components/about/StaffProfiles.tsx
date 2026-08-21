"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { staff as staffData, type StaffMember } from "../data/staff";

const staff = {
  Administration: staffData.filter(
    (person) => person.category === "administration"
  ),
  Teachers: staffData.filter(
    (person) => person.category === "teachers"
  ),
  "Supporting Staff": staffData.filter(
    (person) => person.category === "support"
  ),
};

const categories = [
  "Administration",
  "Teachers",
  "Supporting Staff",
] as const;

export default function StaffProfiles() {

const [activeCategory, setActiveCategory] = useState<
  "Administration" | "Teachers" | "Supporting Staff"
>("Administration");

  return (
    <section className="bg-[#FAF8F6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6D0F2C]">
            Our People
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D4AF37]" />

          <h2 className="mt-6 text-4xl font-black text-[#3A0817] md:text-5xl">
            Meet Our Team
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our dedicated team works together to create an environment where
            every learner can learn, grow and thrive.
          </p>
        </div>

        {/* Category buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category as typeof categories[number])}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#6D0F2C] text-white shadow-lg"
                  : "border border-[#6D0F2C]/15 bg-white text-[#6D0F2C] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Staff cards */}
        {/* Staff cards */}
<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {staff[activeCategory].map((person) => (
    <Link key={person.id} href={`/staff/${person.slug}`}>
      <article className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">

        <div className="relative h-80 overflow-hidden">
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A0817]/90 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-black text-[#6D0F2C]">
            {person.name}
          </h3>

          <p className="mt-2 text-gray-500">
            {person.role}
          </p>

          <span className="mt-5 inline-block font-semibold text-[#D4AF37]">
            View Profile →
          </span>
        </div>

      </article>
    </Link>
  ))}


        </div>

      </div>
    </section>
  );
}