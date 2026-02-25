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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>{t('history.paragraph1')}</p>
              <p>{t('history.paragraph2')}</p>
              <p>{t('history.paragraph3')}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
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
      </div>
    </section>
  );
};

export default History;