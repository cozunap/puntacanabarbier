import { motion } from 'framer-motion';

export default function Services() {
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

  return (
    <div className="flex flex-col w-full min-h-[60vh] py-section px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="text-center mb-16 mt-12 md:mt-20"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-gold mb-8">Our Services</h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
          A comprehensive suite of premium male grooming services designed to elevate your identity and provide ultimate relaxation.
        </p>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full"
      >
        {[
          { name: "Classic Haircut", price: "$40", desc: "Tailored haircut with scissors or clippers, finishing with a sharp neck shave." },
          { name: "Skin Fade / Zero Fade", price: "$45", desc: "Precision skin fade blending seamlessly into your preferred top style." },
          { name: "The Executive Cut", price: "$75", desc: "Premium haircut combined with a full beard sculpt and relaxing hot towel." },
          { name: "Hot Towel Straight Razor Shave", price: "$40", desc: "Traditional wet shave with pre-shave oil, hot towels, and rich lather." },
          { name: "Beard Sculpting & Line-up", price: "$30", desc: "Detailed beard shaping, crisp line-up, and nourishing beard oil treatment." },
          { name: "Scalp Treatment & Massage", price: "$35", desc: "Deep cleansing scalp exfoliation followed by a relaxing 15-minute massage." },
          { name: "Kids Haircut", price: "$30", desc: "Premium grooming experience for the young gentlemen (under 12)." },
          { name: "Hair & Beard Coloring", price: "$65+", desc: "Professional grey blending or full color application for hair and beard." }
        ].map((service, idx) => (
          <motion.div variants={fadeUp} key={idx} className="bg-navy-light p-8 rounded-md border border-white/5 flex flex-col gap-4 premium-hover group relative overflow-hidden cursor-default">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4 relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl text-white">{service.name}</h3>
              <span className="font-sans text-xl md:text-2xl text-gold font-medium">{service.price}</span>
            </div>
            <p className="font-sans text-gray-400 font-light relative z-10 text-sm md:text-base">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
