import {
  X,
  MapPin,
  Star,
  Heart,
  Calendar,
  ParkingCircle,
  Wifi,
  CreditCard,
  CheckCircle,
} from "lucide-react";

export default function ClinicDetailModal({ clinic, onClose }) {
  const getFeatureIcon = (iconType) => {
    switch (iconType) {
      case "parking":
        return <ParkingCircle size={18} />;
      case "wifi":
        return <Wifi size={18} />;
      case "credit":
        return <CreditCard size={18} />;
      default:
        return <CheckCircle size={18} />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      onClick={onClose}
    >
      <div
        className="rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] max-w-[420px] w-full max-h-[90vh] overflow-y-auto"
        style={{
          background: "rgba(14, 19, 33, 0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clinic Image Header */}
        <div className="relative h-56 overflow-hidden group">
          <img
            src={clinic.image}
            alt={clinic.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #0e1321, transparent, transparent)",
            }}
          />

          {/* Premium Badge */}
          {clinic.premium && (
            <div className="absolute top-4 left-4">
              <span
                className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest"
                style={{
                  backgroundColor: "rgba(230, 195, 100, 0.9)",
                  color: "#241a00",
                  backdropFilter: "blur(8px)",
                }}
              >
                Premium Seçim
              </span>
            </div>
          )}

          {/* Favorite Button */}
          <button
            className="absolute top-4 right-14 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Heart size={20} />
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-2 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Name + Rating */}
          <div className="flex justify-between items-start mb-2">
            <h3
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#dee2f7" }}
            >
              {clinic.name}
            </h3>
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg shrink-0 ml-3"
              style={{
                backgroundColor: "rgba(230, 195, 100, 0.1)",
                border: "1px solid rgba(230, 195, 100, 0.2)",
              }}
            >
              <Star
                size={14}
                fill="#e6c364"
                style={{ color: "#e6c364" }}
              />
              <span
                className="font-bold text-sm"
                style={{ color: "#e6c364" }}
              >
                {clinic.rating}
              </span>
            </div>
          </div>

          {/* Address */}
          <p
            className="text-sm flex items-center gap-2 mb-6"
            style={{ color: "#8b919d" }}
          >
            <MapPin size={18} style={{ color: "#e6c364", flexShrink: 0 }} />
            {clinic.address}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div
              className="p-4 rounded-2xl"
              style={{
                backgroundColor: "rgba(37, 42, 57, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-widest mb-1"
                style={{ color: "#64748b" }}
              >
                Uzaklık
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: "#dee2f7" }}
              >
                {clinic.distance}
              </p>
            </div>
            <div
              className="p-4 rounded-2xl"
              style={{
                backgroundColor: "rgba(37, 42, 57, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-widest mb-1"
                style={{ color: "#64748b" }}
              >
                Müsaitlik
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: "#e6c364" }}
              >
                {clinic.availability}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              className="flex-1 py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:brightness-125 transition-all"
              style={{
                backgroundColor: "#2f3444",
                color: "#dee2f7",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              Detaylar
            </button>
            <button
              className="flex-[1.5] py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              style={{
                backgroundColor: "#4a92ee",
                color: "#ffffff",
                boxShadow: "0 15px 30px -10px rgba(74, 146, 238, 0.4)",
              }}
            >
              <Calendar size={18} />
              Randevu Al
            </button>
          </div>
        </div>

        {/* Quick Features Bar */}
        {clinic.features && clinic.features.length > 0 && (
          <div
            className="px-8 py-4 flex justify-around"
            style={{
              backgroundColor: "rgba(22, 27, 42, 0.5)",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {clinic.features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center gap-1"
              >
                <div style={{ color: "#64748b" }}>
                  {getFeatureIcon(feature.icon)}
                </div>
                <span
                  className="text-[9px] font-bold uppercase tracking-tight"
                  style={{ color: "#64748b" }}
                >
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
