import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    
    const carouselImages = [
    {
        id: 1,
        image: "/images/hero/iglesia1.jpg",
        title: "Ministerio Vida Eterna",
        description: "Un lugar de encuentro con Dios"
    },
    {
        id: 2,
        image: "/images/hero/iglesia2.jpg",
        title: "Campamento de Fe",
        description: "Vive una experiencia transformadora"
    },
    {
        id: 3,
        image: "/images/hero/iglesia3.jpg",
        title: "Comunidad de Amor",
        description: "Creciendo juntos en Cristo"
    },
];

    // Auto-carrusel
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [carouselImages.length, isHovered]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative bg-gray-50">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Carrusel de imágenes - Lado izquierdo */}
                    <div 
                        className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {carouselImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <img
                                    src={image.image}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                
                                {/* Texto superpuesto en la imagen */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                    <p className="text-sm opacity-90">{image.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Controles del carrusel */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
                            aria-label="Slide anterior"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
                            aria-label="Siguiente slide"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        {/* Indicadores del carrusel */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        index === currentSlide 
                                            ? 'bg-white w-6' 
                                            : 'bg-white/40 hover:bg-white/60 w-1.5'
                                    }`}
                                    aria-label={`Ir al slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Contenido informativo - Lado derecho */}
                    <div className="text-center lg:text-left">
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Bienvenidos al <span className="text-blue-600">Ministerio Vida Eterna</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Somos una comunidad de fe comprometida con el crecimiento espiritual, 
                                el servicio a la comunidad y la proclamación del Evangelio. 
                                Nuestro campamento es un lugar donde las vidas son transformadas.
                            </p>
                        </div>

                        {/* Botones con nuevo estilo */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Visítanos este Domingo
                            </button>
                            <button
                                onClick={() => scrollToSection('donations')}
                                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Apoya la Obra
                            </button>
                        </div>

                        {/* Tarjetas de características */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto lg:mx-0">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">Comunidad</h3>
                                <p className="text-sm text-gray-600">Vivimos en unidad y amor fraternal</p>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto lg:mx-0">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">Crecimiento</h3>
                                <p className="text-sm text-gray-600">Discipulado y formación bíblica</p>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto lg:mx-0">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">Enseñanza</h3>
                                <p className="text-sm text-gray-600">Palabra de Dios sólida y relevante</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Flecha para bajar */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => scrollToSection('gallery')}
                        className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="Scroll down"
                    >
                        <ChevronDown className="h-6 w-6 mx-auto" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;