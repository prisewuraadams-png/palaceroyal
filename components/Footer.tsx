import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/people/Palace-Royal-International-School/61575249410649/?mibextid=wwXIfr&rdid=4OKEriZJLm51hfev&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GBpR2aUCd%2F%3Fmibextid%3DwwXIfr",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/palaceroyalint_school?igsh=MXExd211Zmw5NnFlZA%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/palace-royal-international-school-b85800404/",
      label: "LinkedIn",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@palaceroyalintsch?_r=1&_t=ZS-95hRK3zbMGK",
      label: "TikTok",
    },
  ];

  return (
    <footer className="bg-[#5A001A] text-white">

      {/* Gold Accent */}
      <div className="h-[2px] bg-[#D4AF37]" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-14">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2
            sm:gap-12

            lg:grid-cols-3
            lg:gap-16
          "
        >

          {/* ===================================================
              EXPLORE
          ==================================================== */}
          <div>
            <h3
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
              "
            >
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link
                href="/about"
                className="transition-colors hover:text-[#D4AF37]"
              >
                About our school
              </Link>

              <Link
                href="/academics"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Academics
              </Link>

              <Link
                href="/admissions"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Admissions
              </Link>

              <Link
                href="/news"
                className="transition-colors hover:text-[#D4AF37]"
              >
                News & Events
              </Link>

              <Link
                href="/gallery"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* ===================================================
              CONTACT
          ==================================================== */}
          <div>
            <h3
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
              "
            >
              Contact
            </h3>

            <div className="mt-5 space-y-5 text-sm">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />

                <a
                  href="tel:+233565669352"
                  className="break-words transition-colors hover:text-[#D4AF37]"
                >
                  +233 56 566 9352
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />

                <a
                  href="mailto:palaceroyalinternationalschool@gmail.com"
                  className="break-all transition-colors hover:text-[#D4AF37]"
                >
                  palaceroyalinternationalschool@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />

                <span className="leading-6">
                  Ecowas Road, Madina,
                  <br className="sm:hidden" />
                  {" "}Accra, Ghana
                </span>
              </div>

            </div>
          </div>

          {/* ===================================================
              PORTALS
          ==================================================== */}
          <div>
            <h3
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]

                sm:text-xs
              "
            >
              Portals
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                href="PASTE_PARENT_STUDENT_PORTAL_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Student & Parent
              </Link>

              <Link
                href="PASTE_STAFF_PORTAL_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Staff
              </Link>

              <Link
                href="PASTE_ADMIN_PORTAL_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Administration
              </Link>

            </div>
          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12">

          <div
            className="
              flex
              flex-col
              items-center
              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* Copyright */}
            <p
              className="
                text-center
                text-[11px]
                leading-5
                text-white/60

                lg:text-left
              "
            >
              © {new Date().getFullYear()} Palace Royal International School.
              <br className="sm:hidden" /> All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    transition-all
                    duration-300

                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]
                    hover:text-[#5A001A]

                    sm:h-10
                    sm:w-10
                  "
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-5 text-[11px] text-white/60 sm:text-xs">
              <Link
                href="/privacy"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Privacy
              </Link>

              <Link
                href="/accessibility"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Accessibility
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}