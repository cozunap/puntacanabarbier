import { useState } from 'react';
import { ArrowRight, Scissors, Sparkles, Smile } from 'lucide-react';
import { useBooking } from '../BookingContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Home() {
  const { openBooking } = useBooking();
  const { t } = useTranslation();
  const [showAllCuts, setShowAllCuts] = useState(false);

  const signatureCuts = [
    { title: t('home.cut1'), img: "/cut_executive.webp" },
    { title: t('home.cut2'), img: "/cut_urban_texture.webp" },
    { title: t('home.cut3'), img: "/cut_classic_pompadour.webp" },
    { title: t('home.cut4'), img: "/cut_zero_fade.webp" },
    { title: t('home.cut5'), img: "/cut_twists.webp" },
    { title: t('home.cut6'), img: "/cut_undercut.webp" },
    { title: t('home.cut7'), img: "/cut_waves.webp" },
    { title: t('home.cut8'), img: "/cut_blowout.webp" }
  ];

  const displayedCuts = showAllCuts ? signatureCuts : signatureCuts.slice(0, 4);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 text-center pt-20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="bg-cover bg-center w-full h-full opacity-40" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAraE8hzFdMmex4llxa4U8IK-dZziMdjUiHuhIhUWtDZBNWN5O0MubJkH_xDjhCj_5nQwDWxJQpgWR136-KJthR4NxzoQpdFQyHH0e0dn22RelQoP_ndYURsRsN1O_sccXJDJx7y81-xpk1CXXBAXZhrIHYMSBwhRzPUSfmnVx5V9L4W003M8efwdhkAvMB_yvKXQOl1fOc10gbpuw9Wi5m_4gyHHO4_ZA8CEJOISWWa0x-BlSX6PUm')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy"></div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-3xl flex flex-col items-center gap-8"
        >
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white drop-shadow-lg leading-tight">
            {t('home.hero_title')}
          </motion.h1>
          <motion.p variants={fadeUp} className="font-sans text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light">
            {t('home.hero_subtitle')}
          </motion.p>
          <motion.button 
            variants={fadeUp}
            onClick={openBooking}
            className="bg-gold text-navy font-bold uppercase tracking-widest py-4 px-8 mt-4 hover:bg-gold-light premium-hover flex items-center gap-3 group rounded-sm text-sm"
          >
            {t('home.book_btn')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* Our Craft Section */}
      <section className="py-section px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl text-gold mb-4">{t('home.craft_title')}</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto font-light">
            {t('home.craft_subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Scissors, title: t('home.feat1_title'), desc: t('home.feat1_desc') },
            { icon: Smile, title: t('home.feat2_title'), desc: t('home.feat2_desc') },
            { icon: Sparkles, title: t('home.feat3_title'), desc: t('home.feat3_desc') }
          ].map((feature, idx) => (
            <motion.div variants={fadeUp} key={idx} className="bg-navy-light p-10 rounded-md border border-white/5 flex flex-col items-center text-center premium-hover">
              <feature.icon className="text-gold mb-6" size={48} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-white mb-4">{feature.title}</h3>
              <p className="font-sans text-gray-400 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Signature Cuts Gallery */}
      <section className="py-section px-6 md:px-12 bg-navy-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="font-serif text-4xl text-gold mb-4">{t('home.sig_cuts')}</h2>
              <p className="font-sans text-lg text-gray-300 font-light">{t('home.sig_subtitle')}</p>
            </div>
            <button 
              onClick={() => setShowAllCuts(!showAllCuts)}
              className="hidden md:flex items-center gap-2 text-gold uppercase tracking-widest text-sm hover:text-gold-light transition-colors font-medium"
            >
              {showAllCuts ? t('home.view_less') : t('home.view_all')} <ArrowRight size={18} className={`transition-transform ${showAllCuts ? '-rotate-90' : ''}`} />
            </button>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {displayedCuts.map((cut, idx) => (
              <motion.div variants={fadeUp} key={idx} className="group relative overflow-hidden rounded-md aspect-[3/4] premium-hover cursor-pointer">
                <div 
                  className="bg-cover bg-center w-full h-full group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" 
                  style={{ backgroundImage: `url('${cut.img}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                  <h3 className="font-serif text-2xl text-gold">{cut.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <button 
            onClick={() => setShowAllCuts(!showAllCuts)}
            className="mt-12 w-full md:hidden flex justify-center items-center gap-2 text-gold border border-gold font-sans uppercase tracking-widest py-4 rounded-sm hover:bg-gold/10 transition-colors text-sm font-medium"
          >
            {showAllCuts ? t('home.view_less') : t('home.view_portfolio')}
          </button>
        </div>
      </section>
    </div>
  );
}
