import React from "react";
import {
  Calendar,
  UserPlus,
  DollarSign,
  Star,
  FileText,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  Eye,
} from "lucide-react";

export default function DocDashboard({ colors }) {
  // Mock data - Hasta randevuları
  const appointments = [
    {
      initials: "EK",
      name: "Esra Kozanoğlu",
      treatment: "Botoks Uygulaması",
      time: "10:30",
      status: "Onaylandı",
      statusColor: "green",
    },
    {
      initials: "MB",
      name: "Mert Başar",
      treatment: "Burun Estetiği Kontrol",
      time: "11:45",
      status: "Bekliyor",
      statusColor: "amber",
    },
    {
      initials: "SA",
      name: "Selin Aksoy",
      treatment: "Dermal Dolgu",
      time: "14:00",
      status: "Onaylandı",
      statusColor: "green",
    },
    {
      initials: "CD",
      name: "Can Demir",
      treatment: "Cilt Bakımı - PRP",
      time: "15:30",
      status: "Onaylandı",
      statusColor: "green",
    },
  ];

  // Mock data - Hasta aktiviteleri
  const activities = [
    {
      name: "İrem Yıldız",
      action: "laboratuvar sonuçlarını yükledi.",
      time: "10 Dakika Önce",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCHUA6tRkQaf0Yi9VPxYEbdEMwEe4zLLTGEYCFXaMeD5Oj70yz3Yjm8ZI6qx6U9j2VnC8DhdBOMpk19r5GNTx6uC3doac1ERliRoHFxTYSFKoCdCp-YP4KZRHxUYzrYj33El85hObNTswJTqHO3C9aIP75pyIv-F0xpvAuIjFoIg6xOR8mQdPGrcCztOTHSq1kxjFBIQzjz-bonXPnAZBPgxcAPhp5954HbcKVGWCuGzEvkP7hIKeK1v1bfBBRs7ejTIoGVdYtWzUxt",
      badge: "Sonuçları İncele",
      badgeColor: "blue",
    },
    {
      name: "Ahmet Yılmaz",
      action: "yeni bir randevu talebinde bulundu.",
      time: "2 Saat Önce",
      quote: "Burun estetiği sonrası ilk ay kontrolü için uygunluk arıyorum.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAUQKscSGGTb_i_ualfU-G1WoYnKgHr9-9TslJASZ0DNbmEUbES_KekrJYVfDc29sDKYpEUL8m-OXznPDgEjNj_n2E50iprMDgSRWTBmcRAaQZhVl5sLdn-jz5VrwU5avjpxCsyTcky2FIwQQ69YRnCWKGcu9q6yU_Sr1HLf9DhzTO5rNXqMruJMshvaEiAuPVUz0fHanRVdBhx-24VyKvJ_MEO2s162zLMj2LmqYr6hYgh4FV_TmgJX9bnBLEX7I-S168caDDLociA",
    },
    {
      name: "Ceren Arda",
      action: "tedavi planını onayladı.",
      time: "4 Saat Önce",
      badge: "Ödeme Bekleniyor",
      badgeColor: "green",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAe_FaC-bwLXr9cidWhs5UbsnNuCcldn0f6dKxHDZ5X-Ud__NrtDU6uVh7cn0c1CCiDwugsxQceAVugjWgbDzZm8Hb4DdqK0_jGxkWku31UQK5i1BLvPRcWFfhOePkN9axN9HZXq5PIibdD-eVnhidC8avnMWPsphsr0QZOv0r9dPYNY_GsIYi1IOGqr79jjTOhqy18prJ3bGLN8B1Yoy4gMJJ13rEI_IeWMZO34dIubANt5kkH8vai5ZULe7am3EQRCjWduwgbQeYp",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hoşgeldiniz Bölümü */}
      <section
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.surfaceLight,
        }}
        className="p-10 rounded-xl border relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2
            style={{ color: colors.text }}
            className="text-3xl font-bold mb-2"
          >
            Hoş Geldiniz, Dr. Adrian
          </h2>
          <p
            style={{ color: colors.textSecondary }}
            className="max-w-lg text-sm"
          >
            Aesthemirage Lucid paneline tekrar hoş geldiniz. Bugün planlanmış 12
            randevunuz ve 4 yeni kayıt talebiniz bulunuyor.
          </p>
        </div>
        <button
          style={{
            backgroundColor: colors.accent,
            color: colors.text,
          }}
          className="mt-6 px-6 py-2 rounded-xl font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:opacity-90"
        >
          <Calendar size={16} />
          Ajanda Görünümü
        </button>
      </section>

      {/* İstatistikler Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            Icon: Calendar,
            label: "Günlük Randevu",
            value: "12",
            color: colors.accent,
          },
          {
            Icon: UserPlus,
            label: "Yeni Hasta",
            value: "4",
            color: "#e6c364",
          },
          {
            Icon: DollarSign,
            label: "Toplam Kazanç",
            value: "₺42.500",
            color: "#22c55e",
          },
          {
            Icon: Star,
            label: "Memnuniyet Skoru",
            value: "4.9 / 5",
            color: "#f59e0b",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.surfaceLight,
            }}
            className="p-6 rounded-xl border flex items-center gap-5"
          >
            <div
              style={{
                backgroundColor: `${stat.color}20`,
                color: stat.color,
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center"
            >
              <stat.Icon size={24} />
            </div>
            <div>
              <p
                style={{ color: colors.textSecondary }}
                className="text-[11px] font-bold uppercase tracking-widest"
              >
                {stat.label}
              </p>
              <p
                style={{ color: colors.text }}
                className="text-2xl font-bold mt-1"
              >
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Randevular + Hızlı İşlemler */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Randevular Tablosu - 2/3 genişlik */}
        <div
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.surfaceLight,
          }}
          className="lg:col-span-2 rounded-xl border overflow-hidden"
        >
          <div
            style={{
              backgroundColor: colors.bg,
              borderBottomColor: colors.surfaceLight,
            }}
            className="p-6 border-b flex justify-between items-center"
          >
            <h3 style={{ color: colors.text }} className="text-lg font-bold">
              Yaklaşan Randevular
            </h3>
            <button
              style={{ color: colors.accent }}
              className="text-xs font-bold uppercase tracking-wider hover:underline"
            >
              Tümünü Gör
            </button>
          </div>

          {/* Tablo */}
          <table className="w-full">
            <thead>
              <tr
                style={{
                  backgroundColor: colors.bg,
                  borderBottomColor: colors.surfaceLight,
                }}
                className="border-b"
              >
                {["Hasta Adı", "Tedavi", "Saat", "Durum"].map((header) => (
                  <th
                    key={header}
                    style={{ color: colors.textSecondary }}
                    className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-left"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottomColor: colors.surfaceLight,
                  }}
                  className="border-b hover:opacity-60 transition-opacity"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundColor: `${colors.accent}20`,
                          color: colors.accent,
                        }}
                        className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                      >
                        {appt.initials}
                      </div>
                      <span
                        style={{ color: colors.text }}
                        className="text-sm font-semibold"
                      >
                        {appt.name}
                      </span>
                    </div>
                  </td>
                  <td
                    style={{ color: colors.textSecondary }}
                    className="px-6 py-5 text-sm"
                  >
                    {appt.treatment}
                  </td>
                  <td
                    style={{ color: colors.text }}
                    className="px-6 py-5 text-sm font-medium"
                  >
                    {appt.time}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span
                      style={{
                        backgroundColor:
                          appt.statusColor === "green" ? "#dcfce7" : "#fef3c7",
                        color:
                          appt.statusColor === "green" ? "#166534" : "#92400e",
                      }}
                      className="px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-tight"
                    >
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hızlı İşlemler - 1/3 genişlik */}
        <div
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.surfaceLight,
          }}
          className="p-8 rounded-xl border"
        >
          <h3 style={{ color: colors.text }} className="text-lg font-bold mb-6">
            Hızlı İşlemler
          </h3>

          <div className="space-y-4">
            {[
              { Icon: UserPlus, label: "Yeni Kayıt", color: "blue" },
              { Icon: FileText, label: "Rapor Oluştur", color: "amber" },
              { Icon: MessageSquare, label: "Mesajlar", color: "green" },
            ].map((action) => (
              <button
                key={action.label}
                style={{
                  backgroundColor: colors.bg,
                  borderColor: colors.surfaceLight,
                }}
                className="w-full p-4 rounded-xl border flex items-center justify-between hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      backgroundColor:
                        action.color === "blue"
                          ? "#dbeafe"
                          : action.color === "amber"
                            ? "#fef3c7"
                            : "#dcfce7",
                      color:
                        action.color === "blue"
                          ? "#1e40af"
                          : action.color === "amber"
                            ? "#b45309"
                            : "#16a34a",
                    }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <action.Icon size={20} />
                  </div>
                  <span
                    style={{ color: colors.text }}
                    className="text-sm font-bold"
                  >
                    {action.label}
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  style={{ color: colors.textSecondary }}
                  className="group-hover:opacity-100"
                />
              </button>
            ))}
          </div>

          {/* Günlük İpucu */}
          <div
            style={{ background: colors.primaryGradient }}
            className="mt-10 p-5 rounded-xl text-white"
          >
            <p className="text-xs uppercase tracking-widest opacity-80 mb-2">
              Günlük İpucu
            </p>
            <p className="text-sm font-medium leading-relaxed">
              Cilt analizi raporlarını otomatik olarak hastalarınıza mail
              yoluyla gönderebileceğinizi biliyor muydunuz?
            </p>
          </div>
        </div>
      </div>

      {/* Son Hasta Aktiviteleri */}
      <section>
        <h3
          style={{ color: colors.text }}
          className="text-xl font-bold mb-6 px-2"
        >
          Son Hasta Aktiviteleri
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.surfaceLight,
                borderLeftColor: colors.accent,
              }}
              className="p-5 rounded-xl border border-l-4 flex gap-4"
            >
              <img
                src={activity.image}
                alt="Hasta"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="space-y-1 flex-1">
                <p style={{ color: colors.text }} className="text-sm font-bold">
                  {activity.name}{" "}
                  <span style={{ color: colors.textSecondary }}>
                    {activity.action}
                  </span>
                </p>
                <p
                  style={{ color: colors.textSecondary }}
                  className="text-xs font-medium"
                >
                  {activity.time}
                </p>
                {activity.quote && (
                  <p
                    style={{ color: colors.textSecondary }}
                    className="text-xs italic mt-2"
                  >
                    "{activity.quote}"
                  </p>
                )}
                {activity.badge && (
                  <div
                    style={{
                      backgroundColor:
                        activity.badgeColor === "green" ? "#dcfce7" : "#dbeafe",
                      color:
                        activity.badgeColor === "green" ? "#166534" : "#1e40af",
                    }}
                    className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium"
                  >
                    {activity.badgeColor === "green" ? (
                      <CheckCircle size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                    {activity.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
