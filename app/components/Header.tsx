import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4 lg:px-8">
        <div className="flex justify-start">
          <Link
            href="/"
            className="text-white text-lg font-display tracking-[0.2em] uppercase hover:text-primary"
          >
            {"Ma'vic"}
          </Link>
        </div>

        <nav className="hidden md:flex justify-center gap-8 text-sm text-gray-200">
          <Link
            href="/#manifesto"
            className="transition hover:text-primary hover:underline uppercase"
          >
            Processo
          </Link>
          <Link
            href="/#cards"
            className="transition hover:text-primary hover:underline uppercase"
          >
            Arquivo
          </Link>
          <Link
            href="/#contact"
            className="transition hover:text-primary hover:underline uppercase"
          >
            Contato
          </Link>
        </nav>

        <div />
      </div>
    </header>
  );
}
