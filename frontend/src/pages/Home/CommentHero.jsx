export default function CommentHero() {
  const testimonials = [
    {
      quote:
        "Aesthemirage ile çalışarak %20 daha fazla prosedür gerçekleştiriyoruz ve çok sayıda endikasyonu kapsıyoruz. Müşterilerimiz sonuçlardan son derece memnun.",
      name: "Dr. Ayşe Yılmaz",
      title: "Estetik Klinik Sahibi ve Kurucu",
      location: "İstanbul",
      initials: "AY",
    },
    {
      quote:
        "Aesthemirage ile 10 yılı aşkın süredir çalışıyoruz ve günlük bazda %100'den fazla büyüdük. Teknoloji uzun ömürlü sonuçlar sağlıyor.",
      name: "Dr. Mehmet Kaya",
      title: "Dermatoloji Uzmanı ve Yönetici Direktör",
      location: "ARDARA",
      initials: "MK",
    },
    {
      quote:
        "Hastalarıma kalite ve güvenlik açısından öne çıkan en yenilikçi kanıtlanmış teknolojileri sunmak istiyorum. Bu yüzden Aesthemirage'ı tercih ediyorum.",
      name: "Dr. Zeynep Demir",
      title: "Estetik Cerrah",
      location: "İzmir",
      initials: "ZD",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-3">
            Güzellik & İş
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-3 border-gold-100 hover:border-gold-200 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              {/* Quote — büyük ve bold, görseldeki gibi */}
              <p className="text-gray-800 font-bold text-2xl leading-snug mb-8">
                "{testimonial.quote}"
              </p>

              <div>
                {/* Author Info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-700 font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm font-bold text-gray-900">
                      - {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="bg-gold-100 hover:bg-gold-200 text-gray-900 font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">
                  Devamını Oku
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Button */}
        <div className="text-center">
          <button className="bg-navy-800 hover:bg-navy-700 text-gold-100 font-semibold px-10 py-3.5 rounded-full transition-colors text-base">
            Başarı Hikayeleri
          </button>
        </div>
      </div>
    </section>
  );
}
