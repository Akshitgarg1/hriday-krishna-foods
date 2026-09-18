"use client";

import * as React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Leaf, Award } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  grade: string;
}

export function ProductGallery({
  images,
  productName,
  grade,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeImage = images[activeIndex] || images[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Frame */}
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-[#E8DFD1] shadow-sm">
        <Image
          src={activeImage}
          alt={`${productName} - view ${activeIndex + 1}`}
          fill
          priority
          className="object-cover transition-all duration-500 ease-out hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <Badge variant="organic" className="shadow-xs font-bold text-xs">
            <Leaf className="w-3.5 h-3.5" />
            100% Unbleached
          </Badge>
          <Badge variant="gold" className="shadow-xs font-bold text-xs">
            <Award className="w-3.5 h-3.5" />
            {grade} Grade
          </Badge>
        </div>

        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#14382B] border border-[#E8DFD1] shadow-xs">
          Image {activeIndex + 1} of {images.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, idx) => {
          const isCurrent = activeIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              aria-current={isCurrent ? "true" : "false"}
              className={`relative aspect-square rounded-2xl overflow-hidden border-2 bg-[#FAF7F2] transition-all duration-200 cursor-pointer ${
                isCurrent
                  ? "border-[#14382B] ring-2 ring-[#14382B]/20 scale-95 shadow-sm"
                  : "border-[#E8DFD1] hover:border-[#14382B]/60 opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12vw"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
