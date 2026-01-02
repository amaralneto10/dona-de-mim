"use client";

import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">
            Poupe15
          </h1>
          <span className="text-sm text-gray-500 hidden sm:block">
            Economize comprando pelo WhatsApp
          </span>
        </div>

        <CartIcon />
      </div>
    </header>
  );
}
