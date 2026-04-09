import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Heart, Shield, Gift } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const Donations: React.FC = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('10');
  const [customAmount, setCustomAmount] = useState('');

  const donationAmount = customAmount.trim() !== '' ? customAmount : amount;
  const isValidAmount = Number(donationAmount) > 0;

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
              <p className="text-gray-700 mb-2">{t('donations.selectAmount')}</p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {['10', '25', '50'].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount('');
                    }}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${amount === value && customAmount === '' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'}`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              <div>
                <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('donations.customAmount')}
                </label>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  step="0.01"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                  placeholder="10.00"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="mb-6">
                <PayPalButtons
                  style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'donate' }}
                  forceReRender={[donationAmount]}
                  disabled={!isValidAmount}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: 'CAPTURE',
                      purchase_units: [
                        {
                          amount: {
                            value: isValidAmount ? donationAmount : '1',
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
                    }
                  }}
                />
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