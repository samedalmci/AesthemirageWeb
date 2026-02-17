import { ArrowRight } from "lucide-react";

export default function NewsHero() {
  const news = [
    {
      tag: "HOT",
      tagSuffix: "NEWS!",
      tagColor: "text-red-500",
      title: "Alma Harmony 2025 GOOD DESIGN™ Ödülünü Kazandı",
      excerpt:
        "Alma Harmony, platformun THE 2025 GOOD DESIGN Awards'ı 'Sağlık ve Sağlıklı Yaşam' kategorisinde kazandığını duyurmaktan gurur duyuyor. Bu altın prestijli ödül, Harmony'nin estetik alanda yenilikçi tasarım ve teknolojik mükemmelliği temsil ettiğini onaylıyor.",
      image: "/HomeImages/x.png",
      link: "#",
      isDark: false,
    },
    {
      tag: "ACADEMY",
      tagSuffix: "news",
      tagColor: "text-amber-400",
      title: "BE THE AESTHETIC MOVEMENT.",
      excerpt:
        "Alma Academy, tıp estetiği profesyonelleri için özel olarak tasarlanmış kapsamlı bir eğitim programıdır. Kurslarımız uygulamalı deneyim, düşünce liderliği ve yaratıcı işbirliğine odaklanır.",
      image: "/HomeImages/y.png",
      link: "#",
      isDark: true,
    },
    {
      tag: "AWARDS",
      tagSuffix: "news",
      tagColor: "text-amber-600",
      title:
        "'Best Laser for Fine Lines' ELLE 2025 Tweakments Ödülleri: Harmony Bio-Boost Taç Giyiyor",
      excerpt:
        "Harmony Bio-Boost tedavisinin 'İnce Çizgiler İçin En İyi Lazer' olarak ELLE 2025 Tweakments Ödüllerinde tanınmasından gurur duyuyoruz. Bu onur, Bio-Boost'un gelişmiş teknolojisinin cilt gençleştirmede lider olduğunu gösteriyor.",
      image: "/HomeImages/z.png",
      link: "#",
      isDark: false,
    },
  ];

  return (
    <section>
      {news.map((item, index) => {
        const isReversed = index % 2 === 1;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row min-h-screen ${
              item.isDark ? "bg-[#1a1f2e]" : "bg-white"
            }`}
          >
            {/* ── Text Side ── */}
            <div
              className={`flex-1 flex items-center justify-center px-16 py-24 ${
                isReversed ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="max-w-lg">
                {/* Tag */}
                <p className="text-sm font-bold mb-5 uppercase tracking-widest">
                  <span className={item.tagColor}>{item.tag}</span>{" "}
                  <span
                    className={
                      item.isDark ? "text-amber-200/60" : "text-gray-400"
                    }
                  >
                    {item.tagSuffix}
                  </span>
                </p>

                {/* Title */}
                <h2
                  className={`text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight ${
                    item.isDark ? "text-amber-100" : "text-navy-700"
                  }`}
                >
                  {item.title}
                </h2>

                {/* Excerpt */}
                <p
                  className={`text-base leading-relaxed mb-10 ${
                    item.isDark ? "text-amber-100/60" : "text-gray-500"
                  }`}
                >
                  {item.excerpt}
                </p>

                {/* CTA Button — pill style matching screenshot */}
                <a
                  href={item.link}
                  className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 group ${
                    item.isDark
                      ? "bg-amber-400 hover:bg-amber-300 text-navy-700"
                      : "bg-navy-800 hover:bg-navy-700 text-white"
                  }`}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* ── Image Side ── */}
            <div
              className={`flex-1 flex items-center justify-center p-10 ${
                isReversed ? "md:order-1" : "md:order-2"
              } ${item.isDark ? "bg-[#1a1f2e]" : "bg-gray-50"}`}
            >
              {/* Rounded image card — matching screenshot style */}
              <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
