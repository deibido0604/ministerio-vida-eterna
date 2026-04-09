import React, { useState } from "react";
import { Menu, X, Phone, MapPin, Church, ChevronRight, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { label: t('header.home'), href: "/" },
    { label: t('header.history'), href: "/#history" },
    { label: t('header.trips'), href: "/#trips" },
    { label: t('header.projects'), href: "/#projects" },
    { label: t('header.ministries'), href: "/#ministries" },
    { label: t('header.donations'), href: "/#donations" },
    { label: t('header.contact'), href: "/#contact" },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
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
                alt="Campamento Ministerios de Vida Eterna"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/20"></div>
              <Church className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-white" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-800">
                {t('footer.companyName')}
              </h1>
              <p className="text-xs text-gray-500">{t('footer.tagline')}</p>
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

          {/* Contact Info & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Botón de idioma */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
              aria-label={t('header.language')}
            >
              <Globe className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              <span className="font-medium text-gray-700 group-hover:text-blue-600 uppercase">
                {language === 'es' ? 'ES' : 'EN'}
              </span>
            </button>

            <a
              href="tel:+50496337658"
              className="flex items-center space-x-2 group"
            >
              <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <span className="text-sm text-gray-500">{t('contact.phone')}</span>
                <p className="font-medium text-gray-700">+504 9633-7658</p>
              </div>
            </a>
          </div>

          {/* Mobile language + menu controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={t('header.language')}
            >
              <Globe className="h-4 w-4 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700 uppercase">
                {language === 'es' ? 'ES' : 'EN'}
              </span>
            </button>

            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

                {/* Botón de idioma en móvil */}
                <button
                  onClick={() => {
                    toggleLanguage();
                    closeMobileMenu();
                  }}
                  className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
                >
                  <span className="font-medium">{t('header.language')}</span>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span className="uppercase font-bold">{language === 'es' ? 'ES' : 'EN'}</span>
                  </div>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <a
                  href="tel:+50496337658"
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
                  onClick={closeMobileMenu}
                >
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">+504 96337658</p>
                    <p className="text-sm text-gray-500">{t('contact.phone')}</p>
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