"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Star,
  ShieldCheck,
  Award,
  Truck,
  PackageCheck,
  ShoppingBag,
  Zap,
  Heart,
  ChevronRight,
  Check,
  PhoneCall,
} from "lucide-react";
import { PRODUCTS, discountPercent } from "@/data/products";
import type { ProductVariant } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/product/ProductGallery";
import { WeightSelector } from "@/components/product/WeightSelector";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { ProductAccordions } from "@/components/product/ProductAccordions";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useTranslation } from "@/lib/i18n";

function RawMakhanaContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const product = PRODUCTS[0]; // Raw Makhana

  // Parse initial variant from URL ?variant=... if provided
  const initialVariantId = searchParams.get("variant");
  const initialVariant =
    product.variants.find((v) => v.id === initialVariantId) ||
    product.variants.find((v) => v.badge === "Most Popular") ||
    product.variants[0];

  const [selectedVariant, setSelectedVariant] =
    React.useState<ProductVariant>(initialVariant);
  const [quantity, setQuantity] = React.useState<number>(1);
  const [showAddedToast, setShowAddedToast] = React.useState<boolean>(false);

  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id)
  );

  const discount = discountPercent(selectedVariant.price, selectedVariant.mrp);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    addItem(product, selectedVariant, quantity);
    router.push("/checkout");
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] pb-16">
      {/* ── Breadcrumb Bar ────────────────────────────────────────── */}
      <div className="border-b border-[#E8DFD1]/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#596B62] flex items-center gap-2">
          <Link href="/" className="hover:text-[#14382B] transition-colors">
            {t("nav.home")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8DFD1]" />
          <Link href="/shop" className="hover:text-[#14382B] transition-colors">
            {t("nav.shop")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8DFD1]" />
          <span className="font-semibold text-[#14382B] truncate">
            {product.name} ({selectedVariant.weight})
          </span>
        </div>
      </div>

      {/* ── Main Product Section ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image Gallery (5 Cols) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <ProductGallery
              images={product.images.gallery}
              productName={product.name}
              grade={product.grade}
            />
          </div>

          {/* Right Column: Product Details & Controls (7 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Header: Origin & Rating */}
            <div>
              <div className="flex items-center gap-2 text-xs text-[#596B62] mb-2">
                <span className="inline-flex items-center gap-1 font-semibold text-[#154E35] bg-[#EBF3EE] px-2.5 py-0.5 rounded-full border border-[#C6DFC9]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t("common.origin")}
                </span>
                <span className="text-[#E8DFD1]">•</span>
                <span className="text-[#8C651A] font-semibold">{t("common.fssaiLic")}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14382B] leading-tight">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-[#596B62] mt-2 leading-relaxed">
                {product.tagline}
              </p>

              {/* Rating pill */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1 bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#E3CE9B]">
                  <Star className="w-4 h-4 fill-[#C59B4B] text-[#C59B4B]" />
                  <span className="text-xs font-bold text-[#14382B]">
                    {product.rating}
                  </span>
                </div>
                <span className="text-xs text-[#596B62]">
                  {t("product.basedOnReviews")}
                </span>
              </div>
            </div>

            {/* ── Price Block ────────────────────────────────────────── */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8DFD1] shadow-xs">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B]">
                  ₹{selectedVariant.price}
                </span>
                <span className="text-base text-neutral-400 line-through">
                  ₹{selectedVariant.mrp}
                </span>
                <Badge variant="organic" className="text-xs font-bold px-2.5 py-1">
                  {t("common.save")} {discount}%
                </Badge>
                <span className="ml-auto text-xs font-bold text-[#154E35] bg-[#EBF3EE] px-2.5 py-1 rounded-full border border-[#C6DFC9]">
                  {t("common.inStock")}
                </span>
              </div>

              <p className="text-xs text-[#596B62] mt-2">
                {t("common.taxIncluded")}
              </p>
            </div>

            {/* ── Weight Selector ────────────────────────────────────── */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8DFD1] shadow-xs">
              <WeightSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onSelect={setSelectedVariant}
              />
            </div>

            {/* ── Quantity & Purchase Actions ───────────────────────── */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8DFD1] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14382B]">
                  {t("product.quantity")}
                </span>
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>

              {/* Subtotal Preview */}
              <div className="flex items-center justify-between text-xs py-2 border-t border-[#E8DFD1]/60 text-[#596B62]">
                <span>{t("product.subtotalQty", { qty: String(quantity), weight: selectedVariant.weight })}</span>
                <span className="text-sm font-bold text-[#14382B]">
                  ₹{selectedVariant.price * quantity}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <Button
                  type="button"
                  onClick={handleAddToCart}
                  className="bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold h-12 rounded-2xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{t("product.addToCart")}</span>
                </Button>

                <Button
                  type="button"
                  onClick={handleBuyNow}
                  className="bg-[#C59B4B] hover:bg-[#B08638] text-[#121915] font-bold h-12 rounded-2xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  <span>{t("product.buyNow")}</span>
                </Button>
              </div>

              {/* Wishlist and Helpline */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#596B62] hover:text-[#14382B] transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isInWishlist ? "fill-[#C59B4B] text-[#C59B4B]" : ""
                    }`}
                  />
                  <span>
                    {isInWishlist ? t("product.inWishlist") : t("product.addWishlist")}
                  </span>
                </button>

                <a
                  href="tel:7654007494"
                  className="inline-flex items-center gap-1.5 text-xs text-[#8C651A] hover:underline font-semibold"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{t("product.callQuestions")}</span>
                </a>
              </div>
            </div>

            {/* ── Trust Points Grid ─────────────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Award, label: t("hero.handpickedBadge"), sub: t("hero.trust1Sub") },
                { icon: PackageCheck, label: t("product.featuresHygienic"), sub: t("product.resealableZiplock") },
                { icon: ShieldCheck, label: t("hero.trust3Label"), sub: t("common.origin") },
                { icon: Truck, label: t("product.featuresFastDelivery"), sub: t("footer.freeShipping") },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-3.5 border border-[#E8DFD1] text-center flex flex-col items-center gap-1"
                  >
                    <Icon className="w-5 h-5 text-[#8C651A]" />
                    <span className="text-xs font-bold text-[#14382B]">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-[#596B62]">
                      {item.sub}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ── Product Information Accordions ────────────────────── */}
            <ProductAccordions product={product} />

          </div>
        </div>
      </div>

      {/* ── Customer Reviews Section ──────────────────────────────── */}
      <div className="mt-16 sm:mt-24">
        <CustomerReviews />
      </div>

      {/* ── Added To Cart Floating Toast ──────────────────────────── */}
      {showAddedToast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#14382B] text-[#FAF7F2] rounded-2xl shadow-2xl p-4 border border-[#C59B4B]/40 flex items-center gap-4 animate-in slide-in-from-bottom-5 duration-200"
        >
          <div className="w-9 h-9 rounded-full bg-[#C59B4B] text-[#121915] flex items-center justify-center font-bold shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold">
              {t("product.addedQtyToCart", { qty: String(quantity), weight: selectedVariant.weight })}
            </div>
            <div className="text-xs text-[#FAF7F2]/75">
              {t("product.readyToCheckout")}
            </div>
          </div>
          <Link href="/cart">
            <Button size="sm" className="bg-[#FAF7F2] text-[#14382B] hover:bg-white text-xs font-bold">
              {t("product.viewCart")}
            </Button>
          </Link>
        </aside>
      )}
    </main>
  );
}

export default function RawMakhanaProductPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
          <div className="w-8 h-8 rounded-full border-2 border-[#14382B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <RawMakhanaContent />
    </React.Suspense>
  );
}
