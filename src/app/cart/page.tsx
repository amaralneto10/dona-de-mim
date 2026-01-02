"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { getCartWhatsAppLink } from "../../utils/whatsapp";
import Link from "next/link";

export default function CartPage() {
  const {
    items,
    totalPrice,
    finalPrice,
    discount,
    applyCoupon,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function handleApplyCoupon() {
    const ok = applyCoupon(code);
    if (!ok) setError("Cupom inválido");
    else setError("");
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Seu carrinho está vazio
        </h2>
        <Link href="/" className="text-pink-500 underline">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">
        Seu carrinho
      </h2>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <span className="text-sm text-gray-500">
                R$ {item.price.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                  })
                }
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm ml-2"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* CUPOM */}
      <div className="mt-6 flex gap-2">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Cupom de desconto"
          className="border rounded px-3 py-2 flex-1"
        />
        <button
          onClick={handleApplyCoupon}
          className="bg-pink-500 text-white px-4 rounded"
        >
          Aplicar
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}

      {/* TOTAL */}
      <div className="mt-6 space-y-1">
        <p>Total: R$ {totalPrice.toFixed(2)}</p>
        {discount > 0 && (
          <p className="text-green-600">
            Desconto: {discount}%
          </p>
        )}
        <p className="text-xl font-bold">
          Total final: R$ {finalPrice.toFixed(2)}
        </p>
      </div>

      {/* AÇÕES */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-pink-500 underline"
        >
          ← Voltar à loja
        </Link>

        <a
          href={getCartWhatsAppLink(items, finalPrice, discount)}
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition"
        >
          Finalizar no WhatsApp
        </a>
      </div>
    </div>
  );
}
