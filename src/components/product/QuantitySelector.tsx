"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  max = 99,
}: QuantitySelectorProps) {
  const decrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center bg-[#FAF7F2] border border-[#E8DFD1] rounded-2xl p-1 shadow-xs">
        <button
          type="button"
          onClick={decrease}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
          className="w-9 h-9 rounded-xl flex items-center justify-center text-[#14382B] hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>

        <span
          aria-live="polite"
          className="w-12 text-center font-serif text-base font-bold text-[#14382B]"
        >
          {quantity}
        </span>

        <button
          type="button"
          onClick={increase}
          disabled={quantity >= max}
          aria-label="Increase quantity"
          className="w-9 h-9 rounded-xl flex items-center justify-center text-[#14382B] hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
