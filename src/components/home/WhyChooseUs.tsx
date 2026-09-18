"use client";

import * as React from "react";
import { CheckCircle, ShieldCheck, SunMedium, Layers, HeartPulse, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";

export function WhyChooseUs() {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: ShieldCheck,
      tag: t("whyChooseUs.pillar1Tag"),
      title: t("whyChooseUs.pillar1Title"),
      description: t("whyChooseUs.pillar1Desc"),
      stat: t("whyChooseUs.pillar1Stat"),
      statLabel: t("whyChooseUs.pillar1StatLabel"),
      badgeColor: "text-[#8C651A] bg-[#FAF4E6]",
    },
    {
      icon: SunMedium,
      tag: t("whyChooseUs.pillar2Tag"),
      title: t("whyChooseUs.pillar2Title"),
      description: t("whyChooseUs.pillar2Desc"),
      stat: t("whyChooseUs.pillar2Stat"),
      statLabel: t("whyChooseUs.pillar2StatLabel"),
      badgeColor: "text-[#154E35] bg-[#EBF3EE]",
    },
    {
      icon: Layers,
      tag: t("whyChooseUs.pillar3Tag"),
      title: t("whyChooseUs.pillar3Title"),
      description: t("whyChooseUs.pillar3Desc"),
      stat: t("whyChooseUs.pillar3Stat"),
      statLabel: t("whyChooseUs.pillar3StatLabel"),
      badgeColor: "text-[#14382B] bg-[#F3ECE1]",
    },
    {
      icon: Sparkles,
      tag: t("whyChooseUs.pillar4Tag"),
      title: t("whyChooseUs.pillar4Title"),
      description: t("whyChooseUs.pillar4Desc"),
      stat: t("whyChooseUs.pillar4Stat"),
      statLabel: t("whyChooseUs.pillar4StatLabel"),
      badgeColor: "text-[#8C651A] bg-[#FAF4E6]",
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="organic" className="mb-3 px-3 py-1">
            <HeartPulse className="w-3.5 h-3.5 text-[#154E35]" />
            {t("whyChooseUs.promiseBadge")}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14382B] tracking-tight">
            {t("whyChooseUs.heading")}
          </h2>
          <p className="mt-2 text-base font-serif italic text-[#8C651A]">
            &ldquo;{t("whyChooseUs.slogan")}&rdquo;
          </p>
          <p className="mt-3 text-base sm:text-lg text-[#596B62]">
            {t("whyChooseUs.description")}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#E8DFD1] hover:border-[#C59B4B]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] flex items-center justify-center text-[#14382B] group-hover:bg-[#14382B] group-hover:text-[#FAF7F2] transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${pillar.badgeColor}`}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-[#14382B] mb-2.5 group-hover:text-[#0D261C]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#596B62] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Metric */}
                <div className="mt-6 pt-4 border-t border-[#F3ECE1] flex items-baseline justify-between">
                  <span className="font-serif text-2xl font-bold text-[#14382B]">
                    {pillar.stat}
                  </span>
                  <span className="text-xs text-[#8C651A] font-medium">
                    {pillar.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Strip */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#E8DFD1] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EBF3EE] text-[#154E35] flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#14382B]">
                {t("whyChooseUs.madeInBihar")}
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EBF3EE] text-[#154E35] flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#14382B]">
                {t("whyChooseUs.fssaiCertified")}
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EBF3EE] text-[#154E35] flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#14382B]">
                {t("whyChooseUs.sustainablySourced")}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
