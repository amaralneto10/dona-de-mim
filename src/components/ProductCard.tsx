"use client";

import Image from "next/image";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-contain p-3 bg-white transition-transform duration-300 hover:scale-105"
      />

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h2 className="font-semibold text-lg">
          {product.name}
        </h2>

        <span className="text-primary font-bold text-xl">
          R$ {product.price.toFixed(2)}
        </span>

        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
            })
          }
          className="mt-auto bg-pink-500 text-white py-2 rounded-lg font-medium hover:bg-pink-600 transition"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
