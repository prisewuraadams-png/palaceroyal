
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";

const API_URL =
  "https://apps.palaceroyalinternationalschool.org/api/public/questions";

const mapLink =
  "https://www.google.com/maps/dir//Palace+Royal+Academy,+241+Ecowas+Rd,+Madina/@5.6983861,-0.1212416,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0xfdf9db99a8fac7b:0x9b3cb0d155f88d5a!2m2!1d-0.1759589!2d5.6862558?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const rawPhone = String(formData.get("phone") || "").trim();
    const phone = rawPhone.replace(/\D/g, "");
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setSuccess("");
    setError("");

    if (!name || !subject || !message) {
      setError("Please complete all required fields.");
      return;
    }

    if (!email && !phone) {
      setError(
        "Please provide either an email address or phone number so our team can contact you."
      );
      return;
    }

    if (rawPhone && !phone) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          ...(email && { email }),
          ...(phone && { phone }),
          subject,
          message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to submit your enquiry. Please try again."
        );
      }

      setSuccess(
        data.message ||
          "Your enquiry has been submitted successfully. Our team will get back to you."
      );

      form.reset();

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[#FAF8F6]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative bg-[#5A001A] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs sm:tracking-[0.4em] lg:text-sm">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[1] tracking-tight text-white sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Start a
              <span className="block text-[#D4AF37]">
                Conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:mt-8 sm:text-lg sm:leading-8">
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* =================================================
              CONTACT DETAILS
          ================================================== */}

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs sm:tracking-[0.4em]">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-[#6D0F2C] sm:text-4xl">
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
                className="flex items-start gap-4 rounded-[20px] border border-[#E9E3DB] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/50 hover:shadow-md"
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
                className="flex items-start gap-4 rounded-[20px] border border-[#E9E3DB] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/50 hover:shadow-md"
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

              <div className="flex items-start gap-4 rounded-[20px] border border-[#E9E3DB] bg-white p-5">
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

              <div className="flex items-start gap-4 rounded-[20px] border border-[#E9E3DB] bg-white p-5">
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
                    6:30 AM – 4:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              SEND US A MESSAGE
          ================================================== */}

          <div className="rounded-[26px] border border-[#E9E3DB] bg-white p-6 shadow-sm sm:rounded-[30px] sm:p-8 lg:p-10">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs">
              Send Us a Message
            </p>

            <h2 className="mt-3 text-2xl font-black text-[#6D0F2C] sm:text-3xl">
              How Can We Help?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Fill out the form below and our team will get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* Success Notification */}

              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium leading-6 text-green-800"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <p>{success}</p>
                  </div>
                </div>
              )}

              {/* Error Notification */}

              {error && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium leading-6 text-red-700"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg">!</span>
                    <p>{error}</p>
                  </div>
                </div>
              )}

              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#3A0817]"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={120}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[#E1DBD5] bg-[#FAF8F6] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
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
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-[#E1DBD5] bg-[#FAF8F6] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
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
                  autoComplete="tel"
                  placeholder="e.g. 0241234567 or +233241234567"
                  className="w-full rounded-xl border border-[#E1DBD5] bg-[#FAF8F6] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                />
              </div>

              <p className="-mt-2 text-xs leading-5 text-gray-500">
                Please provide at least one contact method: email address or
                phone number.
              </p>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#3A0817]"
                >
                  Subject <span className="text-red-500">*</span>
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-[#E1DBD5] bg-[#FAF8F6] px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>

                  <option value="Admissions">
                    Admissions
                  </option>

                  <option value="Curriculum">
                    Curriculum
                  </option>

                  <option value="School Tour">
                    School Tour
                  </option>

                  <option value="General Enquiry">
                    General Enquiry
                  </option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#3A0817]"
                >
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={5000}
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-[#E1DBD5] bg-[#FAF8F6] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6D0F2C] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5A001A] hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-base"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                Your enquiry will be sent securely to the Palace Royal
                reception team.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* =====================================================
          FIND US
      ====================================================== */}

      <section className="bg-[#FAF8F6] py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Find Us
          </p>

          <h2 className="mt-5 text-4xl font-black text-[#6D0F2C] md:text-6xl">
            Come Visit Palace Royal International School
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We would love to welcome you to our school. Visit us at
            241 Ecowas Road, Madina, Accra.
          </p>

          <div className="mt-10">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Palace Royal Academy, 241 Ecowas Road, Madina, Accra, Ghana"
              title="Palace Royal Academy on Google Maps"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#D4AF37] bg-[#6D0F2C] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#D4AF37] hover:text-[#6D0F2C] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              <MapPin size={20} />
              View Our Location on Google Maps
            </a>
          </div>

        </div>
      </section>

      {/* =====================================================
          ADMISSIONS CTA
      ====================================================== */}

      <section className="bg-[#FAF8F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[28px] bg-[#3A0817] px-6 py-12 text-center sm:rounded-[36px] sm:px-12 sm:py-14 md:px-16 md:py-16">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs">
            Admissions
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to Begin the Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Take the first step towards giving your child an education built
            on excellence, character and global perspective.
          </p>

          <Link
            href="/admissions"
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3.5 text-sm font-bold text-[#3A0817] transition hover:scale-[1.02] sm:mt-9 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
          >
            Explore Admissions
          </Link>

        </div>
      </section>

    </main>
  );
}
