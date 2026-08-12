import { motion } from 'framer-motion';

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full min-h-[60vh] pb-16 pt-section px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center mb-16 mt-6 md:mt-12"
        >
        <h1 className="font-serif text-5xl md:text-6xl text-gold mb-8">Contact Us</h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeRight}
          className="flex flex-col gap-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white">Get in Touch</h2>
          <p className="text-gray-300 font-light text-lg">
            We are always here to answer your questions and help you book your next appointment.
          </p>
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-start gap-4 text-gray-300">
              <span className="font-serif text-gold text-2xl min-w-[100px]">Address:</span>
              <span className="font-light text-lg">255 Boul. de la Concorde O.<br />Laval, QC H7N 5T1</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="font-serif text-gold text-2xl min-w-[100px]">Phone:</span>
              <span className="font-light text-lg">(438) 883-6129</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="font-serif text-gold text-2xl min-w-[100px]">Email:</span>
              <span className="font-light text-lg break-all">hello@puntacanabarbier.com</span>
            </div>
          </div>
        </motion.div>
        
        <motion.form 
          initial="hidden"
          animate="show"
          variants={fadeLeft}
          className="bg-navy-light p-8 md:p-10 rounded-md border border-white/5 flex flex-col gap-6 shadow-2xl"
        >
          <div className="flex flex-col gap-2">
            <label className="text-gold font-sans text-sm uppercase tracking-widest">Name</label>
            <input type="text" className="bg-navy border border-white/10 p-4 text-white focus:outline-none focus:border-gold focus:bg-navy-dark rounded-sm transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gold font-sans text-sm uppercase tracking-widest">Email</label>
            <input type="email" className="bg-navy border border-white/10 p-4 text-white focus:outline-none focus:border-gold focus:bg-navy-dark rounded-sm transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gold font-sans text-sm uppercase tracking-widest">Message</label>
            <textarea rows="5" className="bg-navy border border-white/10 p-4 text-white focus:outline-none focus:border-gold focus:bg-navy-dark rounded-sm transition-all resize-none"></textarea>
          </div>
          <button type="button" className="bg-gold text-navy font-bold uppercase tracking-widest py-4 mt-2 hover:bg-gold-light premium-hover rounded-sm text-sm transition-colors">
            Send Message
          </button>
        </motion.form>
      </div>
      </div>

      {/* Full Width Map Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-[400px] md:h-[500px] mt-8 relative border-t border-gold/20 flex items-center justify-center overflow-hidden bg-navy-light"
      >
        {/* The Map (Disabled interactions so it stays perfectly aligned with our custom CSS marker) */}
        <iframe
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=255%20Boul.%20de%20la%20Concorde%20O.,%20Laval,%20QC%20H7N%205T1&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ 
            border: 0, 
            filter: 'grayscale(100%) invert(92%) contrast(1.2) sepia(10%) hue-rotate(180deg)' 
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Punta Cana Barbier Location"
        ></iframe>

        {/* Overlay to give the map a Navy tint */}
        <div className="absolute inset-0 bg-navy/30 mix-blend-overlay pointer-events-none z-10"></div>

        {/* Custom Marker */}
        <motion.a 
          href="https://www.google.com/maps/dir//255+Boul.+de+la+Concorde+O.,+Laval,+QC+H7N+5T1"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 flex flex-col items-center justify-center cursor-pointer group"
        >
          <div className="bg-navy p-3 rounded-full border-2 border-gold shadow-[0_0_30px_rgba(184,154,90,0.6)] group-hover:scale-110 transition-transform duration-300">
            <img src="/Punta_Cana_Barbier_Logo.webp" alt="Punta Cana Barbier" className="w-16 h-16 object-contain" />
          </div>
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-gold mt-[-2px] group-hover:translate-y-1 transition-transform duration-300"></div>
        </motion.a>

        {/* Get Directions Button */}
        <a 
          href="https://www.google.com/maps/dir//255+Boul.+de+la+Concorde+O.,+Laval,+QC+H7N+5T1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30 bg-gold text-navy font-bold uppercase tracking-widest py-3 px-6 rounded-sm text-sm hover:bg-gold-light premium-hover shadow-xl flex items-center gap-2 transition-colors"
        >
          Get Directions
        </a>
      </motion.div>
    </div>
  );
}
