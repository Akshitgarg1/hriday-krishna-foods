"use client";

import * as React from "react";
import Image from "next/image";
import {
  Sparkles,
  Flame,
  Scale,
  PackageCheck,
  ShoppingBag,
  Zap,
  CheckCircle2,
  Table,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS, discountPercent } from "@/data/products";
import type { ProductVariant } from "@/types/product";

// Badge key mapping for i18n
const BADGE_KEY_MAP: Record<string, string> = {
  "Most Popular": "product.mostPopular",
  "Best Value": "product.bestValue",
  "Mega Saver": "product.megaSaver",
  "Trial Pack": "product.trialPack",
};

// Actual Lab Tested Nutrition Facts from Hriday Krishna's Official Packaging
const NUTRITION_FACTS = [
  { label: "Energy", value: "347 kcal" },
  { label: "Protein", value: "9.7 g" },
  { label: "Carbohydrate", value: "76.2 g" },
  { label: "Dietary Fiber", value: "14.5 g" },
  { label: "Total Fat", value: "0.1 g" },
  { label: "Trans Fat", value: "0.0 g" },
  { label: "Cholesterol", value: "0.0 mg" },
  { label: "Calcium", value: "67 mg" },
  { label: "Potassium", value: "550 mg" },
  { label: "Iron", value: "1.4 mg" },
  { label: "Sodium", value: "12 mg" },
];

