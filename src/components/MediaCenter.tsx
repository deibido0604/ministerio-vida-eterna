import React from 'react';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

type MediaSection = {
  titleEs: string;
  titleEn: string;
  images: string[];
  videos: string[];
};

type MediaManifest = {
  generatedAt: string;
  sections: Record<string, MediaSection>;
};

const INITIAL_IMAGES = 18;
const INITIAL_VIDEOS = 4;
const STEP_IMAGES = 18;
const STEP_VIDEOS = 4;

const MediaCenter = () => {
  const { language, t } = useLanguage();
  const [manifest, setManifest] = React.useState<MediaManifest | null>(null);
  const [activeSection, setActiveSection] = React.useState<string>('templo');
  const [imageLimitBySection, setImageLimitBySection] = React.useState<Record<string, number>>({});
  const [videoLimitBySection, setVideoLimitBySection] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    const loadManifest = async () => {
      const response = await fetch('/media-manifest.json');
      const data = (await response.json()) as MediaManifest;

      setManifest(data);

      const sectionKeys = Object.keys(data.sections);
      if (sectionKeys.length > 0) {
        setActiveSection((prev) => (sectionKeys.includes(prev) ? prev : sectionKeys[0]));
      }

      const imageLimits: Record<string, number> = {};
      const videoLimits: Record<string, number> = {};
      sectionKeys.forEach((key) => {
        imageLimits[key] = INITIAL_IMAGES;
        videoLimits[key] = INITIAL_VIDEOS;
      });
      setImageLimitBySection(imageLimits);
      setVideoLimitBySection(videoLimits);
    };

    loadManifest();
  }, []);

  if (!manifest) {
    return null;
  }

  const sectionKeys = Object.keys(manifest.sections);
  const active = manifest.sections[activeSection] ?? manifest.sections[sectionKeys[0]];
  const visibleImages = active.images.slice(0, imageLimitBySection[activeSection] ?? INITIAL_IMAGES);
  const visibleVideos = active.videos.slice(0, videoLimitBySection[activeSection] ?? INITIAL_VIDEOS);

  const hasMoreImages = (imageLimitBySection[activeSection] ?? INITIAL_IMAGES) < active.images.length;
  const hasMoreVideos = (videoLimitBySection[activeSection] ?? INITIAL_VIDEOS) < active.videos.length;

  const getSectionTitle = (key: string): string => {
    const section = manifest.sections[key];
    return language === 'es' ? section.titleEs : section.titleEn;
  };

  const loadMoreImages = () => {
    setImageLimitBySection((prev) => ({
      ...prev,
      [activeSection]: (prev[activeSection] ?? INITIAL_IMAGES) + STEP_IMAGES,
    }));
  };

  const loadMoreVideos = () => {
    setVideoLimitBySection((prev) => ({
      ...prev,
      [activeSection]: (prev[activeSection] ?? INITIAL_VIDEOS) + STEP_VIDEOS,
    }));
  };

  return (
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">{t('media.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t('media.subtitle')}</p>
          <p className="text-sm text-gray-500 mt-3">{t('media.previewHint')}</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {sectionKeys.map((key) => {
            const section = manifest.sections[key];
            const isActive = activeSection === key;
            return (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {getSectionTitle(key)} ({section.images.length + section.videos.length})
              </button>
            );
          })}
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <ImageIcon className="h-5 w-5 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">{t('media.photos')}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {visibleImages.map((src, index) => (
              <img
                key={`${activeSection}-img-${index}`}
                src={src}
                alt={`${getSectionTitle(activeSection)} ${index + 1}`}
                className="h-44 w-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg border border-gray-200 cursor-zoom-in"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>

          {hasMoreImages && (
            <div className="text-center mt-5">
              <button
                onClick={loadMoreImages}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('media.showMore')}
              </button>
            </div>
          )}
        </div>

        {active.videos.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PlayCircle className="h-5 w-5 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">{t('media.videos')}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleVideos.map((src, index) => (
                <video
                  key={`${activeSection}-video-${index}`}
                  src={src}
                  controls
                  preload="metadata"
                  className="w-full rounded-lg border border-gray-200 bg-black"
                />
              ))}
            </div>

            {hasMoreVideos && (
              <div className="text-center mt-5">
                <button
                  onClick={loadMoreVideos}
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t('media.showMore')}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaCenter;
