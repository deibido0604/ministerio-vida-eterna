import React from 'react';
import { Home, Heart, Building, Users, Target, Church } from 'lucide-react';
import { useLanguage } from 'context/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      urgency: t('projects.project1.urgency'),
      benefits: [
        t('projects.project1.benefits[0]'),
        t('projects.project1.benefits[1]'),
        t('projects.project1.benefits[2]')
      ],
      icon: <Home className="h-8 w-8" />,
      color: 'bg-red-50 text-red-700'
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      urgency: t('projects.project2.urgency'),
      benefits: [
        t('projects.project2.benefits[0]'),
        t('projects.project2.benefits[1]'),
        t('projects.project2.benefits[2]')
      ],
      icon: <Heart className="h-8 w-8" />,
      color: 'bg-orange-50 text-orange-700'
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      urgency: t('projects.project3.urgency'),
      benefits: [
        t('projects.project3.benefits[0]'),
        t('projects.project3.benefits[1]'),
        t('projects.project3.benefits[2]')
      ],
      icon: <Building className="h-8 w-8" />,
      color: 'bg-yellow-50 text-yellow-700'
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      urgency: t('projects.project4.urgency'),
      benefits: [
        t('projects.project4.benefits[0]'),
        t('projects.project4.benefits[1]'),
        t('projects.project4.benefits[2]')
      ],
      icon: <Users className="h-8 w-8" />,
      color: 'bg-purple-50 text-purple-700'
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      urgency: t('projects.project5.urgency'),
      benefits: [
        t('projects.project5.benefits[0]'),
        t('projects.project5.benefits[1]'),
        t('projects.project5.benefits[2]')
      ],
      icon: <Church className="h-8 w-8" />,
      color: 'bg-blue-50 text-blue-700'
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      urgency: t('projects.project6.urgency'),
      benefits: [
        t('projects.project6.benefits[0]'),
        t('projects.project6.benefits[1]'),
        t('projects.project6.benefits[2]')
      ],
      icon: <Target className="h-8 w-8" />,
      color: 'bg-green-50 text-green-700'
    }
  ];

  const churchProjects = [
    {
      name: t('projects.churchProjects.project1.name'),
      description: t('projects.churchProjects.project1.description'),
      impact: t('projects.churchProjects.project1.impact')
    },
    {
      name: t('projects.churchProjects.project2.name'),
      description: t('projects.churchProjects.project2.description'),
      impact: t('projects.churchProjects.project2.impact')
    },
    {
      name: t('projects.churchProjects.project3.name'),
      description: t('projects.churchProjects.project3.description'),
      impact: t('projects.churchProjects.project3.impact')
    },
    {
      name: t('projects.churchProjects.project4.name'),
      description: t('projects.churchProjects.project4.description'),
      impact: t('projects.churchProjects.project4.impact')
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Target className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('projects.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t('projects.subtitle')}</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('projects.initiatives')}</h3>
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
                    {t('projects.cta')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('projects.churchProjects.title')}</h3>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {churchProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4">
                      <Church className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{project.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    {t('projects.moreInfo')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;