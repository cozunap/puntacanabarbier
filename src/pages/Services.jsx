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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
            className="bg-navy-light p-8 rounded-md border border-white/5 shadow-2xl hover:border-gold/30 cursor-pointer transition-colors"
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

  const ServiceSection = ({ title, servicesData, reverseStyle = false }) => (
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

      <div className="flex flex-col gap-12 max-w-5xl mx-auto w-full">
        {servicesData.map((categoryBlock, index) => {
          const isReversed = reverseStyle ? index % 2 === 0 : index % 2 !== 0;
          return (
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              key={index} 
              className={`flex flex-col md:flex-row bg-navy-light rounded-md overflow-hidden border border-white/5 shadow-2xl ${isReversed ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Half */}
              <div 
                className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url('${categoryBlock.image}')` }}
              ></div>
              
              {/* Content Half */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <motion.h3 variants={fadeUp} className="font-serif text-2xl md:text-3xl text-gold mb-6 tracking-wide">
                  {t(categoryBlock.categoryKey)}
                </motion.h3>
                <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
                  {categoryBlock.itemKeys.map((service, sIdx) => (
                    <motion.li 
                      variants={fadeUp}
                      key={sIdx}
                      onClick={() => openBooking(service)}
                      className="group flex items-center justify-between py-3 border-b border-white/5 cursor-pointer hover:border-gold/30 transition-colors"
                    >
                      <span className="text-gray-300 font-light group-hover:text-white transition-colors">{t(service)}</span>
                      <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-widest uppercase">{t('nav.book')}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full min-h-[60vh] py-section px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">

      
      <GridServiceSection title={t('services.men_title')} servicesData={menGridServices} />
      <ServiceSection title={t('services.women_title')} servicesData={womenServices} reverseStyle={true} />
    </div>
  );
}
