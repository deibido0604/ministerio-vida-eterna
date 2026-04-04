import React, { useState } from 'react';
import { useLanguage } from 'context/LanguageContext';
import ImageModal from './ImageModal/ImageModal';
import { HeartHandshake, Home, Landmark, Stethoscope, BookOpen, PartyPopper, Hand, Church } from 'lucide-react';

const Trips: React.FC = () => {
  const { t, language } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const isVideo = (src: string) => src.toLowerCase().endsWith('.mp4');

  const renderMedia = (src: string, alt: string, isThumbnail = false) => {
    if (isVideo(src)) {
      return (
        <video
          src={src}
          className="h-full w-full object-cover"
          muted
          playsInline
          loop={isThumbnail}
          controls
          autoPlay={isThumbnail}
          preload="metadata"
        />
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className="pointer-events-none h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    );
  };

  const toggleExpanded = (id: number) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openImageModal = (images: string[], index: number) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextModalImage = () => {
    setModalIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevModalImage = () => {
    setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
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
        '/images/curadas/culto-iglesia/culto_12.jpeg',
        '/images/curadas/culto-iglesia/culto_13.jpeg',
        '/images/curadas/culto-iglesia/culto_01.jpeg',
        '/images/curadas/culto-iglesia/culto_03.jpeg',
        '/images/curadas/culto-iglesia/culto_04.jpeg',
        '/images/curadas/culto-iglesia/culto_10.jpeg',
        '/images/curadas/culto-iglesia/culto_11.jpeg',
      
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
        '/images/curadas/brigada-medica-comunitaria/brigada_04.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_06.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_08.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_10.jpeg',
        '/images/curadas/brigada-medica-comunitaria/brigada_12.jpeg',
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
        '/images/curadas/ensayos-biblicos/ensayo_03.jpeg',
        '/images/curadas/ensayos-biblicos/ensayo_04.jpeg',
        '/images/curadas/ensayos-biblicos/ensayo_05.mp4'
      ]
    },
    {
      id: 6,
      key: 'misiones',
      icon: <HeartHandshake className="h-6 w-6 text-blue-600" />,
      images: [
        '/images/curadas/misiones-fogatas-pinatas/mision_02.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_03.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_04.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_06.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_08.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_11.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_16.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_17.jpeg',
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
        '/images/curadas/misiones-fogatas-pinatas/mision_01.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_07.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_09.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_10.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_12.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_14.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_15.jpeg',
        '/images/curadas/misiones-fogatas-pinatas/mision_31.jpeg'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {activities.map((activity) => {
            const imageItems = activity.images.filter((src) => !isVideo(src));
            const mainMedia = activity.images[0];
            const isMainImage = !isVideo(mainMedia);
            const cardTitle = t('trips.cards.' + activity.key + '.title');
            const mainAriaLabel = cardTitle + ' — ' + t('media.openEnlarged');

            return (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
                <button
                  type="button"
                  className={`aspect-video w-full overflow-hidden border-0 bg-transparent p-0 ${isMainImage ? 'cursor-zoom-in' : ''}`}
                  onClick={() => {
                    if (isMainImage) {
                      const mainIndex = imageItems.indexOf(mainMedia);
                      openImageModal(imageItems, mainIndex >= 0 ? mainIndex : 0);
                    }
                  }}
                  disabled={!isMainImage}
                  aria-label={mainAriaLabel}
                >
                  {renderMedia(mainMedia, cardTitle)}
                </button>

                <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {activity.icon}
                  </div>
                  <span className="text-sm font-semibold text-blue-600">{t('trips.cards.' + activity.key + '.frequency')}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{cardTitle}</h3>
                <p className="text-gray-600 mb-4">{t('trips.cards.' + activity.key + '.description')}</p>
                <p className="text-sm text-gray-500 mb-4">{t('trips.cards.' + activity.key + '.detail')}</p>

                <div className="grid grid-cols-3 gap-2">
                  {activity.images.slice(1, 4).map((image, index) => {
                    const thumbnailImages = imageItems;
                    const imageIndex = thumbnailImages.indexOf(image);
                    const thumbnailAriaLabel = cardTitle + ' ' + (index + 2) + ' — ' + t('media.openEnlarged');
                    const thumbnailAlt = cardTitle + ' ' + (index + 2);

                    return (
                      <button
                        key={index}
                        type="button"
                        className="h-20 w-full overflow-hidden rounded-md border-0 bg-transparent p-0 cursor-zoom-in"
                        onClick={() => {
                          if (imageIndex >= 0) {
                            openImageModal(thumbnailImages, imageIndex);
                          }
                        }}
                        aria-label={thumbnailAriaLabel}
                      >
                        {renderMedia(image, thumbnailAlt, true)}
                      </button>
                    );
                  })}
                </div>

                {activity.images.length > 4 && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleExpanded(activity.id)}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {expandedCards[activity.id] ? showLessLabel : showMoreLabel + ' (+' + (activity.images.length - 4) + ')'}
                    </button>

                    {expandedCards[activity.id] && (
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {activity.images.slice(4).map((image, index) => {
                          const imageIndex = imageItems.indexOf(image);
                          const expandedAriaLabel = cardTitle + ' ' + (index + 5) + ' — ' + t('media.openEnlarged');
                          const expandedAlt = cardTitle + ' ' + (index + 5);
                          return (
                            <button
                              key={`${activity.id}-${index}`}
                              type="button"
                              className={`h-20 w-full overflow-hidden rounded-md border-0 bg-transparent p-0 ${imageIndex >= 0 ? 'cursor-zoom-in' : ''}`}
                              onClick={() => {
                                if (imageIndex >= 0) {
                                  openImageModal(imageItems, imageIndex);
                                }
                              }}
                              disabled={imageIndex < 0}
                              aria-label={expandedAriaLabel}
                            >
                              {renderMedia(image, expandedAlt, true)}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )})}
        </div>
      </div>
      <ImageModal
        isOpen={modalOpen}
        images={modalImages}
        currentIndex={modalIndex}
        onClose={closeModal}
        onNext={nextModalImage}
        onPrev={prevModalImage}
      />
    </section>
  );
};

export default Trips;