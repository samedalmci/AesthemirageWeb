import React, { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  Stethoscope,
  Sparkles,
  History,
  Settings,
  HelpCircle,
  Bell,
  Moon,
  Sun,
  Search,
  LogOut,
  User,
} from "lucide-react";
import UserDashboard from "./UserDashboard.jsx";
import FindSpecialist from "../find-specialist.jsx";
import UserTreatmentsHistory from "./UserTreatmentsHistory.jsx";
import UserAppointments from "./UserAppointments.jsx";

export default function MainUserPanel() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Aesthemirage renk paletesi
  const darkColors = {
    bg: "#0e1321",
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
    surfaceContainerHigh: "#252a39",
    surfaceContainerHighest: "#2f3444",
    surface: "#0e1321",
  };

  const lightColors = {
    bg: "#ffffff",
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
    surfaceContainerHigh: "#f0f0f0",
    surfaceContainerHighest: "#e8e8e8",
    surface: "#ffffff",
  };

  const colors = isDark ? darkColors : lightColors;

  // Icon mapping
  const getIconComponent = (iconName) => {
    const iconMap = {
      dashboard: LayoutDashboard,
      appointments: Calendar,
      doctors: Stethoscope,
      treatments: Sparkles,
      history: History,
    };
    return iconMap[iconName];
  };

  // Sidebar menü öğeleri
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "appointments", label: "Randevu Rezerve Et", icon: "appointments" },
    { id: "doctors", label: "Doktorlar", icon: "doctors" },
    { id: "treatments", label: "Bakımlar", icon: "treatments" },
    { id: "history", label: "Geçmişim", icon: "history" },
  ];

  // Aktif bölümü render et
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <UserDashboard colors={colors} />;
      case "appointments":
        return <UserAppointments colors={colors} />;
      case "doctors":
        return <FindSpecialist />;
      case "treatments":
        return <UserTreatmentsHistory colors={colors} />;
      case "history":
        return <UserTreatmentsHistory colors={colors} />;
      default:
        return <UserDashboard colors={colors} />;
    }
  };

  return (
    <div
      style={{ backgroundColor: colors.bg, color: colors.text }}
      className="min-h-screen transition-colors duration-300"
    >
      <div className="flex h-screen">
        {/* Sidebar Navigation */}
        <aside
          style={{
            backgroundColor: colors.surface,
            borderRightColor: colors.outlineVariant,
          }}
          className="w-72 border-r flex flex-col py-8 px-6 overflow-y-auto fixed h-screen left-0 top-0 z-50"
        >
          {/* Logo Section */}
          <div className="mb-12">
            <h1
              style={{ color: colors.accent }}
              className="text-2xl font-bold tracking-tight"
            >
              Aesthemirage
            </h1>
            <p
              style={{ color: colors.textSecondary }}
              className="text-[10px] font-medium uppercase tracking-widest mt-1"
            >
              The Obsidian Atelier
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    backgroundColor:
                      activeTab === item.id
                        ? colors.surfaceContainerLow
                        : "transparent",
                    color:
                      activeTab === item.id
                        ? colors.accent
                        : colors.textSecondary,
                    borderRightColor:
                      activeTab === item.id ? colors.accent : "transparent",
                  }}
                  className="w-full flex items-center px-6 py-4 rounded-lg border-r-2 transition-all hover:opacity-80 text-left gap-4"
                >
                  <IconComponent size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="space-y-2 mt-auto">
            <button
              style={{
                background: `linear-gradient(to right, ${colors.primaryContainer}, ${colors.primary})`,
                color: colors.primaryText,
              }}
              className="w-full py-3 px-4 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg transition-transform hover:scale-105"
            >
              Konsültasyon Rezerve Et
            </button>
            <button
              style={{
                color: colors.textSecondary,
              }}
              className="w-full flex items-center px-4 py-3 rounded-lg hover:opacity-80 transition-colors text-left gap-3"
            >
              <Settings size={18} />
              <span className="text-sm font-medium">Ayarlar</span>
            </button>
            <button
              style={{
                color: colors.textSecondary,
              }}
              className="w-full flex items-center px-4 py-3 rounded-lg hover:opacity-80 transition-colors text-left gap-3"
            >
              <HelpCircle size={18} />
              <span className="text-sm font-medium">Destek</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-72 flex flex-col overflow-hidden">
          {/* Top Navigation Bar */}
          <header
            style={{
              backgroundColor: colors.surface,
              borderBottomColor: colors.outlineVariant,
            }}
            className="sticky top-0 border-b px-8 py-4 flex justify-between items-center z-40 flex-shrink-0"
          >
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative w-full max-w-md">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: colors.outline }}
                />
                <input
                  style={{
                    backgroundColor: colors.surfaceContainerLow,
                    color: colors.text,
                    borderColor: colors.outlineVariant,
                  }}
                  type="text"
                  placeholder="Hizmet veya doktor ara..."
                  className="w-full px-4 pl-12 py-2.5 rounded-full border text-xs focus:outline-none focus:ring-1"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6 ml-8">
              {/* Notifications */}
              <button
                style={{ color: colors.textSecondary }}
                className="relative hover:opacity-80 transition-opacity"
              >
                <Bell size={20} />
                <span
                  style={{ backgroundColor: colors.accent }}
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                ></span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                style={{ color: colors.textSecondary }}
                className="hover:opacity-80 transition-opacity"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Divider */}
              <div
                style={{ backgroundColor: colors.outlineVariant }}
                className="h-6 w-px opacity-30"
              ></div>

              {/* User Profile Dropdown */}
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
                      Deniz Helin
                    </p>
                    <p
                      style={{ color: colors.textSecondary }}
                      className="text-[10px] uppercase tracking-wider"
                    >
                      Premium Üye
                    </p>
                  </div>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBfDA_-VIVPz8zhFQSUxxHJO4riX2AE1wapnJlJIXYXu0XJBw96FdW5mNYqMIGqfbrk8Lm6umuDyjIiBnP0gSKWtIiRpgFWpgBl6BEyt86kYQ1gSYZnFMxbc8jBdsT8AXQYuLGeJr8HbLOelRwb0SL7v2dw-q19WYUGLWkImhY_JCHFjVGiMzg2aEgBrSasvLA_qHi8cPAQFWgrlkHQ3A5-PUEO2z7__l689fJHb5aznVxDxdbVkMsuZs_jiSBbAqBDeXLTNJoRJB"
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover border"
                    style={{ borderColor: colors.accent }}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div
                    style={{
                      backgroundColor: colors.surface,
                      borderColor: colors.outlineVariant,
                    }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-lg border shadow-lg z-50"
                  >
                    <button
                      onClick={() => setIsProfileOpen(false)}
                      style={{
                        color: colors.text,
                        borderBottomColor: colors.outlineVariant,
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold hover:opacity-80 transition-opacity border-b"
                    >
                      <User size={18} />
                      Profilim
                    </button>
                    <a
                      href="#"
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

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto p-10">
            <div className="max-w-7xl mx-auto">{renderContent()}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
