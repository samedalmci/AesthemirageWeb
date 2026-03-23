import { Calendar, Users, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function UserTreatments({ colors }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const treatments = [
    {
      id: 1,
      title: "Dudak Dolgusu",
      month: "ŞUBAT",
      day: "14",
      doctor: "Dr. Arzu Demir",
      location: "Nişantaşı Atelier",
      status: "Tamamlandı",
      category: "lips",
    },
    {
      id: 2,
      title: "Hydrafacial Deluxe",
      month: "OCAK",
      day: "28",
      doctor: "Dr. Arzu Demir",
      location: "Etiler Studio",
      status: "Tamamlandı",
      category: "skin",
    },
    {
      id: 3,
      title: "Masseter Botoks",
      month: "ARALIK",
      day: "12",
      doctor: "Dr. Caner Yiğit",
      location: "Nişantaşı Atelier",
      status: "Tamamlandı",
      category: "face",
    },
  ];

  const filters = [
    { id: "all", label: "Tümü" },
    { id: "face", label: "Yüz" },
    { id: "skin", label: "Cilt" },
  ];

  const filteredTreatments =
    selectedFilter === "all"
      ? treatments
      : treatments.filter((t) => t.category === selectedFilter);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section>
        <h1
          className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-2"
          style={{ color: colors.text }}
        >
          Randevu Geçmişim
        </h1>
        <p
          className="font-label text-sm tracking-widest uppercase opacity-80"
          style={{ color: colors.primary }}
        >
          Toplam {treatments.length} Uygulama
        </p>
      </section>

      {/* Filters Section */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className="px-8 py-2.5 rounded-full font-label text-sm font-semibold transition-all duration-300 whitespace-nowrap"
            style={{
              backgroundColor:
                selectedFilter === filter.id
                  ? colors.accent
                  : colors.surfaceContainerHigh,
              color:
                selectedFilter === filter.id
                  ? colors.primaryText
                  : colors.textSecondary,
              boxShadow:
                selectedFilter === filter.id
                  ? `0 4px 15px ${colors.accent}26`
                  : "none",
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Treatment List */}
      <div className="space-y-6">
        {filteredTreatments.length > 0 ? (
          filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group transition-all duration-300 border-t"
              style={{
                backgroundColor: colors.surfaceContainerLow,
                borderColor: colors.accent,
              }}
            >
              <div className="flex items-start gap-6">
                {/* Date Section */}
                <div
                  className="hidden md:flex flex-col items-center justify-center min-w-[80px] py-2 border-r border-r-[current] pr-6"
                  style={{ borderColor: colors.outlineVariant }}
                >
                  <span
                    className="text-xs font-label uppercase tracking-widest opacity-60"
                    style={{ color: colors.primary }}
                  >
                    {treatment.month}
                  </span>
                  <span
                    className="text-3xl font-headline font-bold"
                    style={{ color: colors.accent }}
                  >
                    {treatment.day}
                  </span>
                </div>

                {/* Content Section */}
                <div>
                  {/* Mobile Date */}
                  <div className="md:hidden flex items-center gap-2 mb-2">
                    <span
                      className="font-bold"
                      style={{ color: colors.accent }}
                    >
                      {treatment.day} {treatment.month} 2024
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl font-headline font-bold mb-2 group-hover:opacity-80 transition-opacity"
                    style={{ color: colors.text }}
                  >
                    {treatment.title}
                  </h3>

                  {/* Meta Info */}
                  <div
                    className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    <div className="flex items-center gap-2">
                      <Users size={16} style={{ color: colors.accent }} />
                      <span>{treatment.doctor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} style={{ color: colors.accent }} />
                      <span>{treatment.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="flex items-center justify-between md:flex-col md:items-end gap-4">
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-label font-bold tracking-wider uppercase border"
                  style={{
                    backgroundColor: `${colors.accent}15`,
                    color: colors.accent,
                    borderColor: `${colors.accent}30`,
                  }}
                >
                  {treatment.status}
                </div>
                <button
                  className="font-label text-xs uppercase tracking-widest flex items-center gap-1 hover:opacity-80 transition-opacity"
                  style={{ color: colors.primary }}
                >
                  Detaylar
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 flex flex-col items-center opacity-40">
            <Calendar
              size={48}
              className="mb-4"
              style={{ color: colors.textSecondary }}
            />
            <p
              className="font-label text-sm uppercase tracking-widest"
              style={{ color: colors.textSecondary }}
            >
              Kayıt Bulunamadı
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
