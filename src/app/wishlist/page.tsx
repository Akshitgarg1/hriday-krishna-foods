"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

export default function WishlistPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

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

  const isEmpty = items.length === 0;

  const handleMoveToCart = (product: (typeof items)[0]) => {
    // Add default variant (first in stock)
    const variant = product.variants.find((v) => v.inStock) || product.variants[0];
    addItem(product, variant, 1);
    removeItem(product.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD1] mb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B]">
              {t("wishlist.title")}
            </h1>
            <p className="text-xs sm:text-sm text-[#596B62] mt-1">
              {isEmpty
                ? t("wishlist.emptyTitle")
                : `${items.length} ${t("nav.wishlist")}`}
            </p>
          </div>

          {!isEmpty && (
            <button
              type="button"
              onClick={clearWishlist}
              className="text-xs text-rose-600 hover:text-rose-800 font-semibold underline underline-offset-4 cursor-pointer"
            >
              {t("wishlist.clearWishlist")}
            </button>
          )}
        </div>

        {isEmpty ? (
          <div className="py-20 text-center max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#FAF4E6] border border-[#E3CE9B] flex items-center justify-center mx-auto mb-6 text-[#8C651A]">
              <Heart className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#14382B] mb-2">
              {t("wishlist.emptyTitle")}
            </h2>
            <p className="text-sm text-[#596B62] mb-8 leading-relaxed">
              {t("wishlist.emptyDesc")}
            </p>
            <Link href="/shop">
              <Button className="bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold px-8 py-3 rounded-full cursor-pointer">
                <span>{t("wishlist.exploreMakhana")}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((product) => {
              const defaultVariant =
                product.variants.find((v) => v.inStock) || product.variants[0];

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl p-5 border border-[#E8DFD1] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF7F2] mb-4">
                      <Image
                        src={product.images.card}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <Badge variant="gold" className="absolute top-3 left-3 text-[10px]">
                        {product.grade}
                      </Badge>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        aria-label="Remove from wishlist"
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#596B62] hover:text-rose-600 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <Link href={`/shop/${product.slug}`} className="hover:underline">
                      <h3 className="font-serif text-xl font-bold text-[#14382B]">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#596B62] mt-1 line-clamp-2">
                      {product.tagline}
                    </p>

                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="font-serif text-xl font-bold text-[#14382B]">
                        {t("wishlist.startingAt")} ₹{defaultVariant.price}
                      </span>
                      <span className="text-xs text-neutral-400 line-through">
                        ₹{defaultVariant.mrp}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8DFD1]/60 flex gap-2">
                    <Button
                      type="button"
                      onClick={() => handleMoveToCart(product)}
                      className="flex-1 bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold text-xs py-2.5 rounded-xl cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4 mr-1.5" />
                      <span>{t("wishlist.moveToCart")}</span>
                    </Button>

                    <Link href={`/shop/${product.slug}`}>
                      <Button variant="outline" className="border-[#14382B] text-[#14382B] text-xs py-2.5 rounded-xl">
                        {t("product.viewProduct")}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
