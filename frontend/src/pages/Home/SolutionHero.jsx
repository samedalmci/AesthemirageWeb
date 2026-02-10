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
      image: "src/assets/HomeImages/bakımImage.png",
    },
    body: {
      title: "Vücut Şekillendirme Çözümleri",
      subtitle: "Modern vücut konturlama ve sıkılaştırma teknolojileri",
      description:
        "Vücut şekillendirme ve cildi sıkılaştırma için en gelişmiş teknolojileri sunuyoruz. Non-invaziv yöntemlerle istediğiniz vücut hatlarına kavuşun.",
      image: "src/assets/HomeImages/bodyImage.png",
    },
    hair: {
      title: "Saç Tedavileri",
      subtitle: "Saç dökülmesi ve saç bakımı için etkili çözümler",
      description:
        "En son saç tedavi teknolojileri ile saç dökülmesini durdurun ve sağlıklı saçlara kavuşun. Klinik olarak kanıtlanmış sonuçlar.",
      image: "src/assets/HomeImages/estetikImage.png",
    },
    wellness: {
      title: "Cinsel Sağlık",
      subtitle: "Gizlilik ve profesyonellikle cinsel sağlık çözümleri",
      description:
        "En yeni teknolojiler ile cinsel sağlık ve yaşam kalitenizi artırın. Güvenli ve etkili tedavi seçenekleri.",
      image: "src/assets/HomeImages/sacImage.png",
    },
  };

  return (
    <>
      {/* Treatment Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900">
              Her Tedavi İçin Doğru Çözüm
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <div className="flex gap-8 max-w-4xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-4 text-base font-medium transition-all relative ${
                    activeTab === tab.id
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="p-12 text-white">
                  <h3 className="text-3xl md:text-4xl font-light mb-4 text-amber-300">
                    {content[activeTab].title}
                  </h3>
                  <p className="text-lg font-medium mb-6 text-gray-200">
                    {content[activeTab].subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {content[activeTab].description}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                      Daha Fazla Bilgi
                    </button>
                    <button className="text-white border-b-2 border-white hover:border-amber-300 transition-colors font-medium">
                      Tüm Ürünleri Keşfet
                    </button>
                  </div>
                </div>
                {/* Image */}
                <div className="h-full min-h-[400px] bg-gray-600">
                  <img
                    src={content[activeTab].image}
                    alt={content[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="h-full min-h-[400px] rounded-2xl">
                <img
                  src="src/assets/HomeImages/mapImage.png"
                  alt={content[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Contact Text */}
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6 leading-tight">
                  Bizimle iletişime geçin, mükemmel eşleşmenizi bulmanıza
                  yardımcı olmaktan mutluluk duyarız
                </h3>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3.5 rounded-full font-medium transition-colors">
                  İletişime Geç
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
