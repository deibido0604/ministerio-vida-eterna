import React from 'react';
import { Calendar, MapPin, Users, Wrench, Stethoscope, Book } from 'lucide-react';

const Trips: React.FC = () => {
  const trips = [
    {
      id: 1,
      title: 'Viaje Multifuncional de Febrero',
      date: 'Febrero 27 - Marzo 8, 2026',
      description: 'Viaje multifuncional con múltiples equipos de trabajo',
      activities: [
        'Equipos médicos/dentales en 2-3 ubicaciones diferentes',
        'Evangelismo en escuelas',
        'Renovación de sala para niños con necesidades especiales en Jeremías 29:11',
        'Instalación de nuevos aires acondicionados en el área principal de Yolany\'s Hope'
      ],
      icon: <Users className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'Viaje de Julio - Aniversario de Iglesia Gerizem',
      date: 'Julio 17 - Julio 25, 2026',
      description: 'Celebración del aniversario de la iglesia Gerizem',
      activities: [
        'Equipo dental',
        'Trabajo con escuelas locales',
        'Celebración especial del aniversario',
        'Programas de alcance comunitario'
      ],
      icon: <Calendar className="h-6 w-6" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      title: 'Viaje Médico/Dental de Septiembre',
      date: 'Septiembre 4 - Septiembre 12, 2026',
      description: 'Equipo médico y dental de alcance comunitario',
      activities: [
        'Equipo médico/dental completo',
        'Trabajo con escuelas locales',
        'Clínicas de salud gratuitas',
        'Distribución de medicamentos'
      ],
      icon: <Stethoscope className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 4,
      title: 'Viaje de Octubre',
      date: 'Octubre 16 - Octubre 24, 2026',
      description: 'Último viaje del año con enfoque médico y educativo',
      activities: [
        'Equipo médico/dental',
        'Trabajo con escuelas locales',
        'Preparativos para la temporada navideña',
        'Entrega de suministros escolares'
      ],
      icon: <Book className="h-6 w-6" />,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="trips" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Calendar className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Viajes Propuestos para 2026</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Únete a nuestros viajes misioneros y sé parte de la transformación en Honduras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className={`p-6 ${trip.color.split(' ')[0]} flex items-center justify-between`}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/30 rounded-full">
                    {trip.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{trip.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{trip.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{trip.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Actividades Incluidas:</h4>
                  <ul className="space-y-2">
                    {trip.activities.map((activity, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className={`mt-1 h-2 w-2 rounded-full ${trip.color.split(' ')[1].replace('text-', 'bg-')}`}></div>
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Más Información
                    </button>
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Interesado en Unirte?</h3>
            <p className="text-gray-600 mb-6">
              Estamos buscando voluntarios para nuestros viajes misioneros. No se necesita experiencia 
              previa, solo un corazón dispuesto a servir. Ofrecemos capacitación y apoyo completo.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Solicitar Información de Voluntariado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trips;