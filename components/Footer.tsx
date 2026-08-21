import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#5A001A] text-white">
      {/* Gold accent line */}
      <div className="h-[2px] bg-[#D4AF37]" />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">

        {/* Main Footer */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center md:gap-24">

          {/* Explore */}
          <div className="w-full max-w-[190px]">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link href="/about" className="transition hover:text-[#D4AF37]">
                About our school
              </Link>
              <Link href="/academics" className="transition hover:text-[#D4AF37]">
                Academics
              </Link>
              <Link href="/admissions" className="transition hover:text-[#D4AF37]">
                Admissions
              </Link>
              <Link href="/news" className="transition hover:text-[#D4AF37]">
                News & Events
              </Link>
              <Link href="/gallery" className="transition hover:text-[#D4AF37]">
                Gallery
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full max-w-[260px]">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Contact
            </h3>

            <div className="mt-5 space-y-5 text-sm">

              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span>+233 56 566 9352</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span className="break-words">
                  palaceroyalinternationalschool@gmail.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span>Ecowas Road, Madina, Accra, Ghana</span>
              </div>

            </div>
          </div>

          {/* Portals */}
          <div className="w-full max-w-[180px]">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Portals
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link
                href="PASTE_PARENT_STUDENT_PORTAL_LINK"
                target="_blank"
                className="transition hover:text-[#D4AF37]"
              >
                Student & Parent
              </Link>

              <Link
                href="PASTE_STAFF_PORTAL_LINK"
                target="_blank"
                className="transition hover:text-[#D4AF37]"
              >
                Staff
              </Link>

              <Link
                href="PASTE_ADMIN_PORTAL_LINK"
                target="_blank"
                className="transition hover:text-[#D4AF37]"
              >
                Administration
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            <p className="text-xs text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} Palace Royal International School.
              All rights reserved.
            </p>

            <div className="flex gap-3">
              {[
                {
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/people/Palace-Royal-International-School/61575249410649/?mibextid=wwXIfr&rdid=4OKEriZJLm51hfev&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GBpR2aUCd%2F%3Fmibextid%3DwwXIfr",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/palaceroyalint_school?igsh=MXExd211Zmw5NnFlZA%3D%3D&utm_source=qr",
                },
                {
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/palace-royal-international-school-b85800404/",
                },
                {
                  icon: FaTiktok,
                  href: "https://www.tiktok.com/@palaceroyalintsch?_r=1&_t=ZS-95hRK3zbMGK",
                },
              ].map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5A001A]"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>

            <div className="flex gap-5 text-xs text-white/60">
              <Link href="/privacy" className="transition hover:text-[#D4AF37]">
                Privacy
              </Link>

              <Link href="/accessibility" className="transition hover:text-[#D4AF37]">
                Accessibility
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}