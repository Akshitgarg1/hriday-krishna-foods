import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Hriday Krishna Foods",
  description: "Privacy Policy for Hriday Krishna Foods. Read how we protect and handle your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD1] shadow-xs space-y-6 text-[#596B62] text-sm leading-relaxed">
          <div className="border-b border-[#E8DFD1] pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C651A]">
              Legal Documentation
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B] mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#596B62] mt-2">
              Last updated: May 2026 • Hriday Krishna Foods (ह्रदय कृष्णा मखाना उद्योग)
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">1. Overview & Commitment</h2>
            <p>
              Hriday Krishna Foods (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This policy details how we collect, store, use, and protect your personal information when you visit our website, place orders, or contact our customer support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Name, delivery address, email address, and mobile phone number provided during checkout or contact inquiries.</li>
              <li><strong>Transaction Records:</strong> Items ordered, pack sizes (e.g. 100g, 250g, 500g, 1kg), order value, and delivery tracking information.</li>
              <li><strong>Technical Data:</strong> Browser type, approximate location, device details, and session cookies used to preserve your shopping cart.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">3. How Your Information Is Used</h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Process, pack, and ship your orders of 5+ Sut Raw Makhana.</li>
              <li>Send automated dispatch notifications and tracking links via SMS/WhatsApp/email.</li>
              <li>Provide dedicated customer helpline support (+91 7654007494).</li>
              <li>Prevent fraudulent transactions and enforce legal food standards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">4. No Third-Party Sale of Data</h2>
            <p>
              We do not sell, rent, trade, or monetize your personal details with advertisers or data brokers under any circumstances. Data is shared strictly with trusted logistical partners (e.g. courier networks) solely to deliver your package to your doorstep.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#14382B]">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions regarding your data or wish to update your records, please write to us at{" "}
              <a href="mailto:care@hridaykrishnafoods.com" className="text-[#14382B] underline font-semibold">
                care@hridaykrishnafoods.com
              </a>{" "}
              or call our office at <strong>+91 7654007494</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
