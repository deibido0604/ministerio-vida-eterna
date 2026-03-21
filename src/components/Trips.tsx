import React, { useState } from 'react';
import { useLanguage } from 'context/LanguageContext';
import { HeartHandshake, Home, Landmark, Stethoscope, BookOpen, PartyPopper, Hand, Church } from 'lucide-react';

const Trips: React.FC = () => {
  const { t, language } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpanded = (id: number) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activities = [
    {
      id: 1,
      key: 'templo',
      icon: <Landmark className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/curadas/construccion-templo/templo_01.jpeg',
        '/images/curadas/construccion-templo/templo_02.jpeg',
        '/images/curadas/construccion-templo/templo_03.jpeg',
        '/images/curadas/construccion-templo/templo_04.jpeg',
        '/images/curadas/construccion-templo/templo_06.jpeg',
        '/images/curadas/construccion-templo/templo_07.jpeg',
        '/images/curadas/construccion-templo/templo_08.jpeg'
      ]
    },
    {
      id: 2,
      key: 'culto',
      icon: <Church className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/curadas/culto-iglesia/culto_01.jpeg',
        '/images/curadas/culto-iglesia/culto_03.jpeg',
        '/images/curadas/culto-iglesia/culto_04.jpeg',
        '/images/curadas/culto-iglesia/culto_06.jpeg',
        '/images/curadas/culto-iglesia/culto_10.jpeg',
        '/images/curadas/culto-iglesia/culto_11.jpeg'  
      ]
    },
    {
      id: 3,
      key: 'casas',
      icon: <Home className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/curadas/casas-de-vida/casa_01.jpeg',
        '/images/curadas/casas-de-vida/casa_02.jpeg',
        '/images/curadas/casas-de-vida/casa_03.jpeg',
        '/images/curadas/casas-de-vida/casa_04.jpeg',
        '/images/curadas/casas-de-vida/casa_05.jpeg',
        '/images/curadas/casas-de-vida/casa_06.jpeg'   
      ]
    },
    {
      id: 4,
      key: 'brigada',
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/curadas/brigada-medica-comunitaria/brigada_01.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_03.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_05.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_07.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_10.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_13.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_18.jpeg'
      ]
    },
    {
      id: 5,
      key: 'ensayos',
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/curadas/ensayos-biblicos/ensayo_01.jpeg',
        '/images/curadas/ensayos-biblicos/ensayo_02.jpeg',
        '/images/curadas/ensayos-biblicos/ensayo_03.jpeg'
      ]
    },
    {
      id: 6,
      key: 'misiones',
      icon: <HeartHandshake className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/curadas/misiones-fogatas-pinatas/mision_02.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_05.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_08.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_11.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_16.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_17.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_21.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_22.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_27.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_30.jpeg'
      ]
    },
    {
      id: 7,
      key: 'fogatas',
      icon: <PartyPopper className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/Fogatas/WhatsApp Image 2026-03-21 at 2.39.42 PM.jpeg',
        '/images/Fogatas/WhatsApp Image 2026-03-21 at 2.39.47 PM (1).jpeg',
        '/images/Fogatas/WhatsApp Image 2026-03-21 at 2.39.48 PM.jpeg',
        '/images/Fogatas/WhatsApp Image 2026-03-21 at 2.41.29 PM.jpeg',
        '/images/Fogatas/WhatsApp Image 2026-03-21 at 2.41.30 PM (5).jpeg',
        '/images/Fogatas/WhatsApp Image 2026-03-21 at 2.41.31 PM (1).jpeg',
        '/images/Fogatas/WhatsApp Image 2026-03-21 at 2.41.32 PM (2).jpeg',
        '/images/Fogatas/WhatsApp Image 2026-03-21 at 2.41.33 PM.jpeg'
      ]
    },
    {
      id: 8,
      key: 'entrega',
      icon: <Hand className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/curadas/entrega-viveres-y-ropa/entrega_01.jpeg',
        '/images/curadas/entrega-viveres-y-ropa/entrega_02.jpeg',
        '/images/curadas/entrega-viveres-y-ropa/entrega_03.jpeg',
        '/images/curadas/entrega-viveres-y-ropa/entrega_04.jpeg'
      ]
    }
  ];

  const showMoreLabel = language === 'es' ? 'Ver mas fotos' : 'Show more photos';
  const showLessLabel = language === 'es' ? 'Ver menos' : 'Show less';

  return (
    <section id="trips" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('trips.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t('trips.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="aspect-video overflow-hidden">
                <img
                  src={activity.images[0]}
                  alt={t(`trips.cards.${activity.key}.title`)}
                  className="h-full w-full object-cover cursor-zoom-in"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {activity.icon}
                  </div>
                  <span className="text-sm font-semibold text-blue-600">{t(`trips.cards.${activity.key}.frequency`)}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{t(`trips.cards.${activity.key}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`trips.cards.${activity.key}.description`)}</p>
                <p className="text-sm text-gray-500 mb-4">{t(`trips.cards.${activity.key}.detail`)}</p>

                <div className="grid grid-cols-3 gap-2">
                  {activity.images.slice(1, 4).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${t(`trips.cards.${activity.key}.title`)} ${index + 2}`}
                      className="h-20 w-full rounded-md object-cover cursor-zoom-in"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>

                {activity.images.length > 4 && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleExpanded(activity.id)}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {expandedCards[activity.id] ? showLessLabel : `${showMoreLabel} (+${activity.images.length - 4})`}
                    </button>

                    {expandedCards[activity.id] && (
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {activity.images.slice(4).map((image, index) => (
                          <img
                            key={`${activity.id}-${index}`}
                            src={image}
                            alt={`${t(`trips.cards.${activity.key}.title`)} ${index + 5}`}
                            className="h-20 w-full rounded-md object-cover cursor-zoom-in"
                            loading="lazy"
                            decoding="async"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trips;