"use client";

import * as React from "react";
import { ChevronDown, Sparkles, Shield, HeartPulse, Box, Truck } from "lucide-react";
import type { Product } from "@/types/product";
import { useTranslation } from "@/lib/i18n";

interface ProductAccordionsProps {
  product: Product;
}

export function ProductAccordions({ product }: ProductAccordionsProps) {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    description: true,
    benefits: false,
    ingredients: false,
    nutrition: false,
    storage: false,
    shipping: false,
  });

  const toggle = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-3 pt-6 border-t border-[#E8DFD1]">
      {/* 1. Description */}
      <div className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("description")}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif font-bold text-base sm:text-lg text-[#14382B]"
          aria-expanded={openSections.description}
        >
          <span className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#8C651A]" />
            <span>{t("product.accordionDescription")}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#596B62] transition-transform duration-200 ${
              openSections.description ? "rotate-180 text-[#14382B]" : ""
            }`}
          />
        </button>
        {openSections.description && (
          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#596B62] leading-relaxed border-t border-[#E8DFD1]/50 space-y-3">
            <p>{product.description}</p>
            <p>
              {t("brandStory.para2")}
            </p>
          </div>
        )}
      </div>

      {/* 2. Benefits */}
      <div className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("benefits")}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif font-bold text-base sm:text-lg text-[#14382B]"
          aria-expanded={openSections.benefits}
        >
          <span className="flex items-center gap-2.5">
            <HeartPulse className="w-4 h-4 text-[#154E35]" />
            <span>{t("product.accordionBenefits")}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#596B62] transition-transform duration-200 ${
              openSections.benefits ? "rotate-180 text-[#14382B]" : ""
            }`}
          />
        </button>
        {openSections.benefits && (
          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#596B62] leading-relaxed border-t border-[#E8DFD1]/50">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#154E35] mt-2 shrink-0" />
                <span><strong>Plant Protein Powerhouse:</strong> Provides 9.7g protein per 100g for muscle repair and satiety.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#154E35] mt-2 shrink-0" />
                <span><strong>Low Glycemic Index (GI):</strong> Excellent snack choice for managing blood sugar levels and keto/fasting diets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#154E35] mt-2 shrink-0" />
                <span><strong>Zero Cholesterol & Low Sodium:</strong> Naturally heart-friendly with zero trans fats and virtually no saturated fats.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#154E35] mt-2 shrink-0" />
                <span><strong>Rich in Calcium & Magnesium:</strong> Supports bone density, joint wellness, and restful sleep.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#154E35] mt-2 shrink-0" />
                <span><strong>Ayurvedic Vrat Approved:</strong> Sattvic, pure food ideal for Navratri, Ekadashi, and religious fasting.</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* 3. Ingredients & Purity */}
      <div className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("ingredients")}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif font-bold text-base sm:text-lg text-[#14382B]"
          aria-expanded={openSections.ingredients}
        >
          <span className="flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-[#C59B4B]" />
            <span>{t("product.accordionIngredients")}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#596B62] transition-transform duration-200 ${
              openSections.ingredients ? "rotate-180 text-[#14382B]" : ""
            }`}
          />
        </button>
        {openSections.ingredients && (
          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#596B62] leading-relaxed border-t border-[#E8DFD1]/50 space-y-2">
            <p>
              <strong>Ingredients:</strong> 100% Pure Raw Phool Makhana (Euryale Ferox seeds).
            </p>
            <p>
              Contains <strong>no preservatives, no artificial coloring agents, no bleaching chemicals, and no added salt or oil</strong>.
              Pure and unadulterated directly from the harvest pool.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#154E35] bg-[#EBF3EE] px-3 py-1 rounded-full border border-[#C6DFC9]">
                {t("common.fssaiLic")}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 4. Nutrition Information */}
      <div className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("nutrition")}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif font-bold text-base sm:text-lg text-[#14382B]"
          aria-expanded={openSections.nutrition}
        >
          <span className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#8C651A]" />
            <span>{t("product.accordionNutrition")}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#596B62] transition-transform duration-200 ${
              openSections.nutrition ? "rotate-180 text-[#14382B]" : ""
            }`}
          />
        </button>
        {openSections.nutrition && (
          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#596B62] leading-relaxed border-t border-[#E8DFD1]/50 space-y-3">
            <p className="text-xs text-[#8C651A]">{t("product.approxValues")}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {product.nutritionHighlights.map((fact, idx) => (
                <div key={idx} className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E8DFD1]">
                  <div className="font-bold text-[#14382B] text-sm">{fact.value}</div>
                  <div className="text-[11px] text-[#596B62]">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 5. Storage Instructions */}
      <div className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("storage")}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif font-bold text-base sm:text-lg text-[#14382B]"
          aria-expanded={openSections.storage}
        >
          <span className="flex items-center gap-2.5">
            <Box className="w-4 h-4 text-[#14382B]" />
            <span>{t("product.accordionStorage")}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#596B62] transition-transform duration-200 ${
              openSections.storage ? "rotate-180 text-[#14382B]" : ""
            }`}
          />
        </button>
        {openSections.storage && (
          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#596B62] leading-relaxed border-t border-[#E8DFD1]/50 space-y-2">
            <p>
              • Store in a cool, dry place away from direct sunlight.
            </p>
            <p>
              • Keep inside the resealable airtight pouch after opening to prevent moisture absorption and retain crunch.
            </p>
            <p className="text-xs text-[#8C651A] italic">
              {t("product.proTip")}
            </p>
          </div>
        )}
      </div>

      {/* 6. Shipping & Returns */}
      <div className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("shipping")}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif font-bold text-base sm:text-lg text-[#14382B]"
          aria-expanded={openSections.shipping}
        >
          <span className="flex items-center gap-2.5">
            <Truck className="w-4 h-4 text-[#154E35]" />
            <span>{t("product.accordionShipping")}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#596B62] transition-transform duration-200 ${
              openSections.shipping ? "rotate-180 text-[#14382B]" : ""
            }`}
          />
        </button>
        {openSections.shipping && (
          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#596B62] leading-relaxed border-t border-[#E8DFD1]/50 space-y-2">
            <p>
              <strong>Dispatch:</strong> Orders are dispatched from Sitamarhi within 24 hours of confirmation.
            </p>
            <p>
              <strong>Delivery Timeline:</strong> Metro cities: 2–4 business days; Rest of India: 3–6 business days.
            </p>
            <p>
              <strong>Free Shipping:</strong> Automatically applied to all orders ₹499 and above.
            </p>
            <p>
              <strong>7-Day Replacement Guarantee:</strong> If your pack arrives unsealed or damaged, reach our helpline (+91 7654007494) for an immediate replacement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
