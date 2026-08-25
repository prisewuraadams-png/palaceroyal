import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Academic Excellence",
    text: "A strong academic foundation that develops curiosity, critical thinking and a love for learning.",
  },
  {
    title: "Character & Values",
    text: "We nurture discipline, integrity, confidence, responsibility and respect.",
  },
  {
    title: "Holistic Development",
    text: "Learners are encouraged to grow academically, creatively, socially and physically.",
  },
  {
    title: "Future-Ready Learning",
    text: "We equip learners with the skills, confidence and mindset to thrive in an evolving world.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enquire",
    text: "Connect with our admissions team and learn more about Palace Royal.",
  },
  {
    number: "02",
    title: "Apply",
    text: "Download and complete the appropriate admission form.",
  },
  {
    number: "03",
    title: "Submit",
    text: "Submit your completed form together with the required documents.",
  },
  {
    number: "04",
    title: "Enrol",
    text: "Complete the admission process and prepare for your child's journey.",
  },
];

const forms = [
  {
    level: "PRE-SCHOOL",
    title: "Pre-School Admission",
    description:
      "For children joining our Creche and Nursery programmes in a nurturing environment designed for early development.",
href: "/forms/PRIS ADMISSION FORMS FOR PRESCHOOL.pdf",
  },
  {
    level: "PRIMARY",
    title: "Primary Admission",
    description:
      "For learners joining our Primary programme, where academic excellence and character development go hand in hand.",
    href: "/forms/PRIS ADMISSION FORMS FOR PRIMARY.pdf",
  },
];

export default function AdmissionsPage() {
  return (
    <main className="bg-[#FAF8F6]">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#5A001A]">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12">

          {/* Hero Text */}
          <div className="relative z-10">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
              Admissions
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Begin Your Child&apos;s
              <span className="block text-[#D4AF37]">
                Journey With Us.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              Discover an environment where academic excellence, character,
              creativity and confidence come together to prepare every learner
              for a meaningful future.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#forms"
                className="rounded-full bg-[#D4AF37] px-8 py-4 text-center font-bold text-[#5A001A] transition hover:scale-[1.02] hover:bg-[#e5c04a]"
              >
                Apply for Admission
              </a>

              <a
                href="#process"
                className="rounded-full border border-white/40 px-8 py-4 text-center font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                How It Works
              </a>

            </div>

          </div>

          {/* Hero Image */}
          <div className="relative h-[420px] overflow-hidden rounded-[36px] lg:h-[500px]">

            <Image
              src="/images/admissions/lib.jpg"
              alt="Palace Royal International School"
              fill
              priority
              className="object-contain object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#5A001A]/30 to-transparent" />

          </div>

        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="bg-white px-6 py-24 lg:px-12">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Why Palace Royal
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#3A0817] sm:text-5xl">
            More Than a School.
            <span className="block text-[#6D0F2C]">
              A Foundation for Life.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            At Palace Royal International School, we believe education should
            develop the whole child. Our learning environment combines
            academic excellence with character, creativity, confidence and
            real-world experiences.
          </p>

        </div>

      </section>


      {/* =========================================================
          BENEFITS
      ========================================================== */}
      <section className="px-6 py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              The Palace Royal Experience
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black text-[#3A0817] sm:text-5xl">
              Helping every student discover their potential.
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[28px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-1 w-12 rounded-full bg-[#D4AF37]" />

                <h3 className="mt-7 text-xl font-bold text-[#6D0F2C]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {benefit.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          ADMISSION PROCESS
      ========================================================== */}
      <section
        id="process"
        className="bg-white px-6 py-24 lg:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Admission Process
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#3A0817] sm:text-5xl">
              A Simple Path to Joining Us
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We have designed our admissions process to make getting started
              as simple and straightforward as possible.
            </p>

          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (
              <div key={step.number}>

                <p className="text-5xl font-black text-[#D4AF37]/30">
                  {step.number}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#6D0F2C]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          ADMISSION FORMS
      ========================================================== */}
      <section
        id="forms"
        className="px-6 py-24 lg:px-12"
      >

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Start Your Application
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#3A0817] sm:text-5xl">
              Choose Your Admission Form
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Select the appropriate form for your child&apos;s level and
              download the application form.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {forms.map((form) => (
              <div
                key={form.level}
                className="rounded-[32px] bg-white p-10 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                  {form.level}
                </p>

                <h3 className="mt-4 text-3xl font-black text-[#3A0817]">
                  {form.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {form.description}
                </p>

                <a
                  href={form.href}
                  download
                  className="mt-8 inline-flex rounded-full bg-[#6D0F2C] px-8 py-4 font-semibold text-white transition hover:bg-[#5A001A]"
                >
                  Download Form
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          BEFORE YOU APPLY
      ========================================================== */}
      <section className="bg-[#6D0F2C] px-6 py-24 text-white lg:px-12">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Before You Apply
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Start With Confidence.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Preparing your information ahead of time helps make the
              admissions process smoother for you and your child.
            </p>

          </div>


          <div className="rounded-[30px] bg-white p-8 text-[#3A0817]">

            <h3 className="text-2xl font-bold">
              Please have the following available:
            </h3>

            <div className="mt-6 divide-y divide-gray-200">

              {[
                "Child's personal information",
                "Parent or guardian information",
                "Relevant academic information",
                "Required supporting documents",
                "Completed admission form",
              ].map((item) => (
                <p
                  key={item}
                  className="py-4 text-gray-700"
                >
                  {item}
                </p>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-[#FAF8F6] px-6 py-24 lg:px-12">

        <div className="mx-auto max-w-5xl rounded-[36px] bg-[#3A0817] px-8 py-16 text-center sm:px-16">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Have Questions?
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl">
            We&apos;re Here to Help.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Our admissions team is available to assist parents and guardians
            with questions about applications, forms and enrolment.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#D4AF37] px-9 py-4 font-bold text-[#3A0817] transition hover:scale-[1.02]"
          >
            Contact Admissions
          </Link>

        </div>

      </section>

    </main>
  );
}