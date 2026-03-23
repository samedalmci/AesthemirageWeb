import React, { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  Users,
  BarChart3,
  Plus,
  Settings,
  HelpCircle,
  Bell,
  MessageCircle,
  LogOut,
  UserCircle,
} from "lucide-react";
import DocDashboard from "./DocDashboard.jsx";
import DocAppointments from "./DocAppointments.jsx";
import DocPatients from "./DocPatients.jsx";
import DocAnalytics from "./DocAnalytics.jsx";
import DocProfile from "./DocProfile.jsx";

export default function MainDocPanel() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Aesthemirage renk paletesi
  const darkColors = {
    bg: "#0e1321",
    text: "#dee2f7",
    textSecondary: "#c1c6d4",
    accent: "#e6c364",
    primaryGradient: "linear-gradient(to right, #a7c8ff, #4a92ee)",
    surface: "rgba(47, 52, 68, 0.6)",
    surfaceLight: "rgba(65, 71, 82, 0.15)",
  };

  const lightColors = {
    bg: "#f7f9fb",
    text: "#191c1e",
    textSecondary: "#414752",
    accent: "#005cad",
    primaryGradient: "linear-gradient(to right, #2275d0, #005cad)",
    surface: "#ffffff",
    surfaceLight: "rgba(193, 198, 212, 0.2)",
  };

  const colors = isDark ? darkColors : lightColors;

  // Icon mapping
  const getIconComponent = (iconName) => {
    const iconMap = {
      dashboard: LayoutDashboard,
      appointments: Calendar,
      patients: Users,
      analytics: BarChart3,
    };
    return iconMap[iconName];
  };

  // Sidebar menü öğeleri
  const menuItems = [
    { id: "dashboard", label: "Kontrol paneli", icon: "dashboard" },
    { id: "appointments", label: "Randevular", icon: "appointments" },
    { id: "patients", label: "Hastalar", icon: "patients" },
    { id: "analytics", label: "Analiz ve Raporlar", icon: "analytics" },
  ];

  // Aktif bölümü render et
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DocDashboard colors={colors} />;
      case "appointments":
        return <DocAppointments colors={colors} />;
      case "patients":
        return <DocPatients colors={colors} />;
      case "analytics":
        return <DocAnalytics colors={colors} />;
      default:
        return <DocDashboard colors={colors} />;
    }
  };

  return (
    <div
      style={{ backgroundColor: colors.bg, color: colors.text }}
      className="min-h-screen transition-colors duration-300"
    >
      {/* Light/Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            backgroundColor: colors.surface,
            border: `2px solid ${colors.accent}`,
            color: colors.accent,
          }}
          className="px-4 py-2 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 text-sm"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="flex h-screen">
        {/* Sidebar Navigation */}
        <aside
          style={{
            backgroundColor: colors.surface,
            borderRightColor: colors.surfaceLight,
          }}
          className="w-64 border-r flex flex-col py-8 px-4 overflow-y-auto"
        >
          {/* Logo Bölümü */}
          <div className="mb-10 px-2">
            <h1
              style={{ color: colors.accent }}
              className="text-xl font-bold tracking-tight"
            >
              Aesthemirage Klinik
            </h1>
            <p
              style={{ color: colors.textSecondary }}
              className="text-sm font-medium mt-1"
            >
              Aesthemirage Doktor Paneli
            </p>
          </div>

          {/* Navigasyon Menüsü */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    backgroundColor:
                      activeTab === item.id ? colors.accent : "transparent",
                    color:
                      activeTab === item.id ? colors.bg : colors.textSecondary,
                    borderRightColor:
                      activeTab === item.id ? colors.accent : "transparent",
                  }}
                  className="w-full flex items-center px-4 py-3 rounded-lg border-r-4 transition-colors hover:opacity-80 text-left"
                >
                  <IconComponent className="mr-3" size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Alt Bölüm Aksiyon Butonları */}
          <div className="space-y-3 mt-auto">
            <button
              style={{ background: colors.primaryGradient }}
              className="w-full py-3 px-4 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <Plus size={18} />
              Yeni Randevu
            </button>
            <button
              style={{
                color: colors.textSecondary,
                backgroundColor: "transparent",
              }}
              className="w-full flex items-center px-4 py-3 rounded-lg hover:opacity-80 transition-colors text-left"
            >
              <Settings className="mr-3" size={18} />
              <span className="text-sm font-medium">Ayarlar</span>
            </button>
            <button
              style={{
                color: colors.textSecondary,
                backgroundColor: "transparent",
              }}
              className="w-full flex items-center px-4 py-3 rounded-lg hover:opacity-80 transition-colors text-left"
            >
              <HelpCircle className="mr-3" size={18} />
              <span className="text-sm font-medium">Destek</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main
          style={{ backgroundColor: colors.bg }}
          className="flex-1 overflow-auto flex flex-col"
        >
          {/* Top Navigation Bar */}
          <header
            style={{
              backgroundColor: colors.surface,
              borderBottomColor: colors.surfaceLight,
            }}
            className="sticky top-0 border-b px-8 py-4 flex justify-between items-center z-40 flex-shrink-0"
          >
            {/* Arama Barı */}
            <div className="flex-1">
              <input
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text,
                  borderColor: colors.surfaceLight,
                }}
                type="text"
                placeholder="Hastalar veya tedaviler içinde ara..."
                className="w-96 px-4 py-2 rounded-full border text-sm focus:outline-none"
              />
            </div>

            {/* Sağ Taraf İkonlar */}
            <div className="flex items-center gap-6 ml-8">
              <button
                style={{ color: colors.textSecondary }}
                className="relative hover:opacity-80"
              >
                <Bell size={20} />
                <span
                  style={{ backgroundColor: colors.accent }}
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                ></span>
              </button>
              <button
                style={{ color: colors.textSecondary }}
                className="hover:opacity-80"
              >
                <MessageCircle size={20} />
              </button>

              {/* Ayırıcı */}
              <div
                style={{ backgroundColor: colors.surfaceLight }}
                className="h-6 w-px"
              ></div>

              {/* Doktor Profili */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="text-right">
                    <p
                      style={{ color: colors.text }}
                      className="text-sm font-bold"
                    >
                      Dr. Adrian
                    </p>
                    <p
                      style={{ color: colors.textSecondary }}
                      className="text-[10px] uppercase tracking-wider"
                    >
                      Başhekim
                    </p>
                  </div>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDitTaIcKCdtLAuipVdO-5WpXmrqemu_wDcIEJY5BQu6abHNabRMhYGvwnO0fb_J7_4u0UoyxuEkrPhzKmaqu_hH-AZ1dRtFb5xl3X1krqEXYH_cHSXYpuZDV9861h8phOrsjQybS35BoGj84jIMhlyGj1HBkV73GhvoyBWBJ7RAyqL7KC1ZDEO5wJQyvrOpMot6bs4ECYVTYYLC8svJAe8rDd_nDD9kOifbnl_p_Q6YA4xHEe8JOwfbXOEA1SM_SqyP1oc7KcRaSpQ"
                    alt="Doktor"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div
                    style={{
                      backgroundColor: colors.surface,
                      borderColor: colors.surfaceLight,
                    }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-lg border shadow-lg z-50"
                  >
                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        setIsProfileModalOpen(true);
                      }}
                      style={{
                        color: colors.text,
                        borderBottomColor: colors.surfaceLight,
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold hover:opacity-80 transition-opacity border-b"
                    >
                      <UserCircle size={18} />
                      Profil Düzenle
                    </button>
                    <a
                      href="/#"
                      onClick={() => setIsProfileOpen(false)}
                      style={{ color: "#ef4444" }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold hover:opacity-80 transition-opacity"
                    >
                      <LogOut size={18} />
                      Çıkış Yap
                    </a>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Dashboard İçeriği */}
          <div className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">{renderContent()}</div>
          </div>
        </main>
      </div>

      {/* Profile Modal */}
      <DocProfile
        colors={colors}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}
