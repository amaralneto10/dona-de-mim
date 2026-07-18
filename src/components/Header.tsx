"use client";

import Image from "next/image";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-secondary/90 shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        
        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.PNG"
            alt="Doona de Mim Logo"
            width={42}
            height={42}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-accent leading-tight">
              • Doona de Mim
            </h1>
            <span className="text-sm text-brand/70 hidden sm:block">
              Economize pelo WhatsApp
            </span>
          </div>
        </div>

        {/* Carrinho */}
        <CartIcon />
      </div>
    </header>
  );
}
