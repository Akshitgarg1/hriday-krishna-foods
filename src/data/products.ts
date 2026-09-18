// ─────────────────────────────────────────────────────────────────────────────
// Mock Product Catalogue — Hriday Krishna Foods
//
// ⚡ REPLACE PRICES HERE when real business pricing is confirmed.
// ⚡ ADD new products to the `PRODUCTS` array when expanding the range.
// ─────────────────────────────────────────────────────────────────────────────

import type { Product, CategoryMeta } from "@/types/product";

export const CATEGORY_META: CategoryMeta[] = [
  {
    id: "raw-makhana",
    label: "Raw Makhana",
    description: "Unbleached, unroasted lotus seeds — pure as nature intended.",
  },
  {
    id: "roasted-makhana",
    label: "Roasted Makhana",
    description: "Light ghee-roasted with natural Himalayan pink salt & spices. Coming soon.",
  },
  {
    id: "flavoured-makhana",
    label: "Flavoured Makhana",
    description: "Masala, peri-peri, pudina & more. Coming soon.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "hkf-raw-001",
    name: "Raw Phool Makhana",
    slug: "raw-makhana",
    tagline: "Pure. Natural. Wholesome. Handpicked 5+ Sut Grade from Bihar's Pristine Ponds.",
    description:
      "Handpicked 5+ Sut grade lotus seeds, naturally sun-dried and traditionally popped without a single trace of bleach, sulfur, chemicals, or synthetic additives. Sourced directly from local pond harvesters in Runnisaidpur, Sitamarhi, Bihar. Exceptionally rich in plant protein (9.7g/100g), dietary fibre, calcium, and essential minerals with zero cholesterol.",
    origin: "Sitamarhi, Bihar",
    grade: "5+ Sut",
    fssai: "20426093000121",
    rating: 4.9,
    reviewCount: 142,
    images: {
      card: "/images/hriday-krishna-product.jpg",
      hero: "/images/hriday-krishna-hero.jpg",
      gallery: [
        "/images/hriday-krishna-product.jpg",
        "/images/makhana-closeup-leaf.jpg",
        "/images/hriday-krishna-hero.jpg",
        "/images/hriday-krishna-product.jpg",
      ],
    },
    nutritionHighlights: [
      { label: "Energy", value: "347 kcal" },
      { label: "Protein", value: "9.7 g" },
      { label: "Dietary Fibre", value: "14.5 g" },
      { label: "Calcium", value: "67 mg" },
      { label: "Total Fat", value: "0.1 g" },
      { label: "Cholesterol", value: "0 mg" },
      { label: "Iron", value: "1.4 mg" },
      { label: "Potassium", value: "500 mg" },
    ],
    variants: [
      {
        id: "hkf-raw-001-100g",
        sku: "HKF-RAW-100G",
        weight: "100g",
        weightGrams: 100,
        price: 129,
        mrp: 160,
        inStock: true,
        servings: "3–4 Servings",
        bestFor: "Pouch Pack (Daily Snack)",
      },
      {
        id: "hkf-raw-001-200g",
        sku: "HKF-RAW-200G",
        weight: "200g",
        weightGrams: 200,
        price: 239,
        mrp: 300,
        inStock: true,
        servings: "7–8 Servings",
        bestFor: "Couple Weekly Pack",
      },
      {
        id: "hkf-raw-001-250g",
        sku: "HKF-RAW-250G",
        weight: "250g",
        weightGrams: 250,
        price: 289,
        mrp: 375,
        inStock: true,
        badge: "Most Popular",
        servings: "9–10 Servings",
        bestFor: "Standard Kitchen Pantry",
      },
      {
        id: "hkf-raw-001-500g",
        sku: "HKF-RAW-500G",
        weight: "500g",
        weightGrams: 500,
        price: 549,
        mrp: 720,
        inStock: true,
        badge: "Best Value",
        servings: "18–20 Servings",
        bestFor: "Healthy Family Snacking",
      },
      {
        id: "hkf-raw-001-1kg",
        sku: "HKF-RAW-1KG",
        weight: "1kg",
        weightGrams: 1000,
        price: 999,
        mrp: 1350,
        inStock: true,
        badge: "Mega Saver",
        servings: "40+ Servings",
        bestFor: "Monthly Pantry Pack",
      },
    ],
    certifications: [
      "FSSAI Certified (Lic 20426093000121)",
      "100% Natural & Unbleached",
      "No Preservatives",
      "Direct From Sitamarhi Wetland Harvesters",
      "Triple Inspected 5+ Sut Grade",
    ],
    category: "raw-makhana",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  // Support both 'raw-makhana' and legacy 'raw-phool-makhana'
  return PRODUCTS.find((p) => p.slug === slug || (slug === "raw-phool-makhana" && p.slug === "raw-makhana"));
}

export function discountPercent(price: number, mrp: number): number {
  return Math.round(((mrp - price) / mrp) * 100);
}
