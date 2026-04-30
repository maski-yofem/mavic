import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#050505] py-24 px-6 overflow-hidden"
    >
      <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 select-none pointer-events-none">
        <span className="text-[20rem] font-serif font-bold text-white/3">
          M
        </span>
      </div>

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
          Dúvidas ou Pedidos? <br />
          <span className="italic bg-linear-to-r from-[#D8B4FE] to-[#A855F7] bg-clip-text text-transparent">
            Fale Conosco.
          </span>
        </h2>

        <div className="space-y-10">
          <p className="text-2xl md:text-3xl font-sans text-white/90 tracking-wide">
            +55 (18) 99613-4861
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5518996134861"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center gap-3 bg-linear-to-r from-[#D8B4FE] to-[#A855F7] px-8 py-4 text-sm font-bold text-black transition hover:opacity-90 uppercase tracking-widest"
            >
              <Image
                src="/assets/whatsapp-icon.svg"
                alt="Ícone do Whatsapp"
                width={20}
                height={20}
              />
              Whatsapp
            </a>

            <a
              href="tel:+5518996134861"
              className="flex gap-2 border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10 uppercase tracking-widest"
            >
              <Image
                src="/assets/phone-icon.svg"
                alt="Ícone de Telefone"
                width={20}
                height={20}
              />
              Ligar Agora
            </a>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-muted font-sans">
            Atendimento de Segunda a Sexta, das 9h às 18h.
          </p>
        </div>
      </div>
    </section>
  );
}
