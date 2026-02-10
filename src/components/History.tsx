import React from 'react';
import { BookOpen, Heart, Users, Church, Target } from 'lucide-react';

const History: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <BookOpen className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una historia de fe, servicio y transformación en Honduras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Historia escrita */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestros Inicios</h3>
              <p className="text-gray-700">
                El Ministerio Campamento Vida Eterna fue fundado en el año 2005 con la visión 
                de crear un lugar de refugio espiritual y crecimiento en la fe. Lo que comenzó 
                como un pequeño grupo de creyentes reunidos en un hogar, hoy se ha convertido 
                en un movimiento que impacta múltiples comunidades en Honduras.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700">
                Nuestra misión es proclamar el evangelio de Jesucristo, discipular a los creyentes 
                y servir a las comunidades más necesitadas. Creemos en la transformación integral 
                del ser humano a través del amor de Dios y el servicio compasivo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-blue-600 font-bold text-3xl mb-2">15+</div>
                <div className="text-gray-600">Años de Ministerio</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-blue-600 font-bold text-3xl mb-2">50+</div>
                <div className="text-gray-600">Comunidades Impactadas</div>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestros Valores</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full mt-1">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Amor Cristiano</h4>
                  <p className="text-gray-600">Amar a Dios y al prójimo como a nosotros mismos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full mt-1">
                  <Church className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Comunidad</h4>
                  <p className="text-gray-600">Vivir en unidad y apoyo mutuo</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full mt-1">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Servicio</h4>
                  <p className="text-gray-600">Servir con humildad y compasión</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full mt-1">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Discipulado</h4>
                  <p className="text-gray-600">Formar líderes para el Reino de Dios</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl">
              <h4 className="text-xl font-bold mb-3">Únete a Nuestra Historia</h4>
              <p className="mb-4">Sé parte de lo que Dios está haciendo a través de nuestro ministerio.</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;