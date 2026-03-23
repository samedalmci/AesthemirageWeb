import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Plus,
  AlertCircle,
} from "lucide-react";

export default function DocAppointments({ colors }) {
  const [viewType, setViewType] = useState("weekly");
  const [filters, setFilters] = useState({
    treatments: ["Estetik", "Medikal"],
    clinic: "all",
  });

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  const days = [
    { label: "Pzt", date: "22" },
    { label: "Sal", date: "23" },
    { label: "Çar", date: "24", isToday: true },
    { label: "Per", date: "25" },
    { label: "Cum", date: "26" },
    { label: "Cmt", date: "27" },
    { label: "Paz", date: "28" },
  ];

  const appointments = [
    {
      day: 0,
      startTime: "09:30",
      endTime: "10:45",
      patient: "Selin Yılmaz",
      procedure: "Dermal Dolgu Uygulaması",
      type: "Estetik",
      color: colors.accent,
    },
    {
      day: 0,
      startTime: "13:00",
      endTime: "14:00",
      patient: "Ahmet Aras",
      procedure: "Post-Op Kontrol",
      type: "Kontrol",
      color: "#9c27b0",
    },
    {
      day: 1,
      startTime: "10:30",
      endTime: "11:15",
      patient: "Elif Kara",
      procedure: "",
      type: "Medikal",
      color: "#ff9800",
    },
    {
      day: 2,
      startTime: "09:15",
      endTime: "10:45",
      patient: "Caner Deniz",
      procedure: "V-Shape Lazer",
      type: "Estetik",
      color: colors.accent,
    },
    {
      day: 2,
      startTime: "14:00",
      endTime: "16:30",
      patient: "Merve Güler",
      procedure: "Hydrafacial Deluxe Paketi",
      type: "Medikal",
      color: "#ff9800",
    },
  ];

  const appointmentRequests = [
    {
      id: 1,
      initials: "BT",
      name: "Burcu Terzi",
      time: "2 saat önce",
      procedure: "Botoks ve Dolgu",
      priority: "Orta Seviye",
      color: "#ff9800",
    },
    {
      id: 2,
      initials: "OA",
      name: "Onur Aksu",
      time: "4 saat önce",
      procedure: "Medikal Cilt Bakımı",
      priority: "Rutin",
      color: colors.accent,
    },
  ];

  const getTimePosition = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours - 9) * 80 + (minutes / 60) * 80;
  };

  const getAppointmentHeight = (startTime, endTime) => {
    const [startHours, startMins] = startTime.split(":").map(Number);
    const [endHours, endMins] = endTime.split(":").map(Number);
    const startTotal = startHours + startMins / 60;
    const endTotal = endHours + endMins / 60;
    return (endTotal - startTotal) * 80;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 style={{ color: colors.text }} className="text-3xl font-bold mb-2">
            Randevu Yönetimi
          </h2>
          <p style={{ color: colors.textSecondary }} className="text-sm">
            Gelecek hafta için operasyon ve kontrol planı.
          </p>
        </div>
        <div className="flex gap-4">
          <div
            style={{
              backgroundColor: colors.bg,
              borderColor: colors.surfaceLight,
            }}
            className="flex border rounded-lg p-1"
          >
            {["Haftalık", "Aylık", "Günlük"].map((view) => (
              <button
                key={view}
                onClick={() =>
                  setViewType(
                    view === "Haftalık"
                      ? "weekly"
                      : view === "Aylık"
                        ? "monthly"
                        : "daily"
                  )
                }
                style={{
                  backgroundColor:
                    (viewType === "weekly" && view === "Haftalık") ||
                    (viewType === "monthly" && view === "Aylık") ||
                    (viewType === "daily" && view === "Günlük")
                      ? colors.surface
                      : "transparent",
                  color:
                    (viewType === "weekly" && view === "Haftalık") ||
                    (viewType === "monthly" && view === "Aylık") ||
                    (viewType === "daily" && view === "Günlük")
                      ? colors.accent
                      : colors.textSecondary,
                }}
                className="px-4 py-2 text-sm font-bold rounded transition-all"
              >
                {view}
              </button>
            ))}
          </div>
          <button
            style={{
              backgroundColor: colors.bg,
              borderColor: colors.surfaceLight,
              color: colors.textSecondary,
            }}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-bold hover:opacity-80 transition-opacity"
          >
            <Filter size={16} />
            Filtrele
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar Grid */}
        <div
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.surfaceLight,
          }}
          className="lg:col-span-3 p-6 rounded-xl border overflow-x-auto"
        >
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-6 pb-6 border-b" style={{ borderBottomColor: colors.surfaceLight }}>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  style={{
                    borderColor: colors.surfaceLight,
                    color: colors.textSecondary,
                  }}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  style={{
                    borderColor: colors.surfaceLight,
                    color: colors.textSecondary,
                  }}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <h3 style={{ color: colors.text }} className="text-lg font-bold">
                22 - 28 Mayıs 2024
              </h3>
            </div>
            <div className="flex gap-6">
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: colors.textSecondary }}>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.accent }}
                ></span>
                Estetik
              </span>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: colors.textSecondary }}>
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                Medikal
              </span>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: colors.textSecondary }}>
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Kontrol
              </span>
            </div>
          </div>

          {/* Week Grid */}
          <div className="min-w-[900px]">
            {/* Day Headers */}
            <div className="grid grid-cols-8 gap-1 mb-4 pb-4 border-b" style={{ borderBottomColor: colors.surfaceLight }}>
              <div></div>
              {days.map((day, idx) => (
                <div key={idx} className="text-center">
                  <p
                    style={{ color: colors.textSecondary }}
                    className="text-[10px] font-bold uppercase tracking-wider mb-2"
                  >
                    {day.label}
                  </p>
                  {day.isToday ? (
                    <div
                      style={{ backgroundColor: colors.accent }}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto"
                    >
                      {day.date}
                    </div>
                  ) : (
                    <p
                      style={{ color: colors.text }}
                      className="text-lg font-bold"
                    >
                      {day.date}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-8 gap-1 relative" style={{ minHeight: "640px" }}>
              {/* Time Column */}
              <div className="flex flex-col text-[11px] font-bold" style={{ color: colors.textSecondary }}>
                {timeSlots.map((time) => (
                  <div key={time} style={{ height: "80px" }} className="text-right pr-2">
                    {time}
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {days.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  style={{
                    backgroundColor: day.isToday ? `${colors.accent}10` : "transparent",
                    borderColor: day.isToday ? colors.accent : colors.surfaceLight,
                  }}
                  className="relative border-x px-1"
                >
                  {/* Time Grid Lines */}
                  {timeSlots.map((time) => (
                    <div
                      key={time}
                      style={{
                        height: "80px",
                        borderBottomColor: colors.surfaceLight,
                      }}
                      className="border-b"
                    ></div>
                  ))}

                  {/* Current Time Indicator */}
                  {day.isToday && (
                    <div
                      className="absolute left-0 right-0 h-0.5 flex items-center z-20"
                      style={{
                        top: getTimePosition("14:30") + "px",
                        backgroundColor: colors.accent,
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full -ml-1.5 shadow-sm"
                        style={{ backgroundColor: colors.accent }}
                      ></div>
                    </div>
                  )}

                  {/* Appointments */}
                  {appointments
                    .filter((apt) => apt.day === dayIdx)
                    .map((apt, idx) => (
                      <div
                        key={idx}
                        style={{
                          top: getTimePosition(apt.startTime) + "px",
                          height: getAppointmentHeight(apt.startTime, apt.endTime) + "px",
                          backgroundColor: `${apt.color}20`,
                          borderLeftColor: apt.color,
                        }}
                        className="absolute left-1 right-1 rounded-lg p-2 border-l-4 shadow-sm hover:shadow-md transition-shadow z-10 cursor-pointer group"
                      >
                        <p
                          className="text-[10px] font-bold mb-0.5"
                          style={{ color: apt.color }}
                        >
                          {apt.startTime} - {apt.endTime}
                        </p>
                        <p
                          style={{ color: colors.text }}
                          className="text-xs font-bold leading-tight"
                        >
                          {apt.patient}
                        </p>
                        {apt.procedure && (
                          <p
                            style={{ color: colors.textSecondary }}
                            className="text-[10px] truncate"
                          >
                            {apt.procedure}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Filters */}
          <div
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.surfaceLight,
            }}
            className="p-6 rounded-xl border"
          >
            <h4
              style={{
                color: colors.text,
                borderBottomColor: colors.surfaceLight
              }}
              className="text-xs font-bold uppercase tracking-wider mb-6 pb-4 border-b"
            >
              Filtreleme
            </h4>
            <div className="space-y-4">
              <div>
                <label
                  style={{ color: colors.textSecondary }}
                  className="text-[10px] font-bold uppercase tracking-wider block mb-3"
                >
                  Tedavi Türü
                </label>
                <div className="space-y-2">
                  {["Estetik", "Medikal", "Kontrol"].map((treatment) => (
                    <label
                      key={treatment}
                      style={{
                        backgroundColor: colors.bg,
                        borderColor: colors.surfaceLight,
                      }}
                      className="flex items-center gap-3 p-2 rounded-lg border cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <input
                        type="checkbox"
                        checked={filters.treatments.includes(treatment)}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            treatments: e.target.checked
                              ? [...prev.treatments, treatment]
                              : prev.treatments.filter((t) => t !== treatment),
                          }))
                        }
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
              <div className="pt-4 border-t" style={{ borderTopColor: colors.surfaceLight }}>
                <label
                  style={{ color: colors.textSecondary }}
                  className="text-[10px] font-bold uppercase tracking-wider block mb-2"
                >
                  Klinik Birimi
                </label>
                <select
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.surfaceLight,
                    color: colors.text,
                  }}
                  className="w-full px-3 py-2 rounded-lg border text-xs font-bold focus:outline-none"
                >
                  <option>Tüm Birimler</option>
                  <option>A-Blok Lazer</option>
                  <option>B-Blok Cerrahi</option>
                </select>
              </div>
            </div>
          </div>

          {/* Appointment Requests */}
          <div
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.surfaceLight,
            }}
            className="p-6 rounded-xl border"
          >
            <div className="flex justify-between items-center mb-4 pb-4 border-b" style={{ borderBottomColor: colors.surfaceLight }}>
              <h4
                style={{ color: colors.text }}
                className="text-xs font-bold uppercase tracking-wider"
              >
                Randevu Talepleri
              </h4>
              <span
                style={{
                  backgroundColor: colors.accent,
                  color: colors.text,
                }}
                className="text-[10px] font-bold px-2 py-1 rounded-full"
              >
                {appointmentRequests.length} Yeni
              </span>
            </div>
            <div className="space-y-3">
              {appointmentRequests.map((request) => (
                <div
                  key={request.id}
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.surfaceLight,
                    borderLeftColor: request.color,
                  }}
                  className="p-4 rounded-lg border border-l-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      style={{
                        backgroundColor: request.color + "30",
                        color: request.color
                      }}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    >
                      {request.initials}
                    </div>
                    <div className="flex-1">
                      <p style={{ color: colors.text }} className="text-xs font-bold">
                        {request.name}
                      </p>
                      <p
                        style={{ color: colors.textSecondary }}
                        className="text-[10px]"
                      >
                        {request.time}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: colors.surface,
                      borderColor: colors.surfaceLight,
                    }}
                    className="p-2 rounded-lg border mb-3"
                  >
                    <p
                      style={{ color: request.color }}
                      className="text-[10px] font-bold"
                    >
                      {request.procedure}
                    </p>
                    <p
                      style={{ color: colors.textSecondary }}
                      className="text-[10px] mt-1"
                    >
                      Öncelik: {request.priority}
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 text-[10px] font-bold">
                    <button
                      style={{ color: colors.textSecondary }}
                      className="hover:opacity-80 transition-opacity"
                    >
                      Reddet
                    </button>
                    <button
                      style={{ color: colors.accent }}
                      className="hover:opacity-80 transition-opacity"
                    >
                      Zamanla
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Note */}
          <div
            style={{
              backgroundColor: `${colors.accent}15`,
              borderLeftColor: colors.accent,
            }}
            className="p-4 rounded-lg border-l-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} style={{ color: colors.accent }} />
              <h5
                style={{ color: colors.accent }}
                className="text-[10px] font-bold uppercase tracking-wider"
              >
                Klinik Notu
              </h5>
            </div>
            <p style={{ color: colors.textSecondary }} className="text-xs leading-relaxed">
              Bugün saat 17:30'da aylık performans değerlendirme toplantısı yapılacaktır. 16:30 sonrası hasta kabulü yapılmamaktadır.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        style={{ background: colors.primaryGradient }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <Plus size={24} />
      </button>
    </div>
  );
}
