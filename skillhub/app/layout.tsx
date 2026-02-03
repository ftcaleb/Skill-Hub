import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Trajlon Group | Global Training & Capacity Building",
    template: "%s | Trajlon Group",
  },
  description:
    "Trajlon Group is a leading provider of professional training, capacity building, and organizational development solutions serving clients globally.",
  keywords: [
    "corporate training",
    "professional development",
    "leadership training",
    "capacity building",
    "executive education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
