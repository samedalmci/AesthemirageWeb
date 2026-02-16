import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobil menü açıkken scroll'u engelle
  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-neutral-800/60 backdrop-blur-sm">
        <nav className="flex items-center justify-between px-6 py-3 lg:px-12">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/icon.png"
              alt="Aesthemirage Logo"
              className="h-20 w-20 object-contain rounded-full border border-white/10 shadow-sm transition-transform group-hover:scale-105"
            />
            <span
              className="text-xl font-light tracking-widest text-white uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Aesthemirage
            </span>
          </a>

          {/* Masaüstü Menü */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            <a
              href="#klinikler"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Klinikler
            </a>
            <a
              href="#hizmetler"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Hizmetler
            </a>

            <div
              className="relative py-2"
              onMouseEnter={() => setIsEventsOpen(true)}
              onMouseLeave={() => setIsEventsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors">
                Etkinlikler
                <svg
                  className={`h-4 w-4 transition-transform ${isEventsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isEventsOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-neutral-900 border border-white/10 rounded-md shadow-xl py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800"
                  >
                    Seminerler
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800"
                  >
                    Kampanyalar
                  </a>
                </div>
              )}
            </div>
          </div>

          <button className="hidden lg:block bg-gold-500 hover:bg-amber-400 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Iletisim
          </button>

          {/* Hamburger Butonu */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* ANİMASYONLU MOBİL MENÜ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* Backdrop (Arka Plan Karartma) - Fade In/Out */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Panel - Sağdan Kayarak Gelme */}
            <motion.div
              initial={{ x: "100%" }} // Sağdan başla
              animate={{ x: 0 }} // Ekrana gir
              exit={{ x: "100%" }} // Sağdan çık
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-neutral-900 to-neutral-800 shadow-2xl flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src="/icon.png"
                    alt="Logo"
                    className="h-12 w-12 rounded-full"
                  />
                  <span className="text-lg font-light tracking-widest text-white uppercase">
                    AESTHEMIRAGE
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-full"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Linkleri - Sırayla Gelme (Stagger) */}
              <div className="p-8 flex flex-col gap-y-6">
                {["Klinikler", "Hizmetler", "Etkinlikler", "Iletisim"].map(
                  (text, i) => (
                    <motion.a
                      key={text}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }} // Sırayla gelme efekti
                      href={`#${text.toLowerCase()}`}
                      className={`text-xl font-light ${text === "Iletisim" ? "text-amber-400" : "text-white/90"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {text}
                    </motion.a>
                  ),
                )}
              </div>

              {/* Alt Buton */}
              <div className="mt-auto p-6 border-t border-white/10">
                <button className="w-full bg-white text-neutral-900 px-6 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
