export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-600">
          © {new Date().getFullYear()} Poupe15. Todos os direitos reservados.
        </span>

        <span className="text-sm text-gray-600">
          Atendimento via WhatsApp
        </span>
      </div>
    </footer>
  );
}
