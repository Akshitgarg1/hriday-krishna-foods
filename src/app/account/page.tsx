"use client";

import * as React from "react";
import Link from "next/link";
import {
  Package,
  Heart,
  MapPin,
  Phone,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MOCK_ORDERS } from "@/data/orders";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useTranslation } from "@/lib/i18n";

export default function AccountPage() {
  const { t } = useTranslation();
  const wishlistCount = useWishlistStore((state) => state.items.length);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#14382B] text-[#C59B4B] flex items-center justify-center font-serif text-2xl font-bold shadow-xs">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#14382B]">
                  Akshit Sharma
                </h1>
                <Badge variant="gold" className="text-[10px]">
                  {t("account.verifiedMember")}
                </Badge>
              </div>
              <p className="text-xs text-[#596B62] mt-0.5">
                akshit@example.com • +91 9876543210
              </p>
            </div>
          </div>

          <Link href="/login">
            <Button variant="outline" size="sm" className="border-[#E8DFD1] text-[#596B62] hover:text-rose-600">
              <LogOut className="w-4 h-4 mr-1.5" />
              <span>{t("account.logOut")}</span>
            </Button>
          </Link>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Card 1: Orders */}
          <Link
            href="/orders"
            className="bg-white rounded-3xl p-6 border border-[#E8DFD1] shadow-xs hover:border-[#14382B] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#154E35] flex items-center justify-center mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14382B] group-hover:text-[#0D261C]">
                {t("account.ordersTitle")}
              </h3>
              <p className="text-xs text-[#596B62] mt-1">
                {t("account.ordersDesc")}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between text-xs font-semibold text-[#14382B]">
              <span>{t("orders.viewAllOrders")}</span>
              <ChevronRight className="w-4 h-4 text-[#8C651A] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Quick Card 2: Wishlist */}
          <Link
            href="/wishlist"
            className="bg-white rounded-3xl p-6 border border-[#E8DFD1] shadow-xs hover:border-[#14382B] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] text-[#8C651A] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14382B] group-hover:text-[#0D261C]">
                {t("account.wishlistTitle")}
              </h3>
              <p className="text-xs text-[#596B62] mt-1">
                {t("account.wishlistDesc")} ({wishlistCount})
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between text-xs font-semibold text-[#14382B]">
              <span>{t("wishlist.title")}</span>
              <ChevronRight className="w-4 h-4 text-[#8C651A] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Quick Card 3: Support */}
          <Link
            href="/contact"
            className="bg-white rounded-3xl p-6 border border-[#E8DFD1] shadow-xs hover:border-[#14382B] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] text-[#C59B4B] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14382B] group-hover:text-[#0D261C]">
                {t("account.supportTitle")}
              </h3>
              <p className="text-xs text-[#596B62] mt-1">
                {t("account.supportDesc")}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between text-xs font-semibold text-[#14382B]">
              <span>{t("nav.contact")}</span>
              <ChevronRight className="w-4 h-4 text-[#8C651A] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Saved Addresses Section */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-bold text-[#14382B] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#8C651A]" />
              <span>{t("account.defaultShippingAddress")}</span>
            </h2>
            <Badge variant="organic" className="text-[10px]">
              {t("account.primary")}
            </Badge>
          </div>

          <div className="text-sm text-[#596B62] space-y-1">
            <div className="font-bold text-[#14382B]">Akshit Sharma</div>
            <div>Flat 402, Green Meadows, Sector 48</div>
            <div>Near Central Park</div>
            <div>Gurugram, Haryana – 122018</div>
            <div>Mobile: +91 9876543210</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
