"use client";

import * as React from "react";
import { Star, CheckCircle, Quote } from "lucide-react";
import { CUSTOMER_REVIEWS } from "@/data/reviews";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";

export function CustomerReviews() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white border-t border-[#E8DFD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="gold" className="mb-3 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            {t("reviews.badge")}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14382B] leading-tight">
            {t("reviews.heading")}
          </h2>
          <p className="mt-3 text-base text-[#596B62] leading-relaxed">
            {t("reviews.subheading")}
          </p>

          {/* Rating Summary Pill */}
          <div className="mt-6 inline-flex items-center gap-3 bg-[#FAF4E6] px-5 py-2.5 rounded-full border border-[#E3CE9B]">
            <div className="flex text-[#C59B4B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C59B4B]" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#14382B]">
              {t("reviews.ratingScore")}
            </span>
            <span className="text-xs text-[#596B62]">{t("reviews.basedOn")}</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#E8DFD1] flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-[#C59B4B]/30 absolute top-5 right-5" />

              <div>
                {/* Stars */}
                <div className="flex text-[#C59B4B] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59B4B]" />
                  ))}
                </div>

                <h3 className="font-serif font-bold text-lg text-[#14382B] mb-2">
                  &ldquo;{rev.title}&rdquo;
                </h3>
                <p className="text-sm text-[#596B62] leading-relaxed mb-6">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#14382B]">{rev.author}</div>
                  <div className="text-[#596B62]">{rev.location}</div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#154E35]">
                    <CheckCircle className="w-3 h-3" />
                    {t("reviews.verifiedBuyer")}
                  </span>
                  <span className="text-[10px] text-[#596B62] mt-0.5">
                    {t("reviews.pack")}: {rev.variantPurchased}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
