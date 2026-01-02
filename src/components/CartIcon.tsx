"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="relative flex items-center justify-center"
    >
      <span className="text-2xl">🛒</span>

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full px-2 min-w-[20px] text-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
