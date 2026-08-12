import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background elegant accents */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-navy-light to-navy pointer-events-none opacity-50"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center max-w-2xl"
      >
        <img 
          src="/Punta_Cana_Barbier_Logo.webp" 
          alt="Punta Cana Barbier" 
          className="h-32 md:h-40 w-auto mb-10 object-contain drop-shadow-2xl" 
        />
        
        <h1 className="font-serif text-5xl md:text-7xl text-gold mb-6 tracking-wide drop-shadow-md">
          Coming Soon
        </h1>
        
        <div className="w-24 h-[2px] bg-gold mx-auto mb-8 opacity-60"></div>
        
        <p className="text-gray-300 font-light text-xl md:text-2xl leading-relaxed">
          We are currently crafting a premier luxury grooming experience in Laval. <br className="hidden md:block"/>
          Stay tuned for our grand opening.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-gold font-sans text-sm uppercase tracking-[0.3em]">
            Urbain Élégant
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
