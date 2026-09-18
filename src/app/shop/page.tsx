"use client";

import * as React from "react";
import { ShieldCheck, Leaf, Truck, Star, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/shop/ProductCard";
import { CategoryFilter } from "@/components/shop/CategoryFilter";
import { PRODUCTS, CATEGORY_META } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import { useTranslation } from "@/lib/i18n";

export default function ShopPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] =
    React.useState<ProductCategory>("raw-makhana");

  const trustPillars = [
    {
      icon: Leaf,
      label: t("hero.natureBadge"),
      sub: t("hero.trust2Label"),
    },
    {
      icon: ShieldCheck,
      label: t("hero.trust3Label"),
      sub: t("common.fssaiLic"),
    },
    {
      icon: Star,
      label: t("common.grade5Sut"),
      sub: t("hero.trust1Sub"),
    },
    {
      icon: Truck,
      label: t("product.featuresFastDelivery"),
      sub: t("footer.freeShipping"),
    },
  ];

  // Filter products — structure is ready for multiple products
  const visibleProducts = PRODUCTS.filter(
    (p) => p.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[#FAF7F2]">

      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#14382B] text-[#FAF7F2] py-16 md:py-20">
        {/* Decorative glows */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#C59B4B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-80 h-80 bg-[#204C3B] rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="gold"
            className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider"
          >
            {t("footer.heartOfBihar")}
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
            {t("nav.shopRawMakhana")}
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#FAF7F2]/75 leading-relaxed">
            <strong className="text-[#C59B4B]">{t("common.brandName")}</strong> {t("hero.subheading")}
          </p>

          {/* Trust Pillars Row */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="flex flex-col items-center gap-1.5 bg-white/8 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                >
                  <div className="w-9 h-9 rounded-full bg-[#C59B4B]/15 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-[#C59B4B]" />
                  </div>
                  <span className="text-xs font-bold text-[#FAF7F2]">
                    {pillar.label}
                  </span>
                  <span className="text-[11px] text-[#FAF7F2]/60">{pillar.sub}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14382B]">
              {t("nav.shop")}
            </h2>
            <p className="text-sm text-[#596B62] mt-0.5">
              {visibleProducts.length === 0
                ? "Coming soon in this category"
                : `${visibleProducts.length} product${visibleProducts.length > 1 ? "s" : ""} available`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-[#596B62] shrink-0" />
            <CategoryFilter
              categories={CATEGORY_META}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Product Grid */}
        {visibleProducts.length > 0 ? (
          <div>
            <div
              className={`grid gap-8 ${
                visibleProducts.length === 1
                  ? "grid-cols-1 lg:grid-cols-[420px_1fr] items-start"
                  : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {/* Product Card(s) */}
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {/* ── Companion Panel (only when single product) ───────── */}
              {visibleProducts.length === 1 && (
                <aside className="flex flex-col gap-6">
                  {/* Why this product */}
                  <div className="bg-white rounded-3xl border border-[#E8DFD1] p-6 sm:p-8">
                    <h3 className="font-serif text-xl font-bold text-[#14382B] mb-4">
                      {t("whyChooseUs.heading")}
                    </h3>
                    <ul className="space-y-3.5 text-sm text-[#596B62]">
                      {[
                        {
                          heading: t("whyChooseUs.pillar4Title"),
                          body: t("whyChooseUs.pillar4Desc"),
                        },
                        {
                          heading: t("whyChooseUs.pillar1Title"),
                          body: t("whyChooseUs.pillar1Desc"),
                        },
                        {
                          heading: t("brandStory.pureSattvic"),
                          body: t("brandStory.pureSattvicSub"),
                        },
                        {
                          heading: t("whyChooseUs.pillar2Title"),
                          body: t("whyChooseUs.pillar2Desc"),
                        },
                        {
                          heading: t("whyChooseUs.fssaiCertified"),
                          body: t("common.fssaiLic"),
                        },
                      ].map((item) => (
                        <li key={item.heading} className="flex gap-3 items-start">
                          <span className="mt-1 w-5 h-5 rounded-full bg-[#EBF3EE] text-[#154E35] flex items-center justify-center shrink-0">
                            <Leaf className="w-3 h-3" />
                          </span>
                          <span>
                            <strong className="text-[#14382B]">{item.heading}</strong>{" "}
                            {item.body}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nutrition Snapshot */}
                  <div className="bg-[#14382B] rounded-3xl p-6 sm:p-8 text-[#FAF7F2]">
                    <h3 className="font-serif text-xl font-bold mb-1">
                      {t("product.accordionNutrition")}
                    </h3>
                    <p className="text-xs text-[#FAF7F2]/60 mb-5">{t("product.approxValues")}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {visibleProducts[0].nutritionHighlights.map((n) => (
                        <div
                          key={n.label}
                          className="bg-white/8 rounded-xl p-3 border border-white/10"
                        >
                          <div className="text-[#C59B4B] font-serif font-bold text-lg leading-none">
                            {n.value}
                          </div>
                          <div className="text-[11px] text-[#FAF7F2]/70 mt-1">
                            {n.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-white rounded-3xl border border-[#E8DFD1] p-6 sm:p-8">
                    <h3 className="font-serif text-xl font-bold text-[#14382B] mb-4">
                      {t("checkout.fssaiPacking")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {visibleProducts[0].certifications.map((cert) => (
                        <span
                          key={cert}
                          className="flex items-center gap-1.5 text-xs font-semibold text-[#154E35] bg-[#EBF3EE] border border-[#C6DFC9] px-3 py-1.5 rounded-full"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </aside>
              )}
            </div>
          </div>
        ) : (
          /* ── Empty state for future categories ───────────────────── */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-[#EBF3EE] flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-[#154E35]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#14382B] mb-2">
              Coming Soon
            </h3>
            <p className="text-sm text-[#596B62] max-w-xs">
              We&apos;re working on new products in this category. Stay tuned — or check
              out our Raw Makhana in the meantime!
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("raw-makhana")}
              className="mt-6 text-sm font-semibold text-[#14382B] underline underline-offset-4 hover:text-[#C59B4B] transition-colors"
            >
              Browse Raw Makhana →
            </button>
          </div>
        )}
      </section>

      {/* ── Bottom CTA banner ───────────────────────────────────────── */}
      <section className="bg-[#F3ECE1] border-t border-[#E8DFD1] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#14382B] mb-2">
            {t("contact.subjectBulk")}
          </p>
          <p className="text-sm text-[#596B62] mb-6">
            {t("contact.subheading")}
          </p>
          <a
            href="tel:7654007494"
            className="inline-flex items-center gap-2 bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold px-7 py-3.5 rounded-full transition-colors shadow-sm hover:shadow-md text-sm"
          >
            📞 {t("cta.callButton")}
          </a>
        </div>
      </section>

    </main>
  );
}
