import { Users, Building2, Heart, Award, Calendar } from "lucide-react";
import CountUp from "react-countup";

export default function StatisticsHero() {
  const stats = [
    { icon: Users, label: "UZMAN DOKTORLAR", value: 150, suffix: "+" },
    { icon: Building2, label: "GLOBAL KLİNİKLER", value: 25, suffix: "" },
    { icon: Heart, label: "MUTLU HASTALAR", value: 8, suffix: "k+" }, // 8k+ için
    { icon: Award, label: "AKADEMİ EĞİTİM", value: 12, suffix: "" },
    { icon: Calendar, label: "YIL TECRÜBE", value: 10, suffix: "+" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-800 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                {/* Icon */}
                <div className="mb-5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                    <Icon className="w-6 h-6 text-gold-100" />
                  </div>
                </div>

                {/* Label */}
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  {stat.label}
                </p>

                {/* Animated Value */}
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
