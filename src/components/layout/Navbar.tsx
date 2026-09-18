"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Heart,
  User,
  Search,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  PhoneCall,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useTranslation } from "@/lib/i18n";
import { SearchModal } from "@/components/layout/SearchModal";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const cartTotalCount = useCartStore((state) => state.getTotalCount());
  const wishlistCount = useWishlistStore((state) => state.items.length);
  const { language, setLanguage } = useLanguageStore();
  const { t } = useTranslation();

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top Announcement Bar */}
        <div className="bg-[#14382B] text-[#FAF7F2] text-xs py-2 px-4 text-center font-medium border-b border-[#204C3B] flex items-center justify-center gap-2 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B4B] animate-pulse" />
          <span>
            {t("nav.announcement")}
          </span>
        </div>

        {/* Main Navigation Bar */}
        <nav
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD1] py-3"
              : "bg-[#FAF7F2] border-b border-[#E8DFD1]/60 py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group transition-transform active:scale-95 shrink-0"
            >
              <div className="w-10 h-10 rounded-full bg-[#14382B] flex items-center justify-center text-[#C59B4B] shadow-xs ring-2 ring-[#C59B4B]/40 group-hover:ring-[#C59B4B] transition-all">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="w-6 h-6 text-[#C59B4B]"
                >
                  <path d="M12 3c-1.5 3-4 6-4 10 0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2.5-7-4-10z" />
                  <path d="M12 9c-1 2-2 4-2 6" />
                  <path d="M12 9c1 2 2 4 2 6" />
                  <circle cx="12" cy="11" r="1.5" fill="#C59B4B" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#14382B] group-hover:text-[#0D261C] transition-colors leading-tight">
                  HRIDAY KRISHNA
                </span>
                <div className="flex items-center gap-1.5 -mt-0.5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C651A] font-bold">
                    FOODS
                  </span>
                  <span className="text-[9px] text-[#596B62] hidden sm:inline">
                    • {t("common.brandSubtitle")}
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              <Link
                href="/"
                className={`text-sm font-semibold transition-colors ${
                  isActive("/") && pathname === "/"
                    ? "text-[#14382B] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#14382B] after:rounded-full"
                    : "text-[#596B62] hover:text-[#14382B]"
                }`}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/shop"
                className={`text-sm font-semibold transition-colors ${
                  isActive("/shop")
                    ? "text-[#14382B] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#14382B] after:rounded-full"
                    : "text-[#596B62] hover:text-[#14382B]"
                }`}
              >
                {t("nav.shop")}
              </Link>
              <Link
                href="/about"
                className={`text-sm font-semibold transition-colors ${
                  isActive("/about")
                    ? "text-[#14382B] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#14382B] after:rounded-full"
                    : "text-[#596B62] hover:text-[#14382B]"
                }`}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-semibold transition-colors ${
                  isActive("/contact")
                    ? "text-[#14382B] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#14382B] after:rounded-full"
                    : "text-[#596B62] hover:text-[#14382B]"
                }`}
              >
                {t("nav.contact")}
              </Link>
              <Link
                href="/faq"
                className={`text-sm font-semibold transition-colors ${
                  isActive("/faq")
                    ? "text-[#14382B] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#14382B] after:rounded-full"
                    : "text-[#596B62] hover:text-[#14382B]"
                }`}
              >
                {t("nav.faq")}
              </Link>
            </div>

            {/* Right Action Icons & CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Toggle — Desktop */}
              {mounted && (
                <div className="hidden sm:flex items-center gap-1 bg-[#FAF7F2] border border-[#E8DFD1] rounded-full p-0.5 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    aria-label={t("nav.switchToEnglish")}
                    className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                      language === "en"
                        ? "bg-[#14382B] text-[#FAF7F2]"
                        : "text-[#596B62] hover:text-[#14382B]"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("hi")}
                    aria-label={t("nav.switchToHindi")}
                    className={`px-2.5 py-1 rounded-full transition-all duration-200 font-medium ${
                      language === "hi"
                        ? "bg-[#14382B] text-[#FAF7F2]"
                        : "text-[#596B62] hover:text-[#14382B]"
                    }`}
                  >
                    हि
                  </button>
                </div>
              )}

              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label={t("nav.search")}
                className="p-2 rounded-full text-[#14382B] hover:bg-[#FAF4E6] transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                href="/wishlist"
                aria-label={t("nav.wishlist")}
                className="p-2 rounded-full text-[#14382B] hover:bg-[#FAF4E6] transition-colors relative"
              >
                <Heart className="w-5 h-5" />
                {mounted && wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] text-[10px] font-bold bg-[#C59B4B] text-[#121915] rounded-full flex items-center justify-center px-1">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Account Link */}
              <Link
                href="/account"
                aria-label={t("nav.myAccount")}
                className="p-2 rounded-full text-[#14382B] hover:bg-[#FAF4E6] transition-colors hidden sm:inline-flex"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Cart Icon */}
              <Link
                href="/cart"
                aria-label={t("nav.cart")}
                className="p-2 rounded-full text-[#14382B] hover:bg-[#FAF4E6] transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {mounted && cartTotalCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] text-[10px] font-bold bg-[#14382B] text-white rounded-full flex items-center justify-center px-1 animate-scale-in">
                    {cartTotalCount}
                  </span>
                )}
              </Link>

              {/* Desktop CTA Button */}
              <Link href="/shop/raw-makhana" className="hidden sm:inline-block">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold"
                >
                  {t("nav.orderRawMakhana")}
                </Button>
              </Link>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? t("nav.close") : t("nav.menu")}
                className="lg:hidden p-2 rounded-lg text-[#14382B] hover:bg-[#14382B]/10 transition-colors focus-visible:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-x-0 top-[96px] bg-[#FAF7F2] border-b border-[#E8DFD1] shadow-2xl p-6 transition-all animate-in slide-in-from-top-4 duration-200 z-50 max-h-[85vh] overflow-y-auto">
              {/* Quick Search on Mobile */}
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E8DFD1] text-xs text-[#596B62]"
                >
                  <Search className="w-4 h-4 text-[#8C651A]" />
                  <span>{t("nav.searchPlaceholder")}</span>
                </button>
              </div>

              {/* Mobile Language Toggle */}
              {mounted && (
                <div className="mb-4 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-[#8C651A]" />
                  <span className="text-xs text-[#596B62] font-semibold">Language:</span>
                  <div className="flex items-center gap-1 bg-white border border-[#E8DFD1] rounded-full p-0.5 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`px-3 py-1 rounded-full transition-all duration-200 ${
                        language === "en"
                          ? "bg-[#14382B] text-[#FAF7F2]"
                          : "text-[#596B62] hover:text-[#14382B]"
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("hi")}
                      className={`px-3 py-1 rounded-full transition-all duration-200 ${
                        language === "hi"
                          ? "bg-[#14382B] text-[#FAF7F2]"
                          : "text-[#596B62] hover:text-[#14382B]"
                      }`}
                    >
                      हिन्दी
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-semibold text-[#14382B] border-b border-[#E8DFD1]/50"
                >
                  <span>{t("nav.home")}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C651A]" />
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-[#14382B] border-b border-[#E8DFD1]/50"
                >
                  <span>{t("nav.shopRawMakhana")}</span>
                  <Badge variant="gold" className="text-[10px]">
                    5+ Sut
                  </Badge>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-[#14382B] border-b border-[#E8DFD1]/50"
                >
                  <span>{t("nav.aboutHridayKrishna")}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C651A]" />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-[#14382B] border-b border-[#E8DFD1]/50"
                >
                  <span>{t("nav.contactSourcing")}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C651A]" />
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-[#14382B] border-b border-[#E8DFD1]/50"
                >
                  <span>{t("nav.faqFull")}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C651A]" />
                </Link>
                <Link
                  href="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-[#14382B] border-b border-[#E8DFD1]/50"
                >
                  <span>{t("nav.myAccountOrders")}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C651A]" />
                </Link>
                <Link
                  href="/wishlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-[#14382B] border-b border-[#E8DFD1]/50"
                >
                  <span>{t("nav.savedItems")}</span>
                  {mounted && wishlistCount > 0 && (
                    <Badge variant="gold" className="text-[10px]">
                      {wishlistCount}
                    </Badge>
                  )}
                </Link>

                <div className="pt-4 mt-2 border-t border-[#E8DFD1] flex flex-col gap-3">
                  <Link
                    href="/shop/raw-makhana"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <Button className="w-full bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold py-3">
                      {t("nav.orderRawMakhana")}
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center gap-2 text-xs text-[#14382B] font-semibold pt-1">
                    <PhoneCall className="w-3.5 h-3.5 text-[#8C651A]" />
                    <span>{t("common.helplineText")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
