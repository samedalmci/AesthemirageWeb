import { useState } from "react";
import { Sun, Moon, Star, Lock } from "lucide-react";

export default function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  // Dark theme colors
  const darkColors = {
    bg: "#0e1321",
    bgLeft: "#090e1c",
    text: "#dee2f7",
    textSecondary: "#c1c6d4",
    outline: "#8b919d",
    outlineVariant: "#414752",
    accent: "#e6c364",
    accentLight: "rgba(230, 195, 100, 0.15)",
    primary: "#a7c8ff",
    primaryContainer: "#4a92ee",
    primaryText: "#002a54",
    surfaceContainerLowest: "#090e1c",
    surfaceContainerLow: "#161b2a",
    surface: "#0e1321",
  };

  // Light theme colors
  const lightColors = {
    bg: "#ffffff",
    bgLeft: "#f5f5f5",
    text: "#1a1a1a",
    textSecondary: "#4a4a4a",
    outline: "#8b919d",
    outlineVariant: "#d0d0d0",
    accent: "#d4a142",
    accentLight: "rgba(212, 161, 66, 0.12)",
    primary: "#5b9fff",
    primaryContainer: "#2978d8",
    primaryText: "#ffffff",
    surfaceContainerLowest: "#f5f5f5",
    surfaceContainerLow: "#faf9f5",
    surface: "#ffffff",
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row overflow-hidden relative"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-4 right-4 z-50 p-3 rounded-full transition-all hover:scale-110"
        style={{
          backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
          color: colors.accent,
        }}
        title={isDark ? "Light Mode" : "Dark Mode"}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Left Panel: Login Form */}
      <section
        className="w-full md:w-5/12 lg:w-4/12 flex items-center justify-center p-8 md:p-16"
        style={{ backgroundColor: colors.surfaceContainerLowest }}
      >
        <div className="w-full max-w-md space-y-12">
          {/* Header */}
          <header className="space-y-2">
            <h1
              className="text-4xl font-headline font-extrabold tracking-tight"
              style={{ color: colors.text }}
            >
              Doktor Paneli
            </h1>
            <p
              className="font-body text-base"
              style={{ color: colors.textSecondary }}
            >
              Hesabınıza giriş yapın
            </p>
          </header>

          {/* Login Form */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Email Field */}
              <div className="group">
                <label
                  className="block text-xs font-label uppercase tracking-widest mb-2 transition-colors"
                  style={{ color: colors.outline }}
                >
                  E-posta
                </label>
                <input
                  type="email"
                  placeholder="doktor@aesthemirage.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b py-3 px-0 text-base focus:ring-0 outline-none transition-all"
                  style={{
                    color: colors.text,
                    borderColor: colors.outlineVariant,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.accent;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.outlineVariant;
                  }}
                />
              </div>

              {/* Password Field */}
              <div className="group">
                <label
                  className="block text-xs font-label uppercase tracking-widest mb-2 transition-colors"
                  style={{ color: colors.outline }}
                >
                  Şifre
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-0 border-b py-3 px-0 text-base focus:ring-0 outline-none transition-all"
                  style={{
                    color: colors.text,
                    borderColor: colors.outlineVariant,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.accent;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.outlineVariant;
                  }}
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 rounded-sm accent-current"
                  style={{
                    backgroundColor: colors.surfaceContainerLow,
                    borderColor: colors.outlineVariant,
                  }}
                />
                <span style={{ color: colors.textSecondary }}>Beni Hatırlat</span>
              </label>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity underline underline-offset-4"
                style={{ color: colors.accent }}
              >
                Şifremi Unuttum
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-5 rounded-full font-headline font-bold text-sm uppercase tracking-widest shadow-lg active:scale-95 transition-all duration-300 hover:shadow-xl"
              style={{
                background: `linear-gradient(to right, ${colors.primaryContainer}, ${colors.primary})`,
                color: colors.primaryText,
              }}
            >
              Giriş Yap
            </button>
          </form>

          {/* Security Footer */}
          <div
            className="pt-8 border-t flex items-center justify-center gap-2 text-xs uppercase tracking-tighter"
            style={{
              borderColor: colors.outlineVariant,
              color: colors.outline,
            }}
          >
            <Lock size={16} />
            Güvenli Giriş Paneli
          </div>
        </div>
      </section>

      {/* Right Panel: Branding */}
      <section
        className="hidden md:flex flex-1 relative overflow-hidden items-center justify-center p-12"
        style={{ backgroundColor: colors.surface }}
      >
        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{
              background: `${colors.primary}20`,
            }}
          ></div>
          <div
            className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px]"
            style={{
              background: `${colors.accent}10`,
            }}
          ></div>
        </div>

        {/* Image Layer */}
        <div className="absolute inset-0 z-1 opacity-30 grayscale mix-blend-luminosity">
          <img
            alt="High-tech modern clinical environment"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnilDjnC4FdHyHcUkG4HEH4cHt0exwQCMJY-Sq6AsmGfFHHHXWgZajH7v8rBP7TTnCbHj6FtSofk88JNgG-0Cx7a27JcDKxH-2tS8rZNGtYtIaem2RN7MU27oy9PdlwY-PB5naMN4uvJh88v7yk9YypP-BMy4n3oAqRVXdrerMUfGhPWwGViWL9SEsn9mw0_QnU0TbeSgSGXDeo05Maw6UcOJ6DEjsY_TrTUkQhqCk4Rv75ipKXIbZCBd5MsKXXM3JrzzdFUzNxquw"
          />
        </div>

        {/* Content Card */}
        <div className="relative z-10 w-full max-w-2xl">
          <div
            className="backdrop-blur-3xl p-12 lg:p-16 rounded-[2.5rem] border space-y-8"
            style={{
              backgroundColor: isDark
                ? "rgba(22, 27, 42, 0.4)"
                : "rgba(255, 255, 255, 0.8)",
              borderColor: isDark
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.1)",
              boxShadow: `0 0 15px ${colors.accent}20`,
            }}
          >
            {/* Verified Specialist Badge */}
            <div
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] font-bold"
              style={{
                backgroundColor: colors.accentLight,
                color: colors.accent,
              }}
            >
              <Star size={14} />
              Verified Specialist
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2
                className="text-5xl lg:text-6xl font-headline font-extrabold tracking-tight leading-tight"
                style={{ color: colors.text }}
              >
                Aesthemirage
                <br />
                <span style={{ color: colors.accent }}>Partnerisiniz</span>
              </h2>
              <p
                className="text-lg font-light leading-relaxed max-w-lg"
                style={{ color: colors.textSecondary }}
              >
                Aesthemirage Doktor Paneli, Türkiye'nin en seçkin estetik
                cerrahları ve klinikleri için özel olarak tasarlanmıştır. Dijital
                dönüşümün lüksle buluştuğu noktada hastalarınızı yönetin.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              {/* Signup Button */}
              <button
                className="px-10 py-4 rounded-full border font-headline font-bold text-sm uppercase tracking-widest hover:opacity-80 transition-all duration-300"
                style={{
                  color: colors.accent,
                  borderColor: colors.accent,
                }}
              >
                Kayıt Ol
              </button>

              {/* Doctor Avatars & Count */}
              <div
                className="flex items-center gap-4 sm:border-l sm:pl-8"
                style={{ borderColor: colors.outlineVariant }}
              >
                <div className="flex -space-x-3">
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                    style={{
                      borderColor: colors.surface,
                      backgroundColor: colors.surfaceContainerLow,
                      color: colors.text,
                    }}
                  >
                    D
                  </div>
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                    style={{
                      borderColor: colors.surface,
                      backgroundColor: colors.surfaceContainerLow,
                      color: colors.text,
                    }}
                  >
                    A
                  </div>
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                    style={{
                      borderColor: colors.surface,
                      backgroundColor: colors.accent,
                      color: isDark ? "#0e1321" : "#ffffff",
                    }}
                  >
                    +
                  </div>
                </div>
                <div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: colors.text }}
                  >
                    500+ Seçkin
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: colors.outline }}
                  >
                    Ortak
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
