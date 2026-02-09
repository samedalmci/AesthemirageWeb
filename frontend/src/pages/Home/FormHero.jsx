import { useState } from "react";

export default function FormHero() {
  const [formData, setFormData] = useState({
    userType: "",
    email: "",
    acceptNewsletter: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Burada form gönderme işlemi yapılacak
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 border-l-2 border-t-2 border-white transform -rotate-45" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border-r-2 border-b-2 border-white transform rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
                Daha Fazla Bilgi Almak İçin Abone Olun
              </h2>
              <p className="text-lg text-gray-300">
                Cildinizin sağlıklı geleceğine yatırım yapın
              </p>
            </div>

            {/* Right Side - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Type Dropdown */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Bize kim olduğunuzu söyleyin
                  </label>
                  <select
                    value={formData.userType}
                    onChange={(e) =>
                      setFormData({ ...formData, userType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  >
                    <option value="">Lütfen Seçin</option>
                    <option value="patient">Hasta</option>
                    <option value="doctor">Doktor</option>
                    <option value="clinic">Klinik Sahibi</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-3 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.acceptNewsletter}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acceptNewsletter: e.target.checked,
                      })
                    }
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-400"
                    required
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-white leading-tight"
                  >
                    Aesthemirage'ın bülten ve güncellemelerini almak istiyorum
                    <span className="text-red-400">*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors w-full md:w-auto"
                  >
                    Hemen Abone Ol!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
