import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { menGridServices, womenServices } from '../data/services';
import { useBooking } from '../BookingContext';

export default function Services() {
  const { openBooking } = useBooking();
  const { t } = useTranslation();

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  };

  const GridServiceSection = ({ title, servicesData }) => (
    <div className="mb-24">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-gold mb-6">{title}</h2>
        <div className="w-16 h-1 bg-gold/50 mx-auto"></div>
      </motion.div>
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full"
      >
        {servicesData.map((item, idx) => (
          <motion.div 
            variants={fadeUp}
            key={idx}
            onClick={() => openBooking(item.key + '.title')}
            className="bg-navy-light p-8 rounded-md border border-white/5 shadow-xl hover:border-gold/30 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(184,154,90,0.15)] group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-serif text-2xl text-white group-hover:text-gold transition-colors">{t(item.key + '.title')}</h3>
              <span className="font-sans text-gold text-lg">{item.price}</span>
            </div>
            <p className="font-sans text-gray-400 font-light leading-relaxed">{t(item.key + '.desc')}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  const AccordionServiceSection = ({ title, servicesData }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
      <div className="mb-24">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-6">{title}</h2>
          <div className="w-16 h-1 bg-gold/50 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
          {servicesData.map((categoryBlock, index) => {
            const isActive = activeCategory === index;
            
            return (
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                key={index} 
                className="bg-navy-light rounded-md border border-white/5 shadow-xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveCategory(isActive ? null : index)}
                  className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors duration-300 ${isActive ? 'bg-white/5' : 'hover:bg-white/5'}`}
                >
                  <h3 className="font-serif text-2xl text-gold tracking-wide">
                    {t(categoryBlock.categoryKey)}
                  </h3>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold"
                  >
                    <ChevronDown size={28} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                        <ul className="flex flex-col gap-2">
                          {categoryBlock.itemKeys.map((service, sIdx) => (
                            <li 
                              key={sIdx}
                              onClick={() => openBooking(service)}
                              className="group flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-white/5 cursor-pointer hover:border-gold/30 transition-colors"
                            >
                              <span className="font-serif text-xl md:text-2xl text-white group-hover:text-gold transition-colors">{t(service)}</span>
                              <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-widest uppercase mt-1 md:mt-0">{t('nav.book')}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full min-h-[60vh] py-section px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">

      
      <GridServiceSection title={t('services.men_title')} servicesData={menGridServices} />
      <AccordionServiceSection title={t('services.women_title')} servicesData={womenServices} />
    </div>
  );
}
