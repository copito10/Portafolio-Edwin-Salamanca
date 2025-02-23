import { motion } from "framer-motion";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useLanguage } from '../context/LanguageContext';
import imagem2 from '/assets/heroes/imagem2.webp';

const CV = () => {
  const { t } = useLanguage();

  const downloadCV = () => {
    const input = document.getElementById("cv-content");
    if (!input) {
      console.error("Element #cv-content not found.");
      return;
    }

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 190;
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position -= pageHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("mi_cv.pdf");
      })
      .catch((error) => {
        console.error("Error capturing CV:", error);
      });
  };

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-black rounded-xl overflow-hidden shadow-xl"
        >
          <div id="cv-content" className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-[#2c3e50] text-white p-8 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Edwin Johan Salamanca Sanchez</h2>
                <img
                  src={imagem2}
                  alt="Profile"
                  className="w-40 h-40 rounded-full mx-auto border-4 border-white"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/20 pb-2">{t('cv.personalDetails')}</h3>
                <div className="space-y-2">
                  <p>Edwin Johan Salamanca Sanchez</p>
                  <p>salamanca1122@gmail.com</p>
                  <p>+57 3123650184</p>
                  <p>Colombia</p>
                  <p>dev-mit.com</p>
                  <p>linkedin.com/in/edwinjohan-dev</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">{t('cv.profile')}</h2>
                <p className="text-gray-600">{t('cv.profileDesc')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">{t('cv.education')}</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-semibold">Software analysis and development technologist</h3>
                      <span>Jan 2023 - Present</span>
                    </div>
                    <p className="text-gray-600">Servicio Nacional de Aprendizaje, Centro Minero, Boyacá</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">{t('cv.employment')}</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-semibold">ADSO Apprentice</h3>
                      <span>Oct 2024 - Present</span>
                    </div>
                    <p className="text-gray-600">Servicio Nacional de Aprendizaje, Centro Minero, Boyacá</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Development of the Kardex application.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">{t('cv.skills')}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Development</h3>
                    <p className="text-gray-600">HTML, CSS, JS, React, Python, Java</p>
                  </div>
                </div>
              </section>

              <div className="flex justify-center mt-8">
                <button
                  onClick={downloadCV}
                  className="flex items-center space-x-2 px-6 py-3 bg-[#ff4d4d] text-white rounded-lg hover:bg-[#ff3333] transition-colors"
                >
                  <Download size={20} />
                  <span>{t('cv.download')}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CV;