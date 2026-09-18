import * as React from "react";
import { RotateCcw, ShieldAlert, PhoneCall } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Refund & Return Policy | Hriday Krishna Foods",
  description: "7-day replacement and refund policy for damaged or defective makhana deliveries.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD1] shadow-xs space-y-6 text-[#596B62] text-sm leading-relaxed">
          <div className="border-b border-[#E8DFD1] pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C651A]">
              Customer Assurance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B] mt-1">
              Refund & Return Policy
            </h1>
            <p className="text-xs text-[#596B62] mt-2">
              Fair, Transparent, and Customer-First Standards
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">1. Perishable Food Safety Standards</h2>
            <p>
              Under Food Safety & Standards Authority of India (FSSAI) regulations and industry best practices for consumable goods, we cannot accept returns on opened, unsealed, or partly consumed food packets due to hygienic and contamination risks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">2. 7-Day Free Replacement for Damaged Goods</h2>
            <p>
              Your peace of mind is paramount to us. If your package arrives in any of the following conditions, we will send an immediate <strong>100% Free Replacement</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The outer carton or ziplock pouch was torn, crushed, or tampered with during transit.</li>
              <li>The inner seal was broken upon receipt.</li>
              <li>Incorrect variant size was delivered (e.g. 200g received instead of ordered 500g).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">3. How to Claim a Replacement or Refund</h2>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Inspect your package upon delivery.</li>
              <li>Take a clear photo or short video of the damaged pouch/box.</li>
              <li>WhatsApp or email the photos along with your Order ID to <strong>+91 7654007494</strong> or <strong>care@hridaykrishnafoods.com</strong> within 7 calendar days of delivery.</li>
              <li>Our team will verify the claim and dispatch a fresh replacement pouch within 24 hours.</li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">4. Refund Settlement Timeframe</h2>
            <p>
              In situations where a replacement is not feasible, approved refunds are initiated within 2 business days and credited back to the original payment source (UPI, Debit/Credit Card, or Net Banking) within 5 to 7 banking days.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
