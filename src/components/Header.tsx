import React, { useState } from "react";
import { Menu, X, Phone, MapPin, Church, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Historia", href: "/#history" },
    { label: "Viajes 2026", href: "/#trips" },
    { label: "Proyectos", href: "/#projects" },
    { label: "Ministerios", href: "/#ministries" },
    { label: "Donaciones", href: "/#donations" },
    { label: "Contacto", href: "/#contact" },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1544830297-71c9c63d66b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Ministerio Vida Eterna"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/20"></div>
              <Church className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-white" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-800">
                Ministerio Vida Eterna
              </h1>
              <p className="text-xs text-gray-500">Campamento de Fe</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative group px-3 py-2"
              >
                <span className={`font-medium transition-colors ${
                  location.hash === item.href.substring(2) 
                    ? "text-blue-600" 
                    : "text-gray-700 hover:text-blue-600"
                }`}>
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+50412345678"
              className="flex items-center space-x-2 group"
            >
              <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <span className="text-sm text-gray-500">Llámanos</span>
                <p className="font-medium text-gray-700">+504 1234-5678</p>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                      location.hash === item.href.substring(2)
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <a
                  href="tel:+50432148918"
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
                  onClick={closeMobileMenu}
                >
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">+504 12345678</p>
                    <p className="text-sm text-gray-500">Teléfono principal</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">San Pedro Sula</p>
                    <p className="text-sm text-gray-500">Honduras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;