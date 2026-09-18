import * as React from "react";
import { Truck, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Shipping Policy | Hriday Krishna Foods",
  description: "Shipping timelines, delivery rates, and courier partners for Hriday Krishna Foods.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD1] shadow-xs space-y-6 text-[#596B62] text-sm leading-relaxed">
          <div className="border-b border-[#E8DFD1] pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C651A]">
              Delivery Guidelines
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B] mt-1">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xs text-[#596B62] mt-2">
              Pan-India Dispatch from Sitamarhi, Bihar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] text-center">
              <Clock className="w-5 h-5 text-[#8C651A] mx-auto mb-2" />
              <div className="font-bold text-[#14382B]">24-Hour Dispatch</div>
              <div className="text-xs text-[#596B62] mt-0.5">Dispatched next morning</div>
            </div>
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] text-center">
              <Truck className="w-5 h-5 text-[#154E35] mx-auto mb-2" />
              <div className="font-bold text-[#14382B]">Free Shipping ₹499+</div>
              <div className="text-xs text-[#596B62] mt-0.5">Across all Indian states</div>
            </div>
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] text-center">
              <ShieldCheck className="w-5 h-5 text-[#8C651A] mx-auto mb-2" />
              <div className="font-bold text-[#14382B]">Airtight Protection</div>
              <div className="text-xs text-[#596B62] mt-0.5">Multi-layer barrier pouches</div>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">1. Processing & Dispatch Timeline</h2>
            <p>
              Every batch of Raw Makhana is fresh-packed upon order receipt at our Baligarh, Runnisaidpur facility in Sitamarhi. Orders received before 2:00 PM IST are dispatched on the same business day; orders placed after 2:00 PM are dispatched on the following business day (excluding Sundays and national holidays).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">2. Estimated Delivery Transit Times</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Bihar, Jharkhand, Eastern UP & West Bengal:</strong> 1 to 3 Business Days.</li>
              <li><strong>Metro Cities (Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata):</strong> 2 to 4 Business Days.</li>
              <li><strong>Rest of India (Tier 2/3 Cities & Regional Towns):</strong> 3 to 6 Business Days.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">3. Shipping Fees</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Orders ₹499 and above:</strong> 100% FREE Standard Shipping.</li>
              <li><strong>Orders below ₹499:</strong> Flat nominal shipping fee of ₹49.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">4. Package Tracking & Helpline</h2>
            <p>
              Once your package is handed over to our courier partner, you will receive an automated tracking ID via SMS and email. For real-time updates or delivery assistance, call our helpline at <strong>+91 7654007494</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
