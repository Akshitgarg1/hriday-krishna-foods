"use client";

import * as React from "react";
import type { ProductCategory } from "@/types/product";
import type { CategoryMeta } from "@/types/product";
import { useTranslation } from "@/lib/i18n";

interface CategoryFilterProps {
  categories: CategoryMeta[];
  active: ProductCategory;
  onChange: (cat: ProductCategory) => void;
}

const CATEGORY_NAMES_HI: Record<string, string> = {
  "raw-makhana": "कच्चा मखाना",
  "roasted-makhana": "रोस्टेड मखाना",
  "flavoured-makhana": "फ्लेवर्ड मखाना",
};

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  const { language } = useTranslation();
  const isHi = language === "hi";

  return (
    <div
      role="tablist"
      aria-label="Filter products by category"
      className="flex flex-wrap items-center gap-2"
    >
      {categories.map((cat) => {
        const isActive = cat.id === active;
        const label = isHi ? CATEGORY_NAMES_HI[cat.id] || cat.label : cat.label;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onChange(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer
              ${
                isActive
                  ? "bg-[#14382B] text-[#FAF7F2] border-[#14382B] shadow-xs"
                  : "bg-white text-[#596B62] border-[#E8DFD1] hover:border-[#14382B]/50 hover:text-[#14382B]"
              }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
