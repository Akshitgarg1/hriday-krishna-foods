import type { Product, ProductVariant } from "./product";

export interface CartItem {
  id: string; // composite key: `${product.id}-${variant.id}`
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  freeShippingThreshold: number;
  remainingForFreeShipping: number;
}
