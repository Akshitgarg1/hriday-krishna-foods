import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions | Hriday Krishna Foods",
  description: "Terms and conditions governing the purchase of Raw Makhana from Hriday Krishna Foods.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD1] shadow-xs space-y-6 text-[#596B62] text-sm leading-relaxed">
          <div className="border-b border-[#E8DFD1] pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C651A]">
              Customer Agreement
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B] mt-1">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[#596B62] mt-2">
              Effective date: May 2026 • Hriday Krishna Foods
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website or placing an order with Hriday Krishna Foods, you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our online storefront.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">2. Product Quality & Description</h2>
            <p>
              Our products are agricultural lotus seeds (Raw Phool Makhana / Euryale Ferox) harvested in Bihar. Because this is a 100% natural, unbleached, and unpolished food crop, minor natural variations in seed shade and size expansion are customary and characteristic of genuine organic produce.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">3. Pricing & Taxes</h2>
            <p>
              All prices displayed on the website are in Indian Rupees (INR) and are inclusive of all applicable statutory taxes. We reserve the right to revise product prices and promotional discounts at our discretion without prior notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">4. Orders & Fulfillment</h2>
            <p>
              We reserve the right to refuse or cancel any order in instances of suspected fraudulent transactions, incorrect shipping pincodes, or temporary inventory stockouts. In the event of a cancellation for a prepaid order, a 100% refund is initiated immediately to the original payment source.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">5. Governing Law & Jurisdiction</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Sitamarhi, Bihar.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
