export default function Header() {
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/mavic' : '';

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4 lg:px-8">
        
        <div className="flex justify-start">
          <a
            href="#home"
            className="text-white text-lg font-display tracking-[0.2em] uppercase hover:text-primary"
          >
            {"Ma'avic"}
          </a>
        </div>

        <nav className="hidden md:flex justify-center gap-8 text-sm text-gray-200">
          <a href="#manifesto" className="transition hover:text-primary hover:underline uppercase">Processo</a>
          <a href="#cards" className="transition hover:text-primary hover:underline uppercase">Arquivo</a>
          <a href="#contact" className="transition hover:text-primary hover:underline uppercase">Contato</a>
        </nav>

        <div /> 
        
      </div>
    </header>
  );
}