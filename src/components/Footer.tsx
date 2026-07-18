export default function Footer() {
  return (
    <footer className="bg-accent text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-white/80">
          © {new Date().getFullYear()} Doona de Mim. Todos os direitos reservados.
        </span>

        <span className="text-sm text-white/80">
          Atendimento via WhatsApp
        </span>
      </div>
    </footer>
  );
}
