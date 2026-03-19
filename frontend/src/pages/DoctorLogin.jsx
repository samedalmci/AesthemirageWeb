import { useState } from "react";

export default function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDark, setIsDark] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  // Dark theme colors
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

  // Light theme colors
  const lightColors = {
    bg: "#f5f5f5",
    bgLeft: "#ffffff",
    text: "#1a1a1a",
    textSecondary: "#4a4a4a",
    accent: "#d4a142",
    primaryGradient: "linear-gradient(to right, #5b9fff, #2978d8)",
    primaryText: "#ffffff",
    inputBg: "#f0f0f0",
    inputText: "#1a1a1a",
    inputPlaceholder: "rgba(26, 26, 26, 0.4)",
    borderLight: "rgba(212, 161, 66, 0.3)",
    glassPanel: "rgba(255, 255, 255, 0.9)",
    glassBorder: "rgba(200, 200, 200, 0.4)",
    accentLight: "rgba(212, 161, 66, 0.12)",
  };

  // Tema Renklerini seç
  const colors = isDark ? darkColors : lightColors;

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row overflow-hidden relative"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Tema Değiştirme Butonu */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 rounded-full transition-all hover:scale-110 duration-300"
        style={{
          background: colors.accentLight,
          color: colors.accent,
          border: `1px solid ${colors.borderLight}`,
        }}
        title={isDark ? "Açık Tema" : "Koyu Tema"}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "24px" }}
        >
          {isDark ? "light_mode" : "dark_mode"}
        </span>
      </button>

      {/* Sol Taraf: Giriş Formu */}
      <section
        className="w-full md:w-[45%] lg:w-[40%] flex flex-col px-8 md:px-16 lg:px-24 py-12 relative z-10"
        style={{ backgroundColor: colors.bgLeft }}
      >
        {/* Marka Logosu */}
        <div className="mb-20">
          <span
            className="text-2xl font-bold tracking-[-0.02em] font-headline"
            style={{ color: colors.accent }}
          >
            Aesthemirage
          </span>
        </div>

        {/* Form Başlığı */}
        <div className="space-y-3 mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight"
            style={{ color: colors.text }}
          >
            DOKTOR
            <br />
            PANELİ
          </h1>
          <p
            className="font-label uppercase tracking-widest text-xs"
            style={{ color: colors.textSecondary }}
          >
            Hesabınıza giriş yapın
          </p>
        </div>

        {/* Giriş Formu */}
        <form className="space-y-8 max-w-sm flex-1" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* E-Posta Alanı */}
            <div className="group">
              <label
                className="block text-xs font-label uppercase tracking-widest mb-2"
                style={{ color: colors.textSecondary }}
              >
                E-Posta
              </label>
              <input
                className="w-full border-none rounded-lg py-4 px-5 focus:ring-2 transition-all font-body text-base"
                placeholder="doktor@aesthemirage.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: colors.inputBg,
                  color: colors.inputText,
                }}
                onFocus={(e) => {
                  const ringColor = isDark
                    ? "rgba(167, 200, 255, 0.5)"
                    : "rgba(91, 159, 255, 0.5)";
                  e.target.style.boxShadow = `0 0 0 2px ${ringColor}`;
                }}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            {/* Şifre Alanı */}
            <div className="group">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block text-xs font-label uppercase tracking-widest"
                  style={{ color: colors.textSecondary }}
                >
                  Şifre
                </label>
                <a
                  className="text-xs font-label hover:opacity-80 transition-opacity"
                  href="#"
                  style={{ color: colors.accent }}
                >
                  Şifremi Unuttum?
                </a>
              </div>
              <input
                className="w-full border-none rounded-lg py-4 px-5 focus:ring-2 transition-all font-body text-base"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  backgroundColor: colors.inputBg,
                  color: colors.inputText,
                }}
                onFocus={(e) => {
                  const ringColor = isDark
                    ? "rgba(167, 200, 255, 0.5)"
                    : "rgba(91, 159, 255, 0.5)";
                  e.target.style.boxShadow = `0 0 0 2px ${ringColor}`;
                }}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>
          </div>

          {/* Gönder Butonu */}
          <div className="pt-4">
            <button
              className="w-full py-4 rounded-full font-bold text-base tracking-wide shadow-xl uppercase hover:scale-[1.02] active:scale-95 transition-all duration-300"
              type="submit"
              style={{
                background: colors.primaryGradient,
                boxShadow: isDark
                  ? "0 20px 25px -5px rgba(167, 200, 255, 0.1)"
                  : "0 20px 25px -5px rgba(91, 159, 255, 0.15)",
                color: colors.primaryText,
              }}
            >
              Giriş Yap
            </button>
          </div>
        </form>

        {/* Mobil Kayıt Ol */}
        <div className="mt-auto pt-12 text-center md:hidden">
          <p
            className="text-sm font-label mb-4"
            style={{ color: colors.textSecondary }}
          >
            Henüz üye değil misiniz?
          </p>
          <button
            className="text-sm font-bold uppercase tracking-widest px-8 py-3 rounded-full border transition-colors hover:opacity-80"
            style={{
              color: colors.accent,
              borderColor: colors.borderLight,
            }}
          >
            Kayıt Ol
          </button>
        </div>
      </section>

      {/* Sağ Taraf: Bilgi/İllüstrasyon */}
      <section
        className="hidden md:flex flex-1 relative overflow-hidden items-center justify-center"
        style={{ backgroundColor: colors.bg }}
      >
        {/* Arka Plan Resmi ve Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="High-tech modern clinical environment"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnilDjnC4FdHyHcUkG4HEH4cHt0exwQCMJY-Sq6AsmGfFHHHXWgZajH7v8rBP7TTnCbHj6FtSofk88JNgG-0Cx7a27JcDKxH-2tS8rZNGtYtIaem2RN7MU27oy9PdlwY-PB5naMN4uvJh88v7yk9YypP-BMy4n3oAqRVXdrerMUfGhPWwGViWL9SEsn9mw0_QnU0TbeSgSGXDeo05Maw6UcOJ6DEjsY_TrTUkQhqCk4Rv75ipKXIbZCBd5MsKXXM3JrzzdFUzNxquw"
            style={{ opacity: isDark ? 0.3 : 0.1 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? "linear-gradient(to right, #0e1321 0%, rgba(14, 19, 33, 0.8) 50%, transparent 100%)"
                : "linear-gradient(to right, #f5f5f5 0%, rgba(245, 245, 245, 0.9) 50%, transparent 100%)",
            }}
          ></div>
        </div>

        {/* İçerik Overlay */}
        <div className="relative z-10 max-w-xl px-12 text-center md:text-left space-y-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold font-headline leading-tight">
              <span style={{ color: isDark ? "#ffffff" : colors.text }}>
                Aesthemirage{" "}
              </span>
              <br />
              <span style={{ color: colors.accent }}>Partnerisiniz</span>
            </h2>
            <p
              className="text-lg font-light leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              Aesthemirage Doktor Paneli, Türkiye'nin en seçkin estetik
              cerrahları ve klinikleri için özel olarak tasarlanmıştır. Dijital
              dönüşümün lüksle buluştuğu noktada hastalarınızı yönetin.
            </p>
          </div>

          {/* Doktor İstatistikleri */}
          <div className="flex items-center gap-8 pt-6">
            <div className="flex -space-x-3">
              <img
                alt="Doctor profile"
                className="w-12 h-12 rounded-full border-2 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuNUbLeWk_7qWmEXst32-WoNoNa8ZLyt9DIoCZBtNbQCwb6zgG_BTtVHiv4BuevoVu8CTmeI7v3aUGhKPF5_Hv1XjoRYCBB66asAksFj_hddmB5uIgrGzM7iw5TOWowtWIfEveGuJ7qT9rHh4zkUlcttn3GFfZ2c4917mhfPiE_Z7o-spCdh8TA4OK5FXwrKwXMQYmWdVhYEML_ff43icCsk69YxaQSKZ9eCnHGzK1JcTDaxT67exsSGGZUQ0p8WLZPwpRUcqDm0KZ"
                style={{ borderColor: colors.bg }}
              />
              <img
                alt="Doctor profile"
                className="w-12 h-12 rounded-full border-2 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApRcrmMWt0VEhGFNNcL_Pwpibpd-71vA4BmI6CyvoNurnQAuVqOobYVsP-6j8q5Ypuskm4B1WY-_xLjovXXagNpVZhGGoKH5BF9_8Jh2TJLeJ9KV7TG4HeA3VsNZFqAoIrGX7eHuHXFdLe6Nf61d68_8zTGWdruccNLXf9RxC8VUpkhjuSz2ZXJ1NUJOcg2C01YHwK2iuIEJ5qmYL3-dU4B6Z9r4rvbmcVWRRNrIug2UlOYnXwCwVC0NTDmtLfLuTofkNRJlagvn6G"
                style={{ borderColor: colors.bg }}
              />
              <img
                alt="Doctor profile"
                className="w-12 h-12 rounded-full border-2 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8JK7VSIWFBa1sCsc7sZAiIRz0w3UZCXVqROP-5KONibImdk2WAl730DjO3lFzD1kDgcvHdF5MVHOVd5PR67CUjn-BxnkNTDIgwKGvF3ozjui9AuwJuCafuAZ7tMv1u-ckG8lI3F1UEXnZeF4mLE0-Z1O_ajSYozxnRuwQQgSIFXJE6HlZes-HRog25mEbfekNuUV90Yjtx0yyUoZbJxk44TEctNmI25LEcbND9p06Dpdrt0TmfjdqsvyBWbRpr587A7i_4zx0NEi"
                style={{ borderColor: colors.bg }}
              />
            </div>
            <div
              className="text-sm font-label uppercase tracking-widest font-bold"
              style={{ color: colors.accent }}
            >
              500+ Seçkin
              <br />
              Ortak
            </div>
          </div>

          {/* Kayıt Ol Butonu */}
          <div className="pt-8">
            <button
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-500 border"
              style={{
                color: colors.accent,
                borderColor: colors.borderLight,
              }}
            >
              <span>Kayıt Ol</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Doğrulanmış Badge */}
        <div
          className="absolute bottom-12 right-12 p-6 rounded-2xl border flex items-center gap-4 max-w-xs"
          style={{
            background: colors.glassPanel,
            backdropFilter: "blur(20px)",
            borderColor: colors.glassBorder,
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: colors.accentLight,
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: colors.accent,
                fontSize: "20px",
                fontVariationSettings: "'FILL' 1",
              }}
            >
              verified
            </span>
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-tighter"
              style={{ color: colors.accent }}
            >
              Verified Specialist
            </p>
            <p
              className="text-[10px] font-label"
              style={{ color: colors.textSecondary }}
            >
              Tüm kliniklerimiz 24-nokta kalite kontrolünden geçmektedir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
