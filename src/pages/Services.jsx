import { motion } from 'framer-motion';
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

  const MenuServiceSection = ({ title, servicesData }) => (
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

      <div className="columns-1 md:columns-2 gap-8 md:gap-12 max-w-5xl mx-auto w-full">
        {servicesData.map((categoryBlock, index) => (
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            key={index} 
            className="break-inside-avoid mb-8 md:mb-12 bg-navy-light p-8 rounded-md border border-white/5 shadow-xl hover:border-gold/20 transition-all duration-500"
          >
            <motion.h3 variants={fadeUp} className="font-serif text-2xl text-gold mb-6 tracking-wide border-b border-white/10 pb-4">
              {t(categoryBlock.categoryKey)}
            </motion.h3>
            <motion.ul variants={staggerContainer} className="flex flex-col gap-2">
              {categoryBlock.itemKeys.map((service, sIdx) => (
                <motion.li 
                  variants={fadeUp}
                  key={sIdx}
                  onClick={() => openBooking(service)}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-white/5 cursor-pointer hover:border-gold/30 transition-colors"
                >
                  <span className="font-serif text-2xl text-white group-hover:text-gold transition-colors">{t(service)}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-widest uppercase mt-1 md:mt-0">{t('nav.book')}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full min-h-[60vh] py-section px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">

      
      <GridServiceSection title={t('services.men_title')} servicesData={menGridServices} />
      <MenuServiceSection title={t('services.women_title')} servicesData={womenServices} />
    </div>
  );
}
