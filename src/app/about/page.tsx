"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Leaf, ShieldCheck, Heart, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-[#14382B] text-[#FAF7F2] py-20 md:py-28">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#C59B4B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#204C3B] rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {t("about.badge")}
            </Badge>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
              {t("about.heading")}
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-[#FAF7F2]/80 leading-relaxed">
              {t("about.subheading")}
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#C59B4B] font-semibold">
              <MapPin className="w-4 h-4" />
              <span>{t("brandStory.fromHeartSub")}</span>
            </div>
          </div>
        </section>

        {/* Narrative Section with Image */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-[#E8DFD1]">
              <Image
                src="/images/hriday-krishna-hero.jpg"
                alt="Traditional brass bowl of raw makhana from Sitamarhi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#C59B4B] font-bold block">
                  {t("footer.pureNativeLotus")}
                </span>
                <p className="text-sm font-medium mt-1">
                  {t("brandStory.wetlandCaption")}
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="organic" className="px-3 py-1 text-xs font-bold uppercase">
                {t("about.promiseBadge")}
              </Badge>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B] leading-snug">
                {t("about.promiseHeading")}
              </h2>

              <p className="text-sm sm:text-base text-[#596B62] leading-relaxed">
                {t("whyChooseUs.pillar4Desc")}
              </p>

              <p className="text-sm sm:text-base text-[#596B62] leading-relaxed">
                At <strong>{t("common.brandName")} (ह्रदय कृष्णा मखाना उद्योग)</strong>, {t("brandStory.para1")}
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#E8DFD1] shadow-xs">
                <blockquote className="font-serif italic text-base text-[#14382B]">
                  &ldquo;{t("whyChooseUs.slogan")} {t("whyChooseUs.description")}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Brand Pillars */}
        <section className="bg-white py-16 md:py-24 border-y border-[#E8DFD1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="gold" className="mb-3 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {t("about.pillarsBadge")}
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14382B]">
                {t("about.pillarsHeading")}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: t("whyChooseUs.pillar1Title"),
                  desc: t("whyChooseUs.pillar1Desc"),
                },
                {
                  icon: Leaf,
                  title: t("whyChooseUs.pillar4Title"),
                  desc: t("whyChooseUs.pillar4Desc"),
                },
                {
                  icon: Heart,
                  title: t("brandStory.farmerWelfare"),
                  desc: t("brandStory.farmerWelfareSub"),
                },
                {
                  icon: ShieldCheck,
                  title: t("whyChooseUs.fssaiCertified"),
                  desc: t("common.fssaiLic"),
                },
              ].map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD1] hover:border-[#14382B] transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#14382B] text-[#C59B4B] flex items-center justify-center mb-5 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#14382B] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#596B62] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-[#14382B] text-[#FAF7F2] text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Sparkles className="w-8 h-8 text-[#C59B4B] mx-auto mb-4 animate-pulse" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
              {t("about.ctaHeading")}
            </h2>
            <p className="text-sm sm:text-base text-[#FAF7F2]/80 mb-8 max-w-xl mx-auto">
              {t("about.ctaSubheading")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/shop/raw-makhana">
                <Button className="bg-[#C59B4B] hover:bg-[#B08638] text-[#121915] font-bold px-8 py-3 rounded-full text-base cursor-pointer">
                  <span>{t("hero.ctaPrimary")}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full cursor-pointer">
                  {t("nav.contact")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
