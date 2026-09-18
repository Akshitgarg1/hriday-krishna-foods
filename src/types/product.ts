// ─────────────────────────────────────────────────────────────────────────────
// Product Types — Hriday Krishna Foods
// ─────────────────────────────────────────────────────────────────────────────

export interface ProductVariant {
  id: string;
  sku: string;
  weight: string;       // e.g. "100g", "500g"
  weightGrams: number;  // numeric grams for calculations/sorting
  price: number;        // selling price (INR)
  mrp: number;          // maximum retail price (INR)
  inStock: boolean;
  badge?: string;       // optional label e.g. "Best Value", "Most Popular"
  servings?: string;    // e.g. "9–10 Servings"
  bestFor?: string;     // e.g. "Standard Kitchen Pantry"
}

export interface ProductNutrition {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;          // e.g. "raw-makhana"
  tagline: string;       // one-liner punchline
  description: string;   // detailed description
  origin: string;        // e.g. "Sitamarhi, Bihar"
  grade: string;         // e.g. "5+ Sut"
  fssai: string;
  rating: number;        // e.g. 4.9
  reviewCount: number;   // e.g. 142
  images: {
    card: string;        // thumbnail/listing image
    hero: string;        // hero visual
    gallery: string[];   // array of images for gallery
  };
  nutritionHighlights: ProductNutrition[];
  variants: ProductVariant[];
  certifications: string[];
  category: ProductCategory;
}

export type ProductCategory = "raw-makhana" | "roasted-makhana" | "flavoured-makhana";

export interface CategoryMeta {
  id: ProductCategory;
  label: string;
  description: string;
}
