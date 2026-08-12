import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-section px-6 md:px-12 text-center bg-navy text-white">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <h1 className="font-serif text-8xl md:text-9xl text-gold mb-6 opacity-20">404</h1>
        <h2 className="font-serif text-4xl md:text-5xl text-gold mb-8">Looking for a fresh cut?</h2>
        <p className="font-sans text-lg text-gray-300 font-light max-w-xl mx-auto mb-12">
          It looks like the page you're trying to reach doesn't exist, or has been moved. Let's get you back to the salon.
        </p>
        <Link 
          to="/"
          className="bg-gold text-navy px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-gold-light transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(184,154,90,0.4)]"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
