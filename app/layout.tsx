
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      "Quality early childhood education in Madina, Ritz-Juction on the Ecowas Road. Explore our curriculum and admissions.",
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
        {children}
      </body>
    </html>
  );
}
