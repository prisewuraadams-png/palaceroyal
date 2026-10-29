
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://palaceroyalinternationalschool.org";
const socialImage = `${siteUrl}/images/news/social-share.jpg`;

const schoolStructuredData = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Palace Royal International School",
  alternateName: "Palace Royal Academy",
  url: siteUrl,
  description:
    "Quality early childhood education in Madina, Accra, Ghana. Explore our curriculum and admissions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "241 Ecowas Road, Madina",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  hasMap:
    "https://www.google.com/maps/dir//Palace+Royal+Academy,+241+Ecowas+Rd,+Madina/@5.6983861,-0.1212416,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0xfdf9db99a8fac7b:0x9b3cb0d155f88d5a!2m2!1d-0.1759589!2d5.6862558?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Palace Royal International School",
  description:
    "Quality early childhood education in Madina, Accra. Explore our curriculum and admissions.",
  openGraph: {
    title: "Palace Royal International School",
    description:
      "Quality early childhood education in Madina, Accra. Explore our curriculum and admissions.",
    url: siteUrl,
    siteName: "Palace Royal International School",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Palace Royal International School",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palace Royal International School",
    description:
      "Quality early childhood education in Madina, Accra. Explore our curriculum and admissions.",
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schoolStructuredData),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
