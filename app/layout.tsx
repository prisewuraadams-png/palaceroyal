
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://palaceroyalinternationalschool.org"
  ),
  title: {
    default: "Palace Royal International School",
    template: "%s | Palace Royal International School",
  },
  description:
    "Welcome to Palace Royal International School, where children learn, grow, and thrive in a nurturing environment through quality early childhood education.",
  openGraph: {
    title: "Palace Royal International School",
    description:
      "Discover a nurturing learning environment focused on excellence, creativity, and the development of every child.",
    url: "https://palaceroyalinternationalschool.org",
    siteName: "Palace Royal International School",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/images/school-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Palace Royal International School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palace Royal International School",
    description:
      "Quality early childhood education in a caring and inspiring environment.",
    images: ["/images/news/school-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
