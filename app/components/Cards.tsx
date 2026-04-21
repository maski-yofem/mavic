import Image from "next/image";

export default function Cards() {
  return (
    <section id="cards" className="py-20 bg-[#050505]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
            Nossa Seleção Curada
          </p>
          <h2 className="mt-4 text-3xl font-display font-semibold text-white sm:text-4xl">
            Materiais e detalhes que definem a {"Ma'avic"}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-300">
            Trabalhamos com o essencial. Selecionamos bases de algodão e
            poliéster que garantem a melhor fixação e vivacidade para nossas
            estampas autorais.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article className="group overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/30">
            <div className="relative h-[680px] overflow-hidden">
              <Image
                src="/images/luxury-t-shirt.jpg"
                alt="Linha Algodão Clássico"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/90 to-transparent" />
            </div>
            <div className="p-8">
              <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.35em] text-primary">
                Linha Algodão Clássico
              </span>
              <h3 className="mt-6 text-4xl font-semibold text-white leading-tight">
                Conforto e resistência. Ideal para estampas com durabilidade superior.
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-300">
                O clássico revisitado em tecido de alta qualidade, pensado para
                quem busca estética e durabilidade.
              </p>
            </div>
          </article>

          <div className="grid gap-8">
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-black/80 transition hover:-translate-y-1 hover:border-primary/30">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/shirts/black-shirt-back-side.png"
                  alt="Linha Heavyweight (Algodão Pesado)"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/90 to-transparent" />
              </div>
              <div className="p-8 text-white">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
                  Linha Heavyweight (Algodão Pesado)
                </p>
                <h3 className="mt-4 text-3xl font-display font-semibold leading-tight">
                  Um novo padrão de estamparia sombria
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  Desenvolvida para quem busca estrutura e um caimento imponente, 
                  reforçando a identidade visual e o peso das nossas artes autorais.
                </p>
              </div>
            </article>

            <div className="grid gap-8 sm:grid-cols-2">
              <article className="group overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/30">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src="/images/texture-fabric.jpg"
                    alt="Textura Obsidiana"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white">
                    Textura Obsidiana
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    Materiais selecionados para profundidade, contraste e
                    durabilidade.
                  </p>
                </div>
              </article>
              <article className="group overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/30">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src="/images/leather.png"
                    alt="Linha Poliéster Performance"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white">
                    Linha Poliéster Performance
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    Ideal para quem busca um tecido que não amassa e mantém a fidelidade das cores da estampa por anos.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}