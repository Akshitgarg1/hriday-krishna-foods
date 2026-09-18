"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useTranslation } from "@/lib/i18n";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { t } = useTranslation();
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.grade.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q)
        );
      })
    : PRODUCTS;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8DFD1] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[#E8DFD1]">
          <Search className="w-5 h-5 text-[#8C651A] shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("nav.searchPlaceholder")}
            className="flex-1 bg-transparent text-sm sm:text-base text-[#14382B] placeholder:text-[#596B62]/60 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs text-[#596B62] hover:text-[#14382B]"
            >
              {t("product.clearSearch")}
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 rounded-full hover:bg-[#FAF7F2] text-[#596B62] hover:text-[#14382B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#596B62] px-2">
            {query ? t("product.searchResults", { count: String(results.length) }) : t("product.featuredProducts")}
          </div>

          {results.length > 0 ? (
            results.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                onClick={onClose}
                className="flex items-center gap-4 p-3 rounded-2xl border border-[#E8DFD1]/60 hover:border-[#14382B] hover:bg-[#FAF7F2] transition-all group"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-[#E8DFD1]">
                  <Image
                    src={product.images.card}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#8C651A] bg-[#FAF4E6] px-2 py-0.5 rounded-full border border-[#E3CE9B]">
                      {product.grade}
                    </span>
                    <span className="text-[11px] text-[#596B62]">
                      {product.origin}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#14382B] text-base truncate mt-0.5">
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#596B62] truncate">
                    {t("product.searchFrom", { price: String(product.variants[0].price) })}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#596B62] group-hover:text-[#14382B] group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))
          ) : (
            <div className="text-center py-10 text-sm text-[#596B62]">
              {t("product.noResults", { query })}
            </div>
          )}

          {/* Popular Search Tags */}
          <div className="pt-4 border-t border-[#E8DFD1]/60 px-2">
            <div className="text-[11px] font-bold text-[#596B62] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
              {t("product.popularSearches")}
            </div>
            <div className="flex flex-wrap gap-2">
              {["5+ Sut Raw Makhana", "250g Pack", "500g Best Value", "1kg Mega Saver", "Bihar Origin"].map(
                (tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag.split(" ")[0])}
                    className="text-xs bg-[#FAF7F2] hover:bg-[#EBF3EE] text-[#14382B] px-3 py-1.5 rounded-full border border-[#E8DFD1] transition-colors"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
