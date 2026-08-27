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

const requirements = [
  "Child's personal information",
  "Parent or guardian information",
  "Relevant academic information",
  "Required supporting documents",
  "Completed admission form",
];

export default function AdmissionsPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F6]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#5A001A]">
        <div
          className="
            mx-auto
            grid
            min-h-[auto]
            max-w-7xl
            items-center
            gap-10
            px-5
            pb-14
            pt-28

            sm:px-8
            sm:pb-16
            sm:pt-32

            lg:min-h-[650px]
            lg:grid-cols-2
            lg:gap-12
            lg:px-12
            lg:py-24
          "
        >

          {/* Hero Text */}
          <div className="relative z-10">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
                sm:tracking-[0.35em]

                lg:text-sm
              "
            >
              Admissions
            </p>

            <h1
              className="
                mt-4
                text-4xl
                font-black
                leading-[1.02]
                tracking-tight
                text-white

                sm:mt-5
                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              Begin Your Child&apos;s
              <span className="block text-[#D4AF37]">
                Journey With Us.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-white/80

                sm:mt-7
                sm:text-lg
                sm:leading-8
              "
            >
              Discover an environment where academic excellence, character,
              creativity and confidence come together to prepare every learner
              for a meaningful future.
            </p>

            {/* Hero Buttons */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-3

                sm:mt-9
                sm:flex-row
                sm:gap-4
              "
            >
              <a
                href="#forms"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-[#5A001A]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-[#e5c04a]

                  sm:w-auto
                  sm:px-8
                  sm:py-4
                "
              >
                Apply for Admission
              </a>

              <a
                href="#process"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]
                  hover:text-[#D4AF37]

                  sm:w-auto
                  sm:px-8
                  sm:py-4
                "
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="
              relative
              h-[280px]
              overflow-hidden
              rounded-[24px]

              sm:h-[380px]
              sm:rounded-[30px]

              md:h-[420px]

              lg:h-[500px]
              lg:rounded-[36px]
            "
          >
            <Image
              src="/images/admissions/lib.jpg"
              alt="Palace Royal International School"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#5A001A]/30 to-transparent" />
          </div>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]

              sm:text-xs
              sm:tracking-[0.35em]
            "
          >
            Why Palace Royal
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-[#3A0817]

              sm:text-4xl

              md:text-5xl
            "
          >
            More Than a School.
            <span className="block text-[#6D0F2C]">
              A Foundation for Life.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-gray-600

              sm:mt-7
              sm:text-lg
              sm:leading-8
            "
          >
            At Palace Royal International School, we believe education should
            develop the whole child. Our learning environment combines
            academic excellence with character, creativity, confidence and
            real-world experiences.
          </p>

        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 sm:mb-14">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              The Palace Royal Experience
            </p>

            <h2
              className="
                mt-4
                max-w-2xl
                text-3xl
                font-black
                leading-tight
                text-[#3A0817]

                sm:text-4xl

                md:text-5xl
              "
            >
              Helping every student discover their potential.
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="
                  rounded-[24px]
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl

                  sm:rounded-[28px]
                  sm:p-7

                  lg:p-8
                "
              >
                <div className="h-1 w-12 rounded-full bg-[#D4AF37]" />

                <h3
                  className="
                    mt-6
                    text-lg
                    font-bold
                    leading-6
                    text-[#6D0F2C]

                    sm:mt-7
                    sm:text-xl
                  "
                >
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:leading-7">
                  {benefit.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          ADMISSION PROCESS
      ====================================================== */}
      <section
        id="process"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Admission Process
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                text-[#3A0817]

                sm:text-4xl

                md:text-5xl
              "
            >
              A Simple Path to Joining Us
            </h2>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-gray-600

                sm:text-lg
                sm:leading-8
              "
            >
              We have designed our admissions process to make getting started
              as simple and straightforward as possible.
            </p>

          </div>

          <div
            className="
              mt-10
              grid
              gap-8

              sm:mt-14
              sm:grid-cols-2

              lg:mt-16
              lg:grid-cols-4
              lg:gap-10
            "
          >
            {steps.map((step) => (
              <div key={step.number}>

                <p
                  className="
                    text-4xl
                    font-black
                    text-[#D4AF37]/30

                    sm:text-5xl
                  "
                >
                  {step.number}
                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-[#6D0F2C]

                    sm:text-2xl
                  "
                >
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:leading-7">
                  {step.text}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          ADMISSION FORMS
      ====================================================== */}
      <section
        id="forms"
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Start Your Application
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                text-[#3A0817]

                sm:text-4xl

                md:text-5xl
              "
            >
              Choose Your Admission Form
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-gray-600

                sm:text-lg
                sm:leading-8
              "
            >
              Select the appropriate form for your child&apos;s level and
              download the application form.
            </p>

          </div>

          <div
            className="
              mt-10
              grid
              gap-5

              sm:mt-14
              sm:gap-6

              md:grid-cols-2
              lg:gap-8
            "
          >
            {forms.map((form) => (
              <div
                key={form.level}
                className="
                  rounded-[24px]
                  bg-white
                  p-6
                  shadow-md
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl

                  sm:rounded-[28px]
                  sm:p-8

                  lg:rounded-[32px]
                  lg:p-10
                "
              >

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#D4AF37]

                    sm:text-xs
                  "
                >
                  {form.level}
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                    leading-tight
                    text-[#3A0817]

                    sm:mt-4
                    sm:text-3xl
                  "
                >
                  {form.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600 sm:mt-5 sm:leading-7">
                  {form.description}
                </p>

                <a
                  href={form.href}
                  download
                  className="
                    mt-6
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#6D0F2C]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#5A001A]

                    sm:mt-8
                    sm:w-auto
                    sm:px-8
                    sm:py-4
                    sm:text-base
                  "
                >
                  Download Form
                </a>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          BEFORE YOU APPLY
      ====================================================== */}
      <section className="bg-[#6D0F2C] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10

            lg:grid-cols-2
            lg:items-center
            lg:gap-14
          "
        >

          {/* Text */}
          <div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Before You Apply
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-tight

                sm:text-4xl

                md:text-5xl
              "
            >
              Start With Confidence.
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-white/80

                sm:mt-6
                sm:text-lg
                sm:leading-8
              "
            >
              Preparing your information ahead of time helps make the
              admissions process smoother for you and your child.
            </p>

          </div>

          {/* Requirements */}
          <div
            className="
              rounded-[24px]
              bg-white
              p-6
              text-[#3A0817]

              sm:rounded-[30px]
              sm:p-8
            "
          >

            <h3 className="text-xl font-bold sm:text-2xl">
              Please have the following available:
            </h3>

            <div className="mt-5 divide-y divide-gray-200 sm:mt-6">

              {requirements.map((item) => (
                <p
                  key={item}
                  className="
                    py-3
                    text-sm
                    leading-6
                    text-gray-700

                    sm:py-4
                    sm:text-base
                  "
                >
                  {item}
                </p>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#FAF8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div
          className="
            mx-auto
            max-w-5xl
            rounded-[28px]
            bg-[#3A0817]
            px-6
            py-12
            text-center

            sm:rounded-[36px]
            sm:px-12
            sm:py-14

            md:px-16
            md:py-16
          "
        >

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]

              sm:text-xs
              sm:tracking-[0.35em]
            "
          >
            Have Questions?
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-white

              sm:text-4xl

              md:text-5xl
            "
          >
            We&apos;re Here to Help.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-white/75

              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Our admissions team is available to assist parents and guardians
            with questions about applications, forms and enrolment.
          </p>

          <Link
            href="/contact"
            className="
              mt-7
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#D4AF37]
              px-8
              py-3.5
              text-sm
              font-bold
              text-[#3A0817]
              transition
              hover:scale-[1.02]

              sm:mt-9
              sm:w-auto
              sm:px-9
              sm:py-4
              sm:text-base
            "
          >
            Contact Admissions
          </Link>

        </div>

      </section>

    </main>
  );
}