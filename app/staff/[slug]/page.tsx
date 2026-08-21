import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Briefcase, Award, ArrowLeft } from "lucide-react";

import { staff, type StaffMember } from "../../../components/data/staff";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return staff.map((person) => ({
    slug: person.slug,
  }));
}

export default async function StaffProfile({ params }: Props) {
  const { slug } = await params;

  const person = staff.find((member: StaffMember) => member.slug === slug);

  if (!person) notFound();

  return (
    <>
      <main className="bg-[#FAF8F6]">
        {/* Hero */}
        <section className="bg-[#6D0F2C] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Link
              href="/about"
              className="mb-8 inline-flex items-center gap-2 text-[#D4AF37] transition hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to Our Team
            </Link>

            <div className="grid items-center gap-14 lg:grid-cols-[380px_1fr]">
              <div className="relative h-[480px] overflow-hidden rounded-[36px] shadow-2xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
                  {person.role}
                </p>

                <h1 className="mt-5 text-5xl font-black md:text-6xl">
                  {person.name}
                </h1>

                <blockquote className="mt-8 border-l-4 border-[#D4AF37] pl-6 text-xl italic text-white/90">
                  "{person.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">

              {/* Main Content */}
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
                  Biography
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#3A0817]">
                  About {person.name}
                </h2>

                <p className="mt-6 whitespace-pre-line text-lg leading-9 text-gray-700">
                  {person.bio}
                </p>

                <div className="mt-20">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
                    Responsibilities
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
                    {person.responsibilities.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#6D0F2C]/10 px-5 py-3 text-[#6D0F2C]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {person.category !== "support" && person.qualifications && (
                  <div className="rounded-[30px] bg-white p-8 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Award className="text-[#D4AF37]" />
                      <h3 className="text-xl font-bold text-[#3A0817]">
                        Qualifications
                      </h3>
                    </div>

                    <ul className="mt-6 space-y-4">
                      {person.qualifications.map((q) => (
                        <li key={q} className="text-gray-700">
                          • {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {person.category !== "support" && person.experience && (
                  <div className="rounded-[30px] bg-white p-8 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Briefcase className="text-[#D4AF37]" />
                      <h3 className="text-xl font-bold text-[#3A0817]">
                        Experience
                      </h3>
                    </div>

                    <p className="mt-5 text-lg text-gray-700">
                      {person.experience}
                    </p>
                  </div>
                )}
              </aside>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}