import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import imagem1 from '/assets/heroes/imagen1.jpg';
import imagem2 from '/assets/heroes/imagen2.jpg';
import imagem3 from '/assets/heroes/imagen3.jpg';
import imagem4 from '/assets/heroes/imagen4.jpg';
import imagem5 from '/assets/heroes/imagen5.jpg';
import imagem6 from '/assets/heroes/imagen6.jpg';
import imagem7 from '/assets/heroes/imagen7.jpg';
import imagem8 from '/assets/heroes/imagen8.jpg';
import imagem9 from '/assets/heroes/imagen9.jpg';
import imagem10 from '/assets/heroes/imagen10.jpg';
import imagem11 from '/assets/heroes/imagen11.jpg';
import imagem12 from '/assets/heroes/imagen12.jpg';
import imagem13 from '/assets/heroes/imagen13.jpg';
import imagem14 from '/assets/heroes/imagen14.jpg';
import imagem15 from '/assets/heroes/imagen15.jpg';
import imagem16 from '/assets/heroes/imagen16.jpg';
import imagem17 from '/assets/heroes/imagen17.jpg';
import imagem18 from '/assets/heroes/imagen18.jpg';
import imagem19 from '/assets/heroes/imagen19.jpg';
import imagem20 from '/assets/heroes/imagen20.jpg';
import imagem21 from '/assets/heroes/imagen21.jpg';
import imagem22 from '/assets/heroes/imagen22.jpg';
import imagem23 from '/assets/heroes/imagen23.jpg';
import imagem24 from '/assets/heroes/imagen24.jpg';
import imagem25 from '/assets/heroes/imagen25.jpg';
import imagem26 from '/assets/heroes/imagen26.jpg';
import imagem27 from '/assets/heroes/imagen27.jpg';
import imagem28 from '/assets/heroes/imagen28.jpg';
import imagem29 from '/assets/heroes/imagen29.jpg';
import imagem30 from '/assets/heroes/imagen30.jpg';
import imagem31 from '/assets/heroes/imagen31.jpg';
import imagem32 from '/assets/heroes/imagen32.jpg';
import imagem33 from '/assets/heroes/imagen33.jpg';
import imagem34 from '/assets/heroes/imagen34.jpg';
import imagem35 from '/assets/heroes/imagen35.jpg';
import imagem36 from '/assets/heroes/imagen36.jpg';
import imagem37 from '/assets/heroes/imagen37.jpg';
import imagem38 from '/assets/heroes/imagen38.jpg';
import imagem39 from '/assets/heroes/imagen39.jpg';

const Certificates = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      title: 'Instituto Educativo Tecnico Diversificado',
      image: imagem1,
      date: '2016',
      issuer: 'Certificado 1'
    },
    {
      title: 'Tecnico en Sistemas',
      image: imagem2,
      date: '2020',
      issuer: 'Certificado 2',
    },
    {
      title: 'Operar herramientas informaticas y digitales de acuerdo con protocolos y manuales tecnicos - NIVEL AVANZADO',
      image: imagem3,
      date: '2024',
      issuer: 'Certificado 3'
    },
    {
      title: 'Digital Apprentice',
      image: imagem4,
      date: '2023',
      issuer: 'Certificado 4'
    },
    {
      title: 'Life Skills',
      image: imagem5,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem6,
      date: '2023',
      issuer: 'SENA'
    },    
    {
      title: 'Code Editors',
      image: imagem7,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem8,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem9,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem10,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem11,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem12,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem13,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem14,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem15,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem16,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem17,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem18,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem19,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem20,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem21,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem22,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem23,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem24,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem25,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem26,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem27,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem28,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem29,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem30,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem31,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem32,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem33,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem34,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem35,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem36,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem37,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem38,
      date: '2023',
      issuer: 'SENA'
    },
    {
      title: 'Code Editors',
      image: imagem39,
      date: '2023',
      issuer: 'SENA'
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
              <h1 className="text-4xl font-bold relative z-10">
                {t('certificates.title')}
              </h1>
              <div className="absolute -bottom-2 left-0 w-full h-3-skew-x-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1
                });

                return (
                  <motion.div
                    key={`${cert.title}-${index}`}
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-gradient-to-br from-[#4d79ff]/10 to-transparent rounded-xl overflow-hidden border border-[#4d79ff]/20 hover:border-[#4d79ff] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-[#4d79ff]/5 blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                          onClick={() => window.open(cert.image, "_blank")}
                        />
                      </div>
                    </div>
                    <div className="relative p-6 space-y-2">
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                      <p className="text-sm text-[#4d79ff]">{cert.date}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default Certificates;