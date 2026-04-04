import React from 'react';
import { MessageCircle, Mail, Heart, MapPin, Phone } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.companyName')}</h3>
            <p className="text-gray-400 mb-4">{t('footer.tagline')}</p>
            <p className="text-gray-400 text-sm">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t('header.home')}</a></li>
              <li><a href="#history" className="text-gray-400 hover:text-white transition-colors">{t('header.history')}</a></li>
              <li><a href="#trips" className="text-gray-400 hover:text-white transition-colors">{t('header.trips')}</a></li>
              <li><a href="#media" className="text-gray-400 hover:text-white transition-colors">{t('header.media')}</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">{t('header.projects')}</a></li>
              <li><a href="#ministries" className="text-gray-400 hover:text-white transition-colors">{t('header.ministries')}</a></li>
              <li><a href="#donations" className="text-gray-400 hover:text-white transition-colors">{t('header.donations')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('header.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">{t('footer.address')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+50496337658" className="text-gray-400 hover:text-white transition-colors">{t('footer.phone')}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:info@ministeriovidaeterna.org" className="text-gray-400 hover:text-white transition-colors">{t('footer.email')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a href="https://wa.me/50496337658" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="mailto:info@ministeriovidaeterna.org" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} {t('footer.companyName')}. {t('footer.copyright')}
          </p>
          <p className="mt-2 flex items-center justify-center">
            {t('footer.madeWith')} <Heart className="h-4 w-4 text-red-500 mx-1" /> {t('footer.for')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;