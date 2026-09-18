"use client";

import * as React from "react";
import type { ProductVariant } from "@/types/product";
import { useTranslation } from "@/lib/i18n";

interface WeightSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onSelect: (variant: ProductVariant) => void;
}

export function WeightSelector({
  variants,
  selectedVariant,
  onSelect,
}: WeightSelectorProps) {
  const { t } = useTranslation();

  const getBadgeTranslation = (badge?: string) => {
    if (!badge) return null;
    if (badge === "Most Popular") return t("product.mostPopular");
    if (badge === "Best Value") return t("product.bestValue");
    if (badge === "Mega Saver") return t("product.megaSaver");
    if (badge === "Trial Pack") return t("product.trialPack");
    return badge;
  };

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-[#14382B] uppercase tracking-wider">
          {t("product.selectWeightPackSize")}
        </span>
        <span className="text-[#8C651A] font-semibold">
          {t("product.selectedColon")} {selectedVariant.weight}
        </span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
        {variants.map((v) => {
          const isSelected = selectedVariant.id === v.id;
          const translatedBadge = getBadgeTranslation(v.badge);

          return (
            <button
              key={v.id}
              type="button"
              onClick={() => onSelect(v)}
              disabled={!v.inStock}
              aria-pressed={isSelected}
              className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border text-sm font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-[#14382B] text-white border-[#14382B] ring-2 ring-[#14382B]/20 shadow-md scale-102"
                  : v.inStock
                  ? "bg-white text-[#14382B] border-[#E8DFD1] hover:border-[#14382B]/60 hover:bg-[#FAF7F2]"
                  : "bg-[#F3ECE1] text-[#C4B5A5] border-[#E8DFD1] cursor-not-allowed line-through"
              }`}
            >
              {/* Optional badge */}
              {translatedBadge && (
                <span
                  className={`absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] font-bold rounded-full whitespace-nowrap shadow-xs ${
                    isSelected
                      ? "bg-[#C59B4B] text-[#121915]"
                      : "bg-[#FAF4E6] text-[#8C651A] border border-[#E3CE9B]"
                  }`}
                >
                  {translatedBadge}
                </span>
              )}

              <span className="mt-0.5 text-base font-serif">{v.weight}</span>
              <span
                className={`text-[11px] font-medium mt-0.5 ${
                  isSelected ? "text-[#FAF7F2]/80" : "text-[#596B62]"
                }`}
              >
                ₹{v.price}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
