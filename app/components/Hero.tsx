export default function Hero() {
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/mavic' : '';

  return (
    <main
      id="home"
      style={{ backgroundImage: `linear-gradient(rgba(5,5,5,0.8),rgba(5,5,5,0.8)), url(${prefix}/images/gothic-t-shirt.jpg)` }}
      className="relative pt-24 bg-cover bg-center bg-no-repeat"
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 text-center text-white lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
              {"Ma'vic"} Brand
            </p>
            <h1 className="text-4xl font-display font-semibold leading-tight sm:text-5xl lg:text-6xl font-serif">
              {"Ma'vic"} {" "}
              <span className="bg-linear-to-r from-[#D8B4FE] to-[#A855F7] bg-clip-text text-transparent">
                A Arte da <br />
                Estamparia vintage e revolucionaria
              </span>
            </h1>
            <p className="max-w-2xl text-base text-gray-300 sm:text-lg">
              Estampas de tiragem limitada. Do digital ao tecido, cada peça é
              preparada individualmente em nosso atelier.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#portfolio"
                className="bg-linear-to-r from-[#D8B4FE] to-[#A855F7] px-6 py-3 text-sm font-semibold transition hover:opacity-90"
              >
                <span className="bg-linear-to-r from-[#D8B4FE] to-[#A855F7] bg-clip-text text-black uppercase">
                  Explorar coleção
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}