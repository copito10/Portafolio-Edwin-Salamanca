import { motion } from 'framer-motion';
import { Camera, Dumbbell, ShieldAlert, Gamepad2, Globe, BookOpen } from 'lucide-react';   
import { useLanguage } from '../context/LanguageContext';
import imagem2 from '/assets/heroes/imagem2.webp';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
  ];

  const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
  ];

 
  const hobbies = [
    { icon: <Camera size={20} />, name: 'Video Editing' }, 
    { icon: <Dumbbell size={20} />, name: 'Exercise' },    
    { icon: <ShieldAlert size={20} />, name: 'Ethical Hacking' }, 
    { icon: <Gamepad2 size={20} />, name: 'Video Games' }, 
    { icon: <Globe size={20} />, name: 'Travel' },        
    { icon: <BookOpen size={20} />, name: 'Reading' }    
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
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative inline-block">
                <h1 className="text-4xl font-bold relative z-10">{t('about.title')}</h1>
                <div className="absolute -bottom-2 left-0 w-full h-3 -skew-x-6"></div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.passion')}
              </p>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{t('about.hobbies')}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.name}
                      className="flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-blue-500/40 to-transparent rounded-lg border border-blue-900 hover:border-blue-500 transition-colors"
                    >
                      {hobby.icon}
                      <span>{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <blockquote className="relative p-6 bg-blue-500/5 rounded-lg border-l-4 border-[#305df3]">
                <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-4 text-[#2e62ff] text-4xl">"</div>
                <p className="text-xl italic text-gray-300">"El límite no es el error; es la mentalidad."</p>
                <p className="text-xl italic text-gray-300">"El código es temporal, pero la lógica es eterna".</p>
                <p className="text-xl italic text-gray-300">"No se depura código; se depuran pensamientos".</p>
                <p className="text-xl italic text-gray-300">""Las variables cambian, las constantes permanecen... al igual que las personas".</p>
                <p className="text-xl italic text-gray-300">""El bucle más difícil de romper es el que está en tu mente".</p>
                <footer className="text-sm mt-3 text-[#3a2fd4]">— Métricas Frías</footer>
              </blockquote>
            </div>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4151de] to-transparent opacity-20 rounded-full blur-2xl"></div>
                <img
                  src={imagem2}
                  alt="Profile"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-[#386bdb] shadow-lg shadow-[#ff4d4d]/20"
                />
              </motion.div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="relative inline-block">
              <h2 className="text-4xl font-bold relative z-10">{t('about.knowledge')}</h2>
              <div className="absolute -bottom-2 left-0 w-full h-3-skew-x-6"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col items-center p-6 bg-blue-500/20 to-br from-blue-500-[#ff4d4d]/10 to-transparent rounded-lg border to-blue-500-[#ff4d4d]/20 hover:border-[#3269ff] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                  <img src={skill.icon} alt={skill.name} className="relative w-16 h-16 transition-transform group-hover:scale-110" />
                  <span className="relative mt-4 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="relative inline-block">
              <h2 className="text-4xl font-bold relative z-10">{t('about.tools')}</h2>
              <div className="absolute -bottom-2 left-0 w-full h-3-skew-x-6"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col items-center p-6 bg-blue-500/20 to-br from-blue-500-[#ff4d4d]/10 to-transparent rounded-lg border to-blue-500-[#ff4d4d]/20 hover:border-[#3269ff] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                  <img src={tool.icon} alt={tool.name} className="relative w-16 h-16 transition-transform group-hover:scale-110" />
                  <span className="relative mt-4 font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default About;