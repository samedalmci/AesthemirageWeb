import { useState } from "react";
import { X, Camera } from "lucide-react";

export default function DocProfile({ colors, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "Adrian",
    surname: "Smith",
    clinic: "Aesthemirage Klinik",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDitTaIcKCdtLAuipVdO-5WpXmrqemu_wDcIEJY5BQu6abHNabRMhYGvwnO0fb_J7_4u0UoyxuEkrPhzKmaqu_hH-AZ1dRtFb5xl3X1krqEXYH_cHSXYpuZDV9861h8phOrsjQybS35BoGj84jIMhlyGj1HBkV73GhvoyBWBJ7RAyqL7KC1ZDEO5wJQyvrOpMot6bs4ECYVTYYLC8svJAe8rDd_nDD9kOifbnl_p_Q6YA4xHEe8JOwfbXOEA1SM_SqyP1oc7KcRaSpQ",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
      ></div>

      <div
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.surfaceLight,
        }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-2xl border shadow-2xl z-50 overflow-hidden"
      >
        <div
          style={{
            backgroundColor: colors.bg,
            borderBottomColor: colors.surfaceLight,
          }}
          className="p-6 border-b flex justify-between items-center"
        >
          <h2 style={{ color: colors.text }} className="text-xl font-bold">
            Profil Düzenle
          </h2>
          <button
            onClick={onClose}
            style={{ color: colors.textSecondary }}
            className="hover:opacity-80 transition-opacity"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="text-center">
            <img
              src={formData.avatar}
              alt="Profil"
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4"
              style={{ borderColor: colors.accent }}
            />
            {isEditing && (
              <button
                style={{
                  backgroundColor: colors.accent,
                  color: colors.text,
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Camera size={18} />
                Avatar Değiştir
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label
                style={{ color: colors.text }}
                className="text-sm font-bold block mb-2"
              >
                İsim
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                style={{
                  backgroundColor: isEditing ? colors.bg : colors.bg + "cc",
                  color: colors.text,
                  borderColor: colors.surfaceLight,
                }}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none disabled:opacity-60 transition-all"
              />
            </div>

            <div>
              <label
                style={{ color: colors.text }}
                className="text-sm font-bold block mb-2"
              >
                Soyadı
              </label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                disabled={!isEditing}
                style={{
                  backgroundColor: isEditing ? colors.bg : colors.bg + "cc",
                  color: colors.text,
                  borderColor: colors.surfaceLight,
                }}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none disabled:opacity-60 transition-all"
              />
            </div>

            <div>
              <label
                style={{ color: colors.text }}
                className="text-sm font-bold block mb-2"
              >
                Klinik
              </label>
              <input
                type="text"
                name="clinic"
                value={formData.clinic}
                onChange={handleChange}
                disabled={!isEditing}
                style={{
                  backgroundColor: isEditing ? colors.bg : colors.bg + "cc",
                  color: colors.text,
                  borderColor: colors.surfaceLight,
                }}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none disabled:opacity-60 transition-all"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {!isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.text,
                  }}
                  className="flex-1 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Düzenle
                </button>
                <button
                  onClick={onClose}
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.textSecondary,
                    borderColor: colors.surfaceLight,
                  }}
                  className="flex-1 py-2 rounded-lg border font-semibold text-sm hover:opacity-80 transition-opacity"
                >
                  Kapat
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.text,
                  }}
                  className="flex-1 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Kaydet
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.textSecondary,
                    borderColor: colors.surfaceLight,
                  }}
                  className="flex-1 py-2 rounded-lg border font-semibold text-sm hover:opacity-80 transition-opacity"
                >
                  İptal
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
