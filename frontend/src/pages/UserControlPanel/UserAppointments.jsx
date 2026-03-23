import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import ClinicDetailModal from "./ClinicDetailModal.jsx";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const center = { lat: 39.905, lng: 32.862 };

export default function UserAppointments({ colors }) {
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clinics = [
    {
      id: 1,
      name: "Tunalı Estetik Kliniği",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop",
      rating: 4.9,
      reviews: 428,
      address: "Barbaros, Tunalı Hilmi Cd. No:79 D:17, 06680 Çankaya/Ankara",
      latitude: 39.9050,
      longitude: 32.8625,
      distance: "1.2 KM",
      availability: "Bugün Mevcut",
      doctors: ["Dr. Arzu Demir", "Dr. Caner Yiğit"],
      treatments: ["Botox", "Filler", "Hydrafacial"],
      city: "Ankara",
      features: [
        { name: "Otopark", icon: "parking" },
        { name: "Wi-Fi", icon: "wifi" },
        { name: "Taksit", icon: "credit" },
      ],
      premium: true,
    },
    {
      id: 2,
      name: "Çankaya Beauty Studio",
      image: "https://images.unsplash.com/photo-1631217179033-293c8a62a024?w=600&h=400&fit=crop",
      rating: 4.7,
      reviews: 312,
      address: "Barbaros, Tunalı Hilmi Cd., 06680 Çankaya/Ankara",
      latitude: 39.9035,
      longitude: 32.8610,
      distance: "1.5 KM",
      availability: "Yarın Mevcut",
      doctors: ["Dr. Selen Yücel"],
      treatments: ["Hydrafacial", "Peeling", "Cilt Bakımı"],
      city: "Ankara",
      features: [
        { name: "Otopark", icon: "parking" },
        { name: "Wi-Fi", icon: "wifi" },
      ],
      premium: false,
    },
    {
      id: 3,
      name: "Nişantaşı Atelier",
      image: "https://images.unsplash.com/photo-1576091160399-112173f7f869?w=600&h=400&fit=crop",
      rating: 4.8,
      reviews: 356,
      address: "Teşvikiye Mah. Abdi İpekçi Cad. No:42, Şişli/İstanbul",
      latitude: 41.0482,
      longitude: 28.9948,
      distance: "450 KM",
      availability: "2 Gün Sonra",
      doctors: ["Dr. Mehmet Kaya", "Dr. Arzu Demir"],
      treatments: ["Botox", "Filler", "Lazer"],
      city: "İstanbul",
      features: [
        { name: "Otopark", icon: "parking" },
        { name: "Wi-Fi", icon: "wifi" },
        { name: "Taksit", icon: "credit" },
      ],
      premium: true,
    },
  ];

  const treatments = ["Botox", "Filler", "Hydrafacial", "Peeling", "Lazer", "Cilt Bakımı"];
  const doctors = ["Dr. Arzu Demir", "Dr. Caner Yiğit", "Dr. Mehmet Kaya", "Dr. Selen Yücel"];
  const cities = ["İstanbul", "Ankara"];

  const filteredClinics = clinics.filter((clinic) => {
    const treatmentMatch =
      !selectedTreatment ||
      clinic.treatments.some((t) => t.toLowerCase().includes(selectedTreatment.toLowerCase()));
    const doctorMatch =
      !selectedDoctor ||
      clinic.doctors.some((d) => d.toLowerCase().includes(selectedDoctor.toLowerCase()));
    const cityMatch = !selectedCity || clinic.city === selectedCity;
    return treatmentMatch && doctorMatch && cityMatch;
  });

  const handleClinicClick = (clinic) => {
    setSelectedClinic(clinic);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section>
        <h1
          className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-2"
          style={{ color: colors.text }}
        >
          Randevu Rezerve Et
        </h1>
        <p
          className="font-label text-sm tracking-widest uppercase opacity-80"
          style={{ color: colors.primary }}
        >
          {filteredClinics.length} Klinik Bulundu
        </p>
      </section>

      {/* Filter Section */}
      <div
        className="rounded-xl p-6 md:p-8 space-y-6 border"
        style={{
          backgroundColor: colors.surfaceContainerLow,
          borderColor: colors.outlineVariant,
        }}
      >
        <h3 style={{ color: colors.text }} className="font-bold text-lg">
          Kliniği Filtrele
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label
              style={{ color: colors.textSecondary }}
              className="text-sm font-semibold uppercase tracking-wider"
            >
              Hastalık / Tedavi
            </label>
            <select
              value={selectedTreatment}
              onChange={(e) => setSelectedTreatment(e.target.value)}
              style={{
                backgroundColor: colors.surface,
                color: colors.text,
                borderColor: colors.outlineVariant,
              }}
              className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-1"
            >
              <option value="">Tümü</option>
              {treatments.map((treatment) => (
                <option key={treatment} value={treatment}>
                  {treatment}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              style={{ color: colors.textSecondary }}
              className="text-sm font-semibold uppercase tracking-wider"
            >
              Doktor İsmi
            </label>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              style={{
                backgroundColor: colors.surface,
                color: colors.text,
                borderColor: colors.outlineVariant,
              }}
              className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-1"
            >
              <option value="">Tümü</option>
              {doctors.map((doctor) => (
                <option key={doctor} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              style={{ color: colors.textSecondary }}
              className="text-sm font-semibold uppercase tracking-wider"
            >
              Bölge / İl
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              style={{
                backgroundColor: colors.surface,
                color: colors.text,
                borderColor: colors.outlineVariant,
              }}
              className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-1"
            >
              <option value="">Tümü</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div
        className="rounded-xl overflow-hidden border"
        style={{
          backgroundColor: colors.surfaceContainerLow,
          borderColor: colors.outlineVariant,
          height: "500px",
          width: "100%",
        }}
      >
        {GOOGLE_MAPS_API_KEY ? (
          <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
            <Map
              defaultCenter={center}
              defaultZoom={11}
              style={{ width: "100%", height: "100%" }}
              mapId="aesthemirage-map"
            >
              {filteredClinics.map((clinic) => (
                <AdvancedMarker
                  key={clinic.id}
                  position={{ lat: clinic.latitude, lng: clinic.longitude }}
                  title={clinic.name}
                  onClick={() => handleClinicClick(clinic)}
                >
                  <Pin
                    background={clinic.premium ? "#e6c364" : "#4a92ee"}
                    borderColor={clinic.premium ? "#d4a142" : "#2978d8"}
                    glyphColor="#ffffff"
                  />
                </AdvancedMarker>
              ))}
            </Map>
          </APIProvider>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: colors.surfaceContainerLow }}
          >
            <p style={{ color: colors.textSecondary }}>
              Google Maps API anahtarı ayarlanmadı. .env dosyasına VITE_GOOGLE_MAPS_API_KEY ekle.
            </p>
          </div>
        )}
      </div>

      {/* Clinic Detail Modal */}
      {isModalOpen && selectedClinic && (
        <ClinicDetailModal
          clinic={selectedClinic}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
