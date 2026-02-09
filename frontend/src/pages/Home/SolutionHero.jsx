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
      image: "/api/placeholder/600/400",
    },
    body: {
      title: "Vücut Şekillendirme Çözümleri",
      subtitle: "Modern vücut konturlama ve sıkılaştırma teknolojileri",
      description:
        "Vücut şekillendirme ve cildi sıkılaştırma için en gelişmiş teknolojileri sunuyoruz. Non-invaziv yöntemlerle istediğiniz vücut hatlarına kavuşun.",
      image: "/api/placeholder/600/400",
    },
    hair: {
      title: "Saç Tedavileri",
      subtitle: "Saç dökülmesi ve saç bakımı için etkili çözümler",
      description:
        "En son saç tedavi teknolojileri ile saç dökülmesini durdurun ve sağlıklı saçlara kavuşun. Klinik olarak kanıtlanmış sonuçlar.",
      image: "/api/placeholder/600/400",
    },
    wellness: {
      title: "Cinsel Sağlık",
      subtitle: "Gizlilik ve profesyonellikle cinsel sağlık çözümleri",
      description:
        "En yeni teknolojiler ile cinsel sağlık ve yaşam kalitenizi artırın. Güvenli ve etkili tedavi seçenekleri.",
      image: "/api/placeholder/600/400",
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
              {/* Map Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12 relative overflow-hidden">
                  {/* Simple map illustration with pins */}
                  <div className="relative h-80">
                    {/* World map silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg
                        viewBox="0 0 400 200"
                        className="w-full h-full"
                        fill="currentColor"
                      >
                        <path d="M50,50 Q100,30 150,50 T250,50 T350,70 L350,150 Q300,130 250,150 T150,150 T50,130 Z" />
                      </svg>
                    </div>
                    {/* Location pins */}
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="absolute top-2/3 right-1/4 w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
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
