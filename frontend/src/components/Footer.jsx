import { Link } from "react-router";
import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-0 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span>
                <img
                  src="src/assets/icon.png"
                  alt="react Logo"
                  className="h-30 w-30 object-contain"
                />
              </span>
              <p className="font-medium text-gray-900 space-y-3 mb-4">
                FLOWBITE
              </p>
            </div>
            <div className=" font-medium text-gray-900">
              <p className="space-y-3 mb-4 text-gray-600">
                Lorem ipsum dolor sit.
              </p>
              <p className="space-y-3 text-gray-600">
                &copy; 2025 Flowbite. Tüm hakları saklıdır.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-gray-900">SAYFA 1</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  LİNK 1
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  LİNK 2
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  LİNK 3
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-gray-900">SAYFA 2</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  LİNK 1
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  LİNK 2
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  LİNK 3
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-gray-900">İLETİŞİM</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Adres: Lorem ipsum dolor sit.</li>
              <li>Telefon: +90 555 555 55 55</li>
              <li>Email: info@dreamy.com</li>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