export function ProductHighlight() {
  const { t } = useTranslation();
  const addItem = useCartStore((state) => state.addItem);
  const product = PRODUCTS[0];
  const variants = product.variants;
  const [selectedVariant, setSelectedVariant] = React.useState<ProductVariant>(
    variants[2] // Default to 250g (Most Popular)
  );
  const [quantity, setQuantity] = React.useState(1);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);
  const [showNutritionTable, setShowNutritionTable] = React.useState(false);

  const discount = discountPercent(selectedVariant.price, selectedVariant.mrp);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setToastMessage(
      t("product.addedQtyToCart", { qty: String(quantity), weight: selectedVariant.weight })
    );
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleBuyNow = () => {
    addItem(product, selectedVariant, quantity);
    window.location.href = "/checkout";
  };

  return (
    <section id="product" className="py-16 md:py-24 bg-white border-b border-[#E8DFD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="gold" className="mb-3 px-3 py-1">
            <Sparkles className="w-3.5 h-3.5 text-[#8C651A]" />
            {t("footer.heartOfBihar")}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14382B] tracking-tight">
            {t("common.brandName")} {t("product.title")}
          </h2>
          <p className="mt-2 text-base font-serif italic text-[#8C651A]">
            &ldquo;{t("common.tagline")}&rdquo;
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#596B62]">
            {t("hero.description")}
          </p>
        </div>

        {/* Product Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#E8DFD1]">
          
          {/* Left Column: Product Visuals */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8DFD1] aspect-square shadow-sm group">
              <Image
                src="/images/hriday-krishna-product.jpg"
                alt="Hriday Krishna Foods Raw Makhana packaging and ceramic bowl"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Product Badge Overlays */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge variant="organic" className="shadow-xs font-bold text-xs py-1">
                  {t("hero.natureBadge")}
                </Badge>
                <Badge variant="gold" className="shadow-xs font-bold text-xs py-1">
                  {t("hero.handpickedBadge")}
                </Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-[#E8DFD1] text-xs text-[#14382B] flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#154E35]" />
                  <span className="font-semibold">{t("common.fssaiLic")}</span>
                </div>
                <span className="text-[#8C651A] font-bold">Pack: {selectedVariant.weight}</span>
              </div>
            </div>

            {/* Quick Guarantees Grid */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-[#596B62]">
              <div className="bg-white p-2.5 rounded-xl border border-[#E8DFD1]">
                <PackageCheck className="w-4 h-4 mx-auto text-[#14382B] mb-1" />
                <span className="font-medium text-[#14382B] block">{t("product.featuresAirtight")}</span>
                <span className="text-[10px]">{t("product.resealableZiplock")}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#E8DFD1]">
                <Flame className="w-4 h-4 mx-auto text-[#8C651A] mb-1" />
                <span className="font-medium text-[#14382B] block">{t("whyChooseUs.pillar4Title")}</span>
                <span className="text-[10px]">{t("hero.trust2Label")}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#E8DFD1]">
                <Scale className="w-4 h-4 mx-auto text-[#14382B] mb-1" />
                <span className="font-medium text-[#14382B] block">{t("common.grade5Sut")}</span>
                <span className="text-[10px]">{t("hero.trust1Sub")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details & Variant Selector */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Title & Origin Details */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C651A]">
                  {t("common.brandName")}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-xs text-[#596B62]">{t("common.origin")}</span>
                <span className="text-neutral-300">•</span>
                <span className="text-xs text-[#154E35] font-semibold bg-[#EBF3EE] px-2 py-0.5 rounded-full">
                  5+ Sut
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14382B]">
                {t("product.title")}
              </h3>
              
              <p className="text-sm text-[#596B62] mt-2 leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            {/* Dynamic Price Display */}
            <div className="bg-white p-4 rounded-2xl border border-[#E8DFD1] flex items-baseline justify-between">
              <div>
                <div className="text-xs text-[#596B62] font-medium mb-1">
                  Price for {selectedVariant.weight} pack:
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#14382B]">
                    ₹{selectedVariant.price * quantity}
                  </span>
                  <span className="text-sm text-neutral-400 line-through">
                    ₹{selectedVariant.mrp * quantity}
                  </span>
                  <Badge variant="organic" className="text-xs font-bold">
                    {discount}% OFF
                  </Badge>
                </div>
                <p className="text-[11px] text-[#596B62] mt-1">
                  {t("common.taxIncluded")}
                </p>
              </div>

              <div className="text-right hidden sm:block">
                <span className="text-xs text-[#8C651A] font-semibold bg-[#FAF4E6] px-2.5 py-1 rounded-full border border-[#E3CE9B]">
                  {selectedVariant.servings}
                </span>
                <div className="text-[10px] text-[#596B62] mt-1.5">
                  {selectedVariant.bestFor}
                </div>
              </div>
            </div>

            {/* Weight Variant Selector */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#14382B] flex items-center gap-1.5">
                  <span>{t("product.selectPackSize")}:</span>
                  <span className="text-[#8C651A] font-serif capitalize">
                    ({selectedVariant.weight})
                  </span>
                </label>
                <span className="text-xs text-[#596B62]">5 Sizes Available</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {variants.map((variant) => {
                  const isSelected = selectedVariant.weight === variant.weight;
                  const badgeKey = variant.badge ? BADGE_KEY_MAP[variant.badge] : null;
                  const badgeText = badgeKey ? t(badgeKey) : null;

                  return (
                    <button
                      key={variant.weight}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 text-center ${
                        isSelected
                          ? "bg-[#14382B] text-white border-[#14382B] shadow-md ring-2 ring-[#14382B]/20"
                          : "bg-white text-[#14382B] border-[#E8DFD1] hover:border-[#14382B]/50 hover:bg-[#FAF7F2]"
                      }`}
                    >
                      {badgeText && (
                        <span
                          className={`absolute -top-2 px-1.5 py-0.5 text-[9px] font-bold rounded-full uppercase tracking-tighter ${
                            isSelected
                              ? "bg-[#C59B4B] text-[#121915]"
                              : "bg-[#FAF4E6] text-[#8C651A] border border-[#E3CE9B]"
                          }`}
                        >
                          {badgeText}
                        </span>
                      )}
                      <span className="text-sm font-bold tracking-tight">
                        {variant.weight}
                      </span>
                      <span
                        className={`text-xs mt-0.5 ${
                          isSelected ? "text-[#FAF7F2]/80" : "text-[#596B62]"
                        }`}
                      >
                        ₹{variant.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector & Actions */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity Buttons */}
                <div className="flex items-center border border-[#E8DFD1] bg-white rounded-full p-1 shadow-xs">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#14382B] hover:bg-[#FAF7F2] disabled:opacity-40 disabled:hover:bg-transparent transition-colors text-base font-bold"
                  >
                    –
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-[#14382B]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#14382B] hover:bg-[#FAF7F2] transition-colors text-base font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  size="default"
                  className="flex-1 border-[#14382B] text-[#14382B] hover:bg-[#14382B]/5 font-semibold"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t("product.addToCart")}</span>
                </Button>

                {/* Buy Now Button */}
                <Button
                  onClick={handleBuyNow}
                  variant="default"
                  size="default"
                  className="flex-1 bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold"
                >
                  <Zap className="w-4 h-4 text-[#C59B4B]" />
                  <span>{t("product.buyNow")}</span>
                </Button>
              </div>

              {/* Interactive Feedback Toast */}
              {toastMessage && (
                <div className="p-3 bg-[#EBF3EE] border border-[#C6DFC9] rounded-xl text-xs text-[#154E35] flex items-center gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#154E35]" />
                  <span>{toastMessage}</span>
                </div>
              )}
            </div>

            {/* Nutrition Facts Button & Highlights */}
            <div className="pt-3 border-t border-[#E8DFD1]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14382B]">
                  {t("product.accordionNutrition")}
                </span>
                <button
                  type="button"
                  onClick={() => setShowNutritionTable(!showNutritionTable)}
                  className="text-xs font-semibold text-[#8C651A] hover:underline flex items-center gap-1"
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>{showNutritionTable ? "Hide Table" : "View Full Label"}</span>
                </button>
              </div>

              {/* Quick Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2 bg-white rounded-xl border border-[#E8DFD1]">
                  <div className="font-bold text-[#14382B] text-sm">347 kcal</div>
                  <div className="text-[10px] text-[#596B62]">Energy</div>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#E8DFD1]">
                  <div className="font-bold text-[#14382B] text-sm">9.7 g</div>
                  <div className="text-[10px] text-[#596B62]">Protein</div>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#E8DFD1]">
                  <div className="font-bold text-[#14382B] text-sm">14.5 g</div>
                  <div className="text-[10px] text-[#596B62]">Dietary Fiber</div>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#E8DFD1]">
                  <div className="font-bold text-[#14382B] text-sm">67 mg</div>
                  <div className="text-[10px] text-[#596B62]">Calcium</div>
                </div>
              </div>

              {/* Expanded Nutrition Label Table from Real Packaging */}
              {showNutritionTable && (
                <div className="mt-3 p-4 bg-white rounded-xl border border-[#E8DFD1] text-xs animate-in fade-in duration-200">
                  <div className="font-bold text-[#14382B] mb-2 pb-1 border-b border-[#E8DFD1] flex justify-between">
                    <span>{t("product.approxValues")}</span>
                    <span>Per 100g</span>
                  </div>
                  <div className="grid grid-cols-2 gap-y-1.5 text-[#596B62]">
                    {NUTRITION_FACTS.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <span className="font-medium text-[#14382B]">{item.label}</span>
                        <span className="text-right text-[#121915]">{item.value}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#E8DFD1] text-[10px] text-[#8C651A] flex items-center justify-between">
                    <span>{t("common.fssaiLic")}</span>
                    <span>Expiry: 12 Months</span>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Manufacturer & Helpline strip */}
            <div className="p-3 bg-[#FAF4E6] rounded-xl border border-[#E3CE9B] flex items-center justify-between text-xs text-[#8C651A]">
              <div>
                <span className="font-bold block text-[#14382B]">{t("whyChooseUs.madeInBihar")}</span>
                <span className="text-[11px]">{t("brandStory.fromHeartSub")}</span>
              </div>
              <a
                href="tel:7654007494"
                className="flex items-center gap-1 font-bold text-[#14382B] hover:text-[#8C651A] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t("common.helpline")}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
