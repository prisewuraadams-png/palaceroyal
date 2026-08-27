import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=Palace+Royal+Academy%2C+241+Ecowas+Road%2C+Madina%2C+Accra%2C+Ghana";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F6]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative bg-[#5A001A] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
                sm:tracking-[0.4em]

                lg:text-sm
              "
            >
              Contact Us
            </p>

            <h1
              className="
                mt-4
                text-4xl
                font-black
                leading-[1]
                tracking-tight
                text-white

                sm:mt-5
                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              Let&apos;s Start a
              <span className="block text-[#D4AF37]">
                Conversation.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-white/80

                sm:mt-8
                sm:text-lg
                sm:leading-8
              "
            >
              Whether you have questions about admissions, our curriculum,
              school life or would simply like to visit us, our team is ready
              to assist you.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION + FORM
      ====================================================== */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-8

            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-12
          "
        >

          {/* =================================================
              CONTACT DETAILS
          ================================================== */}
          <div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
                sm:tracking-[0.4em]
              "
            >
              Get in Touch
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                text-[#6D0F2C]

                sm:text-4xl
              "
            >
              We&apos;d Love to Hear From You.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
              Reach out to us using any of the contact options below. Our team
              will be happy to answer your questions and guide you through the
              next steps.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">

              {/* Phone */}
              <a
                href="tel:+233565669352"
                className="
                  flex
                  items-start
                  gap-4
                  rounded-[20px]
                  border
                  border-[#E9E3DB]
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#D4AF37]/50
                  hover:shadow-md
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Phone className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#6D0F2C] sm:text-base">
                    +233 56 566 9352
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:palaceroyalinternationalschool@gmail.com"
                className="
                  flex
                  items-start
                  gap-4
                  rounded-[20px]
                  border
                  border-[#E9E3DB]
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#D4AF37]/50
                  hover:shadow-md
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Mail className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-[#6D0F2C] sm:text-base">
                    palaceroyalinternationalschool@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  rounded-[20px]
                  border
                  border-[#E9E3DB]
                  bg-white
                  p-5
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <MapPin className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Visit Us
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-[#6D0F2C] sm:text-base">
                    Ecowas Road,
                    <br />
                    Madina, Accra, Ghana
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  rounded-[20px]
                  border
                  border-[#E9E3DB]
                  bg-white
                  p-5
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Clock className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Office Hours
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-[#6D0F2C] sm:text-base">
                    Monday – Friday
                    <br />
                    7:00 AM – 4:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              SEND US A MESSAGE
          ================================================== */}
          <div
            className="
              rounded-[26px]
              border
              border-[#E9E3DB]
              bg-white
              p-6
              shadow-sm

              sm:rounded-[30px]
              sm:p-8

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
              Send Us a Message
            </p>

            <h2
              className="
                mt-3
                text-2xl
                font-black
                text-[#6D0F2C]

                sm:text-3xl
              "
            >
              How Can We Help?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Fill out the form below and our team will get back to you.
            </p>

            <form
              action="#"
              method="POST"
              className="mt-7 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#3A0817]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#E1DBD5]
                    bg-[#FAF8F6]
                    px-4
                    py-3.5
                    text-sm
                    text-gray-800
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#D4AF37]
                    focus:ring-2
                    focus:ring-[#D4AF37]/20
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#3A0817]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#E1DBD5]
                    bg-[#FAF8F6]
                    px-4
                    py-3.5
                    text-sm
                    text-gray-800
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#D4AF37]
                    focus:ring-2
                    focus:ring-[#D4AF37]/20
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#3A0817]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#E1DBD5]
                    bg-[#FAF8F6]
                    px-4
                    py-3.5
                    text-sm
                    text-gray-800
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#D4AF37]
                    focus:ring-2
                    focus:ring-[#D4AF37]/20
                  "
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#3A0817]"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#E1DBD5]
                    bg-[#FAF8F6]
                    px-4
                    py-3.5
                    text-sm
                    text-gray-700
                    outline-none
                    transition
                    focus:border-[#D4AF37]
                    focus:ring-2
                    focus:ring-[#D4AF37]/20
                  "
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="admissions">Admissions</option>
                  <option value="curriculum">Curriculum</option>
                  <option value="school-tour">School Tour</option>
                  <option value="general">General Enquiry</option>

                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#3A0817]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#E1DBD5]
                    bg-[#FAF8F6]
                    px-4
                    py-3.5
                    text-sm
                    text-gray-800
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#D4AF37]
                    focus:ring-2
                    focus:ring-[#D4AF37]/20
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#6D0F2C]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#5A001A]
                  hover:shadow-lg
                  active:scale-[0.98]

                  sm:py-4
                  sm:text-base
                "
              >
                Send Message
                <ArrowRight size={18} />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* =====================================================
          FIND US
      ====================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">

            <div>
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
                Find Us
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  text-[#6D0F2C]

                  sm:text-4xl
                "
              >
                Come Visit Palace Royal International SChool
              </h2>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border-2
                border-[#D4AF37]
                px-6
                py-3
                text-sm
                font-semibold
                text-[#6D0F2C]
                transition
                hover:bg-[#D4AF37]
                hover:text-white

                sm:w-auto
              "
            >
              Open in Google Maps
              <ExternalLink size={16} />
            </a>

          </div>

          {/* Map */}
          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-[#E9E3DB]
              bg-[#F3F0EC]
              shadow-sm

              sm:rounded-[30px]
            "
          >
            <iframe
              title="Palace Royal International School location"
              src="https://www.google.com/maps?q=Palace+Royal+Academy,+241+Ecowas+Road,+Madina,+Accra,+Ghana&output=embed"
              className="h-[320px] w-full border-0 sm:h-[400px] lg:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          ADMISSIONS CTA
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

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs">
            Admissions
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
            Ready to Begin the Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Take the first step towards giving your child an education built
            on excellence, character and global perspective.
          </p>

          <Link
            href="/admissions"
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
            Explore Admissions
          </Link>

        </div>
      </section>

    </main>
  );
}