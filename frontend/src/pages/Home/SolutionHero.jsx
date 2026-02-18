import { useState } from "react";

export default function SolutionHero() {
  const [activeTab, setActiveTab] = useState("skin");

  const tabs = [
    { id: "skin", label: "Cilt" },
    { id: "body", label: "Vücut" },
    { id: "hair", label: "Saç" },
    { id: "wellness", label: "Cinsel Sağlık" },
  ];

  const content = {
    skin: {
      title: "Dermatolojide Dönüştürücü Bir Yaklaşım",
      subtitle:
        "Cilt gençleştirme, yüzey yenileme ve yara izlerinde yeni bir standart",
      description:
        "En üst düzey cilt tedavileri için Aesthemirage Hybrid, üç güçlü teknolojiyi ve ablative ve non-ablative dalga boylarının ikili lazer stratejisini tamamen özelleştirilebilir bir oranda bir araya getiriyor. Sınırsız seçenekler, benzersiz hassasiyet ve tam kontrol ile azaltılmış kesinti süresiyle eşsiz sonuçlar elde edebilirsiniz.",
      image: "/HomeImages/bakımImage.png",
    },
    body: {
      title: "Vücut Şekillendirme Çözümleri",
      subtitle: "Modern vücut konturlama ve sıkılaştırma teknolojileri",
      description:
        "Vücut şekillendirme ve cildi sıkılaştırma için en gelişmiş teknolojileri sunuyoruz. Non-invaziv yöntemlerle istediğiniz vücut hatlarına kavuşun.",
      image: "/HomeImages/bodyImage.png",
    },
    hair: {
      title: "Saç Tedavileri",
      subtitle: "Saç dökülmesi ve saç bakımı için etkili çözümler",
      description:
        "En son saç tedavi teknolojileri ile saç dökülmesini durdurun ve sağlıklı saçlara kavuşun. Klinik olarak kanıtlanmış sonuçlar.",
      image: "/HomeImages/estetikImage.png",
    },
    wellness: {
      title: "Cinsel Sağlık",
      subtitle: "Gizlilik ve profesyonellikle cinsel sağlık çözümleri",
      description:
        "En yeni teknolojiler ile cinsel sağlık ve yaşam kalitenizi artırın. Güvenli ve etkili tedavi seçenekleri.",
      image: "/HomeImages/sacImage.png",
    },
  };

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-14 px-4">
        <h2 className="font-serif font-light text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
          Her Tedavi İçin Doğru Çözüm
        </h2>
      </div>

      {/* Tabs - Mobile: Scroll, Desktop: Flex */}
      <div className="px-4 md:px-8 lg:px-24 mb-6 md:mb-10">
        <div className="flex overflow-x-auto gap-2 md:gap-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 md:flex-1 py-4 px-6 md:px-4 font-sans font-bold tracking-normal transition-all relative group whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-gold-200"
                  : "text-navy-700 hover:text-gold-200"
              }`}
              style={{ fontSize: "0.95rem" }}
            >
              {tab.label}

              {/* Normal çizgi */}
              <div
                className="absolute bottom-0 left-2 right-2 md:left-4 md:right-4 h-[1px]"
                style={{ backgroundColor: "var(--color-navy-700)" }}
              />

              {/* Hover çizgisi */}
              <div
                className="absolute bottom-0 left-2 right-2 md:left-4 md:right-4 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "var(--color-gold-200)" }}
              />

              {/* Active çizgisi */}
              {activeTab === tab.id && (
                <div
                  className="absolute bottom-0 left-2 right-2 md:left-4 md:right-4 h-[3px]"
                  style={{ backgroundColor: "var(--color-gold-200)" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Card */}
      <div className="px-4 md:px-8 lg:px-24">
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl h-[500px] md:h-[600px] lg:h-[680px]">
          {/* Background Image */}
          <img
            src={content[activeTab].image}
            alt={content[activeTab].title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay - Mobile: Stronger */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,21,48,0.3) 0%, rgba(26,21,48,0.85) 60%, rgba(26,21,48,0.95) 100%)",
            }}
          />

          {/* Gradient Overlay - Desktop */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, #1a1530 0%, #1a1530 42%, rgba(26,21,48,0.75) 58%, rgba(26,21,48,0.25) 72%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end md:justify-center px-6 py-8 md:px-12 lg:px-16 md:max-w-2xl">
            {/* Title */}
            <h3 className="font-serif font-bold mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight text-gold-200">
              {content[activeTab].title}
            </h3>

            {/* Subtitle */}
            <p className="font-sans font-semibold text-white mb-4 md:mb-6 text-base md:text-lg lg:text-xl leading-relaxed">
              {content[activeTab].subtitle}
            </p>

            {/* Description */}
            <p className="font-sans text-gray-300 mb-6 md:mb-10 text-sm md:text-base leading-relaxed md:max-w-xl">
              {content[activeTab].description}
            </p>

            {/* Buttons - Mobile: Stack, Desktop: Row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-10">
              <button className="bg-white text-gray-900 font-sans font-semibold rounded-full hover:bg-gray-100 transition-colors px-6 py-3 text-center">
                Daha Fazla Bilgi
              </button>

              <button className="text-white font-sans font-medium underline underline-offset-4 hover:opacity-75 transition-opacity text-center md:text-left">
                Tüm Ürünleri Keşfet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
