import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Bell } from "lucide-react";
import { news } from "@/components/data/news";

export default function NewsPage() {
  const events = [
    { date: "15 Sep", title: "Orientation Day", location: "Main Campus" },
    { date: "28 Sep", title: "Parents' Meeting", location: "School Hall" },
    { date: "10 Oct", title: "Sports Festival", location: "School Grounds" },
  ];

  return (
    <main className="bg-[#FAF8F6]">
      {/* Hero */}
<section className="bg-gradient-to-r from-[#5A001A] to-[#B48A96] pt-28 pb-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-12">

    <div className="grid items-center gap-14 lg:grid-cols-2">

      {/* Left */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
          Stay Connected
        </p>

        <h1 className="mt-5 text-5xl font-black text-white md:text-6xl lg:text-7xl">
          News & Events
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/85">
          Discover the latest achievements, celebrations and upcoming events
          shaping life at Palace Royal International School.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative h-[420px] overflow-hidden rounded-[36px] shadow-2xl">
        <Image
          src="/images/news/lib.jpg"
          alt="Palace Royal students"
          fill
          priority
          className="object-cover"
        />
      </div>

    </div>

  </div>
</section>
      {/* Featured Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[420px] overflow-hidden rounded-[36px]">
             <Image
  src="/images/news/IMG_3391.jpg"
  alt="Featured story"
  fill
  className="object-fit"
/>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                Featured Story
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#3A0817]">
                Raising Confident Learners Through Excellence
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Every day at Palace Royal is an opportunity for learners to
                grow academically, socially and spiritually. Our classrooms are
                designed to inspire curiosity while nurturing confidence,
                creativity and leadership.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#6D0F2C] cursor-default">
  Featured Story
</button>

            </div>
          </div>
        </div>
      </section>

     {/* Latest News */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-12">

    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
        Latest Stories
      </p>

      <h2 className="mt-4 text-4xl font-black text-[#3A0817]">
        School News
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
        Stay updated with the latest happenings across our school community.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Admissions Now Open",
          date: "20 Aug 2026",
          image: "/images/news/admissions.jpg",
          text: "Applications are now open for Creche, Nursery, Primary and JHS."
        },
        {
          title: "Classroom Excellence",
          date: "12 Aug 2026",
          image: "/images/news/classroom.jpg",
          text: "Our learners continue to thrive through engaging and inspiring lessons."
        },
        {
          title: "Cultural Day Ahead",
          date: "5 Aug 2026",
          image: "/images/news/cultural-day.jpg",
          text: "Students are preparing exciting performances and cultural exhibitions."
        }
      ].map((item) => (
        <article
          key={item.title}
          className="group overflow-hidden rounded-[30px] bg-[#FAF8F6] shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-7">
            <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
              <Calendar size={15} />
              {item.date}
            </div>

            <h3 className="mt-3 text-2xl font-bold text-[#3A0817]">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              {item.text}
            </p>
          </div>
        </article>
      ))}

    </div>
  </div>
</section>

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Calendar
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#3A0817]">
              Upcoming Events
            </h2>
          </div>

          <div className="mt-14 space-y-6">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex items-center gap-6 rounded-3xl bg-white p-6 shadow-md"
              >
                <div className="rounded-2xl bg-[#6D0F2C] px-5 py-4 text-center text-white">
                  <div className="text-xl font-bold">{event.date}</div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#3A0817]">
                    {event.title}
                  </h3>

                  <p className="text-gray-600">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-[#6D0F2C] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Bell className="mx-auto text-[#D4AF37]" size={42} />

          <h2 className="mt-6 text-4xl font-black">
            School Announcements
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/85">
            Important notices for parents, students and staff will be published
            here throughout the school year.
          </p>
        </div>
      </section>

      {/* Photo Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Memories
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#3A0817]">
              Photo Highlights
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="relative aspect-square overflow-hidden rounded-3xl"
              >
                <Image
                  src={`/images/news/gallery${n}.jpg`}
                  alt={`Gallery ${n}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3A0817] py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Join Our Community
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Be Part of the Palace Royal Story
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Discover a school where excellence, character and opportunity come
            together every day.
          </p>

          <Link
            href="/admissions"
            className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore Admissions
          </Link>
        </div>
      </section>
    </main>
  );
}