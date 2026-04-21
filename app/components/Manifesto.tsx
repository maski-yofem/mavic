import Image from "next/image";

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-20 bg-black/20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <div>
              <h6 className="font-display font-semibold text-primary tracking-widest uppercase">
                Manifesto
              </h6>
              <p className="sm:text-3xl lg:text-5xl font-serif mt-2">
                A Essência {"Ma'avic"}
              </p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nascida no silêncio dos ateliers subterrâneos, a {"Ma'avic"}
              transcende o conceito tradicional de estamparia. Não apenas
              aplicamos pigmentos; cravamos narrativas visuais em superfícies
              que resistem ao tempo.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nossa curadoria é pautada pela estética gótica moderna — um
              diálogo constante entre o clássico e o visceral. Cada peça que sai
              de nossa prensa carrega o peso da exclusividade e a precisão da
              obsessão.
            </p>
            <div className="flex flex-wrap items-center justify-between">
              <div className="border-l border-white/20 flex flex-col gap-2 pl-4">
                <Image
                  src="/assets/porcentagem-precisao.svg"
                  alt="100% precisão analógica"
                  width={90}
                  height={24}
                />
                <p className="text-sm text-white">PRECISÃO ANALÓGICA</p>
              </div>

              <div className="border-l border-white/20 flex flex-col gap-2 pl-4">
                <Image
                  src="/assets/infinity.svg"
                  alt="100% precisão analógica"
                  width={40}
                  height={24}
                />
                <p className="text-sm text-white">DURABILIDADE ATEMPORAL</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src="/images/prensa.jpg"
                alt="Prensa Obsidiana - Equipamento artesanal da Ma'avic"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
