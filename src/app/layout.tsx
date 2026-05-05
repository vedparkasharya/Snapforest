import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SurpriseBooking from "@/components/SurpriseBooking";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snapforest – Book Premium Creator Studios in Gaya | Rooms from ₹299/hr",
  description:
    "Book the best creator spaces in Gaya. Podcast rooms, YouTube studios, gaming rooms & more. Professional studios with premium equipment at affordable rates.",
  keywords: [
    "creator space Gaya",
    "podcast room near me",
    "YouTube studio Gaya",
    "video studio near me",
    "content creation Gaya",
    "Snapforest",
    "book studio Gaya",
  ],
  icons: {
    icon: "/images/snapforest-logo.png",
    apple: "/images/snapforest-logo.png",
    shortcut: "/images/snapforest-logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Snapforest – Book Premium Creator Studios in Gaya",
    description: "Book professional podcast rooms, YouTube studios, gaming rooms & more in Gaya. India's premier creator space platform.",
    url: "https://www.snapforest.in/",
    siteName: "Snapforest",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.snapforest.in/images/snapforest-logo.png",
        width: 1200,
        height: 1200,
        alt: "Snapforest - India's Premier Creator Space Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snapforest – Book Premium Creator Studios in Gaya",
    description: "Book professional podcast rooms, YouTube studios, gaming rooms & more in Gaya.",
    images: ["https://www.snapforest.in/images/snapforest-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <SurpriseBooking />
      </body>
    </html>
  );
}
