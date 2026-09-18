import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/layout/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hriday Krishna Foods | Pure Raw Makhana - From the Heart of Bihar",
  description:
    "Pure. Natural. Wholesome. Handpicked 5+ Sut Grade raw makhana (fox nuts) from the pristine ponds of Sitamarhi, Bihar. Sourced with devotion by Hriday Krishna Foods.",
  keywords: [
    "Hriday Krishna Foods",
    "Hriday Krishna Makhana",
    "Raw Makhana",
    "Fox Nut",
    "Phool Makhana",
    "Lotus Seeds",
    "Bihar Makhana",
    "Sitamarhi Makhana",
    "5+ Sut Grade Makhana",
    "Organic Raw Makhana",
  ],
  openGraph: {
    title: "Hriday Krishna Foods | Pure Raw Makhana",
    description:
      "A gift from Bihar's pristine ponds. 100% natural, unbleached, 5+ Sut handpicked raw fox nuts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-dark selection:bg-brand-green selection:text-brand-cream font-sans">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
