import { Users, Building2, Heart, Award, Calendar } from "lucide-react";

export default function StatisticsHero() {
  const stats = [
    {
      icon: Users,
      label: "UZMAN DOKTORLAR",
      value: "150",
      suffix: "+",
      detail: "+12% büyüme bu ay",
      detailColor: "text-green-600",
    },
    {
      icon: Building2,
      label: "GLOBAL KLİNİKLER",
      value: "25",
      suffix: "",
      detail: "Premium network durumu",
      detailColor: "text-violet-600",
    },
    {
      icon: Heart,
      label: "MUTLU HASTALAR",
      value: "8k",
      suffix: "+",
      detail: "96% memnuniyet oranı",
      detailColor: "text-green-600",
    },
    {
      icon: Award,
      label: "AKADEMİ EĞİTİM",
      value: "12",
      suffix: "",
      detail: "Gelişmiş sertifikasyonlar",
      detailColor: "text-violet-600",
    },
    {
      icon: Calendar,
      label: "YIL TECRÜBE",
      value: "10",
      suffix: "+",
      detail: "Köklü pazar lideri",
      detailColor: "text-violet-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-600 mb-2 tracking-widest uppercase">
            Premium
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-3">
            <span className="text-violet-600">İstatistikler</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Platform performansı & global erişim
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                    <Icon className="w-6 h-6 text-violet-600" />
                  </div>
                </div>

                {/* Label */}
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  {stat.label}
                </p>

                {/* Value */}
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  {stat.value}
                  <span className="text-violet-600">{stat.suffix}</span>
                </h3>

                {/* Detail */}
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium ${stat.detailColor}`}>
                    •
                  </span>
                  <p className={`text-xs font-medium ${stat.detailColor}`}>
                    {stat.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
