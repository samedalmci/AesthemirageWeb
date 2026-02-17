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

  const SIDE_MARGIN = "96px";

  return (
    <>
      <section className="bg-gray-50 py-20">
        {/* Section Title */}
        <div className="text-center mb-14 px-4">
          <h2
            className="font-serif font-light text-gray-900"
            style={{ fontSize: "2.5rem", lineHeight: "1.2" }}
          >
            Her Tedavi İçin Doğru Çözüm
          </h2>
        </div>

        {/* Tabs */}
        <div
          className="flex"
          style={{ paddingLeft: SIDE_MARGIN, paddingRight: SIDE_MARGIN }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-5 font-sans font-bold tracking-normal transition-all relative ${
                activeTab === tab.id
                  ? "text-navy-700"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              style={{ fontSize: "1.15rem" }}
            >
              {tab.label}

              <div
                className="absolute bottom-0 left-4 right-4 h-[1px]"
                style={{ backgroundColor: "#d1d5db" }}
              />

              {activeTab === tab.id && (
                <div
                  className="absolute bottom-0 left-4 right-4 h-[3px]"
                  style={{ backgroundColor: "#c9a84c" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="h-10" />

        {/* Hero Card */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            height: "680px",
            marginLeft: SIDE_MARGIN,
            marginRight: SIDE_MARGIN,
          }}
        >
          {/* Background Image */}
          <img
            src={content[activeTab].image}
            alt={content[activeTab].title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #1a1530 0%, #1a1530 42%, rgba(26,21,48,0.75) 58%, rgba(26,21,48,0.25) 72%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 h-full flex flex-col justify-center"
            style={{
              paddingLeft: "72px",
              paddingRight: "24px",
              maxWidth: "640px",
            }}
          >
            {/* Title */}
            <h3
              className="font-serif font-bold mb-6"
              style={{
                fontSize: "2.4rem",
                lineHeight: "1.2",
                color: "#c9a84c",
              }}
            >
              {content[activeTab].title}
            </h3>

            {/* Subtitle */}
            <p
              className="font-sans font-semibold text-white mb-6"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.5",
              }}
            >
              {content[activeTab].subtitle}
            </p>

            {/* Description */}
            <p
              className="font-sans text-gray-300 mb-10"
              style={{
                fontSize: "1rem",
                lineHeight: "1.75",
                maxWidth: "520px",
              }}
            >
              {content[activeTab].description}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-10">
              <button className="bg-white text-gray-900 font-sans font-semibold rounded-full hover:bg-gray-100 transition-colors px-8 py-3">
                Daha Fazla Bilgi
              </button>

              <button className="text-white font-sans font-medium underline underline-offset-4 hover:opacity-75 transition-opacity">
                Tüm Ürünleri Keşfet
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
