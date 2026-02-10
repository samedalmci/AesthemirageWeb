import { ArrowRight } from "lucide-react";

export default function NewsHero() {
  const news = [
    {
      tag: "HOT",
      tagColor: "text-red-500",
      title: "Alma Harmony 2025 GOOD DESIGN™ Ödülünü Kazandı",
      excerpt:
        "Alma Harmony, platformun THE 2025 GOOD DESIGN Awards'ı 'Sağlık ve Sağlıklı Yaşam' kategorisinde kazandığını duyurmaktan gurur duyuyor. Bu altın prestijli ödül, Harmony'nin estetik alanda yenilikçi tasarım ve teknolojik mükemmelliği temsil ettiğini onaylıyor.",
      image: "src/assets/HomeImages/x.png",
      link: "#",
    },
    {
      tag: "ACADEMY",
      tagColor: "text-purple-600",
      title: "BE THE AESTHETIC MOVEMENT.",
      description:
        "Alma Academy, tıp estetiği profesyonelleri için özel olarak tasarlanmış kapsamlı bir eğitim programıdır. Kurslarımız uygulamalı deneyim, düşünce liderliği ve yaratıcı işbirliğine odaklanır.",
      image: "src/assets/HomeImages/y.png",
      link: "#",
      isDark: true,
    },
    {
      tag: "AWARDS",
      tagColor: "text-amber-600",
      title:
        "'Best Laser for Fine Lines' ELLE 2025 Tweakments Ödülleri: Harmony Bio-Boost Taç Giyiyor",
      excerpt:
        "Harmony Bio-Boost tedavisinin 'Ince Çizgiler İçin En İyi Lazer' olarak ELLE 2025 Tweakments Ödüllerinde tanınmasından gurur duyuyoruz. Bu onur, Bio-Boost'un gelişmiş teknolojisinin cilt gençleştirmede lider olduğunu gösteriyor.",
      image: "src/assets/HomeImages/z.png",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {news.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                {/* Tag */}
                <p
                  className={`text-sm font-bold mb-3 uppercase tracking-wider ${item.tagColor}`}
                >
                  {item.tag} <span className="text-gray-400">news</span>
                </p>
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                {/* Description/Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.excerpt || item.description}
                </p>
                {/* Read More Button */}
                <button
                  href={item.link}
                  className="inline-flex items-center gap-2 bg-purple-900
                hover:bg-purple-800 text-white px-6 py-3 rounded-full
                font-medium transition-colors group"
                >
                  <a>
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div
                  className={`rounded-2xl overflow-hidden shadow-lg ${
                    item.isDark ? "bg-black" : "bg-gray-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
