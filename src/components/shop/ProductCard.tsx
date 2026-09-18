"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Leaf,
  ArrowRight,
  ShoppingBag,
  Heart,
  Star,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product, ProductVariant } from "@/types/product";
import { discountPercent } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useTranslation } from "@/lib/i18n";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();
  const defaultVariant =
    product.variants.find((v) => v.inStock) ?? product.variants[0];

  const [selectedVariant, setSelectedVariant] =
    React.useState<ProductVariant>(defaultVariant);
  const [addedAnimation, setAddedAnimation] = React.useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id)
  );

  const discount = discountPercent(selectedVariant.price, selectedVariant.mrp);

  const getBadgeTranslation = (badge?: string) => {
    if (!badge) return null;
    if (badge === "Most Popular") return t("product.mostPopular");
    if (badge === "Best Value") return t("product.bestValue");
    if (badge === "Mega Saver") return t("product.megaSaver");
    if (badge === "Trial Pack") return t("product.trialPack");
    return badge;
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <article className="group bg-white rounded-3xl border border-[#E8DFD1] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col relative">
      {/* ── Product Image ──────────────────────────────────────────────── */}
      <div className="relative aspect-square overflow-hidden bg-[#FAF7F2]">
        <Image
          src={product.images.card}
          alt={`Hriday Krishna ${product.name} — ${product.grade} Grade Raw Makhana`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <Badge variant="organic" className="text-[11px] font-bold shadow-xs">
            <Leaf className="w-3 h-3" />
            {t("hero.natureBadge")}
          </Badge>
          <Badge variant="gold" className="text-[11px] font-bold shadow-xs">
            {product.grade} Grade
          </Badge>
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={isInWishlist ? t("product.inWishlist") : t("product.addWishlist")}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isInWishlist
              ? "bg-[#C59B4B] text-[#121915] shadow-md"
              : "bg-white/90 backdrop-blur-sm text-[#596B62] hover:text-[#14382B] hover:bg-white shadow-xs"
          }`}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`} />
        </button>

        {/* Stock status pill */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#14382B] px-2.5 py-1 rounded-full border border-[#E8DFD1] shadow-xs">
          {t("common.inStock")}
        </div>
      </div>

      {/* ── Card Body ─────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-4">
        {/* Origin & Rating */}
        <div className="flex items-center justify-between text-xs text-[#596B62]">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#154E35]" />
            <span>{t("common.origin")}</span>
          </div>
          <div className="flex items-center gap-1 text-[#C59B4B] font-bold text-xs">
            <Star className="w-3.5 h-3.5 fill-[#C59B4B]" />
            <span>{product.rating}</span>
            <span className="text-neutral-400 font-normal">({product.reviewCount})</span>
          </div>
        </div>

        {/* Name & Tagline */}
        <div>
          <Link href={`/shop/${product.slug}`} className="hover:underline">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14382B] leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-xs sm:text-sm text-[#596B62] leading-relaxed line-clamp-2">
            {product.tagline}
          </p>
        </div>

        {/* ── Weight Variant Selector ───────────────────────────────── */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#14382B] mb-2">
            {t("product.selectPackSize")}: <span className="font-normal text-[#596B62]">{selectedVariant.weight}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => {
              const isSelected = selectedVariant.id === variant.id;
              const translatedBadge = getBadgeTranslation(variant.badge);

              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  disabled={!variant.inStock}
                  aria-pressed={isSelected}
                  aria-label={`Select ${variant.weight} pack`}
                  className={`relative flex flex-col items-center justify-center px-3 py-2 rounded-xl border text-xs font-bold transition-all duration-200 min-w-[54px]
                    ${
                      isSelected
                        ? "bg-[#14382B] text-white border-[#14382B] ring-2 ring-[#14382B]/20 shadow-sm"
                        : variant.inStock
                        ? "bg-white text-[#14382B] border-[#E8DFD1] hover:border-[#14382B]/50 hover:bg-[#FAF7F2]"
                        : "bg-[#F3ECE1] text-[#C4B5A5] border-[#E8DFD1] cursor-not-allowed line-through"
                    }`}
                >
                  {translatedBadge && variant.inStock && (
                    <span
                      className={`absolute -top-2.5 left-1/2 -translate-x-1/2 px-1.5 py-px text-[9px] font-bold rounded-full whitespace-nowrap
                        ${
                          isSelected
                            ? "bg-[#C59B4B] text-[#121915]"
                            : "bg-[#FAF4E6] text-[#8C651A] border border-[#E3CE9B]"
                        }`}
                    >
                      {translatedBadge}
                    </span>
                  )}
                  <span className="mt-0.5">{variant.weight}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Pricing ───────────────────────────────────────────────── */}
        <div className="flex items-baseline gap-2.5 pt-1">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-[#14382B]">
            ₹{selectedVariant.price}
          </span>
          <span className="text-sm text-neutral-400 line-through">
            ₹{selectedVariant.mrp}
          </span>
          <Badge variant="organic" className="text-[11px] font-bold px-2 py-0.5">
            {discount}% {t("common.off")}
          </Badge>
        </div>
        <p className="text-[11px] text-[#596B62] -mt-3">
          {t("common.taxIncluded")}
        </p>

        {/* ── CTA Buttons ───────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-2.5 mt-auto pt-2">
          {/* View Product link to /shop/raw-makhana */}
          <Link
            href={`/shop/${product.slug}`}
            className="flex-1"
            aria-label={`View details for ${product.name}`}
          >
            <Button
              variant="outline"
              className="w-full border-[#14382B] text-[#14382B] hover:bg-[#14382B]/5 font-semibold group/btn"
            >
              <span>{t("product.viewProduct")}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Add to Cart via Zustand */}
          <Button
            type="button"
            onClick={handleAddToCart}
            className={`flex-1 sm:flex-none font-semibold transition-all ${
              addedAnimation
                ? "bg-[#154E35] text-white"
                : "bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2]"
            }`}
            aria-label={`Add ${product.name} ${selectedVariant.weight} to cart`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4 text-[#C59B4B]" />
                <span>{t("product.addedToCart")}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>{t("product.addToCart")}</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}
