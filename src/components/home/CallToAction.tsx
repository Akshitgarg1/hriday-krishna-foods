"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export function CallToAction() {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 bg-[#14382B] text-white relative overflow-hidden">
      {/* Subtle organic background patterns */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C59B4B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#204C3B] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FAF4E6]/10 text-[#C59B4B] border border-[#C59B4B]/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {t("cta.badge")}
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
            {t("cta.heading")}
          </h2>

          <p className="text-base sm:text-lg text-[#FAF7F2]/80 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subheading")}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="#product" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#C59B4B] hover:bg-[#B08638] text-[#121915] font-bold shadow-lg hover:shadow-xl group"
              >
                <span>{t("cta.shopButton")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:7654007494" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#C59B4B]" />
                <span>{t("cta.callButton")}</span>
              </Button>
            </a>
          </div>

          {/* First Order Perk Email Box */}
          <div className="pt-8 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 shadow-xl text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C59B4B] mb-2 uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>{t("cta.emailBadge")}</span>
              </div>
              <p className="text-xs text-[#FAF7F2]/80 mb-3">
                {t("cta.emailDesc")}
              </p>

              {isSubmitted ? (
                <div className="p-3 bg-[#14382B] border border-[#C59B4B]/50 rounded-xl text-xs text-[#C59B4B] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C59B4B]" />
                  <span>{t("cta.couponRevealed")}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("cta.emailPlaceholder")}
                    required
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/90 text-[#14382B] placeholder:text-neutral-500 text-xs focus:outline-none focus:ring-2 focus:ring-[#C59B4B]"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-[#C59B4B] hover:bg-[#B08638] text-[#121915] font-bold text-xs shrink-0"
                  >
                    {t("cta.claim10")}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-[#FAF7F2]/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C59B4B]" />
              {t("cta.fssai")}
            </span>
            <span className="text-[#FAF7F2]/30">•</span>
            <span>{t("cta.madeInBihar")}</span>
            <span className="text-[#FAF7F2]/30">•</span>
            <span>{t("cta.directFarm")}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
