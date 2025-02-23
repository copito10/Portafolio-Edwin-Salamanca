import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.cv': 'CV',
    'nav.certificates': 'Certificates',
    'home.hello': 'Hello',
    'home.welcome': 'Welcome to my portfolio.',
    'home.im': "I'm",
    'home.role': 'Junior Developer',
    'home.networks': 'My networks',
    'about.title': 'About me',
    'about.passion': "I am a junior developer passionate about technology and programming, focused on creating innovative solutions tailored to the specific needs of each project. I specialize in developing modern and efficient cross-platform applications, always striving to learn and apply best practices to deliver optimal performance and a smooth user experience.",
    'about.hobbies': 'Among other things... I also passionate about:',
    'about.knowledge': 'Knowledge in',
    'about.tools': 'Tools I use',
    'services.title': 'Other services',
    'services.description': 'Discover the range of professional services I offer.',
    'services.installation': 'Installation of videogames, mobile and desktop apps',
    'services.os': 'Installation and management of operating systems',
    'services.web': 'Web development',
    'services.recovery': 'File recovery',
    'services.update': 'Software update',
    'services.video': 'Video editing',
    'projects.title': 'Recent Projects',
    'projects.description': 'Projects I have worked on and participated in.',
    'projects.visit': 'Visit',
    'projects.details': 'Details',
    'cv.personalDetails': 'Personal details',
    'cv.profile': 'Profile',
    'cv.education': 'Education',
    'cv.employment': 'Employment',
    'cv.skills': 'Skills',
    'cv.download': 'Download CV',
    'cv.profileDesc': 'Junior developer with experience in web development, cross-platform applications and technology project management...',
    'certificates.title': 'Certificates'
    
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.cv': 'CV',
    'nav.certificates': 'Certificados',
    'home.hello': '¡Hola!',
    'home.welcome': 'Bienvenido a mi portafolio.',
    'home.im': 'Soy',
    'home.role': 'Desarrollador Junior',
    'home.networks': 'Mis redes',
    'about.title': 'Sobre mí',
    'about.passion': 'Soy un desarrollador junior apasionado por la tecnología y la programación, enfocado en crear soluciones innovadoras que se ajusten a las necesidades específicas de cada proyecto. Me especializo en el desarrollo de aplicaciones multiplataforma modernas y eficientes, buscando siempre aprender y aplicar las mejores prácticas para ofrecer un rendimiento óptimo y una experiencia de usuario fluida.',
    'about.hobbies': 'Entre otras cosas... también me apasiona:',
    'about.knowledge': 'Conocimientos en',
    'about.tools': 'Herramientas que uso',
    'services.title': 'Otros servicios',
    'services.description': 'Descubre la gama de servicios profesionales que ofrezco.',
    'services.installation': 'Instalación de videojuegos, aplicaciones móviles y de escritorio',
    'services.os': 'Instalación y gestión de sistemas operativos',
    'services.web': 'Desarrollo web',
    'services.recovery': 'Recuperación de archivos',
    'services.update': 'Actualización de software',
    'services.video': 'Edición de video',
    'projects.title': 'Proyectos Recientes',
    'projects.description': 'Proyectos en los que he trabajado y participado.',
    'projects.visit': 'Visitar',
    'projects.details': 'Detalles',
    'cv.personalDetails': 'Datos personales',
    'cv.profile': 'Perfil',
    'cv.education': 'Educación',
    'cv.employment': 'Experiencia',
    'cv.skills': 'Habilidades',
    'cv.download': 'Descargar CV',
    'cv.profileDesc': 'Desarrollador junior con experiencia en desarrollo web, aplicaciones multiplataforma y gestión de proyectos tecnológicos...',
    'certificates.title': 'Certificados'
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};