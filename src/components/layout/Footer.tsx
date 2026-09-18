"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  Heart,
  Truck,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0F2A20] text-[#FAF7F2] border-t border-[#1C4535]">
      {/* Top Value Badges Strip */}
      <div className="border-b border-[#1C4535] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#14382B] flex items-center justify-center text-[#C59B4B] shrink-0 border border-[#C59B4B]/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#FAF7F2]">{t("footer.heartOfBihar")}</h4>
                <p className="text-xs text-[#FAF7F2]/60">{t("footer.pureNativeLotus")}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#14382B] flex items-center justify-center text-[#C59B4B] shrink-0 border border-[#C59B4B]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#FAF7F2]">{t("footer.fssaiCertified")}</h4>
                <p className="text-xs text-[#FAF7F2]/60">{t("common.fssaiLic")}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#14382B] flex items-center justify-center text-[#C59B4B] shrink-0 border border-[#C59B4B]/30">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#FAF7F2]">{t("footer.farmerDirectTrade")}</h4>
                <p className="text-xs text-[#FAF7F2]/60">{t("footer.sitamarhiHarvesters")}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#14382B] flex items-center justify-center text-[#C59B4B] shrink-0 border border-[#C59B4B]/30">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#FAF7F2]">{t("footer.freeShipping")}</h4>
                <p className="text-xs text-[#FAF7F2]/60">{t("footer.panIndiaReliable")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info & Mission (Col 1 - 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#14382B] flex items-center justify-center text-[#C59B4B] ring-1 ring-[#C59B4B]/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="w-5 h-5 text-[#C59B4B]"
                >
                  <path d="M12 3c-1.5 3-4 6-4 10 0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2.5-7-4-10z" />
                  <path d="M12 9c-1 2-2 4-2 6" />
                  <path d="M12 9c1 2 2 4 2 6" />
                  <circle cx="12" cy="11" r="1.5" fill="#C59B4B" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-[#FAF7F2]">
                  HRIDAY KRISHNA
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C59B4B] font-bold">
                  FOODS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed pr-4">
              <strong>ह्रदय कृष्णा मखाना उद्योग</strong> — {t("footer.aboutText")}
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#14382B] hover:bg-[#C59B4B] hover:text-[#121915] flex items-center justify-center text-[#FAF7F2] transition-colors border border-[#1C4535]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#14382B] hover:bg-[#C59B4B] hover:text-[#121915] flex items-center justify-center text-[#FAF7F2] transition-colors border border-[#1C4535]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://wa.me/917654007494"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#14382B] hover:bg-[#25D366] hover:text-[#121915] flex items-center justify-center text-[#FAF7F2] transition-colors border border-[#1C4535]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Shop Links (Col 5 - 6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4B] font-bold">
              {t("footer.shopRawMakhana")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF7F2]/75">
              <li>
                <Link href="/shop/raw-makhana" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.raw100g")}
                </Link>
              </li>
              <li>
                <Link href="/shop/raw-makhana" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.raw200g")}
                </Link>
              </li>
              <li>
                <Link href="/shop/raw-makhana" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.raw250g")}
                </Link>
              </li>
              <li>
                <Link href="/shop/raw-makhana" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.raw500g")}
                </Link>
              </li>
              <li>
                <Link href="/shop/raw-makhana" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.megaSaver1kg")}
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#C59B4B] transition-colors font-semibold text-[#C59B4B]">
                  {t("footer.viewAllPacks")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer & Company (Col 7 - 8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4B] font-bold">
              {t("footer.companyHelp")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF7F2]/75">
              <li>
                <Link href="/about" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.aboutOurHeritage")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.faqLink")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.contactSupport")}
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.myAccountLink")}
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.trackOrdersLink")}
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-[#C59B4B] transition-colors">
                  {t("footer.savedWishlistLink")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information (Col 9 - 12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4B] font-bold">
              {t("footer.manufacturerHelpline")}
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF7F2]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B4B] shrink-0 mt-0.5" />
                <span>
                  <strong>{t("common.brandName")}</strong><br />
                  Baligarh, Runnisaidpur, Sitamarhi, Bihar – 843328
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59B4B] shrink-0" />
                <a
                  href="tel:7654007494"
                  className="hover:text-[#C59B4B] transition-colors font-semibold"
                >
                  {t("footer.directHelpline")}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B4B] shrink-0" />
                <a
                  href="mailto:care@hridaykrishnafoods.com"
                  className="hover:text-[#C59B4B] transition-colors"
                >
                  care@hridaykrishnafoods.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#C59B4B] block font-semibold">
                {t("common.fssaiLic")}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Policy Bar */}
        <div className="mt-12 pt-6 border-t border-[#1C4535] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <div>
            {t("footer.copyright", { year: String(currentYear) })}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-[#FAF7F2] transition-colors">
              {t("footer.privacy")}
            </Link>
            <span className="text-[#1C4535]">•</span>
            <Link href="/terms" className="hover:text-[#FAF7F2] transition-colors">
              {t("footer.terms")}
            </Link>
            <span className="text-[#1C4535]">•</span>
            <Link href="/shipping-policy" className="hover:text-[#FAF7F2] transition-colors">
              {t("footer.shipping")}
            </Link>
            <span className="text-[#1C4535]">•</span>
            <Link href="/refund-policy" className="hover:text-[#FAF7F2] transition-colors">
              {t("footer.refund")}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
