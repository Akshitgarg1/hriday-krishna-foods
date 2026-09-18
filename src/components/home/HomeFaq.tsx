"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";

export function HomeFaq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const homeFaqs = [
    { q: t("homeFaq.q1"), a: t("homeFaq.a1") },
    { q: t("homeFaq.q2"), a: t("homeFaq.a2") },
    { q: t("homeFaq.q3"), a: t("homeFaq.a3") },
    { q: t("homeFaq.q4"), a: t("homeFaq.a4") },
    { q: t("homeFaq.q5"), a: t("homeFaq.a5") },
    { q: t("homeFaq.q6"), a: t("homeFaq.a6") },
    { q: t("homeFaq.q7"), a: t("homeFaq.a7") },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#E8DFD1]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-3 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            {t("faq.homeBadge")}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14382B]">
            {t("faq.homeHeading")}
          </h2>
          <p className="mt-3 text-base text-[#596B62]">
            {t("faq.subheading")}
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-base sm:text-lg font-bold text-[#14382B] hover:text-[#0D261C] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#8C651A] shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#596B62] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#14382B]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#596B62] leading-relaxed border-t border-[#E8DFD1]/40 animate-in fade-in-50 duration-150">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ */}
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14382B] hover:text-[#C59B4B] transition-colors underline underline-offset-4"
          >
            <span>{t("faq.moreQuestions")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
