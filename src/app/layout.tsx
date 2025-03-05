import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: add viewport, rest of meta data and vp-color

export const metadata: Metadata = {
  title: "OopsApps – Where Tech Meets Chaos",
  description:
    "OopsApps is a collection of fun, functional, and slightly chaotic web apps built to make life easier... when they work. Join the madness today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-p-4 overflow-hidden overflow-y-scroll"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen min-w-full relative bg-bg`}
      >
        <Navbar />
        <main className="responsive-screen">{children}</main>
        <Footer />
        {/* TODO: add GoToTop component */}
      </body>
    </html>
  );
}
