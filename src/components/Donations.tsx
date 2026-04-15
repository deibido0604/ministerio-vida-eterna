import React, { useEffect } from 'react';
import { Heart, Shield, Gift } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}

const Donations: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 30; // 30 * 300ms = 9 segundos

    const initButton = () => {
      if (window.paypal && typeof window.paypal.HostedButtons === 'function') {
        try {
          window.paypal.HostedButtons({
            hostedButtonId: 'RQ7CYVG92BDPJ'
          }).render('#paypal-container-RQ7CYVG92BDPJ');
          console.log('Botón hospedado de PayPal renderizado correctamente');
        } catch (err) {
          console.error('Error al renderizar botón hospedado:', err);
        }
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(initButton, 300);
      } else {
        console.error('PayPal HostedButtons no disponible después de 9 segundos');
        // Opcional: mostrar un mensaje de error al usuario
        const container = document.getElementById('paypal-container-RQ7CYVG92BDPJ');
        if (container) {
          container.innerHTML = '<p class="text-red-600">No se pudo cargar el botón de PayPal. Recarga la página o intenta más tarde.</p>';
        }
      }
    };

    initButton();
  }, []);

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
          {/* Columna izquierda - sin cambios */}
          <div className="space-y-8">
            {/* ... el mismo contenido que tenías ... */}
          </div>

          {/* Columna derecha - solo el contenedor del botón */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('donations.onlineDonation')}</h3>
            <div id="paypal-container-RQ7CYVG92BDPJ" className="min-h-[100px]"></div>
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