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
          src="/images/news/IMG_3185.jpg"
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
                Learning at Palace Royal International School goes beyond textbooks and classrooms. 
                Our students recently had the opportunity to visit Kotoka International Airport, 
                where they experienced the world of aviation firsthand.

The educational visit gave learners an exciting glimpse into airport operations, travel, customer service 
and the many career opportunities within the aviation industry. More importantly, it allowed them to connect 
what they learn in the classroom with the real world.

At Palace Royal, we believe that every experience is an opportunity to learn, discover and dream bigger.
 Through meaningful educational experiences like this, we nurture confident, curious and globally minded learners
  who are prepared to explore the world and take their place in it.
   
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
          text: "Give your child a strong foundation through quality education, character development, creativity, and confidence in a safe and inspiring learning environment.."
        },
        {
          title: "Mezzo Maths Competition",
          date: "21st Mar 2026",
          image: "/images/news/mezzo3.jpg",
          text: "Our brilliant learners from Palace Royal International School (PRIS) have emerged winners in the Mezzopedia National Mathematics Contest, triumphing over Pethel School!. This victory is a reflection of our commitment to developing confident, curious and academically excellent learners who are prepared to think critically, solve problems and excel beyond the classroom.From the classroom to the competition stage, our learners continue to prove that excellence is a journey and at PRIS, we are committed to the journey.Congratulations to our amazing learners and dedicated teachers!"
        },
        {
          title: "Graduation & Awards Day",
          date: "12 April 2026",
          image: "/images/news/graduads.jpg",
          text: "Graduation & Awards Day is more than a celebration. It is to recognise hard work, nurture confidence, and inspire every student to pursue excellence. We celebrate academic achievement, creativity, character, leadership, and the unique talents that make every child exceptional. We don’t just celebrate how far our learners have come; we inspire them for where they are going."
        }
      ].map((item) => (
        <article
          key={item.title}
          className="group overflow-hidden rounded-[30px] bg-[#FAF8F6] shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-[30px] bg-white">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-contain object-center transition duration-500 group-hover:scale-[1.02]"
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