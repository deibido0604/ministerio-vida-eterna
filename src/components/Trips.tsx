import React from 'react';
import { useLanguage } from 'context/LanguageContext';
import { Calendar, MapPin, Users } from 'lucide-react';

const Trips: React.FC = () => {
  const { t } = useLanguage();

  const trips = [
    {
      id: 1,
      title: t('trips.trip1.title'),
      date: t('trips.trip1.date'),
      description: t('trips.trip1.description'),
      spots: t('trips.trip1.spots'),
      icon: <MapPin className="h-6 w-6 text-blue-600" />
    },
    {
      id: 2,
      title: t('trips.trip2.title'),
      date: t('trips.trip2.date'),
      description: t('trips.trip2.description'),
      spots: t('trips.trip2.spots'),
      icon: <Calendar className="h-6 w-6 text-blue-600" />
    },
    {
      id: 3,
      title: t('trips.trip3.title'),
      date: t('trips.trip3.date'),
      description: t('trips.trip3.description'),
      spots: t('trips.trip3.spots'),
      icon: <Users className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <section id="trips" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('trips.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('trips.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {trip.icon}
                  </div>
                  <span className="text-sm font-semibold text-blue-600">{trip.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{trip.title}</h3>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <p className="text-sm text-gray-500 mb-4">{trip.spots}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  {t('trips.cta')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">
            {t('trips.moreInfo')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trips;