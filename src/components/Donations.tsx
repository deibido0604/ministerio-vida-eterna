import React, { useEffect } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Heart, Shield, Gift } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const Donations: React.FC = () => {
  const { t } = useLanguage();
  const donationAmount = '1';
  const isValidAmount = true;
  const [paypalLoaded, setPaypalLoaded] = React.useState(false);

  const handlePayPalError = (err: any) => {
    console.error('PayPal error:', err);
    const message = err?.details?.[0]?.description || err?.message || 'Hubo un error procesando tu donación. Por favor, intenta de nuevo.';
    alert(message);
  };

  useEffect(() => {
    // Verificar si PayPal SDK está cargado
    const checkPayPal = () => {
      const paypalWindow = (window as any).paypal;
      if (paypalWindow && !paypalLoaded) {
        console.log('PayPal SDK loaded successfully');
        setPaypalLoaded(true);
      } else if (!paypalWindow && paypalLoaded) {
        console.log('PayPal SDK unloaded');
        setPaypalLoaded(false);
      }
    };

    checkPayPal();
    const interval = setInterval(checkPayPal, 1000);

    return () => clearInterval(interval);
  }, [paypalLoaded]);

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

          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('donations.onlineDonation')}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-700 mb-2">{t('donations.onlineDonation')}</p>
                <div className="flex items-center text-sm">
                  <div className={`w-2 h-2 rounded-full mr-2 ${paypalLoaded ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <span className={paypalLoaded ? 'text-green-600' : 'text-yellow-600'}>
                    {paypalLoaded ? 'PayPal listo' : 'Cargando PayPal...'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-lg font-semibold text-gray-800 mb-3">PayPal</p>
                  {!paypalLoaded ? (
                    <div className="space-y-3">
                      <div className="text-center py-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                        <p className="text-gray-600 text-sm">Cargando PayPal...</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">O dona directamente:</p>
                        <a
                          href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Donar con PayPal
                        </a>
                      </div>
                    </div>
                  ) : (
                    <PayPalButtons
                      fundingSource="paypal"
                      style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'paypal' }}
                      forceReRender={[donationAmount]}
                      disabled={!isValidAmount}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: 'CAPTURE',
                          purchase_units: [
                            {
                              amount: {
                                value: donationAmount,
                                currency_code: 'USD',
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={async (data, actions) => {
                        if (actions.order) {
                          const details = await actions.order.capture();
                          console.log('Donation completed:', details);
                          alert('¡Gracias por tu donación! Tu contribución ha sido procesada exitosamente.');
                        }
                      }}
                      onCancel={() => {
                        console.log('PayPal donation cancelled');
                        alert('Donación cancelada. Si deseas continuar, intenta nuevamente.');
                      }}
                      onError={handlePayPalError}
                    />
                  )}
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-lg font-semibold text-gray-800 mb-3">Tarjeta de crédito</p>
                  {!paypalLoaded ? (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 mx-auto mb-2"></div>
                      <p className="text-gray-600 text-sm">Cargando PayPal...</p>
                    </div>
                  ) : (
                    <PayPalButtons
                      fundingSource="card"
                      style={{ layout: 'vertical', color: 'black', shape: 'rect', label: 'checkout' }}
                      forceReRender={[donationAmount]}
                      disabled={!isValidAmount}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: 'CAPTURE',
                          purchase_units: [
                            {
                              amount: {
                                value: donationAmount,
                                currency_code: 'USD',
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={async (data, actions) => {
                        if (actions.order) {
                          const details = await actions.order.capture();
                          console.log('Donation completed:', details);
                          alert('¡Gracias por tu donación! Tu contribución ha sido procesada exitosamente.');
                        }
                      }}
                      onCancel={() => {
                        console.log('PayPal card donation cancelled');
                        alert('Donación cancelada. Si deseas continuar, intenta nuevamente.');
                      }}
                      onError={handlePayPalError}
                    />
                  )}
                </div>
              </div>

              <div className="text-sm text-gray-500 bg-blue-50 p-4 rounded-lg">
                <p className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  {t('donations.secureNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;