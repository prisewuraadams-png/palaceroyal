'use client'
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

export const metadata: Metadata = {
  metadataBase: new URL("https://palaceroyalinternationalschool.org"),
  title: "Palace Royal International School",
  description:
    "Welcome to Palace Royal International School in Madina, Accra, Ghana. Discover our curriculum, admissions, school community, and educational programmes.",
  openGraph: {
    title: "Palace Royal International School",
    description:
      "Discover Palace Royal International School in Madina, Accra, Ghana.",
    url: "https://palaceroyalinternationalschool.org",
    siteName: "Palace Royal International School",
    images: [
      {
        url: "/images/news/hero.jpg",
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
      "Discover Palace Royal International School in Madina, Accra, Ghana.",
    images: ["/images/news/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
