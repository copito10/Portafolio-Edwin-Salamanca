import { motion } from 'framer-motion';
import { Monitor, HardDrive, Globe, FileSearch, RefreshCw, Video } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.installation'),
      icon: <Monitor className="w-12 h-12 text-[#0000FF]" />,
      description: 'Professional installation and configuration of various applications across different platforms.',
      features: ['Game optimization', 'App compatibility check', 'Performance tuning']
    },
    {
      title: t('services.os'),
      icon: <HardDrive className="w-12 h-12 text-[#0000FF]" />,
      description: 'Expert setup and maintenance of various operating systems.',
      features: ['OS installation', 'System optimization', 'Driver management']
    },
    {
      title: t('services.web'),
      icon: <Globe className="w-12 h-12 text-[#0000FF]" />,
      description: 'Creation of modern, responsive, and user-friendly websites.',
      features: ['Responsive design', 'SEO optimization', 'Performance optimization']
    },
    {
      title: t('services.recovery'),
      icon: <FileSearch className="w-12 h-12 text-[#0000FF]" />,
      description: 'Recovery of lost or deleted files from various storage devices.',
      features: ['Data recovery', 'File system repair', 'Backup solutions']
    },
    {
      title: t('services.update'),
      icon: <RefreshCw className="w-12 h-12 text-[#0000FF]" />,
      description: 'Keep your software up to date with the latest features and security patches.',
      features: ['Security updates', 'Feature updates', 'Compatibility checks']
    },
    {
      title: t('services.video'),
      icon: <Video className="w-12 h-12 text-[#0000FF]" />,
      description: 'Professional video editing and post-production services.',
      features: ['Color grading', 'Motion graphics', 'Audio mixing']
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
              <h1 className="text-4xl font-bold relative z-10">{t('services.title')}</h1>
              <div className="absolute -bottom-2 left-0 w-full h-3-skew-x-6"></div>
            </div>
            <p className="text-gray-400 text-lg mb-12">{t('services.description')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-[#0000FF]/10 to-transparent rounded-xl overflow-hidden border border-[#0000FF]/20 hover:border-[#0000FF] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-[#0000FF]/5 blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                  <div className="relative p-6 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#0000FF]/10 rounded-lg">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-400">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-[#0000FF] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default Services;