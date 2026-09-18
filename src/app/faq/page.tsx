"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { FAQS, CATEGORY_LABELS } from "@/data/faqs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

const CATEGORIES = ["All", "Products", "Orders", "Shipping", "Payments", "Returns", "General"] as const;

export default function FAQPage() {
  const { t, language } = useTranslation();
  const isHi = language === "hi";

  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [openIds, setOpenIds] = React.useState<Record<string, boolean>>({
    "faq-p1": true,
    "faq-s1": true,
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const q = isHi && item.questionHi ? item.questionHi : item.question;
    const a = isHi && item.answerHi ? item.answerHi : item.answer;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      q.toLowerCase().includes(query) ||
      a.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="gold" className="mb-3 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            {t("faq.badge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14382B]">
            {t("faq.heading")}
          </h1>
          <p className="mt-3 text-base text-[#596B62] leading-relaxed">
            {t("faq.subheading")}
          </p>

          {/* Search Box */}
          <div className="mt-6 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-[#8C651A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("faq.searchPlaceholder")}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#E8DFD1] text-sm text-[#14382B] shadow-xs focus:outline-none focus:border-[#14382B]"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const label = isHi ? CATEGORY_LABELS[cat]?.hi || cat : CATEGORY_LABELS[cat]?.en || cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#14382B] text-white border-[#14382B] shadow-xs"
                    : "bg-white text-[#596B62] border-[#E8DFD1] hover:border-[#14382B]/50 hover:text-[#14382B]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              const question = isHi && faq.questionHi ? faq.questionHi : faq.question;
              const answer = isHi && faq.answerHi ? faq.answerHi : faq.answer;
              const catLabel = isHi ? CATEGORY_LABELS[faq.category]?.hi || faq.category : CATEGORY_LABELS[faq.category]?.en || faq.category;

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-base sm:text-lg font-bold text-[#14382B] hover:text-[#0D261C] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <HelpCircle className="w-5 h-5 text-[#8C651A] shrink-0" />
                      <span>{question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#596B62] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#14382B]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#596B62] leading-relaxed border-t border-[#E8DFD1]/40 animate-in fade-in-50 duration-150">
                      <p>{answer}</p>
                      <span className="inline-block mt-3 text-[10px] uppercase font-bold tracking-wider text-[#8C651A] bg-[#FAF4E6] px-2.5 py-0.5 rounded-full border border-[#E3CE9B]">
                        {t("faq.categoryLabel", { category: catLabel })}
                      </span>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DFD1] p-8">
              <p className="text-base text-[#596B62] mb-3">
                {t("faq.noResults")}
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="border-[#14382B] text-[#14382B]"
              >
                {t("common.viewAll")}
              </Button>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 bg-[#FAF4E6] rounded-3xl p-8 border border-[#E3CE9B] text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-[#14382B] mb-2">
            {t("faq.stillHaveQuestions")}
          </h3>
          <p className="text-sm text-[#596B62] mb-6">
            {t("faq.founderNote")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:7654007494"
              className="inline-flex items-center justify-center gap-2 bg-[#14382B] text-[#FAF7F2] hover:bg-[#0D261C] px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t("faq.callHelpline")}</span>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="border-[#14382B] text-[#14382B] w-full sm:w-auto">
                <span>{t("faq.writeToUs")}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
