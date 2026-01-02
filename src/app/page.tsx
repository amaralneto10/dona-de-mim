import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PromoBanner />
      <ProductGrid />
      <Footer />
    </>
  );
}
