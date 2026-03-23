import React, { useState } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Edit2,
  UserPlus,
  Crown,
} from "lucide-react";

export default function DocPatients({ colors }) {
  const [filters, setFilters] = useState({
    gender: "all",
    ageRange: "all",
    treatments: [],
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Mock patient data
  const patients = [
    {
      id: "AS-9821",
      name: "Dilara Yılmaz",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQRNHbv24awPbT61ovRUcC56rUHzoNP-yAphRZvK96ASppy3_phs435AUtYW97Pyj5jIyhbBwlbTWlks7urSKub3reKHFPuO18ocZ7nEKz_c7LAN4uka2CpJQL5paNZSv8j22kNVkvG8S0oNfmNh-QW74lPoynC8GrLCHMMgR16xz_ENUcx4aaYTY04com8avzIvV_-KPDzaeyREJ3C3jU6v3CDEOVZlhBMj54hjCQQoSwDIag4U4gKlZzfl-DEV3JZMmlep9UclKq",
      gender: "female",
      ageRange: "26-35",
      lastVisit: "12 Eki 2023",
      nextProcedure: "HydraFacial Premium",
      procedureDate: "24 Kas 2023",
      treatments: ["Cilt Bakımı"],
      vip: true,
      procedureIcon: "Sparkles",
    },
    {
      id: "AS-4412",
      name: "Murat Aras",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCkCqhR_noC_PwpnG_0_JuCZlQkWhB_wHmwa6yuhvzacc6rxt38a3Zd6Une0_NnuW8-zquyNI6Fv70rWE5DYqNq7geJRFzxRHMBNUAB9hR9uxzYblB2sGOooR5S2FKq4pQTCgNwK4hwgAJrGaVPREyI5P-n5y8kfT7s83QsbWa6L-Jlk7GsSGfdf2cdTHbjJaMXs1fp0ol7_D1BUo5TUHTD1JXEaUSJ3tDKV7tCNos9ZgnrQ-bBRJ1FIK9bw17w59ghquYDSj8xYp8A",
      gender: "male",
      ageRange: "36-50",
      lastVisit: "05 Kas 2023",
      nextProcedure: "Rhinoplasty Kontrol",
      procedureDate: "02 Ara 2023",
      treatments: ["Estetik Cerrahi"],
      vip: false,
      procedureIcon: "Stethoscope",
    },
    {
      id: "AS-7704",
      name: "Selin Kozan",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCukapd9YoWADcx0eZBslnJKyCTr6dM6GTSdedC4JuodCPDm3eRlNaRm6pqE9Dugp2RwW3Ni_eJnDTB2nMp5PFyft5epi3Mg8bQgCVFrexNo3IVzyoMqEaAhfAMPIV9fawH6xws9MCoztigA_SxO745e41K2qFkfHxh3BFmu9-VTB3w0Yj7Pitp-UbNlxm8aLat6E1F0Q62xegE1SWMFATiU3S-sWLKlRlwA8QgkP-AwgoKtb3vLb6NSp5l6kyVlF8by2jdofRkdXCY",
      gender: "female",
      ageRange: "18-25",
      lastVisit: "30 Eki 2023",
      nextProcedure: "Dermal Filler",
      procedureDate: "15 Ara 2023",
      treatments: ["Dolgu & Botoks"],
      vip: true,
      procedureIcon: "Pipette",
    },
    {
      id: "AS-3329",
      name: "Hakan Güçlü",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCO-5YOkLg38kRk-XH1UB4uZ1e14-qBje4l-D8BPPFjs0O-80p1jrlQBy4FTjSKrwHaJpYip3QkhawIdpO6qlYlvqc8tu4np8yoL9aJ4JnMi4nel_VZIlSZiAdw8upOmiWybWqCdLNN5Vwkv_vChGkgfMvcY2LoD-trSBWxPCNiN1somLarS1mfp0YtqB-RjcoD8_XlETjD467kcFdzgucD23dOKXFv3ByFsHoWjF1A61UGrg3wCwLt0YbYdIFf_jlZ4rsO_RVWu1PF",
      gender: "male",
      ageRange: "36-50",
      lastVisit: "18 Kas 2023",
      nextProcedure: "Mezoterapi",
      procedureDate: "Beklemede",
      treatments: ["Cilt Bakımı"],
      vip: false,
      procedureIcon: "Droplets",
    },
  ];

  const handleTreatmentFilter = (treatment) => {
    setFilters((prev) => ({
      ...prev,
      treatments: prev.treatments.includes(treatment)
        ? prev.treatments.filter((t) => t !== treatment)
        : [...prev.treatments, treatment],
    }));
  };

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch = patient.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGender =
      filters.gender === "all" || patient.gender === filters.gender;
    const matchesAge =
      filters.ageRange === "all" || patient.ageRange === filters.ageRange;
    const matchesTreatments =
      filters.treatments.length === 0 ||
      patient.treatments.some((t) => filters.treatments.includes(t));

    return matchesSearch && matchesGender && matchesAge && matchesTreatments;
  });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.surfaceLight,
        }}
        className="p-8 rounded-xl border"
      >
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2
              style={{ color: colors.text }}
              className="text-4xl font-bold mb-2"
            >
              Hasta Kayıtları
            </h2>
            <p style={{ color: colors.textSecondary }} className="text-sm">
              Klinik veri tabanındaki güncel hasta listesi ve tedavi süreçleri.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              style={{
                backgroundColor: colors.bg,
                borderColor: colors.surfaceLight,
                color: colors.textSecondary,
              }}
              className="px-4 py-2 rounded-lg border text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Filter size={16} />
              FİLTRELE
            </button>
            <button
              style={{
                backgroundColor: colors.bg,
                borderColor: colors.surfaceLight,
                color: colors.textSecondary,
              }}
              className="px-4 py-2 rounded-lg border text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <ArrowUpDown size={16} />
              SIRALA
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search
            size={18}
            style={{ color: colors.textSecondary }}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Hasta adı veya ID ile ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              backgroundColor: colors.bg,
              color: colors.text,
              borderColor: colors.surfaceLight,
            }}
            className="w-full pl-10 pr-4 py-3 rounded-lg border text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Patient Cards Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPatients.map((patient) => (
              <div
                key={patient.id}
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.surfaceLight,
                }}
                className="p-6 rounded-xl border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {patient.vip && (
                      <div
                        style={{
                          backgroundColor: colors.accent,
                          color: colors.text,
                        }}
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                      >
                        <Crown size={14} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3
                      style={{ color: colors.text }}
                      className="text-lg font-bold"
                    >
                      {patient.name}
                    </h3>
                    <p
                      style={{ color: colors.textSecondary }}
                      className="text-xs uppercase tracking-wider"
                    >
                      ID: {patient.id}
                    </p>
                    <p
                      style={{ color: colors.textSecondary }}
                      className="text-xs mt-1"
                    >
                      Son Ziyaret: {patient.lastVisit}
                    </p>
                  </div>
                </div>

                {/* Procedure Info */}
                <div
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.surfaceLight,
                  }}
                  className="p-3 rounded-lg border mb-4"
                >
                  <p
                    style={{ color: colors.textSecondary }}
                    className="text-[10px] uppercase tracking-wider font-bold mb-1"
                  >
                    Gelecek İşlem
                  </p>
                  <p
                    style={{ color: colors.accent }}
                    className="text-sm font-semibold mb-2"
                  >
                    {patient.nextProcedure}
                  </p>
                  <p
                    style={{ color: colors.textSecondary }}
                    className="text-xs"
                  >
                    {patient.procedureDate}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.text,
                    }}
                    className="flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    Detayları Gör
                  </button>
                  <button
                    style={{
                      borderColor: colors.surfaceLight,
                      color: colors.textSecondary,
                    }}
                    className="px-3 py-2 rounded-lg border hover:opacity-80 transition-opacity"
                  >
                    <Edit2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPatients.length === 0 && (
            <div
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.surfaceLight,
              }}
              className="p-12 rounded-xl border text-center"
            >
              <p style={{ color: colors.textSecondary }} className="text-sm">
                Arama kriterlerine uyan hasta bulunamadı.
              </p>
            </div>
          )}
        </div>

        {/* Filter Sidebar */}
        <aside
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.surfaceLight,
          }}
          className="p-6 rounded-xl border h-fit sticky top-8"
        >
          <h3 style={{ color: colors.text }} className="text-lg font-bold mb-6">
            Filtreleme
          </h3>

          {/* Gender Filter */}
          <div className="space-y-3 mb-8 pb-8 border-b" style={{ borderBottomColor: colors.surfaceLight }}>
            <label
              style={{ color: colors.textSecondary }}
              className="text-[10px] font-bold uppercase tracking-wider block"
            >
              Cinsiyet
            </label>
            <div className="flex flex-wrap gap-2">
              {["all", "female", "male"].map((gender) => (
                <button
                  key={gender}
                  onClick={() => setFilters((prev) => ({ ...prev, gender }))}
                  style={{
                    backgroundColor:
                      filters.gender === gender ? colors.accent : colors.bg,
                    color:
                      filters.gender === gender ? colors.text : colors.textSecondary,
                    borderColor:
                      filters.gender === gender ? colors.accent : colors.surfaceLight,
                  }}
                  className="px-3 py-1 rounded-lg border text-xs font-medium transition-all"
                >
                  {gender === "all"
                    ? "Hepsi"
                    : gender === "female"
                      ? "Kadın"
                      : "Erkek"}
                </button>
              ))}
            </div>
          </div>

          {/* Age Range Filter */}
          <div className="space-y-3 mb-8 pb-8 border-b" style={{ borderBottomColor: colors.surfaceLight }}>
            <label
              style={{ color: colors.textSecondary }}
              className="text-[10px] font-bold uppercase tracking-wider block"
            >
              Yaş Aralığı
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["all", "18-25", "26-35", "36-50", "50+"].map((range) => (
                <button
                  key={range}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, ageRange: range }))
                  }
                  style={{
                    backgroundColor:
                      filters.ageRange === range ? colors.accent : colors.bg,
                    color:
                      filters.ageRange === range
                        ? colors.text
                        : colors.textSecondary,
                    borderColor:
                      filters.ageRange === range
                        ? colors.accent
                        : colors.surfaceLight,
                  }}
                  className="px-2 py-1 rounded-lg border text-xs font-medium transition-all"
                >
                  {range === "all" ? "Hepsi" : range}
                </button>
              ))}
            </div>
          </div>

          {/* Treatment Filter */}
          <div className="space-y-3 pb-8">
            <label
              style={{ color: colors.textSecondary }}
              className="text-[10px] font-bold uppercase tracking-wider block"
            >
              Tedavi Geçmişi
            </label>
            <div className="space-y-2">
              {[
                "Cilt Bakımı",
                "Estetik Cerrahi",
                "Dolgu & Botoks",
                "Lazer Epilasyon",
              ].map((treatment) => (
                <label
                  key={treatment}
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.surfaceLight,
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <input
                    type="checkbox"
                    checked={filters.treatments.includes(treatment)}
                    onChange={() => handleTreatmentFilter(treatment)}
                    style={{ accentColor: colors.accent }}
                    className="rounded"
                  />
                  <span
                    style={{ color: colors.text }}
                    className="text-sm font-medium"
                  >
                    {treatment}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            style={{
              backgroundColor: colors.accent,
              color: colors.text,
            }}
            className="w-full py-3 rounded-lg font-bold uppercase text-xs tracking-wider hover:opacity-90 transition-opacity"
          >
            Filtreleri Uygula
          </button>
          <button
            onClick={() => setFilters({ gender: "all", ageRange: "all", treatments: [] })}
            style={{ color: colors.textSecondary }}
            className="w-full mt-2 py-2 text-xs font-bold uppercase hover:opacity-80 transition-opacity"
          >
            Sıfırla
          </button>
        </aside>
      </div>

      {/* Floating Action Button */}
      <button
        style={{ background: colors.primaryGradient }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <UserPlus size={24} />
      </button>
    </div>
  );
}
