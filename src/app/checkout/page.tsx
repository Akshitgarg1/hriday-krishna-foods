"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Building2,
  Banknote,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

const createCheckoutSchema = (t: (key: string) => string) =>
  z.object({
    fullName: z.string().min(3, t("validation.nameMin")),
    email: z.string().email(t("validation.emailInvalid")),
    phone: z
      .string()
      .regex(/^[6-9]\d{9}$/, t("validation.phoneInvalid")),
    addressLine1: z
      .string()
      .min(5, t("validation.addressMin")),
    landmark: z.string().optional(),
    city: z.string().min(2, t("validation.cityMin")),
    state: z.string().min(2, t("validation.stateMin")),
    pincode: z.string().regex(/^\d{6}$/, t("validation.pincodeInvalid")),
    paymentMethod: z.enum(["upi", "card", "netbanking", "cod"]),
  });

type CheckoutFormData = z.infer<ReturnType<typeof createCheckoutSchema>>;

export default function CheckoutPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [confirmedOrder, setConfirmedOrder] = React.useState<{
    orderId: string;
    customerName: string;
    total: number;
    paymentMethod: string;
  } | null>(null);

  const { items, getSummary, clearCart } = useCartStore();

  const checkoutSchema = React.useMemo(() => createCheckoutSchema(t), [t]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      addressLine1: "",
      landmark: "",
      city: "",
      state: "Bihar",
      pincode: "",
      paymentMethod: "upi",
    },
  });

  const selectedPaymentMethod = watch("paymentMethod");

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
  const isEmpty = items.length === 0 && !confirmedOrder;

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedOrderId = `HKF-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedOrder({
        orderId: generatedOrderId,
        customerName: data.fullName,
        total: summary.total,
        paymentMethod: data.paymentMethod.toUpperCase(),
      });
      clearCart();
      setIsSubmitting(false);
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Order Confirmed Modal / State */}
        {confirmedOrder ? (
          <div className="max-w-2xl mx-auto my-12 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD1] shadow-xl text-center animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-[#EBF3EE] text-[#154E35] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B] bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#E3CE9B]">
              {t("checkout.successBadge")}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B] mt-4 mb-2">
              {t("checkout.thankYou", { name: confirmedOrder.customerName })}
            </h1>

            <p className="text-sm text-[#596B62] max-w-md mx-auto leading-relaxed">
              {t("checkout.successDesc")}
            </p>

            {/* Order Details Card */}
            <div className="mt-8 bg-[#FAF7F2] rounded-2xl p-5 border border-[#E8DFD1] text-left space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-[#596B62]">{t("checkout.orderNumber")}</span>
                <span className="font-bold text-[#14382B] font-mono">
                  {confirmedOrder.orderId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#596B62]">{t("checkout.totalAmountLabel")}</span>
                <span className="font-bold text-[#14382B]">
                  ₹{confirmedOrder.total}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#596B62]">{t("checkout.paymentMode")}</span>
                <span className="font-semibold text-[#14382B]">
                  {confirmedOrder.paymentMethod} {t("checkout.mockVerified")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#596B62]">{t("checkout.estimatedDelivery")}</span>
                <span className="font-semibold text-[#154E35]">
                  {t("checkout.deliveryDays")}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/orders">
                <Button className="w-full sm:w-auto bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold cursor-pointer">
                  {t("checkout.viewInOrders")}
                </Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" className="w-full sm:w-auto border-[#14382B] text-[#14382B] cursor-pointer">
                  {t("checkout.continueShopping")}
                </Button>
              </Link>
            </div>
          </div>
        ) : isEmpty ? (
          /* Empty Cart Guard */
          <div className="py-20 text-center max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#FAF4E6] flex items-center justify-center mx-auto mb-6 text-[#8C651A]">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#14382B] mb-2">
              {t("checkout.emptyCartTitle")}
            </h2>
            <p className="text-sm text-[#596B62] mb-6">
              {t("checkout.emptyCartDesc")}
            </p>
            <Link href="/shop">
              <Button className="bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold cursor-pointer">
                {t("checkout.browseProducts")}
              </Button>
            </Link>
          </div>
        ) : (
          /* Checkout Form */
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs text-[#596B62] mb-6">
              <Link href="/cart" className="hover:text-[#14382B] flex items-center gap-1 font-semibold">
                <ArrowLeft className="w-3.5 h-3.5" />
                {t("checkout.backToCart")}
              </Link>
              <span>•</span>
              <span className="text-[#14382B] font-bold">{t("checkout.title")}</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Form Fields (7 Cols) */}
                <div className="lg:col-span-7 space-y-8">
                  
                  {/* Step 1: Customer Details */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD1] shadow-xs">
                    <h2 className="font-serif text-xl font-bold text-[#14382B] mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#14382B] text-[#FAF7F2] text-xs flex items-center justify-center">
                        1
                      </span>
                      <span>{t("checkout.step1")}</span>
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                          {t("checkout.fullNameRequired")}
                        </label>
                        <input
                          type="text"
                          {...register("fullName")}
                          placeholder={t("checkout.fullNamePlaceholder")}
                          className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-rose-600 mt-1">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                            {t("checkout.emailRequired")}
                          </label>
                          <input
                            type="email"
                            {...register("email")}
                            placeholder={t("checkout.emailPlaceholder")}
                            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                          />
                          {errors.email && (
                            <p className="text-xs text-rose-600 mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                            {t("checkout.mobileRequired")}
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 text-xs bg-[#E8DFD1]/50 border border-r-0 border-[#E8DFD1] rounded-l-xl text-[#14382B] font-semibold">
                              +91
                            </span>
                            <input
                              type="tel"
                              {...register("phone")}
                              placeholder={t("checkout.mobilePlaceholder")}
                              className="w-full px-4 py-2.5 text-sm rounded-r-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-xs text-rose-600 mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Delivery Address */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD1] shadow-xs">
                    <h2 className="font-serif text-xl font-bold text-[#14382B] mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#14382B] text-[#FAF7F2] text-xs flex items-center justify-center">
                        2
                      </span>
                      <span>{t("checkout.step2")}</span>
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                          {t("checkout.streetRequired")}
                        </label>
                        <input
                          type="text"
                          {...register("addressLine1")}
                          placeholder={t("checkout.streetPlaceholder")}
                          className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                        />
                        {errors.addressLine1 && (
                          <p className="text-xs text-rose-600 mt-1">
                            {errors.addressLine1.message}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                            {t("checkout.landmark")}
                          </label>
                          <input
                            type="text"
                            {...register("landmark")}
                            placeholder={t("checkout.landmarkPlaceholder")}
                            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                            {t("checkout.cityRequired")}
                          </label>
                          <input
                            type="text"
                            {...register("city")}
                            placeholder={t("checkout.cityPlaceholder")}
                            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                          />
                          {errors.city && (
                            <p className="text-xs text-rose-600 mt-1">
                              {errors.city.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                            {t("checkout.stateRequired")}
                          </label>
                          <input
                            type="text"
                            {...register("state")}
                            placeholder="e.g. Bihar"
                            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                          />
                          {errors.state && (
                            <p className="text-xs text-rose-600 mt-1">
                              {errors.state.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                            {t("checkout.pincodeRequired")}
                          </label>
                          <input
                            type="text"
                            maxLength={6}
                            {...register("pincode")}
                            placeholder={t("checkout.pincodePlaceholder")}
                            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                          />
                          {errors.pincode && (
                            <p className="text-xs text-rose-600 mt-1">
                              {errors.pincode.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Payment Method Selection */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD1] shadow-xs">
                    <h2 className="font-serif text-xl font-bold text-[#14382B] mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#14382B] text-[#FAF7F2] text-xs flex items-center justify-center">
                        3
                      </span>
                      <span>{t("checkout.step3")}</span>
                    </h2>
                    <p className="text-xs text-[#596B62] mb-5">
                      {t("checkout.demoNotice")}
                    </p>

                    <div className="space-y-3">
                      {/* UPI */}
                      <label
                        onClick={() => setValue("paymentMethod", "upi")}
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          selectedPaymentMethod === "upi"
                            ? "border-[#14382B] bg-[#EBF3EE]"
                            : "border-[#E8DFD1] hover:border-[#14382B]/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            value="upi"
                            {...register("paymentMethod")}
                            className="text-[#14382B]"
                          />
                          <div>
                            <span className="text-sm font-bold text-[#14382B] block">
                              {t("checkout.upi")}
                            </span>
                            <span className="text-xs text-[#596B62]">
                              {t("checkout.upiSub")}
                            </span>
                          </div>
                        </div>
                        <QrCode className="w-5 h-5 text-[#8C651A]" />
                      </label>

                      {/* Card */}
                      <label
                        onClick={() => setValue("paymentMethod", "card")}
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          selectedPaymentMethod === "card"
                            ? "border-[#14382B] bg-[#EBF3EE]"
                            : "border-[#E8DFD1] hover:border-[#14382B]/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            value="card"
                            {...register("paymentMethod")}
                            className="text-[#14382B]"
                          />
                          <div>
                            <span className="text-sm font-bold text-[#14382B] block">
                              {t("checkout.card")}
                            </span>
                            <span className="text-xs text-[#596B62]">
                              {t("checkout.cardSub")}
                            </span>
                          </div>
                        </div>
                        <CreditCard className="w-5 h-5 text-[#8C651A]" />
                      </label>

                      {/* Net Banking */}
                      <label
                        onClick={() => setValue("paymentMethod", "netbanking")}
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          selectedPaymentMethod === "netbanking"
                            ? "border-[#14382B] bg-[#EBF3EE]"
                            : "border-[#E8DFD1] hover:border-[#14382B]/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            value="netbanking"
                            {...register("paymentMethod")}
                            className="text-[#14382B]"
                          />
                          <div>
                            <span className="text-sm font-bold text-[#14382B] block">
                              {t("checkout.netbanking")}
                            </span>
                            <span className="text-xs text-[#596B62]">
                              {t("checkout.netbankingSub")}
                            </span>
                          </div>
                        </div>
                        <Building2 className="w-5 h-5 text-[#8C651A]" />
                      </label>

                      {/* COD */}
                      <label
                        onClick={() => setValue("paymentMethod", "cod")}
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          selectedPaymentMethod === "cod"
                            ? "border-[#14382B] bg-[#EBF3EE]"
                            : "border-[#E8DFD1] hover:border-[#14382B]/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            value="cod"
                            {...register("paymentMethod")}
                            className="text-[#14382B]"
                          />
                          <div>
                            <span className="text-sm font-bold text-[#14382B] block">
                              {t("checkout.cod")}
                            </span>
                            <span className="text-xs text-[#596B62]">
                              {t("checkout.codSub")}
                            </span>
                          </div>
                        </div>
                        <Banknote className="w-5 h-5 text-[#8C651A]" />
                      </label>
                    </div>
                  </div>

                </div>

                {/* Right Column: Order Summary (5 Cols) */}
                <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
                  <div className="bg-white rounded-3xl p-6 border border-[#E8DFD1] shadow-xs space-y-5">
                    <h3 className="font-serif text-xl font-bold text-[#14382B] pb-3 border-b border-[#E8DFD1]">
                      {t("checkout.itemsInOrder", { count: String(items.length) })}
                    </h3>

                    {/* Items miniature list */}
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 text-xs">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-[#E8DFD1]">
                            <Image
                              src={item.product.images.card}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-[#14382B] truncate block">
                              {item.product.name}
                            </span>
                            <span className="text-[#596B62]">
                              {item.variant.weight} × {item.quantity}
                            </span>
                          </div>
                          <span className="font-bold text-[#14382B]">
                            ₹{item.variant.price * item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-2 text-xs pt-3 border-t border-[#E8DFD1]">
                      <div className="flex justify-between text-[#596B62]">
                        <span>{t("checkout.subtotal")}</span>
                        <span className="font-semibold text-[#14382B]">
                          ₹{summary.subtotal}
                        </span>
                      </div>
                      {summary.discount > 0 && (
                        <div className="flex justify-between text-[#154E35]">
                          <span>{t("checkout.discount")}</span>
                          <span className="font-semibold">
                            -₹{summary.discount}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-[#596B62]">
                        <span>{t("checkout.shipping")}</span>
                        <span>
                          {summary.shipping === 0 ? (
                            <strong className="text-[#154E35]">{t("cart.free")}</strong>
                          ) : (
                            `₹${summary.shipping}`
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-[#14382B] pt-2 border-t border-[#E8DFD1]">
                        <span>{t("checkout.grandTotal")}</span>
                        <span className="font-serif text-2xl text-[#14382B]">
                          ₹{summary.total}
                        </span>
                      </div>
                    </div>

                    {/* Place Order CTA Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold h-12 rounded-2xl shadow-md transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-[#C59B4B]" />
                          <span>{t("checkout.placeOrder", { amount: String(summary.total) })}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-center text-[#596B62]">
                      {t("checkout.agreeTerms")}
                    </p>

                    {/* Trust assurances */}
                    <div className="pt-3 border-t border-[#E8DFD1] space-y-2 text-xs text-[#596B62]">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#154E35]" />
                        <span>{t("checkout.fssaiPacking")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#8C651A]" />
                        <span>{t("checkout.contactlessDelivery")}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
