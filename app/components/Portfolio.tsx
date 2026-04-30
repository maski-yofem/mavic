"use client";

import { useState } from "react";
import ProductCard from "@/src/components/ProductCard";
import { collection } from "@/src/data/products";

type CollectionType = "nocturnal" | "lunar" | "special";

const COLLECTION_PRIORITY: Record<CollectionType, number> = {
  special: 1,
  nocturnal: 2,
  lunar: 3,
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<CollectionType | "all">(
    "all",
  );

  const filterOptions: Array<{ value: CollectionType; label: string }> = [
    { value: "nocturnal", label: "NOCTURNAL" },
    { value: "lunar", label: "LUNAR" },
    { value: "special", label: "SPECIAL" },
  ];

  const collectionPriority: Record<CollectionType, number> = {
    special: 1,
    nocturnal: 2,
    lunar: 3,
  };

  const filteredCollection =
    activeFilter === "all"
      ? [...collection].sort(
          (a, b) =>
            collectionPriority[a.collection] - collectionPriority[b.collection],
        )
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
          {filteredCollection.map((item) => (
            <ProductCard key={item.src} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
