import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-5xl w-full mx-4">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Imagen */}
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Controles de navegación (si hay más de una imagen) */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageModal;