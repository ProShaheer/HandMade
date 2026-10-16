import { products } from "./products";

export const cartIds = [1, 2];

export const cartDetails = {
  1: "Made to Order (2-3 weeks)",
  2: "Ready to Ship (2-3 days)",
};

export const cartItems = cartIds.map((id) => products.find((p) => p.id === id));

export const shipping = 12;
export const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
export const total = subtotal + shipping;

export const money = (n) => `$${n.toFixed(2)}`;
