"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "black" | "white" | "special";
type CollectionType = "nocturnal" | "lunar" | "special";

type PortfolioItem = {
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

export default function Portfolio() {
  const isProd = process.env.NODE_ENV === "production";
  const prefix = isProd ? "/mavic" : "";
  const [activeFilter, setActiveFilter] = useState<CollectionType | "all">(
    "all",
  );

  const filterOptions: Array<{ value: CollectionType; label: string }> = [
    { value: "nocturnal", label: "NOCTURNAL" },
    { value: "lunar", label: "LUNAR" },
    { value: "special", label: "SPECIAL" },
  ];

  const collection: PortfolioItem[] = [
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
  ];

  const filteredCollection =
    activeFilter === "all"
      ? collection
      : collection.filter((item) => item.collection === activeFilter);

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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 text-sm font-semibold uppercase transition cursor-pointer ${
              activeFilter === "all"
                ? "border-primary bg-primary/15 text-primary"
                : "border-white/10 text-white hover:border-white/20"
            }`}
          >
            All
          </button>
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 text-sm font-semibold uppercase transition cursor-pointer ${
                activeFilter === filter.value
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-white/10 text-white hover:border-white/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCollection.map((item) => {
            const isSpecialFinish = item.category === "special";
            const isLunarWhite = item.tag === "Lunar White";
            const isNocturnalScript = item.tag === "Nocturnal Script";

            return (
              <article
                key={item.src}
                className={`group overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:-translate-y-1 ${
                  isSpecialFinish
                    ? "shadow-[inset_0_0_30px_rgba(0,0,0,0.25)] hover:border-slate-300/30 hover:shadow-[0_28px_70px_rgba(0,0,0,0.35),inset_0_0_40px_rgba(0,0,0,0.28)] backdrop-blur-md"
                    : "hover:border-primary/30"
                }`}
              >
                <div
                  className={`relative h-96 overflow-hidden ${
                    isLunarWhite ? "bg-[#111111]" : "bg-[#0b0b0b]"
                  }`}
                >
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

                  {isLunarWhite && (
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/90 to-transparent" />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block rounded-full border border-white/20 px-3 py-1 text-xs uppercase ${
                      isSpecialFinish
                        ? "tracking-[0.5em] text-primary shadow-[0_0_20px_rgba(79,70,229,0.25)]"
                        : isLunarWhite
                          ? "tracking-[0.4em] text-primary/90"
                          : "tracking-[0.35em] text-primary/80"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h2
                    className={`mt-5 text-2xl font-semibold ${
                      isLunarWhite ? "text-white/90" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      isNocturnalScript
                        ? "text-gray-400"
                        : isLunarWhite
                          ? "text-gray-300/90"
                          : "text-gray-300"
                    }`}
                  >
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4 text-white">
                    <span className="text-lg font-semibold">{item.price}</span>
                    <span className="text-sm uppercase tracking-[0.35em] text-gray-400">
                      {item.category === "black"
                        ? "NOCTURNAL SERIES"
                        : item.category === "white"
                          ? "LUNAR SERIES"
                          : "special editions"}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
