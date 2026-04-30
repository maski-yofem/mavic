import Image from "next/image";
import type { PortfolioItem } from "@/src/data/products";

type ProductCardProps = {
  item: PortfolioItem;
};

export default function ProductCard({ item }: ProductCardProps) {
  const isSpecialFinish = item.category === "special";
  const isLunarWhite = item.tag === "Lunar White";
  const isNocturnalScript = item.tag === "Nocturnal Script";

  return (
    <article
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
}
