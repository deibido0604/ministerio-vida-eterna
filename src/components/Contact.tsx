import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappNumber = "50496337658";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre el Campamento Ministerios de Vida Eterna");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.infoTitle')}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 text-lg">{t('contact.address')}</h4>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact.addressValue') }} />
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 text-lg">{t('contact.phone')}</h4>
                  <p className="text-gray-600">
                    <a href="tel:+50496337658" className="hover:text-blue-600 transition-colors">+504 9633-7658</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 text-lg">{t('contact.whatsapp')}</h4>
                  <p className="text-gray-600">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors font-medium"
                    >
                      {t('contact.whatsappChat')}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 text-lg">{t('contact.email')}</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@ministeriovidaeterna.org" className="hover:text-blue-600 transition-colors">
                      info@ministeriovidaeterna.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 text-lg">{t('contact.schedule')}</h4>
                  <div className="text-gray-600 space-y-2">
                    <div>
                      <p className="font-semibold">Domingo</p>
                      <p>Cultos 4:30 pm</p>
                    </div>
                    <div>
                      <p className="font-semibold">Martes</p>
                      <p>Clases de valores en escuela 8:00 am</p>
                      <p>Discipulado de mujeres 2:00 pm</p>
                    </div>
                    <div>
                      <p className="font-semibold">Miércoles</p>
                      <p>Casas de Vida 5:30 pm</p>
                    </div>
                    <div>
                      <p className="font-semibold">Viernes</p>
                      <p>Discipulado caballeros 4:30 pm</p>
                      <p>Clases de música 7:00 pm</p>
                      <p>Altares de Vida</p>
                    </div>
                    <div>
                      <p className="font-semibold">Sábado</p>
                      <p>Campavida juvenil 4:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                <span>{t('contact.whatsappChat')}</span>
              </a>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold text-gray-800 mb-4">{t('contact.followUs')}</h4>
              <div className="flex space-x-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.57 0 .25 5.32.25 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.38-1.67a11.78 11.78 0 0 0 5.72 1.47h.01c6.53 0 11.85-5.32 11.85-11.86 0-3.17-1.24-6.15-3.44-8.46zM12.11 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.79.99 1.01-3.69-.24-.38a9.9 9.9 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.91-9.89 2.64 0 5.12 1.03 6.99 2.91a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.45 9.89-9.86 9.89zm5.43-7.39c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.29.5 1.73.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.43-.08-.15-.28-.23-.58-.38z" />
                  </svg>
                </a>
                <a href="mailto:info@ministeriovidaeterna.org" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 3.24-8 5.33-8-5.33V6l8 5.33L20 6v1.24z" />
                  </svg>
                </a>
                <a href="tel:+50496337658" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <span className="sr-only">Phone</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.27a1 1 0 0 1 1 1c0 1.27.2 2.5.59 3.68a1 1 0 0 1-.24 1.01l-2 2.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.formTitle')}</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{t('contact.successTitle')}</h4>
                  <p className="text-gray-600">{t('contact.successMessage')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder={t('contact.placeholderName')}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          {t('contact.emailLabel')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder={t('contact.placeholderEmail')}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          {t('contact.phoneLabel')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder={t('contact.placeholderPhone')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        {t('contact.messageLabel')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder={t('contact.placeholderMessage')}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>{t('contact.send')}</span>
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center animate-bounce"
        aria-label="Chat by WhatsApp"
        style={{ animationDuration: '2s' }}
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Contact;