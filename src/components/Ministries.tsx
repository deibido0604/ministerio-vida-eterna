import React from 'react';
import { Music, Users, BookOpen, Heart, Globe, Mic } from 'lucide-react';

const Ministries: React.FC = () => {
    const ministries = [
        {
            icon: <Music className="h-10 w-10 text-blue-600" />,
            title: 'Alabanza y Adoración',
            description: 'Ministerio de música que dirige la congregación en adoración a Dios.',
        },
        {
            icon: <Users className="h-10 w-10 text-blue-600" />,
            title: 'Grupos de Hogar',
            description: 'Reuniones semanales en casas para estudio bíblico y compañerismo.',
        },
        {
            icon: <BookOpen className="h-10 w-10 text-blue-600" />,
            title: 'Escuela Dominical',
            description: 'Enseñanza bíblica para niños, jóvenes y adultos.',
        },
        {
            icon: <Heart className="h-10 w-10 text-blue-600" />,
            title: 'Servicio Social',
            description: 'Ayuda a la comunidad a través de programas de alimentación y apoyo.',
        },
        {
            icon: <Globe className="h-10 w-10 text-blue-600" />,
            title: 'Misiones',
            description: 'Apoyo a misioneros y proyectos de evangelismo.',
        },
        {
            icon: <Mic className="h-10 w-10 text-blue-600" />,
            title: 'Juventud',
            description: 'Ministerio especializado para jóvenes y adolescentes.',
        },
    ];

    return (
        <section id="ministries" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Ministerios</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Cada ministerio está diseñado para servir y edificar el cuerpo de Cristo. 
                        ¡Hay un lugar para ti!
                    </p>
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
                                Saber más →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ministries;