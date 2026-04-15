// Donations.tsx (versión con enlace)
import React from 'react';
import { Heart, Shield, Gift } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const Donations: React.FC = () => {
  const { t } = useLanguage();

  // URL de tu botón hospedado (puedes obtener el enlace desde el panel de PayPal)
  const paypalDonationUrl = "https://www.paypal.com/ncp/payment/BSD2E5NCNREAY";

  return (
    <section id="donations" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4">
            <Heart className="h-10 w-10 text-yellow-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('donations.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('donations.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda: información (sin cambios) */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('donations.whyDonate')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Gift className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-700">{t('donations.reason1.title')}</h4>
                    <p className="text-gray-600">{t('donations.reason1.description')}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-700">{t('donations.reason2.title')}</h4>
                    <p className="text-gray-600">{t('donations.reason2.description')}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('donations.otherMethods')}</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-700 mb-2">{t('donations.bankTransfer')}</h4>
                  <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t('donations.bankDetails') }} />
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-700 mb-2">{t('donations.inPerson')}</h4>
                  <p className="text-gray-600 text-sm">{t('donations.inPersonDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: botón de PayPal con enlace directo */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('donations.onlineDonation')}</h3>
            
            <a
              href={paypalDonationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center items-center px-6 py-3 bg-[#0070ba] hover:bg-[#003087] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.067 8.478c.492.88.556 1.892.148 2.794-1.048 2.327-3.777 3.476-6.167 3.476-1.44 0-2.79-.36-3.96-1.08-.36-.24-.72-.48-1.08-.84-.6-.48-1.08-1.08-1.44-1.8-.48-1.08-.6-2.28-.36-3.48.24-1.08.84-2.04 1.68-2.76.96-.84 2.16-1.32 3.48-1.32 1.44 0 2.76.48 3.84 1.44.96.84 1.56 2.04 1.68 3.36.12 1.08-.12 2.16-.72 3.12-.48.84-1.2 1.44-2.04 1.8-.6.24-1.2.36-1.8.36-.6 0-1.2-.12-1.68-.36-.36-.12-.72-.36-1.08-.6-.48-.36-.84-.84-1.08-1.44-.36-.84-.48-1.8-.24-2.76.24-.84.72-1.56 1.32-2.16.72-.72 1.68-1.2 2.76-1.32.96-.12 1.92.12 2.76.6.72.48 1.2 1.2 1.44 2.04.24.84.12 1.68-.24 2.52-.36.84-1.08 1.44-1.92 1.8-.6.24-1.2.36-1.8.36-.6 0-1.2-.12-1.68-.36-.36-.12-.72-.36-1.08-.6-.48-.36-.84-.84-1.08-1.44-.36-.84-.48-1.8-.24-2.76.24-.84.72-1.56 1.32-2.16.72-.72 1.68-1.2 2.76-1.32.96-.12 1.92.12 2.76.6.72.48 1.2 1.2 1.44 2.04.24.84.12 1.68-.24 2.52-.36.84-1.08 1.44-1.92 1.8-.6.24-1.2.36-1.8.36z"/>
              </svg>
              Donar con PayPal
            </a>

            <div className="text-sm text-gray-500 bg-blue-50 p-4 rounded-lg mt-6">
              <p className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                {t('donations.secureNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;