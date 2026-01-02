"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function FloatingCart() {
  const { totalItems, finalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <Link
      href="/cart"
      className="fixed bottom-4 right-4 z-50 bg-pink-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-3 md:hidden"
    >
      <span className="text-xl">🛒</span>

      <div className="text-sm leading-tight">
        <p className="font-bold">{totalItems} itens</p>
        <p>R$ {finalPrice.toFixed(2)}</p>
      </div>
    </Link>
  );
}
