import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import GoToTop from "@/components/helpers/GoToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OopsApps – Where Tech Meets Chaos",
  description:
    "OopsApps is a collection of fun, functional, and slightly chaotic web apps built to make life easier... when they work. Join the madness today",
};

export const viewport: Viewport = {
  themeColor: "#c084fc",
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
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen min-w-full relative bg-bg`}
      >
        <GoToTop />
        <Navbar />
        <main className="responsive-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
