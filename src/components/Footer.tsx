import React from 'react';
import { Heart, Church, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Iglesia Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-full">
                <Church className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Ministerio Vida Eterna</h2>
                <p className="text-gray-400 text-sm">Campamento de Fe</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Una comunidad de fe dedicada a servir a Dios y al prójimo, compartiendo el amor de Cristo a través de nuestro campamento y actividades.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:info@ministeriovidaeterna.org" className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#ministries" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Ministerios
                </a>
              </li>
              <li>
                <a href="#donations" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Donaciones
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-6">Horarios de Servicios</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-blue-900/50 p-2 rounded">
                  <Church className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Domingo</h4>
                  <p className="text-gray-400 text-sm">9:00 AM - 11:00 AM</p>
                  <p className="text-gray-400 text-sm">11:30 AM - 1:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-900/50 p-2 rounded">
                  <Church className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Miércoles</h4>
                  <p className="text-gray-400 text-sm">7:00 PM - 8:30 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-900/50 p-2 rounded">
                  <Church className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Viernes de Oración</h4>
                  <p className="text-gray-400 text-sm">7:00 PM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contacto Footer */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Calle de la Fe 123, Col. Esperanza</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+504 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@ministeriovidaeterna.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider y derechos */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Ministerio Vida Eterna. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Aviso legal
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center">
              Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> para la gloria de Dios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;