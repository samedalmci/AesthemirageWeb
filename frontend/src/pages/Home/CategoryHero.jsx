import { ArrowRight } from "lucide-react";

export default function CategoryHero() {
  const items = [
    {
      title: "Ürünler",
      description:
        "İşinizi büyütmenize yardımcı olan bir cihazda en son yenilikler ve kanıtlanmış teknolojiler.",
      image: "/HomeImages/productImage.png",
      link: "#products",
      overlay: "bg-black/60",
    },
    {
      title: "Tedaviler",
      description:
        "Birden fazla endikasyon için güvenli, rahat ve uygun tedaviler.",
      image: "/HomeImages/treatmentsImage.png",
      link: "#treatments",
      overlay: "bg-gray-700/50",
    },
    {
      title: "Etkinlikler",
      description:
        "Nerede olduğumuz hakkında güncel kalın - sizinle tanışmayı çok isteriz!",
      image: "/HomeImages/akademImage.png",
      link: "#events",
      overlay: "bg-orange-900/40",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900">
            İlginizi Çekebilir...
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 ${item.overlay}`} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed mb-4 opacity-90">
                  {item.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
