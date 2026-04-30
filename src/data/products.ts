export type Category = "black" | "white" | "special";
export type CollectionType = "nocturnal" | "lunar" | "special";

export type PortfolioItem = {
  src: string;
  alt: string;
  title: string;
  category: Category;
  tag: string;
  description: string;
  price: string;
  collection: CollectionType;
  secondSrc?: string;
  secondAlt?: string;
};

export const collection: PortfolioItem[] = (() => {
  const isProd = process.env.NODE_ENV === "production";
  const prefix = isProd ? "/mavic" : "";

  return [
    {
      src: `${prefix}/images/shirts/special-skull-chain-single.png`,
      alt: "Artifact 01",
      title: "Artifact 01",
      category: "special",
      collection: "special",
      tag: "Obsidian Silk Screen",
      description:
        "Estampa gótica com acabamento em silk screen para máximo contraste e profundidade.",
      price: "€85.00",
    },
    {
      src: `${prefix}/images/shirts/special-runas-single.png`,
      alt: "Artifact 02",
      title: "Artifact 02",
      category: "special",
      collection: "special",
      tag: "Mercury UV DTF Print",
      description:
        "Detalhes frios e metálicos aplicados em base premium para um visual contemporâneo.",
      price: "€95.00",
    },
    {
      src: `${prefix}/images/shirts/special-emboss-single.png`,
      alt: "Artifact 03",
      title: "Artifact 03",
      category: "special",
      collection: "special",
      tag: "Void Emboss",
      description:
        "Peça minimalista com textura elevada que valoriza o corte e o caimento escuro.",
      price: "€110.00",
    },
    {
      src: `${prefix}/images/shirts/black-shirt-nocturnal-1-front.png`,
      secondSrc: `${prefix}/images/shirts/black-shirt-nocturnal-1-back.png`,
      alt: "Black Shirt Front Side Nocturnal 1",
      secondAlt: "Black Shirt Back Side Nocturnal 1 ",
      category: "black",
      collection: "nocturnal",
      title: "Artifact 05",
      tag: "Nocturnal Script",
      description:
        "Frente clean com tipografia sombria; passe o mouse para ver as costas com acabamento delicado.",
      price: "€85.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-1-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-1-back.png`,
      alt: "White Shirt Front Side Lunar 1",
      secondAlt: "White Shirt Back Side Lunar 1",
      category: "white",
      collection: "lunar",
      title: "Artifact 05",
      tag: "Lunar White",
      description:
        "Frente luminosa com grafismos escuros; passe o mouse para ver as costas e o acabamento completo.",
      price: "€90.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-2-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-2-back.png`,
      alt: "White Shirt Lunar 2 Front",
      secondAlt: "White Shirt Lunar 2 Back",
      title: "Artifact 06",
      category: "white",
      collection: "lunar",
      tag: "Lunar Muse",
      description:
        "Visual clean e sofisticado; passe o mouse para revelar a parte de trás da peça com acabamento suave.",
      price: "€95.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-3-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-3-back.png`,
      alt: "White Shirt Lunar 3 Front",
      secondAlt: "White Shirt Lunar 3 Back",
      title: "Artifact 07",
      category: "white",
      collection: "lunar",
      tag: "Lunar Drift",
      description:
        "Design suave com linhas orgânicas; passe o mouse para ver a arte de trás em contraste etéreo.",
      price: "€90.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-4-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-4-back.png`,
      alt: "White Shirt Lunar 4 Front",
      secondAlt: "White Shirt Lunar 4 Back",
      title: "Artifact 08",
      category: "white",
      collection: "lunar",
      tag: "Lunar Tide",
      description:
        "Estampa minimalista com toques brilhantes; veja as costas ao passar o cursor para completar o look.",
      price: "€92.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-5-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-5-back.png`,
      alt: "White Shirt Lunar 5 Front",
      secondAlt: "White Shirt Lunar 5 Back",
      title: "Artifact 09",
      category: "white",
      collection: "lunar",
      tag: "Lunar Flux",
      description:
        "Peça com grafismo dinâmico; passe o mouse para revelar o verso com acabamento equilibrado.",
      price: "€93.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-6-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-6-back.png`,
      alt: "White Shirt Lunar 6 Front",
      secondAlt: "White Shirt Lunar 6 Back",
      title: "Artifact 10",
      category: "white",
      collection: "lunar",
      tag: "Lunar Pulse",
      description:
        "Contraste sutis e formas fluidas; a transição para as costas adiciona uma camada de mistério.",
      price: "€94.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-7-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-7-back.png`,
      alt: "White Shirt Lunar 7 Front",
      secondAlt: "White Shirt Lunar 7 Back",
      title: "Artifact 11",
      category: "white",
      collection: "lunar",
      tag: "Lunar Echo",
      description:
        "Textura gráfica e balanço cromático; faça hover para revelar as costas com detalhe contínuo.",
      price: "€95.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-8-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-8-back.png`,
      alt: "White Shirt Lunar 8 Front",
      secondAlt: "White Shirt Lunar 8 Back",
      title: "Artifact 12",
      category: "white",
      collection: "lunar",
      tag: "Lunar Spectrum",
      description:
        "Estilo leve com jogo de luz; a imagem das costas surge em transição suave durante o hover.",
      price: "€96.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-9-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-9-back.png`,
      alt: "White Shirt Lunar 9 Front",
      secondAlt: "White Shirt Lunar 9 Back",
      title: "Artifact 13",
      category: "white",
      collection: "lunar",
      tag: "Lunar Mirage",
      description:
        "Impressão orgânica com profundidade; passe o mouse para trocar para a vista traseira elegante.",
      price: "€97.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-10-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-10-back.png`,
      alt: "White Shirt Lunar 10 Front",
      secondAlt: "White Shirt Lunar 10 Back",
      title: "Artifact 14",
      category: "white",
      collection: "lunar",
      tag: "Lunar Halo",
      description:
        "Peça com energia gráfica definida; descubra a arte do verso em uma transição delicada.",
      price: "€98.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-11-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-11-back.png`,
      alt: "White Shirt Lunar 11 Front",
      secondAlt: "White Shirt Lunar 11 Back",
      title: "Artifact 15",
      category: "white",
      collection: "lunar",
      tag: "Lunar Nova",
      description:
        "Design com presença leve; a troca para o verso revela um segundo ângulo digital.",
      price: "€99.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-12-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-12-back.png`,
      alt: "White Shirt Lunar 12 Front",
      secondAlt: "White Shirt Lunar 12 Back",
      title: "Artifact 16",
      category: "white",
      collection: "lunar",
      tag: "Lunar Phase",
      description:
        "Estampa com detalhes suaves; o efeito de hover revela o verso em elegância contínua.",
      price: "€100.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-13-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-13-back.png`,
      alt: "White Shirt Lunar 13 Front",
      secondAlt: "White Shirt Lunar 13 Back",
      title: "Artifact 17",
      category: "white",
      collection: "lunar",
      tag: "Lunar Ray",
      description:
        "Composição refinada e brilho sutil; passe o mouse para ver o verso em transição suave.",
      price: "€101.00",
    },
    {
      src: `${prefix}/images/shirts/white-shirt-lunar-14-front.png`,
      secondSrc: `${prefix}/images/shirts/white-shirt-lunar-14-back.png`,
      alt: "White Shirt Lunar 14 Front",
      secondAlt: "White Shirt Lunar 14 Back",
      title: "Artifact 18",
      category: "white",
      collection: "lunar",
      tag: "Lunar Orbit",
      description:
        "Silhueta moderna com textura esmaecida; veja o verso ao passar o mouse para completar a narrativa.",
      price: "€102.00",
    },
  ];
})();
