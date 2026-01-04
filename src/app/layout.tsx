import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Poupe mais make - Icaraizinho",
  description: "Compre produtos com desconto pelo WhatsApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
