import { CartItem } from "../context/CartContext";

export function getCartWhatsAppLink(
  items: CartItem[],
  finalPrice: number,
  discount: number
) {
  const phone = "5588999140680";

  let message = "🛒 *NOVO PEDIDO*\n\n";

  items.forEach((item) => {
    message += `• ${item.name}\n`;
    message += `  Quantidade: ${item.quantity}\n`;
    message += `  Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
  });

  message += "----------------------\n";

  if (discount > 0) {
    message += `🎟️ Desconto aplicado: ${discount}%\n`;
  }

  message += `💰 *Total final: R$ ${finalPrice.toFixed(2)}*\n\n`;
  message += "📍 Aguardo confirmação do pedido.";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
