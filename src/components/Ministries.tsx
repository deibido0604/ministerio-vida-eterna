import React from 'react';
import { Music, Users, BookOpen, Heart, Globe, Mic } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const Ministries: React.FC = () => {
  const { t } = useLanguage();

  const ministries = [
    {
      icon: <Music className="h-10 w-10 text-blue-600" />,
      title: t('ministries.ministry1.title'),
      description: t('ministries.ministry1.description'),
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: t('ministries.ministry2.title'),
      description: t('ministries.ministry2.description'),
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: t('ministries.ministry3.title'),
      description: t('ministries.ministry3.description'),
    },
    {
      icon: <Heart className="h-10 w-10 text-blue-600" />,
      title: t('ministries.ministry4.title'),
      description: t('ministries.ministry4.description'),
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: t('ministries.ministry5.title'),
      description: t('ministries.ministry5.description'),
    },
    {
      icon: <Mic className="h-10 w-10 text-blue-600" />,
      title: t('ministries.ministry6.title'),
      description: t('ministries.ministry6.description'),
    },
  ];

  return (
    <section id="ministries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('ministries.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('ministries.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full">
                  {ministry.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{ministry.title}</h3>
              <p className="text-gray-600">{ministry.description}</p>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                {t('ministries.learnMore')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;