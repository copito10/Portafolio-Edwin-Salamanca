import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Home, User, Briefcase, Wrench, FileText, Globe, Award, Code, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useColorMode } from '../context/ColorModeContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { getAccentColor } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', icon: <Home size={24} />, text: t('nav.home') },
    { to: '/about', icon: <User size={24} />, text: t('nav.about') },
    { to: '/projects', icon: <Briefcase size={24} />, text: t('nav.projects') },
    { to: '/services', icon: <Wrench size={24} />, text: t('nav.services') },
    { to: '/cv', icon: <FileText size={24} />, text: t('nav.cv') },
    { to: '/certificates', icon: <Award size={24} />, text: t('nav.certificates') }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-[#1a1625]/80 backdrop-blur-sm py-3"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <RouterLink
            to="/"
            className="text-3xl md:text-4xl font-extrabold flex space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <Code size={32} className="text-blue-400" />
            {'CyberCode'.split('').map((letter, index) => (
              <motion.span
                key={index}
                className="text-blue-400"
                animate={{
                  color: ['#3B82F6', '#1E40AF', '#60A5FA', '#2563EB', '#1D4ED8', '#3B82F6']
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                  delay: index * 0.2
                }}
              >
                {letter}
              </motion.span>
            ))}
          </RouterLink>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`md:flex items-center space-x-6 overflow-x-auto pb-1 md:pb-0 ${isOpen ? 'flex flex-col absolute left-0 top-full bg-[#1a1625] w-full p-4 shadow-lg space-y-4' : 'hidden'} md:flex md:flex-row md:relative md:top-0 md:bg-transparent md:w-auto md:p-0 md:space-y-0 md:space-x-6 md:shadow-none`}>
            {links.map((link) => (
              <RouterLink
                key={link.text}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-base transition-colors duration-300 whitespace-nowrap ${
                    isActive ? 'text-[#3452ff]' : 'text-white hover:text-[#4785f7]'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? getAccentColor() : undefined
                })}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.text}</span>
              </RouterLink>
            ))}

            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'es' : 'en');
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 text-base text-white hover:text-[#4d50ff] transition-colors duration-300"
            >
              <Globe size={24} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
