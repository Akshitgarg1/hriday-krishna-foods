"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

export default function RegisterPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const registerSchema = React.useMemo(() => {
    return z.object({
      fullName: z.string().min(3, t("validation.nameMin")),
      email: z.string().email(t("validation.emailInvalid")),
      phone: z.string().regex(/^[6-9]\d{9}$/, t("validation.phoneInvalid")),
    });
  }, [t]);

  type RegisterFormData = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/account");
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFD1] shadow-xl">
          <div className="text-center mb-8">
            <Badge variant="gold" className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              {t("register.badge")}
            </Badge>
            <h1 className="font-serif text-3xl font-bold text-[#14382B]">
              {t("register.heading")}
            </h1>
            <p className="text-xs sm:text-sm text-[#596B62] mt-1">
              {t("register.subheading")}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                {t("register.fullName")}
              </label>
              <input
                type="text"
                {...register("fullName")}
                placeholder={t("register.namePlaceholder")}
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                {t("register.email")}
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder={t("register.emailPlaceholder")}
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
              />
              {errors.email && (
                <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                {t("register.mobile")}
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-xs bg-[#FAF7F2] border border-r-0 border-[#E8DFD1] rounded-l-xl text-[#14382B] font-semibold">
                  +91
                </span>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder={t("register.mobilePlaceholder")}
                  className="w-full px-4 py-2.5 text-sm rounded-r-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold h-11 rounded-xl text-sm mt-2"
            >
              {isSubmitting ? t("register.creating") : t("register.createAccount")}
            </Button>

            <div className="text-center pt-2">
              <p className="text-xs text-[#596B62]">
                {t("register.alreadyHave")}{" "}
                <Link href="/login" className="text-[#14382B] font-bold underline">
                  {t("register.loginLink")}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
