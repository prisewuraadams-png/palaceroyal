
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
    "Welcome to Palace Royal International School in Madina, Accra, Ghana. Discover our curriculum, admissions, school community, and educational programmes.",
openGraph: {
  // Keep your existing title and description
  images: [
    {
      url: socialImage,
      width: 1200,
      height: 630,
      alt: "Palace Royal International School",
    },
  ],
  // Keep your other existing settings
},

twitter: {
  card: "summary_large_image",
  // Keep your existing title and description
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
