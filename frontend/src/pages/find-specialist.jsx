import React, { useState } from "react";

export default function FindSpecialist() {
  const [isDark, setIsDark] = useState(true);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSpecialtyToggle = (specialty) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  const handleCityToggle = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city)
        ? prev.filter((c) => c !== city)
        : [...prev, city]
    );
  };

  const clearFilters = () => {
    setSelectedSpecialties([]);
    setSelectedCities([]);
  };

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

  // Mock data
  const doctors = [
    {
      id: 1,
      initials: "DR",
      name: "Dr. Deniz Richards",
      specialty: "FACIAL RECONSTRUCTION",
      city: "ISTANBUL, NIŞANTAŞI",
      isNew: false,
    },
    {
      id: 2,
      initials: "AA",
      name: "Dr. Aylin Aksoy",
      specialty: "MEDICAL AESTHETICS",
      city: "ISTANBUL, ETILER",
      isNew: false,
    },
    {
      id: 3,
      initials: "YK",
      name: "Dr. Yasemin Kaya",
      specialty: "DERMATOLOGY",
      city: "ANKARA, ÇANKAYA",
      isNew: true,
    },
    {
      id: 4,
      initials: "MK",
      name: "Dr. Murat Kara",
      specialty: "COSMETIC DENTISTRY",
      city: "IZMIR, ALSANCAK",
      isNew: false,
    },
    {
      id: 5,
      initials: "SY",
      name: "Dr. Selin Yilmaz",
      specialty: "PLASTIC SURGERY",
      city: "ISTANBUL, BEBEK",
      isNew: true,
    },
    {
      id: 6,
      initials: "OA",
      name: "Dr. Omer Atas",
      specialty: "MEDICAL AESTHETICS",
      city: "ANKARA, GAZIOSMANPAŞA",
      isNew: false,
    },
  ];

  const specialties = [
    "Dermatology",
    "Plastic Surgery",
    "Medical Aesthetics",
    "Cosmetic Dentistry",
  ];
  const cities = ["Istanbul", "Ankara", "Izmir"];

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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-16">
        <h1 className="text-5xl lg:text-6xl font-light tracking-tight mb-2 text-center">
          Find Your <span style={{ color: colors.accent }}>Specialist</span>
        </h1>

        {/* Search Bar */}
        <div className="flex gap-4 mt-12 mb-16">
          <div className="flex-1 relative">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              style={{ color: colors.textSecondary }}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by name, clinic or treatment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                backgroundColor: colors.glassPanel,
                color: colors.text,
                borderColor: colors.glassBorder,
              }}
              className="w-full pl-12 pr-4 py-3 rounded-lg border transition-colors duration-300"
            />
          </div>

          <button
            style={{
              backgroundColor: colors.accentLight,
              borderColor: colors.borderLight,
              color: colors.accent,
            }}
            className="border px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.894.89l-1.553 7.763A2 2 0 0110.694 15H9.306a2 2 0 01-1.853-1.347L5.894 5.89A1 1 0 015 5V3a1 1 0 011-1zm5 4a1 1 0 00-1 1v1H7a1 1 0 000 2h.106a3 3 0 01.576 5.82l-.948.316A1 1 0 008 16a1 1 0 001-1v-3a1 1 0 00-1-1zm5-1a1 1 0 00-1 1v3a1 1 0 001 1 1 1 0 001-1v-1h1a1 1 0 100-2h-1.106A3 3 0 0013 7.18l.948-.316A1 1 0 0013 6.018z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Sort & Filter Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            {/* Specialty Filter */}
            <div>
              <label
                style={{ color: colors.textSecondary }}
                className="text-xs uppercase tracking-widest font-semibold block mb-3"
              >
                Specialty
              </label>
              <select
                style={{
                  backgroundColor: colors.glassPanel,
                  color: colors.text,
                  borderColor: colors.glassBorder,
                }}
                className="border px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <option>All Specialties</option>
                {specialties.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label
              style={{ color: colors.textSecondary }}
              className="text-xs uppercase tracking-widest font-semibold block mb-3"
            >
              Sort By
            </label>
            <select
              style={{
                backgroundColor: colors.glassPanel,
                color: colors.text,
                borderColor: colors.glassBorder,
              }}
              className="border px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <option>Varsayılan</option>
              <option>A-Z</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Modern Filters */}
          <div className="lg:col-span-1">
            <div
              style={{
                backgroundColor: colors.glassPanel,
                border: `1px solid ${colors.glassBorder}`,
              }}
              className="rounded-2xl p-8 transition-colors duration-300 sticky top-20"
            >
              {/* Filteler Header */}
              <div className="flex items-center gap-2 mb-8">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: colors.accent }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <h2
                  style={{ color: colors.accent }}
                  className="text-lg font-bold tracking-tight uppercase"
                >
                  Filtreler
                </h2>
              </div>

              {/* Specialty Filters */}
              <div className="mb-8">
                <h3
                  style={{ color: colors.textSecondary }}
                  className="text-xs uppercase tracking-widest font-bold mb-4"
                >
                  Uzmanlık Alanları
                </h3>
                <div className="space-y-3">
                  {specialties.map((specialty) => (
                    <label
                      key={specialty}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSpecialties.includes(specialty)}
                        onChange={() => handleSpecialtyToggle(specialty)}
                        style={{
                          accentColor: colors.accent,
                          width: "18px",
                          height: "18px",
                        }}
                        className="rounded cursor-pointer"
                      />
                      <span
                        style={{ color: colors.text }}
                        className="text-sm group-hover:opacity-80 transition-opacity"
                      >
                        {specialty}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* City Filters */}
              <div className="mb-8">
                <h3
                  style={{ color: colors.textSecondary }}
                  className="text-xs uppercase tracking-widest font-bold mb-4"
                >
                  Şehir
                </h3>
                <select
                  value={selectedCities[0] || ""}
                  onChange={(e) => {
                    if (e.target.value) {
                      handleCityToggle(e.target.value);
                    }
                  }}
                  style={{
                    backgroundColor: colors.glassPanel,
                    color: colors.text,
                    borderColor: colors.glassBorder,
                  }}
                  className="w-full border px-3 py-2.5 rounded-lg transition-colors duration-300 text-sm"
                >
                  <option value="">Şehir Seçin</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>


              {/* Clear Filters Button */}
              {(selectedSpecialties.length > 0 || selectedCities.length > 0) && (
                <button
                  onClick={clearFilters}
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.primaryText,
                  }}
                  className="w-full px-4 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:scale-95"
                >
                  Filtreleri Temizle
                </button>
              )}
            </div>
          </div>

          {/* Right Content - Doctor Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  style={{
                    backgroundColor: colors.glassPanel,
                    border: `1px solid ${colors.glassBorder}`,
                  }}
                  className="rounded-2xl p-8 transition-all duration-300 hover:opacity-80 flex flex-col items-center text-center"
                >
                  {/* New Badge */}
                  {doctor.isNew && (
                    <div
                      style={{
                        backgroundColor: colors.accentLight,
                        color: colors.accent,
                      }}
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                    >
                      YENİ
                    </div>
                  )}

                  {/* Avatar Circle */}
                  <div
                    style={{
                      borderColor: colors.borderLight,
                    }}
                    className="w-24 h-24 rounded-full border-2 flex items-center justify-center mb-4"
                  >
                    <span
                      style={{ color: colors.accent }}
                      className="text-2xl font-light"
                    >
                      {doctor.initials}
                    </span>
                  </div>

                  {/* Doctor Info */}
                  <h3
                    style={{ color: colors.text }}
                    className="text-lg font-light mb-2"
                  >
                    {doctor.name}
                  </h3>
                  <p
                    style={{ color: colors.accent }}
                    className="text-xs uppercase tracking-widest font-semibold mb-4"
                  >
                    {doctor.specialty}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-6">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      style={{ color: colors.textSecondary }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    <span
                      style={{ color: colors.textSecondary }}
                      className="text-xs uppercase tracking-wider"
                    >
                      {doctor.city}
                    </span>
                  </div>

                  {/* View Profile Button */}
                  <button
                    style={{
                      backgroundColor: colors.accentLight,
                      color: colors.text,
                      borderColor: colors.borderLight,
                    }}
                    className="w-full border px-4 py-3 rounded-lg font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-80"
                  >
                    View Profile
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-16">
              <button
                style={{
                  color: colors.accent,
                }}
                className="px-3 py-2 transition-all duration-300 hover:opacity-60"
              >
                ←
              </button>
              <div className="flex gap-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    style={{
                      backgroundColor:
                        page === currentPage ? colors.accent : "transparent",
                      color:
                        page === currentPage
                          ? colors.primaryText
                          : colors.accent,
                      borderColor: colors.borderLight,
                    }}
                    className="w-10 h-10 rounded-lg border transition-all duration-300 font-semibold text-sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                style={{
                  color: colors.accent,
                }}
                className="px-3 py-2 transition-all duration-300 hover:opacity-60"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
