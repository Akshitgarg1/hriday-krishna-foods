"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { MOCK_ORDERS } from "@/data/orders";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

export default function OrdersPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD1] mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#596B62] mb-1">
              <Link href="/account" className="hover:text-[#14382B] flex items-center gap-1 font-semibold">
                <ArrowLeft className="w-3.5 h-3.5" />
                {t("orders.backToAccount")}
              </Link>
              <span>•</span>
              <span>{t("orders.title")}</span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#14382B]">
              {t("orders.title")} ({MOCK_ORDERS.length})
            </h1>
          </div>

          <Link href="/shop">
            <Button size="sm" className="bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2]">
              {t("orders.orderAgain")}
            </Button>
          </Link>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {MOCK_ORDERS.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-xs space-y-5"
            >
              {/* Order Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8DFD1]/60 text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-sm text-[#14382B]">
                    {t("orders.orderHash", { id: order.id })}
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="text-[#596B62]">
                    {t("orders.placedOn", { date: order.createdAt })}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 font-bold text-xs text-[#154E35] bg-[#EBF3EE] px-3 py-1 rounded-full border border-[#C6DFC9]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {order.status}
                  </span>
                  {order.trackingNumber && (
                    <span className="text-[11px] text-[#596B62] font-mono bg-[#FAF7F2] px-2 py-1 rounded-md border border-[#E8DFD1]">
                      {t("orders.tracking", { num: order.trackingNumber })}
                    </span>
                  )}
                </div>
              </div>

              {/* Items in this order */}
              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-[#E8DFD1]">
                      <Image
                        src={item.image}
                        alt={item.productName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-base text-[#14382B] truncate">
                        {item.productName}
                      </h4>
                      <p className="text-xs text-[#596B62] mt-0.5">
                        {item.weight} • {t("product.quantity")}: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right font-bold text-sm text-[#14382B]">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Address & Summary */}
              <div className="pt-4 border-t border-[#E8DFD1]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#596B62]">
                <div>
                  <strong>{t("orders.deliveredTo")}:</strong> {order.shippingAddress.addressLine1}, {order.shippingAddress.city}, {order.shippingAddress.pincode}
                </div>
                <div className="text-right">
                  <span>{t("orders.paidVia")} <strong>{order.paymentMethod.toUpperCase()}</strong>: </span>
                  <span className="font-serif font-bold text-base text-[#14382B] ml-1">
                    ₹{order.total}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
