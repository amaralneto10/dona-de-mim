export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "P15-001",
    name: "Fone Bluetooth",
    price: 14.99,
    image: "/products/fone-de-ouvido.avif",
  },
  {
    id: "P15-002",
    name: "Relógio Smart",
    price: 14.99,
    image: "/products/relogio-smart.webp",
  },
  {
    id: "P15-003",
    name: "Caixa de Som",
    price: 14.99,
    image: "/products/caixa-de-som.webp",
  },
  {
    id: "P15-004",
    name: "Kit Escolar",
    price: 14.99,
    image: "/products/kit escolar.jpg",
  },
  {
    id: "P15-005",
    name: "Lapis de Olho",
    price: 14.99,
    image: "/products/lapis de olho.webp",
  }
];
