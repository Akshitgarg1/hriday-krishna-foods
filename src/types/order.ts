export type PaymentMethod = "upi" | "card" | "netbanking" | "cod";

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
}

export interface ShippingAddress {
  addressLine1: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  variantId: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string; // e.g. "HKF-9824"
  createdAt: string;
  status: "Processing" | "Dispatched" | "In Transit" | "Delivered";
  customer: CustomerDetails;
  shippingAddress: ShippingAddress;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  paymentMethod: PaymentMethod;
  trackingNumber?: string;
}
