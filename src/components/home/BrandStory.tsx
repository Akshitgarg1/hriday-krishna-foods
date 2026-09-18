"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Sprout, Heart, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";

export function BrandStory() {
  const { t } = useTranslation();

  return (
    <section id="story" className="py-16 md:py-24 bg-white border-b border-[#E8DFD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Wetland Farm Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8DFD1] aspect-[16/10] group">
              <Image
                src="/images/makhana-harvest-farm.jpg"
                alt="Wetland pond in Bihar where Hriday Krishna makhana is sustainably harvested"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* On-image caption badge */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <Badge variant="gold" className="mb-2 text-[10px] font-bold">
                  {t("common.origin")}
                </Badge>
                <p className="text-sm font-serif font-medium leading-snug">
                  {t("brandStory.wetlandCaption")}
                </p>
              </div>
            </div>

            {/* Accent Floating Story Metric Card */}
            <div className="absolute -bottom-6 -right-3 sm:right-6 bg-[#FAF7F2] border border-[#E8DFD1] p-4 rounded-2xl shadow-lg hidden sm:flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-full bg-[#14382B] text-[#C59B4B] flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                5+
              </div>
              <div className="text-xs text-[#14382B]">
                <p className="font-bold">{t("brandStory.fromHeart")}</p>
                <p className="text-[#596B62] text-[11px] mt-0.5">
                  {t("brandStory.fromHeartSub")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            <div>
              <Badge variant="gold" className="mb-3 px-3 py-1">
                <Compass className="w-3.5 h-3.5 text-[#8C651A]" />
                {t("brandStory.storyBadge")}
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14382B] tracking-tight leading-tight">
                {t("brandStory.heading")}
              </h2>
            </div>

            <p className="text-base text-[#596B62] leading-relaxed">
              At <strong>{t("common.brandName")}</strong> (ह्रदय कृष्णा मखाना उद्योग), {t("brandStory.para1")}
            </p>

            <p className="text-base text-[#596B62] leading-relaxed">
              {t("brandStory.para2")}
            </p>

            {/* Slogan Pill */}
            <div className="p-3 bg-[#FAF4E6] border border-[#E3CE9B] rounded-xl flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#8C651A] shrink-0" />
              <div className="text-xs text-[#8C651A]">
                <span className="font-bold block text-[#14382B]">{t("brandStory.sloganTitle")}</span>
                <span>{t("brandStory.sloganSub")}</span>
              </div>
            </div>

            {/* Core Values / Impact Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]/80">
                <Sprout className="w-5 h-5 text-[#154E35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#14382B]">{t("brandStory.pureSattvic")}</h4>
                  <p className="text-xs text-[#596B62] mt-0.5">
                    {t("brandStory.pureSattvicSub")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]/80">
                <Heart className="w-5 h-5 text-[#8C651A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#14382B]">{t("brandStory.farmerWelfare")}</h4>
                  <p className="text-xs text-[#596B62] mt-0.5">
                    {t("brandStory.farmerWelfareSub")}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link href="#product">
                <Button variant="default" className="bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2]">
                  <span>{t("brandStory.orderFresh")}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
