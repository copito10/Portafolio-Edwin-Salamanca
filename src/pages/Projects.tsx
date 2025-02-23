import { motion } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: 'GLAMOURSTUDIO',
      description: 'Glamourstudio es una plataforma web diseñada para brindar una experiencia integral en la gestión de citas y servicios de belleza. Los usuarios pueden reservar citas de manera sencilla, seleccionar el servicio que deseen y agendar el horario que mejor se ajuste a sus necesidades. Además, la plataforma ofrece la opción de adquirir productos exclusivos, tanto para caballeros como para dama, garantizando una experiencia personalizada y cómoda.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbH5looXsHqzvd_DRrL0mI1_iNptie5lhBniLMggtSUIgNLaE6tQBtM9O87zyld6ocAqleLUDruh2pHRe2eQ7cYJ-KDEJ5HmyH-DWo4wNO_k6WYNjw5F2DAMmK-BDLhNFKmYc050787gB9-rMTLRd4N7L8pwTYBBRIxvkIeWJ3C7FwjGXvBvqYG8IE0ww0/s1600/Imagenedwin5.png',
      link: 'https://glamour.appsmartt.com/',
      tags: ['html', 'php', 'css', 'javascript']
    },
    {
      title: 'Recetas',
      description: 'Web portfolio for César Triana, professional psychologist graduated from Universidad Sergio Arboleda, specialized in Socio-Community psychology with systemic approach.',
      image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '#',
      tags: ['html', 'json', 'css', 'react']
    },
    {
      title: 'Frases Motivacionales',
      description: 'Digital directory of the community of Monterrey Casanare. Find and promote local services.',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '#',
      tags: ['html', 'json', 'css', 'react']
    },
    {
      title: 'Frases Motivacionales',
      description: 'Digital directory of the community of Monterrey Casanare. Find and promote local services.',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '#',
      tags: ['html', 'json', 'css', 'react']
    },
    {
      title: 'Frases Motivacionales',
      description: 'Digital directory of the community of Monterrey Casanare. Find and promote local services.',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '#',
      tags: ['html', 'json', 'css', 'react']
    },
    {
      title: 'Frases Motivacionales',
      description: 'Digital directory of the community of Monterrey Casanare. Find and promote local services.',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '#',
      tags: ['html', 'json', 'css', 'react']
    }
  ];

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <section>
            <div className="relative inline-block mb-8">
              <h1 className="text-4xl font-bold relative z-10">{t('projects.title')}</h1>
              <div className="absolute -bottom-2 left-0 w-full h-3-skew-x-6"></div>
            </div>
            <p className="text-gray-400 text-lg mb-12">{t('projects.description')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-[#0000FF]/10 to-transparent rounded-xl overflow-hidden border border-[#0000FF]/20 hover:border-[#0000FF] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-[#0000FF]/5 blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#0000FF] hover:text-[#3366FF] transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>{t('projects.visit')}</span>
                      </a>
                      <button className="flex items-center gap-2 text-[#0000FF] hover:text-[#3366FF] transition-colors">
                        <Search size={20} />
                        <span>{t('projects.details')}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;