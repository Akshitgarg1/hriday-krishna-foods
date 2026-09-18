import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Shop Raw Makhana | Hriday Krishna Foods — 5+ Sut, Bihar",
  description:
    "Buy 100% natural, unbleached 5+ Sut raw makhana (fox nuts) from Hriday Krishna Foods. Available in 100g, 200g, 250g, 500g & 1kg packs. Sourced from the pristine wetland ponds of Sitamarhi, Bihar.",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2]">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
