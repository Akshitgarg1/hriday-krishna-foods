"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, HeartHandshake, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#F3ECE1]/40 pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E8DFD1]/50">
      {/* Subtle organic decorative background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#14382B]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#C59B4B]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Pills / Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="organic" className="py-1 px-3">
                <Leaf className="w-3.5 h-3.5 text-[#154E35]" />
                {t("hero.natureBadge")}
              </Badge>
              <Badge variant="gold" className="py-1 px-3">
                <Award className="w-3.5 h-3.5 text-[#8C651A]" />
                {t("hero.handpickedBadge")}
              </Badge>
              <span className="hidden sm:inline-flex items-center text-xs font-semibold text-[#8C651A] bg-[#FAF4E6] px-2.5 py-1 rounded-full border border-[#E3CE9B]">
                {t("hero.sloganbadge")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#14382B] leading-[1.15]">
              {t("hero.titlePrefix")}{" "}
              <span className="italic font-normal font-serif text-[#8C651A] underline decoration-[#C59B4B]/40 decoration-wavy decoration-1 underline-offset-8">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.titleSuffix")}
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-lg sm:text-xl text-[#596B62] max-w-2xl font-normal leading-relaxed">
              <strong>{t("common.brandName")}</strong> {t("hero.subheading")}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Link href="#product" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] shadow-md hover:shadow-lg transition-all group"
                >
                  <span>{t("hero.ctaPrimary")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#story" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-[#14382B]/60 text-[#14382B] hover:bg-[#14382B]/5 font-medium"
                >
                  {t("hero.ctaSecondary")}
                </Button>
              </Link>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-6 border-t border-[#E8DFD1] w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#14382B]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#14382B]/10 flex items-center justify-center text-[#14382B] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">{t("hero.trust1Label")}</div>
                  <div className="text-[11px] text-[#596B62]">{t("hero.trust1Sub")}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#14382B]/10 flex items-center justify-center text-[#14382B] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">{t("hero.trust2Label")}</div>
                  <div className="text-[11px] text-[#596B62]">{t("hero.trust2Sub")}</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#C59B4B]/15 flex items-center justify-center text-[#8C651A] shrink-0">
                  <Star className="w-4 h-4 fill-[#C59B4B] text-[#C59B4B]" />
                </div>
                <div>
                  <div className="font-bold">{t("hero.trust3Label")}</div>
                  <div className="text-[11px] text-[#596B62]">{t("hero.trust3Sub")}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#14382B]/20 via-[#C59B4B]/20 to-transparent blur-md -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#FAF7F2] shadow-2xl bg-[#FAF7F2] aspect-[4/3] group">
                <Image
                  src="/images/hriday-krishna-hero.jpg"
                  alt="Hriday Krishna Foods raw makhana in an antique brass bowl with peacock feather and lotus petals"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Floating On-Image Quality Chip */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF4E6] border border-[#E3CE9B] flex items-center justify-center text-[#8C651A] shrink-0 font-serif font-bold text-sm">
                      5+
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14382B]">{t("hero.floatingSignature")}</p>
                      <p className="text-[11px] text-[#596B62]">{t("hero.floatingSub")}</p>
                    </div>
                  </div>
                  <Badge variant="gold" className="text-[10px] uppercase font-bold shrink-0">
                    {t("hero.floatingBadge")}
                  </Badge>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-white rounded-2xl shadow-xl border border-[#E8DFD1] p-3 hidden sm:flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <span className="w-8 h-8 rounded-full bg-[#14382B] text-[#C59B4B] flex items-center justify-center font-serif font-bold text-xs">
                  HK
                </span>
                <div>
                  <div className="text-xs font-bold text-[#14382B]">{t("common.brandName")}</div>
                  <div className="text-[10px] text-[#596B62]">{t("common.origin")}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
