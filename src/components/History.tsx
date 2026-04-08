import React from 'react';
import { BookOpen } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const History: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <BookOpen className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('history.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('history.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg lg:text-xl text-justify">
              <p>
                Dios dio la visión a los misioneros <span className="font-semibold text-gray-900">Víctor Solórzano</span> y <span className="font-semibold text-gray-900">Doris Hernández</span> al fundar Ministerios Campamento Vida Eterna en Honduras.
              </p>
              <p>
                Tras una visita como voluntarios con su hijo <span className="font-semibold text-gray-900">Javier</span>, vieron las necesidades hospitalarias y de pobreza extrema que se atravesaban en la región, y la bondad de Dios motivó a comenzar con niños trayendo brigadas médicas junto al mensaje transformador de Jesucristo.
              </p>
              <p>
                Con ese propósito llegaron los misioneros <span className="font-semibold text-gray-900">Fernando</span> y <span className="font-semibold text-gray-900">Gleni</span>, atendiendo el llamado para darle vida a la misión y preparando un equipo juvenil de misioneros que llevará el mensaje de salvación a la siguiente generación, soñando y trabajando en el desarrollo de programas que cumplan la visión y misión que Dios nos encomendó.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <img
                src="/images/Actividades/WhatsApp%20Image%202026-03-21%20at%202.38.05%20PM.jpeg"
                alt="Equipo de ministerio"
                className="w-full max-w-xs rounded-3xl border border-gray-200 shadow-sm opacity-80"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{t('history.purpose')}</h3>
                <p className="text-gray-700">{t('history.purposeText')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{t('history.mission')}</h3>
                <p className="text-gray-700">{t('history.missionText')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{t('history.vision')}</h3>
                <p className="text-gray-700">{t('history.visionText')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{t('history.values')}</h3>
                <p className="text-gray-700">{t('history.valuesList')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Video de referencia</h3>
            <div className="relative overflow-hidden rounded-3xl shadow-lg" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Rf_EddAt5ak?start=1060&end=1310&rel=0&modestbranding=1"
                title="Video de YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;