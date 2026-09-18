import type { Order } from "@/types/order";

export const MOCK_ORDERS: Order[] = [
  {
    id: "HKF-9824",
    createdAt: "14 May 2026",
    status: "Delivered",
    customer: {
      fullName: "Akshit Sharma",
      email: "akshit@example.com",
      phone: "+91 9876543210",
    },
    shippingAddress: {
      addressLine1: "Flat 402, Green Meadows, Sector 48",
      landmark: "Near Central Park",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122018",
    },
    items: [
      {
        productId: "hkf-raw-001",
        productName: "Raw Phool Makhana (5+ Sut)",
        variantId: "hkf-raw-001-500g",
        weight: "500g",
        price: 549,
        quantity: 2,
        image: "/images/hriday-krishna-product.jpg",
      },
    ],
    subtotal: 1098,
    shippingFee: 0,
    discount: 100,
    total: 998,
    paymentMethod: "upi",
    trackingNumber: "DEL-84729103IN",
  },
  {
    id: "HKF-7612",
    createdAt: "22 April 2026",
    status: "Delivered",
    customer: {
      fullName: "Akshit Sharma",
      email: "akshit@example.com",
      phone: "+91 9876543210",
    },
    shippingAddress: {
      addressLine1: "Flat 402, Green Meadows, Sector 48",
      landmark: "Near Central Park",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122018",
    },
    items: [
      {
        productId: "hkf-raw-001",
        productName: "Raw Phool Makhana (5+ Sut)",
        variantId: "hkf-raw-001-250g",
        weight: "250g",
        price: 289,
        quantity: 1,
        image: "/images/hriday-krishna-product.jpg",
      },
    ],
    subtotal: 289,
    shippingFee: 49,
    discount: 0,
    total: 338,
    paymentMethod: "cod",
    trackingNumber: "DEL-73918231IN",
  },
];
