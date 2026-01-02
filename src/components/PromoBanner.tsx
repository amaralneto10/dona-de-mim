export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <div className="bg-primary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-lg">
        
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-wide">
            Oferta do dia 🔥
          </span>

          <h2 className="text-2xl md:text-3xl font-bold">
            Economize até 15% no Poupe15
          </h2>

          <p className="text-white/90 max-w-xl">
            Aproveite nossas ofertas especiais e fale direto no WhatsApp
            para garantir seu desconto hoje.
          </p>
        </div>

        <a
          href="#produtos"
          className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-pink-100 transition"
        >
          Ver ofertas
        </a>
      </div>
    </section>
  );
}
