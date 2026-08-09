import { motion } from 'framer-motion';

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col w-full min-h-[60vh] py-section px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center mt-12 md:mt-20"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-gold mb-8">Our Philosophy</h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          Welcome to Punta Cana Barbier, where grooming is elevated to an art form. We combine traditional barbering techniques with modern sensibilities to deliver a truly premium experience.
        </p>
        <p className="font-sans text-lg md:text-xl text-gray-300 font-light leading-relaxed">
          Our sanctuary is designed for the modern gentleman who appreciates the finer things in life. Step into our world and discover the true meaning of urbain élégant.
        </p>
      </motion.div>
    </div>
  );
}
