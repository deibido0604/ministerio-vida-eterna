import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Heart, Shield, Gift } from 'lucide-react';

const Donations: React.FC = () => {
    const [donationAmount, setDonationAmount] = useState('10.00');

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: donationAmount,
                },
                description: "Donación para Ministerio Vida Eterna",
            }],
        });
    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
            alert(`¡Gracias por tu donación, ${details.payer.name.given_name}!`);
            // Aquí puedes agregar lógica adicional
        });
    };

    return (
        <section id="donations" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4">
                        <Heart className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Apoya Nuestra Misión</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Tu generosidad nos permite continuar con nuestra labor de evangelización, 
                        ayuda comunitaria y discipulado. Cada donación hace la diferencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Información de donaciones */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué donar?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <Gift className="h-6 w-6 text-yellow-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-700">Misión y Evangelismo</h4>
                                        <p className="text-gray-600">Apoya nuestros esfuerzos de alcance comunitario</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Shield className="h-6 w-6 text-yellow-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-700">Ayuda Social</h4>
                                        <p className="text-gray-600">Programas de alimentación y apoyo a familias</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Otras formas de donar</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-bold text-gray-700 mb-2">Transferencia Bancaria</h4>
                                    <p className="text-gray-600 text-sm">Banco: Tu Banco Local<br/>Cuenta: 123-456789-0</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-bold text-gray-700 mb-2">En Persona</h4>
                                    <p className="text-gray-600 text-sm">Domingos durante nuestros servicios</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de donación PayPal */}
                    <div className="bg-white p-8 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Donar en Línea</h3>
                        
                        <div className="mb-8">
                            <p className="text-gray-600 mb-4">Selecciona un monto de donación:</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                {[10, 25, 50, 100].map((amount) => (
                                    <button
                                        key={amount}
                                        onClick={() => setDonationAmount(amount.toString())}
                                        className={`p-3 border-2 rounded-lg transition-colors font-bold ${
                                            donationAmount === amount.toString()
                                                ? 'bg-yellow-600 text-white border-yellow-600'
                                                : 'border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'
                                        }`}
                                    >
                                        ${amount} USD
                                    </button>
                                ))}
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="customAmount" className="block text-gray-700 font-medium mb-2">
                                    O ingresa un monto personalizado:
                                </label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                        USD
                                    </span>
                                    <input
                                        type="number"
                                        id="customAmount"
                                        value={donationAmount}
                                        onChange={(e) => setDonationAmount(e.target.value)}
                                        min="1"
                                        step="0.01"
                                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="mb-6">
                                <PayPalButtons
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                    style={{
                                        layout: 'vertical',
                                        shape: 'rect',
                                        color: 'gold',
                                        label: 'donate',
                                    }}
                                    disabled={!donationAmount || parseFloat(donationAmount) <= 0}
                                />
                            </div>

                            <div className="text-sm text-gray-500 bg-blue-50 p-4 rounded-lg">
                                <p className="flex items-center">
                                    <Shield className="h-4 w-4 mr-2" />
                                    Tu donación es segura y protegida por PayPal
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