import React, { useState } from "react";

export default function SpecialistShowcase() {
  const [isDark, setIsDark] = useState(true);

  // Aesthemirage theme colors
  const darkColors = {
    bg: "#0e1321",
    bgLeft: "#090e1c",
    text: "#dee2f7",
    textSecondary: "#c1c6d4",
    accent: "#e6c364",
    primaryGradient: "linear-gradient(to right, #a7c8ff, #4a92ee)",
    primaryText: "#002a54",
    inputBg: "#ffffff",
    inputText: "#0e1321",
    inputPlaceholder: "rgba(14, 19, 33, 0.4)",
    borderLight: "rgba(230, 195, 100, 0.3)",
    glassPanel: "rgba(47, 52, 68, 0.6)",
    glassBorder: "rgba(65, 71, 82, 0.15)",
    accentLight: "rgba(230, 195, 100, 0.15)",
  };

  const lightColors = {
    bg: "#f5f5f5",
    bgLeft: "#faf9f5",
    text: "#1a1a1a",
    textSecondary: "#4a4a4a",
    accent: "#d4a142",
    primaryGradient: "linear-gradient(to right, #5b9fff, #2978d8)",
    primaryText: "#faf9f5",
    inputBg: "#f0f0f0",
    inputText: "#1a1a1a",
    inputPlaceholder: "rgba(26, 26, 26, 0.4)",
    borderLight: "rgba(212, 161, 66, 0.3)",
    glassPanel: "rgba(255, 255, 255, 0.9)",
    glassBorder: "rgba(200, 200, 200, 0.4)",
    accentLight: "rgba(212, 161, 66, 0.12)",
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <div
      style={{ backgroundColor: colors.bg, color: colors.text }}
      className="min-h-screen transition-colors duration-300"
    >
      {/* Theme Toggle Button */}
      <div className="fixed top-32 right-6 z-40">
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            backgroundColor: colors.accentLight,
            border: `2px solid ${colors.accent}`,
            color: colors.accent,
          }}
          className="px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          {isDark ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              Light
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 2.707a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2 2a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm1.414 4.293a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zm-2 2a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm1.414 4.293a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM9 2.793a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414L9 2.793zM3 9a1 1 0 100-2H2a1 1 0 000 2h1zm5.168-4.332a1 1 0 10-1.414-1.414L2.293 8.586a1 1 0 001.414 1.414L8.168 4.668z"
                  clipRule="evenodd"
                />
              </svg>
              Dark
            </>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Doctor Image */}
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${colors.accent}20, ${colors.primaryText}20)`,
              }}
            ></div>
            <div
              className="relative rounded-2xl overflow-hidden p-1 transition-colors duration-300"
              style={{
                backgroundColor: isDark ? "#1a1f2e" : "#faf9f5",
                border: `2px solid ${colors.borderLight}`,
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATxbYn_ycGk9SYembIJSU-A-sJZTOFyAA1Lw4E8NmbC9fdDpoWoq1UPDJBSkhJboi7cQjmfMeW5O8hn-2nfGqaJqAh5cKfoogGrOUXVd3EE77TiyB5F05C2LWKVxbwY59GU8HZOVyxCX3LbGbQxYEXwOkUA6B0EFnPCD-QIyS3fMSs3aPetTNXmmSuWG0dCkcKUCHMCvO9dT2DucoeC08jlnq2V7DQDX3twq1XPzzvyzbNwdlWDrmkjZ25IHN3_c5X9FAbfNVBVjE5"
                alt="Doktor"
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Verified Badge */}
            <div
              className="absolute -bottom-4 -right-4 text-white p-4 rounded-xl shadow-2xl transition-colors duration-300"
              style={{
                backgroundColor: colors.accent,
                border: `2px solid ${colors.accentLight}`,
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Right - Doctor Info */}
          <div className="space-y-8">
            {/* Rating */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      style={{ color: colors.accent }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span
                  className="text-sm"
                  style={{ color: colors.textSecondary }}
                >
                  4.9 (124 İnceleme)
                </span>
              </div>
              <span
                className="inline-block text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-300"
                style={{
                  color: colors.accent,
                  backgroundColor: colors.accentLight,
                  border: `1px solid ${colors.borderLight}`,
                }}
              >
                DOĞRULANMIŞ MÜKEMMELLIK
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1
                className="text-5xl lg:text-6xl font-light tracking-tight"
                style={{ color: colors.text }}
              >
                Prof. Dr. Adrian Sterling
              </h1>
              <p
                className="text-xl font-light transition-colors duration-300"
                style={{ color: colors.accent }}
              >
                Rejeneratif Estetik Alanında Uzman
              </p>
            </div>

            {/* Location & Languages */}
            <div className="inline-flex flex-wrap gap-3 pt-4">
              <div
                className="flex items-center gap-3"
                style={{ color: colors.textSecondary }}
              >
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-300"
                  style={{
                    color: colors.text,
                    backgroundColor: colors.glassPanel,
                    border: `1px solid ${colors.glassBorder}`,
                  }}
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    style={{ color: colors.accent }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Harley Street, Londra
                </span>
              </div>
              <div
                className="flex items-center gap-3"
                style={{ color: colors.textSecondary }}
              >
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-300"
                  style={{
                    color: colors.text,
                    backgroundColor: colors.glassPanel,
                    border: `1px solid ${colors.glassBorder}`,
                  }}
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    style={{ color: colors.accent }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  İngilizce, Fransızca, İtalyanca
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-8">
              <button
                style={{ background: colors.primaryGradient }}
                className="text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Randevu Al
              </button>
              <button
                style={{
                  borderColor: colors.borderLight,
                  color: colors.accent,
                  backgroundColor: colors.accentLight,
                }}
                className="border px-8 py-4 rounded-lg font-semibold transition-all hover:opacity-80"
              >
                Takvimi Görüntüle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 space-y-16">
        {/* Clinical Philosophy */}
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="md:col-span-2 rounded-2xl p-12 transition-colors duration-300"
            style={{
              backgroundColor: colors.glassPanel,
              border: `1px solid ${colors.glassBorder}`,
            }}
          >
            <h2
              className="text-3xl font-light tracking-tight mb-6 flex items-center gap-4"
              style={{ color: colors.text }}
            >
              <span
                className="w-1 h-12"
                style={{
                  background: `linear-gradient(to bottom, ${colors.accent}, transparent)`,
                }}
              ></span>
              Klinik Felsefesi
            </h2>
            <div
              className="space-y-5 leading-relaxed text-lg"
              style={{ color: colors.textSecondary }}
            >
              <p>
                Dr. Adrian Sterling, rejeneratif estetik tıp alanında 20 yıldan
                fazla deneyime sahip öncü bir doktordur. Yüksek teknoloji
                yardımıyla insan vücudunu şekillendirme ve gençleştirme
                konusunda derin uzmanlığa sahiptir.
              </p>
              <p>
                Onun "Obsidyan Atelier" yaklaşımı, biyolojik hassasiyet ile
                sanatsal inceliğin kesişiminde yer alır. Her uygulamada doğal ve
                uyumlu sonuçlar elde etmek için titizlikle çalışır.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-8 transition-colors duration-300"
              style={{
                backgroundColor: isDark
                  ? "rgba(47, 52, 68, 0.6)"
                  : "rgba(255, 255, 255, 0.9)",
                border: `1px solid ${colors.borderLight}`,
              }}
            >
              <div className="space-y-8">
                <div>
                  <div
                    className="text-4xl font-light mb-2"
                    style={{ color: colors.accent }}
                  >
                    15 Bin+
                  </div>
                  <p
                    className="text-sm uppercase tracking-wide"
                    style={{ color: colors.textSecondary }}
                  >
                    Başarılı Prosedür
                  </p>
                </div>
                <div>
                  <div
                    className="text-4xl font-light mb-2"
                    style={{ color: colors.accent }}
                  >
                    22
                  </div>
                  <p
                    className="text-sm uppercase tracking-wide"
                    style={{ color: colors.textSecondary }}
                  >
                    Uluslararası Ödül
                  </p>
                </div>
                <div>
                  <div
                    className="text-4xl font-light mb-2"
                    style={{ color: colors.accent }}
                  >
                    98%
                  </div>
                  <p
                    className="text-sm uppercase tracking-wide"
                    style={{ color: colors.textSecondary }}
                  >
                    Hasta Memnuniyeti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-10 hover:opacity-80 transition-all duration-300"
            style={{
              backgroundColor: colors.glassPanel,
              border: `1px solid ${colors.glassBorder}`,
            }}
          >
            <div className="text-5xl mb-6">💎</div>
            <h3
              className="text-2xl font-light mb-4"
              style={{ color: colors.text }}
            >
              Nano-Moleküler Terapi
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              Cilt canlılığı için yerelleştirilmiş besin taşıma sistemleri
              kullanan ileri hücre yenilenmesi tekniklerine sahibiz.
            </p>
          </div>
          <div
            className="rounded-2xl p-10 hover:opacity-80 transition-all duration-300"
            style={{
              backgroundColor: colors.glassPanel,
              border: `1px solid ${colors.glassBorder}`,
            }}
          >
            <div className="text-5xl mb-6">✨</div>
            <h3
              className="text-2xl font-light mb-4"
              style={{ color: colors.text }}
            >
              Lazer Şekillendirme
            </h3>
            <p style={{ color: colors.textSecondary }}>
              Yüz hatlarını yeniden tanımlamak için yüksek hassasiyetli lazer
              mimarisi, hiç iyileşme süresi olmadan.
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div
        style={{ borderTopColor: colors.borderLight }}
        className="border-t transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2
            className="text-4xl font-light text-center mb-16 tracking-tight"
            style={{ color: colors.text }}
          >
            Atelier'i Ziyaret Edin
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="relative rounded-2xl overflow-hidden h-80 md:h-full md:min-h-96"
              style={{ borderColor: colors.borderLight }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5K5DZjVrmQBY1mNb1E2NLIhsAYX-mbLnDXjTndYa4xYsQs6Il2_L8V-j7M2cUV_npxsw3e9qJ8WZJTUlE8YybNVS6sOfmFQoE2PkAZhWolBAUpwyGIrgjiGtozRu7-tilrFyFnRxgXfZA_55o0i41Blcu7R3JGt0NbwSvqu70zJEZZKRG_3-MtKVHEhfKhty8Kws1OsFGrpk14sFgycGmsbOWaXGGccl6ekgYTRq7cuFN0i-Jrb5Ym-9ipyQFN6AQco-K4jNHKyNj"
                alt="Klinik"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="space-y-8">
              <div>
                <h3
                  className="text-3xl font-light mb-4"
                  style={{ color: colors.text }}
                >
                  Harley Street Kliniği
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  Londra'nın en prestijli adreslerinden birinde yer alan
                  kliniğimiz, dünyaya açık kapılarıyla hastaları
                  karşılamaktadır. En yüksek standartlarda hizmet ve konfor
                  sunmaktayız.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    style={{ color: colors.accent }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold" style={{ color: colors.text }}>
                      127B West Wing, Royal Plaza
                    </p>
                    <p style={{ color: colors.textSecondary }}>Londra, W1G</p>
                  </div>
                </div>
              </div>
              <button
                style={{ background: colors.primaryGradient }}
                className="text-white px-8 py-4 rounded-lg font-semibold transition-all w-full sm:w-auto hover:opacity-90"
              >
                Yol Tarifi Göster
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div
          className="rounded-2xl p-12 transition-colors duration-300"
          style={{
            backgroundColor: colors.accentLight,
            border: `1px solid ${colors.borderLight}`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-2xl font-light mb-6"
                style={{ color: colors.text }}
              >
                Premium Üyelik
              </h3>
              <p
                className="mb-8 leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                Aesthemirage Tekniklerinin araştırması ve geliştirmesi için
                Global Estetik Kurulunun aktif üyesi olarak, dünyanın en ileri
                teknolojilerine erişimi mevcuttur.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    style={{ color: colors.accent }}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span style={{ color: colors.textSecondary }}>
                    Royal Medicine Üyesi
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    style={{ color: colors.accent }}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span style={{ color: colors.textSecondary }}>
                    Sertifikalı Cerrah
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-xl blur opacity-25"
                style={{ background: colors.primaryGradient }}
              ></div>
              <div
                className="relative rounded-xl p-8 text-center transition-colors duration-300"
                style={{
                  backgroundColor: colors.bg,
                  border: `1px solid ${colors.borderLight}`,
                }}
              >
                <div className="text-5xl mb-4">👑</div>
                <p
                  className="text-sm uppercase tracking-wider"
                  style={{ color: colors.textSecondary }}
                >
                  Elite Status
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
