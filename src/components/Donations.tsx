import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Heart, Shield, Gift } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const Donations: React.FC = () => {
  const { t } = useLanguage();
  const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();
  
  const donationAmount = '10.00';

  const handlePayPalError = (err: any) => {
    console.error('PayPal error:', err);
    alert('Hubo un error al procesar tu donación. Por favor, intenta de nuevo más tarde.');
  };

  if (isRejected) {
    return (
      <section id="donations" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
            <p className="text-red-600 mb-4">
              No se pudo cargar PayPal. Verifica tu conexión o desactiva extensiones del navegador que puedan bloquearlo.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Reintentar
            </button>
          </div>
        </div>
      </section>
    );
  }

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
          {/* Columna izquierda: información */}
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

          {/* Columna derecha: botón de PayPal */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('donations.onlineDonation')}</h3>

            {isPending ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando PayPal...</p>
              </div>
            ) : isResolved ? (
              <div className="space-y-4">
                <p className="text-gray-700">Monto sugerido: <strong>${donationAmount} USD</strong></p>
                <PayPalButtons
                  style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'paypal' }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: 'CAPTURE',
                      purchase_units: [
                        {
                          amount: {
                            value: donationAmount,
                            currency_code: 'USD',
                          },
                          description: 'Donación a la iglesia',
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    if (actions.order) {
                      const details = await actions.order.capture();
                      console.log('Donación completada:', details);
                      alert(`¡Gracias por tu donación de $${donationAmount} USD! Tu contribución ha sido procesada exitosamente.`);
                    }
                  }}
                  onCancel={() => {
                    alert('Donación cancelada. Puedes volver a intentarlo cuando desees.');
                  }}
                  onError={handlePayPalError}
                />
              </div>
            ) : null}

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