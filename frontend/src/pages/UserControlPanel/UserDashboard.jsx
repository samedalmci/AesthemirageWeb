import {
  Calendar,
  MapPin,
  Stethoscope,
  CheckCircle,
  Clock,
  ChevronRight,
  Sparkles,
  Droplets,
  Leaf,
  Scissors,
  Search,
} from "lucide-react";

export default function UserDashboard({ colors }) {
  const appointments = [
    {
      id: 1,
      title: "Mezoterapi Uygulaması",
      doctor: "Dr. Selin Ergun",
      date: "04 Tem",
      time: "14:30",
      status: "confirmed",
      statusLabel: "Onaylandı",
    },
    {
      id: 2,
      title: "Lazer Epilasyon (Paket)",
      doctor: "Uzm. Dr. Emre Akın",
      date: "12 Ağu",
      time: "11:00",
      status: "pending",
      statusLabel: "Beklemede",
    },
  ];

  const treatments = [
    {
      id: 1,
      name: "Hydrafacial Deluxe",
      badge: "Yeni Teknoloji",
      description:
        "Cildinizi derinlemesine temizleyen, besleyen ve nemlendiren 7 aşamalı premium bakım deneyimi.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5VMhlPEz8pPcq8FvWU6ijxzcBFFc4pYFwLSPeoyC2TQ5gDiaUaQ650uH3Nulze4RkkvWOV7MAi7tPTWrf7pak2vxQsWCXa3KK9M1s_LEgcasoHAWXJec8mRzU52wQ1LvDRL37GEjWCN9MYqa6PQT9QFo8K7sLk5AfaIDt7f1d-k9x9vYgceNLBWlKDyL2-G08-YKXWNmRIVTxdqXkYMQb9y94KxlaVVhqUzmO4F8Ki37OenR9Z8kFYMA1iCUNaem0zs2KpekU64dG",
    },
    {
      id: 2,
      name: "Gold Therapy",
      badge: null,
      description:
        "24 ayar altın parçacıklarıyla cildinize anti-aging etkisi ve benzersiz bir ışıltı kazandırın.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEQda6sqDpP9d_LQTIXu-e2EWjjDu7-Ml6F5GUxvV9h0oHygGUsZb5qWkI2WPZb9m4wutBQ396KpsDPXt4nQMnc8NIFex5ckUcXrO10edVczOJo53V-g4PGMRhxi5tc8dPJqLk6vFWe4G-uFu6wvcraimeGtnB3vyCZcLe_rIuhgEXohx6yEnUo8eChXgy8bmiwbdO4zXgi9kmJe8sH2ixH8RqSiyDKeGFtMGh9qt7H__K1r3XcTnL6XyesuMPC1tCdy_caoPu-J5U",
    },
    {
      id: 3,
      name: "Oksijen Terapisi",
      badge: null,
      description:
        "Yorgun görünen cilde anında canlılık ve tazelik veren saf oksijen uygulaması.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAeSnxTk_22mtnjPJ-q7a_OzrC0Daz2132JKMvxXboJj09ao8otLZhcSRU_G450yWi2teBmxagf9OqIaIEDzKALiiL-DcKxbF5PO0jlcGyEzkL5RAE9zh1_J5XYuIePCY9KUmLaRfynZirz1TdE1DUlYTJ17qB_iQM9dm3DW-m4YA74g_gWk_aCHDulm_tKXk0Luyiu0Fe22CBgRDQU8iOopeD8ijfeyii1h_Q8WEQiP4TjBhIcBHHXbPDLAGbkRg7A8AxxPyOc_IzU",
    },
  ];

  const quickActions = [
    { icon: Sparkles, label: "Botox", color: "#e6c364" },
    { icon: Droplets, label: "Filler", color: "#e6c364" },
    { icon: Leaf, label: "Skin Care", color: "#e6c364" },
    { icon: Scissors, label: "Hair", color: "#e6c364" },
  ];

  return (
    <div className="space-y-12">
      {/* Welcome Section with AI Chat */}
      <section className="flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto">
        <div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight mb-3"
            style={{ color: colors.text }}
          >
            Hoş Geldin{" "}
            <span style={{ color: colors.accent }}>Deniz Helin.</span>
          </h2>
          <p
            className="text-lg font-light"
            style={{ color: colors.textSecondary }}
          >
            Bugün kendinize ayırdığınız vakit, gelecekteki ışıltınızın temeli.
          </p>
        </div>

        {/* AI Chat Box - Larger */}
        <div className="w-full max-w-2xl">
          <div className="relative group">
            <div
              className="absolute -inset-0.5 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"
              style={{
                background: `linear-gradient(to right, ${colors.accent}80, ${colors.primary}80)`,
              }}
            ></div>
            <div
              className="relative rounded-3xl flex items-center p-2 border"
              style={{
                backgroundColor: colors.surfaceContainerLow,
                borderColor: colors.outlineVariant,
              }}
            >
              <div
                className="p-4 rounded-2xl ml-2"
                style={{ backgroundColor: `${colors.accent}20` }}
              >
                <Sparkles size={24} style={{ color: colors.accent }} />
              </div>
              <input
                className="bg-transparent border-none focus:ring-0 text-base px-6 w-full outline-none"
                placeholder="Yapay zeka ile konuşun..."
                style={{ color: colors.text }}
              />
              <button
                className="text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-2xl transition-all mr-2"
                style={{
                  backgroundColor: `${colors.accent}20`,
                  color: colors.accent,
                }}
              >
                Sor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Next Appointment Card */}
        <div
          className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-3xl p-8 border-t"
          style={{
            backgroundColor: colors.surfaceContainerLow,
            borderColor: colors.accent,
          }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Calendar size={120} style={{ color: colors.accent }} />
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-8">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: colors.accent }}
              ></div>
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ color: colors.accent }}
              >
                Sıradaki Randevu
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h3
                  className="text-3xl font-headline font-bold mb-2"
                  style={{ color: colors.text }}
                >
                  Cilt Analizi & Derinlemesine Bakım
                </h3>
                <div
                  className="flex items-center gap-4 flex-wrap"
                  style={{ color: colors.textSecondary }}
                >
                  <div className="flex items-center gap-1.5">
                    <MapPin size={18} />
                    <span className="text-sm">Swiss Derma Clinic</span>
                  </div>
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: colors.outlineVariant }}
                  ></div>
                  <div className="flex items-center gap-1.5">
                    <Stethoscope size={18} />
                    <span className="text-sm">Dr. Arda Yılmaz</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="px-6 py-3 rounded-2xl text-center min-w-[100px]"
                  style={{ backgroundColor: colors.surfaceContainerHighest }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: colors.accent }}
                  >
                    12
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: colors.outline }}
                  >
                    Haziran
                  </p>
                </div>
                <div
                  className="px-6 py-3 rounded-2xl text-center min-w-[100px]"
                  style={{ backgroundColor: colors.surfaceContainerHighest }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: colors.text }}
                  >
                    09:00
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: colors.outline }}
                  >
                    Salı
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-10 pt-8 border-t flex gap-4"
              style={{ borderColor: colors.outlineVariant }}
            >
              <button
                className="px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all"
                style={{
                  backgroundColor: colors.text,
                  color: colors.bg,
                }}
              >
                Randevuyu Yönet
              </button>
              <button
                className="px-8 py-3 rounded-full font-bold text-sm border hover:opacity-80 transition-all"
                style={{
                  color: colors.text,
                  borderColor: colors.outlineVariant,
                }}
              >
                Detaylar
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                className="rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:opacity-80 transition-all border"
                style={{
                  backgroundColor: `${colors.accent}10`,
                  borderColor: `${colors.accent}30`,
                }}
              >
                <Icon size={40} style={{ color: colors.accent }} />
                <span
                  className="text-[11px] font-bold tracking-widest uppercase"
                  style={{ color: colors.text }}
                >
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Upcoming Appointments */}
        <div className="col-span-12 lg:col-span-7">
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <h4
                className="text-2xl font-headline font-bold"
                style={{ color: colors.text }}
              >
                Diğer Randevularım
              </h4>
              <p className="text-sm" style={{ color: colors.outline }}>
                Yaklaşan ziyaretlerinizin listesi
              </p>
            </div>
            <a
              className="text-[11px] font-bold tracking-widest uppercase hover:opacity-80 transition-opacity"
              href="#"
              style={{ color: colors.accent }}
            >
              Tümünü Gör
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="p-5 rounded-3xl flex items-center justify-between hover:opacity-90 transition-all border-l-2 cursor-pointer"
                style={{
                  backgroundColor: colors.surfaceContainerLow,
                  borderColor: colors.accent,
                }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center border"
                    style={{
                      backgroundColor: colors.surfaceContainerHighest,
                      borderColor: colors.outlineVariant,
                    }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: colors.accent }}
                    >
                      {apt.date.split(" ")[1]}
                    </span>
                    <span
                      className="text-xl font-bold"
                      style={{ color: colors.text }}
                    >
                      {apt.date.split(" ")[0]}
                    </span>
                  </div>
                  <div>
                    <h5
                      className="font-bold text-lg"
                      style={{ color: colors.text }}
                    >
                      {apt.title}
                    </h5>
                    <p
                      className="text-xs font-medium"
                      style={{ color: colors.outline }}
                    >
                      {apt.doctor} • {apt.time}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      {apt.status === "confirmed" ? (
                        <>
                          <CheckCircle
                            size={16}
                            style={{ color: colors.accent }}
                          />
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider"
                            style={{ color: colors.textSecondary }}
                          >
                            {apt.statusLabel}
                          </span>
                        </>
                      ) : (
                        <>
                          <Clock size={16} style={{ color: colors.accent }} />
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider"
                            style={{ color: colors.textSecondary }}
                          >
                            {apt.statusLabel}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className="p-3 rounded-full transition-all"
                  style={{
                    backgroundColor: colors.surfaceContainerHighest,
                  }}
                >
                  <ChevronRight size={20} style={{ color: colors.text }} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Clinic History */}
        <div className="col-span-12 lg:col-span-5 flex flex-col">
          <div className="mb-8 px-2">
            <h4
              className="text-2xl font-headline font-bold"
              style={{ color: colors.text }}
            >
              Klinik Geçmişi
            </h4>
            <p className="text-sm" style={{ color: colors.outline }}>
              Ziyaret ettiğiniz lokasyonlar
            </p>
          </div>

          <div
            className="flex-1 rounded-3xl overflow-hidden relative flex flex-col"
            style={{ backgroundColor: colors.surfaceContainerLow }}
          >
            {/* Map */}
            <div className="h-48 w-full relative group">
              <img
                alt="Map View"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCox8hgrXBHDpaZR91hdigU9R7tZHjtAsbAn8PRKGIrhey8OW3udp57LZo_cLxi1jdINHMygW0gCIGGtsERZNO2bQ43-vEBZgH4YqN3aDr2srvA0LaFF7bngT3AGRhfs6VcFqCJgZTSOkxKjhJG7GW6klXM1Iv97XPiR1ZwJS9MXD6AxMf2dKW7ugYhpOT5hbdoU5GgyxLogIzUkquuTRh3LAhEJAdHebCnCErN_-zWWejypSMSOyJXO-570eByJYfrs4kN6sF-1CYk"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${colors.surfaceContainerLow}, transparent)`,
                }}
              ></div>

              {/* Map Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-full animate-ping"
                    style={{ backgroundColor: `${colors.accent}30` }}
                  ></div>
                  <MapPin size={32} style={{ color: colors.accent }} />
                </div>
              </div>
            </div>

            {/* Clinic List */}
            <div className="p-6 flex flex-col gap-4">
              <div
                className="flex items-start gap-4 p-3 rounded-2xl"
                style={{
                  backgroundColor: `${colors.surfaceContainerHighest}80`,
                }}
              >
                <div
                  className="p-2 rounded-xl"
                  style={{ backgroundColor: `${colors.accent}20` }}
                >
                  <MapPin size={20} style={{ color: colors.accent }} />
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: colors.text }}
                  >
                    Swiss Derma Clinic
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: colors.outline }}
                  >
                    Levent, İstanbul • 3 Ziyaret
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-2xl hover:opacity-80 transition-opacity">
                <div
                  className="p-2 rounded-xl"
                  style={{ backgroundColor: `${colors.outlineVariant}20` }}
                >
                  <MapPin size={20} style={{ color: colors.outline }} />
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: colors.text }}
                  >
                    Nişantaşı Estetik Merkezi
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: colors.outline }}
                  >
                    Nişantaşı, İstanbul • 1 Ziyaret
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Treatments */}
      <section>
        <h4
          className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-center"
          style={{ color: colors.accent }}
        >
          Öne Çıkan Bakımlar
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="aspect-[4/5] relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                alt={treatment.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src={treatment.image}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${colors.bg}, ${colors.bg}30)`,
                }}
              ></div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                {treatment.badge && (
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-[9px] font-bold tracking-widest uppercase border"
                    style={{
                      backgroundColor: `${colors.accent}30`,
                      borderColor: `${colors.accent}50`,
                      color: colors.accent,
                    }}
                  >
                    {treatment.badge}
                  </div>
                )}

                <h5
                  className="text-3xl font-headline font-bold mb-2"
                  style={{ color: colors.text }}
                >
                  {treatment.name}
                </h5>
                <p
                  className="text-sm mb-6 line-clamp-2"
                  style={{ color: colors.textSecondary }}
                >
                  {treatment.description}
                </p>

                <div className="flex items-center justify-end">
                  <button
                    className="w-12 h-12 rounded-full flex items-center justify-center group-hover:opacity-80 transition-all"
                    style={{
                      backgroundColor: colors.text,
                      color: colors.bg,
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
