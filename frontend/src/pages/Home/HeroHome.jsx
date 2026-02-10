export function HeroHome() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Guzellik klinigi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1
            className="text-5xl font-light sm:text-6xl lg:text-7xl leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="italic text-white">Yenilikci Teknoloji</span>
            <br />
            <span className="italic text-white">Surdurulebilir Cozumler</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 leading-relaxed">
            Turkiye'den dunyaya, en seckin guzellik kliniklerini bir araya
            getiren guvenilir is ortaginiz.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="bg-amber-500 hover:bg-amber-600 text-white h-14 px-10 text-base font-medium rounded-md transition-colors">
              Klinikleri Kesfet
            </button>
            <button className="border border-white text-white hover:bg-white/10 h-14 px-10 text-base font-medium rounded-md transition-colors bg-transparent">
              Bize Ulasin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
