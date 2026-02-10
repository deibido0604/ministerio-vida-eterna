import React from 'react';
import { Home, Users, Building, Heart, Target, Church } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Casa Misión Santiago',
      description: 'Apoyamos la adquisición de una casa misión que sirve como hogar para nuestro misionero residente en San Pedro Sula, facilitando su trabajo evangelístico y de servicio comunitario.',
      icon: <Home className="h-8 w-8" />,
      urgency: 'Necesidad Actual',
      color: 'bg-red-50 text-red-700',
      benefits: [
        'Base para trabajo misionero',
        'Hospedaje para voluntarios',
        'Centro de distribución de ayuda'
      ]
    },
    {
      id: 2,
      title: 'Casa de Yolany',
      description: 'Apoyamos regularmente un hogar que actualmente brinda cuidado y educación a niños en situación vulnerable, asegurando sus necesidades básicas y desarrollo integral.',
      icon: <Heart className="h-8 w-8" />,
      urgency: 'Apoyo Continuo',
      color: 'bg-orange-50 text-orange-700',
      benefits: [
        'Alimentación diaria',
        'Educación y cuidado',
        'Atención médica básica'
      ]
    },
    {
      id: 3,
      title: 'Hogar Infantil GN',
      description: 'Trabajamos para establecer un nuevo hogar que pueda albergar y proveer un ambiente familiar a niños que necesitan un lugar seguro para crecer y desarrollarse.',
      icon: <Building className="h-8 w-8" />,
      urgency: 'Proyecto en Marcha',
      color: 'bg-yellow-50 text-yellow-700',
      benefits: [
        'Espacio adecuado para niños',
        'Ambiente familiar',
        'Programas de desarrollo'
      ]
    },
    {
      id: 4,
      title: 'Nuevo Orfanato',
      description: 'Buscamos expandir nuestro alcance abriendo nuevos hogares en diferentes ciudades de Honduras para atender a más niños y jóvenes en necesidad.',
      icon: <Users className="h-8 w-8" />,
      urgency: 'Expansión Necesaria',
      color: 'bg-purple-50 text-purple-700',
      benefits: [
        'Más capacidad de atención',
        'Ubicaciones estratégicas',
        'Programas especializados'
      ]
    },
    {
      id: 5,
      title: 'Proyecto Iglesia Villanueva',
      description: 'Ampliación de nuestras instalaciones para incluir espacios dedicados a programas comunitarios, cuidado infantil y servicios de alimentación para la comunidad.',
      icon: <Church className="h-8 w-8" />,
      urgency: 'Desarrollo Comunitario',
      color: 'bg-blue-50 text-blue-700',
      benefits: [
        'Espacio para programas sociales',
        'Guardería comunitaria',
        'Centro de ayuda alimentaria'
      ]
    },
    {
      id: 6,
      title: 'Proyecto Iglesia Gerizem',
      description: 'Planificación de nuevas instalaciones que servirán como centro de adoración y servicio comunitario, expandiendo nuestro impacto en la región.',
      icon: <Target className="h-8 w-8" />,
      urgency: 'Visión a Futuro',
      color: 'bg-green-50 text-green-700',
      benefits: [
        'Nuevo centro de adoración',
        'Expansión del ministerio',
        'Mayor alcance comunitario'
      ]
    }
  ];

  const churchProjects = [
    {
      name: 'El Rey Ya Viene - San Pedro Sula',
      description: 'Mejoramos nuestras instalaciones para ofrecer mejores espacios de enseñanza y desarrollo espiritual para todas las edades.',
      impact: 'Ampliación de capacidad educativa'
    },
    {
      name: 'El Rey Ya Viene - Quimistán',
      description: 'Establecimiento de una nueva congregación hermana con planes de crecimiento y servicio a la comunidad local.',
      impact: 'Nueva comunidad de fe'
    },
    {
      name: 'El Rey Ya Viene - Le Ceba',
      description: 'Iniciativa para llevar el mensaje del Evangelio a una comunidad que actualmente carece de presencia cristiana organizada.',
      impact: 'Evangelismo en nueva área'
    },
    {
      name: 'Iglesias Zacapa',
      description: 'Apoyo a múltiples congregaciones hermanas para mejorar sus espacios y fortalecer su ministerio local.',
      impact: 'Fortalecimiento de iglesias locales'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Target className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Proyectos de Transformación</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nuestros proyectos buscan transformar vidas y comunidades a través del amor y servicio cristiano
          </p>
        </div>

        {/* Proyectos principales */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Iniciativas Principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col h-full"
              >
                <div className={`p-6 ${project.color.split(' ')[0]} flex items-center justify-between`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/50 rounded-full">
                      {project.icon}
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.color}`}>
                        {project.urgency}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-700 mb-2">Impacto del proyecto:</h5>
                    <ul className="space-y-2">
                      {project.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => document.getElementById('donations')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apoyar este Proyecto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 max-w-3xl mx-auto text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Tu Apoyo Transforma Vidas</h3>
            <p className="mb-6 opacity-90 text-lg">
              Cada proyecto representa una oportunidad para llevar esperanza, amor y transformación 
              a personas y comunidades que más lo necesitan. Tu participación hace posible esta labor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('donations')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-md"
              >
                Quiero Ser Parte
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
              >
                Más Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;