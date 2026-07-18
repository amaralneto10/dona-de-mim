export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary via-[#ff8c6b] to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Economize até 10% comprando pelo WhatsApp
        </h2>

        <p className="text-lg max-w-2xl">
          Produtos selecionados com os melhores preços. Fale direto no WhatsApp
          e garanta sua economia.
        </p>

        <span className="bg-secondary text-accent w-fit px-6 py-2 rounded-full font-semibold">
          Doona de Mim
        </span>
      </div>
    </section>
  );
}
