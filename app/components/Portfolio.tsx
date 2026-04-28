import Image from "next/image";

type PortfolioItem = {
  src: string;
  alt: string;
  title: string;
  tag: string;
  description: string;
  price: string;
  secondSrc?: string;
  secondAlt?: string;
};

export default function Portfolio() {
  const isProd = process.env.NODE_ENV === "production";
  const prefix = isProd ? "/mavic" : "";

  const collection: PortfolioItem[] = [
    {
      src: `${prefix}/images/shirts/artifact-1.png`,
      alt: "Artifact 01",
      title: "Artifact 01",
      tag: "Obsidian Silk Screen",
      description:
        "Estampa gótica com acabamento em silk screen para máximo contraste e profundidade.",
      price: "€85.00",
    },
    {
      src: `${prefix}/images/shirts/artifact-2.png`,
      alt: "Artifact 02",
      title: "Artifact 02",
      tag: "Mercury UV DTF Print",
      description:
        "Detalhes frios e metálicos aplicados em base premium para um visual contemporâneo.",
      price: "€95.00",
    },
    {
      src: `${prefix}/images/shirts/artifact-3.png`,
      alt: "Artifact 03",
      title: "Artifact 03",
      tag: "Void Emboss",
      description:
        "Peça minimalista com textura elevada que valoriza o corte e o caimento escuro.",
      price: "€110.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-woman-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-woman-back.png`,
      alt: "White Shirt Woman Front",
      secondAlt: "White Shirt Woman Back",
      title: "Artifact 04",
      tag: "Lunar Muse",
      description:
        "Visual clean e sofisticado; passe o mouse para revelar a parte de trás da peça com acabamento suave.",
      price: "€95.00",
    },
    {
      src: `${prefix}/images/shirts/black-shirt-front-side.png`,
      secondSrc: `${prefix}/images/shirts/black-shirt-back-side.png`,
      alt: "Black Shirt Front Side",
      secondAlt: "Black Shirt Back Side",
      title: "Artifact 05",
      tag: "Nocturnal Script",
      description:
        "Frente clean com tipografia sombria; passe o mouse para ver as costas com acabamento delicado.",
      price: "€85.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-front-side.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-back-side.png`,
      alt: "White Shirt Front Side",
      secondAlt: "White Shirt Back Side",
      title: "Artifact 06",
      tag: "Lunar White",
      description:
        "Frente luminosa com grafismos escuros; passe o mouse para ver as costas e o acabamento completo.",
      price: "€90.00",
    },
  ];

  return (
    <main id="portfolio" className="bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
            Portfólio
          </p>
          <h1 className="mt-6 text-4xl font-display font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            A coleção Obsidian no corpo do nosso portfólio.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Cada peça é uma exploração de textura, contraste e corte. Navegue
            pelas nossas camisetas e descubra a identidade visual da Ma'vic em
            cada detalhe.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collection.map((item) => (
            <article
              key={item.src}
              className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="relative h-96 overflow-hidden bg-[#0b0b0b]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${
                    item.secondSrc ? "group-hover:opacity-0" : "opacity-100"
                  }`}
                />

                {item.secondSrc && (
                  <Image
                    src={item.secondSrc}
                    alt={item.secondAlt ?? item.alt}
                    fill
                    className="absolute inset-0 object-cover opacity-0 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/90 to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.35em] text-primary">
                  {item.tag}
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 text-white">
                  <span className="text-lg font-semibold">{item.price}</span>
                  <span className="text-sm uppercase tracking-[0.35em] text-gray-400">
                    Coleção Obsidian
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
