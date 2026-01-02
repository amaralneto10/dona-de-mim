"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { coupons } from "../data/coupons";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  applyCoupon: (code: string) => boolean;
  coupon: string | null;
  discount: number;
  totalItems: number;
  totalPrice: number;
  finalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  function addToCart(item: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function decreaseQuantity(id: string) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function applyCoupon(code: string) {
    const found = coupons.find(
      (c) => c.code === code.toUpperCase()
    );

    if (!found) return false;

    setCoupon(found.code);
    setDiscount(found.discountPercentage);
    return true;
  }

  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const finalPrice =
    totalPrice - (totalPrice * discount) / 100;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        applyCoupon,
        coupon,
        discount,
        totalItems,
        totalPrice,
        finalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx)
    throw new Error("useCart must be used within CartProvider");
  return ctx;
}
