import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SocialLinks from '../components/SocialLinks';
import { useLanguage } from '../context/LanguageContext';
import { useColorMode } from '../context/ColorModeContext';
import ninjaImage from '../../assets/heroes/ninja.webp';

const Home = () => {
  const { t } = useLanguage();
  useColorMode();
  const roleText = t('home.role');

  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && index < roleText.length) {
        setDisplayText(roleText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (deleting && index > 0) {
        setDisplayText(roleText.slice(0, index - 1));
        setIndex(index - 1);
      } else {
        setDeleting(!deleting);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [index, deleting, roleText]);

  return (
    <main className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#ffffff]">
              {t('home.hello')} 
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
                className="inline-block"
              >
                🌍
              </motion.span>
              <br />
              {t('home.welcome')}
            </h1>
            <h2 className="text-3xl md:text-4xl text-[#ffffff]">
              {t('home.im')} <span className="text-[#ffffff]">Edwin Johan Salamanca</span> 👨‍💻
            </h2>
            <div className="text-xl md:text-2xl text-[#fcfcff]">
              {displayText} 💡
            </div>
            
            <div className="pt-12">
              <h3 className="text-2xl md:text-3xl mb-6 font-semibold text-[#ffffff] border-b-4 border-[#3452ff] inline-block pb-2 animate-pulse shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:text-[#4785f7]">
                {t('home.networks')} 🔗
              </h3>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div 
                className="absolute inset-0 rounded-lg backdrop-blur-sm border-4"
                animate={{ borderColor: ["#3452ff", "#ff0000", "#3452ff"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{ 
                  background: `linear-gradient(to bottom right, #3452ff20, transparent)`,
                }}
              ></motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src={ninjaImage}
                      alt="Programming Ninja"
                      className="w-32 h-32 mx-auto"
                    />
                  </div>
                  <h3 
  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent flex flex-col items-center"
  style={{ 
    backgroundImage: `linear-gradient(to right, #ff0000, #3452ff)`,
  }}
>
  CyberCode
  <span className="text-2xl md:text-3xl">➡︎⌨︎⬅︎</span>
</h3>

                  <p className="text-sm mt-2 text-[#ff0000] animate-pulse">
                    Development & Innovation 🚀
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Home;
