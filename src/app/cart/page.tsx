"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Sparkles,
  Tag,
  ArrowLeft,
} from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

export default function CartPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);
  const [couponInput, setCouponInput] = React.useState("");
  const [couponMessage, setCouponMessage] = React.useState<{
    success: boolean;
    text: string;
  } | null>(null);

  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    applyCoupon,
    removeCoupon,
    couponCode,
    discountPercentage,
    getSummary,
  } = useCartStore();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#14382B] border-t-transparent animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  const summary = getSummary();
  const isEmpty = items.length === 0;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponMessage({ success: res.success, text: res.message });
  };

  const progressPercent = Math.min(
    100,
    Math.round((summary.subtotal / summary.freeShippingThreshold) * 100)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Title & Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD1]">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B]">
              {t("cart.title")}
            </h1>
            <p className="text-xs sm:text-sm text-[#596B62] mt-1">
              {isEmpty
                ? t("cart.emptyTitle")
                : items.length === 1
                ? t("cart.uniqueItems", { count: String(items.length) })
                : t("cart.uniqueItemsPlural", { count: String(items.length) })}
            </p>
          </div>

          {!isEmpty && (
            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-rose-600 hover:text-rose-800 font-semibold underline underline-offset-4 cursor-pointer"
            >
              {t("cart.clearCart")}
            </button>
          )}
        </div>

        {isEmpty ? (
          /* ── Empty Cart View ───────────────────────────────────────── */
          <div className="py-20 text-center max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#FAF4E6] border border-[#E3CE9B] flex items-center justify-center mx-auto mb-6 text-[#8C651A]">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#14382B] mb-2">
              {t("cart.emptyTitle")}
            </h2>
            <p className="text-sm text-[#596B62] leading-relaxed mb-8">
              {t("cart.emptyDescription")}
            </p>
            <Link href="/shop">
              <Button className="bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold px-8 py-3 rounded-full cursor-pointer">
                <span>{t("cart.startShopping")}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        ) : (
          /* ── Active Cart View (2 Columns) ──────────────────────────── */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
            
            {/* Left Column: Cart Items List (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Free Shipping Progress Bar */}
              <div className="bg-white rounded-2xl p-4 border border-[#E8DFD1] shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-[#14382B] mb-2">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#8C651A]" />
                    {summary.remainingForFreeShipping > 0 ? (
                      <span>
                        {t("cart.freeShippingAddMore", { amount: String(summary.remainingForFreeShipping) })}
                      </span>
                    ) : (
                      <span className="text-[#154E35] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
                        {t("cart.freeShippingUnlocked")}
                      </span>
                    )}
                  </span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full bg-[#FAF7F2] h-2 rounded-full overflow-hidden border border-[#E8DFD1]/60">
                  <div
                    className="bg-[#14382B] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items Card List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E8DFD1] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    {/* Item Image + Details */}
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-[#E8DFD1]">
                        <Image
                          src={item.product.images.card}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <Link
                          href={`/shop/${item.product.slug}?variant=${item.variant.id}`}
                          className="hover:underline"
                        >
                          <h3 className="font-serif font-bold text-[#14382B] text-base truncate">
                            {item.product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-bold text-[#8C651A] bg-[#FAF4E6] px-2 py-0.5 rounded-full border border-[#E3CE9B]">
                            {item.variant.weight} Pack
                          </span>
                          <span className="text-xs text-[#596B62]">
                            ₹{item.variant.price} {t("cart.each")}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#596B62] mt-1">
                          {t("cart.gradeNote")}
                        </p>
                      </div>
                    </div>

                    {/* Quantity + Item Total + Remove */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E8DFD1]/60">
                      {/* Quantity Controller */}
                      <div className="flex items-center bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-[#14382B] hover:bg-white transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-[#14382B]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-[#14382B] hover:bg-white transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right min-w-[70px]">
                        <span className="font-serif font-bold text-[#14382B] text-base sm:text-lg block">
                          ₹{item.variant.price * item.quantity}
                        </span>
                        <span className="text-[10px] text-neutral-400 line-through">
                          ₹{item.variant.mrp * item.quantity}
                        </span>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        className="p-2 text-[#596B62] hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="pt-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14382B] hover:text-[#C59B4B] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t("cart.continueShopping")}</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Order Summary (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl p-6 border border-[#E8DFD1] shadow-xs space-y-5">
                <h2 className="font-serif text-xl font-bold text-[#14382B] pb-3 border-b border-[#E8DFD1]">
                  {t("cart.orderSummary")}
                </h2>

                {/* Promo Code Input */}
                <div>
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-4 h-4 text-[#8C651A] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder={t("cart.couponPlaceholder")}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] uppercase tracking-wider focus:outline-none focus:border-[#14382B]"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="outline"
                      size="sm"
                      className="border-[#14382B] text-[#14382B] font-semibold hover:bg-[#14382B]/5 cursor-pointer"
                    >
                      {t("cart.apply")}
                    </Button>
                  </form>

                  {couponMessage && (
                    <p
                      className={`text-xs mt-1.5 ${
                        couponMessage.success ? "text-[#154E35] font-semibold" : "text-rose-600"
                      }`}
                    >
                      {couponMessage.text}
                    </p>
                  )}

                  {couponCode && (
                    <div className="mt-2 flex items-center justify-between bg-[#FAF4E6] px-3 py-1.5 rounded-xl border border-[#E3CE9B] text-xs">
                      <span className="font-bold text-[#8C651A]">
                        {couponCode} (-{discountPercentage}%)
                      </span>
                      <button
                        type="button"
                        onClick={removeCoupon}
                        className="text-[11px] text-neutral-500 hover:text-neutral-800 underline cursor-pointer"
                      >
                        {t("cart.remove")}
                      </button>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2.5 text-xs sm:text-sm pt-2 border-t border-[#E8DFD1]/60">
                  <div className="flex justify-between text-[#596B62]">
                    <span>{t("cart.itemsSubtotal")}</span>
                    <span className="font-semibold text-[#14382B]">
                      ₹{summary.subtotal}
                    </span>
                  </div>

                  {summary.discount > 0 && (
                    <div className="flex justify-between text-[#154E35]">
                      <span>{t("cart.discount")}</span>
                      <span className="font-semibold">
                        -₹{summary.discount}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#596B62]">
                    <span>{t("cart.shipping")}</span>
                    <span>
                      {summary.shipping === 0 ? (
                        <strong className="text-[#154E35] uppercase text-xs">{t("cart.free")}</strong>
                      ) : (
                        `₹${summary.shipping}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-[#14382B] pt-3 border-t border-[#E8DFD1]">
                    <span>{t("cart.totalAmount")}</span>
                    <span className="font-serif text-2xl text-[#14382B]">
                      ₹{summary.total}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#596B62] -mt-1">
                    {t("cart.taxNote")}
                  </p>
                </div>

                {/* Checkout CTA */}
                <Link href="/checkout" className="block w-full">
                  <Button className="w-full bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold h-12 rounded-2xl shadow-sm hover:shadow-md transition-all text-base flex items-center justify-center gap-2 cursor-pointer">
                    <span>{t("cart.proceedToCheckout")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                {/* Trust Badges */}
                <div className="pt-2 border-t border-[#E8DFD1]/60 space-y-2 text-xs text-[#596B62]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#154E35]" />
                    <span>{t("cart.safeOrder")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#8C651A]" />
                    <span>{t("cart.dispatchedFrom")}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
