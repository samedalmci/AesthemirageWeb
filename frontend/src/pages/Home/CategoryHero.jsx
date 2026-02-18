import { ArrowRight } from "lucide-react";

export default function CategoryHero() {
  const items = [
    {
      title: "Ürünler",
      description:
        "İşinizi büyütmenize yardımcı olan bir cihazda en son yenilikler ve kanıtlanmış teknolojiler.",
      image: "/HomeImages/productImage.png",
      link: "#products",
    },
    {
      title: "Tedaviler",
      description:
        "Birden fazla endikasyon için güvenli, rahat ve uygun tedaviler.",
      image: "/HomeImages/treatmentsImage.png",
      link: "#treatments",
    },
    {
      title: "Etkinlikler",
      description:
        "Nerede olduğumuz hakkında güncel kalın - sizinle tanışmayı çok isteriz!",
      image: "/HomeImages/akademImage.png",
      link: "#events",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      {/* Başlık */}
      <div className="mb-8 md:mb-12 text-center px-4">
        <h2 className="font-serif font-light text-navy-700 text-3xl md:text-4xl lg:text-5xl">
          İlginizi Çekebilir...
        </h2>
      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-8 lg:px-24">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer block"
            style={{ aspectRatio: "16/10" }}
          >
            {/* Arka plan görseli */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)",
              }}
            />

            {/* İçerik */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <h3 className="font-sans font-bold mb-2 text-lg md:text-xl lg:text-2xl">
                {item.title}
              </h3>
              <p className="text-gray-200 mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>

              {/* Ok ikonu */}
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-colors duration-300 group-hover:text-gray-900" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
