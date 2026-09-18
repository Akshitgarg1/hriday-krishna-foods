import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product, ProductVariant } from "@/types/product";
import type { CartItem, CartSummary } from "@/types/cart";

interface CartStore {
  items: CartItem[];
  couponCode: string | null;
  discountPercentage: number;
  isOpen: boolean;

  // Actions
  setIsOpen: (isOpen: boolean) => void;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;

  // Computed helpers
  getSummary: () => CartSummary;
  getTotalCount: () => number;
}

const FREE_SHIPPING_THRESHOLD = 499;
const STANDARD_SHIPPING_FEE = 49;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      discountPercentage: 0,
      isOpen: false,

      setIsOpen: (isOpen) => set({ isOpen }),

      addItem: (product, variant, quantity = 1) => {
        const compositeId = `${product.id}-${variant.id}`;
        const existingItems = get().items;
        const existingIndex = existingItems.findIndex(
          (item) => item.id === compositeId
        );

        if (existingIndex > -1) {
          // Increment quantity of existing variant
          const updated = [...existingItems];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          set({ items: updated });
        } else {
          // Add new variant item
          set({
            items: [
              ...existingItems,
              {
                id: compositeId,
                product,
                variant,
                quantity,
              },
            ],
          });
        }
      },

      removeItem: (itemId) => {
        set({
          items: get().items.filter((item) => item.id !== itemId),
        });
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => {
        set({ items: [], couponCode: null, discountPercentage: 0 });
      },

      applyCoupon: (code: string) => {
        const clean = code.trim().toUpperCase();
        if (clean === "HRIDAY10" || clean === "WELCOME10") {
          set({ couponCode: clean, discountPercentage: 10 });
          return { success: true, message: "10% festive discount applied!" };
        }
        return { success: false, message: "Invalid coupon code. Try HRIDAY10." };
      },

      removeCoupon: () => {
        set({ couponCode: null, discountPercentage: 0 });
      },

      getSummary: () => {
        const { items, discountPercentage } = get();
        const subtotal = items.reduce(
          (acc, item) => acc + item.variant.price * item.quantity,
          0
        );
        const discount = Math.round((subtotal * discountPercentage) / 100);
        const postDiscountSubtotal = Math.max(0, subtotal - discount);
        const shipping =
          postDiscountSubtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0
            ? 0
            : STANDARD_SHIPPING_FEE;
        const total = postDiscountSubtotal + shipping;
        const remainingForFreeShipping = Math.max(
          0,
          FREE_SHIPPING_THRESHOLD - postDiscountSubtotal
        );

        return {
          subtotal,
          discount,
          shipping,
          total,
          freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
          remainingForFreeShipping,
        };
      },

      getTotalCount: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
    }),
    {
      name: "hkf_cart_storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
