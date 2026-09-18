"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

export default function LoginPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [otpSent, setOtpSent] = React.useState(false);
  const [otpValue, setOtpValue] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const phoneSchema = React.useMemo(() => {
    return z.object({
      phone: z
        .string()
        .regex(/^[6-9]\d{9}$/, t("validation.phoneInvalid")),
    });
  }, [t]);

  type PhoneFormData = z.infer<typeof phoneSchema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PhoneFormData>({
    resolver: zodResolver(phoneSchema),
  });

  const enteredPhone = watch("phone");

  const onSubmitPhone = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOtpSent(true);
    }, 500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue.length >= 4) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        router.push("/account");
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFD1] shadow-xl">
          <div className="text-center mb-8">
            <Badge variant="gold" className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              {t("login.badge")}
            </Badge>
            <h1 className="font-serif text-3xl font-bold text-[#14382B]">
              {t("login.heading")}
            </h1>
            <p className="text-xs sm:text-sm text-[#596B62] mt-1">
              {t("login.subheading")}
            </p>
          </div>

          {!otpSent ? (
            <form onSubmit={handleSubmit(onSubmitPhone)} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                  {t("login.mobileLabel")}
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-xs bg-[#FAF7F2] border border-r-0 border-[#E8DFD1] rounded-l-xl text-[#14382B] font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder={t("login.mobilePlaceholder")}
                    className="w-full px-4 py-2.5 text-sm rounded-r-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-rose-600 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold h-11 rounded-xl text-sm"
              >
                {isSubmitting ? t("login.sending") : t("login.sendOtp")}
              </Button>

              <div className="text-center pt-2">
                <p className="text-xs text-[#596B62]">
                  {t("login.noAccount")}{" "}
                  <Link href="/register" className="text-[#14382B] font-bold underline">
                    {t("login.register")}
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <div className="text-center p-3 rounded-2xl bg-[#FAF4E6] border border-[#E3CE9B] text-xs text-[#8C651A]">
                <Sparkles className="w-4 h-4 inline mr-1 text-[#C59B4B]" />
                {t("login.demoNote")}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1 text-center">
                  {t("login.enterOtp")}
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  placeholder="••••••"
                  className="w-full tracking-[0.5em] text-center text-xl font-bold py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                />
              </div>

              <Button
                type="submit"
                disabled={otpValue.length < 4 || isSubmitting}
                className="w-full bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold h-11 rounded-xl text-sm"
              >
                {isSubmitting ? t("login.verifying") : t("login.verifyOtp")}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="text-xs text-[#596B62] underline hover:text-[#14382B]"
                >
                  {t("common.back")}
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-[#E8DFD1]/60 text-center text-[11px] text-[#596B62]">
            Frontend simulation only. No real SMS or backend authentication is connected.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
