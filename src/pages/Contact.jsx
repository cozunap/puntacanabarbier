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
        className="w-full h-[400px] md:h-[500px] mt-8 relative border-t border-gold/20"
      >
        {/* Overlay to give the map a Navy/Gold tint */}
        <div className="absolute inset-0 bg-navy/30 mix-blend-overlay pointer-events-none z-10"></div>
        <iframe
          src="https://www.google.com/maps?q=255+Boul.+de+la+Concorde+O.,+Laval,+QC+H7N+5T1&output=embed"
          width="100%"
          height="100%"
          style={{ 
            border: 0, 
            filter: 'grayscale(100%) invert(92%) contrast(1.2) sepia(10%) hue-rotate(180deg)' 
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Punta Cana Barbier Location"
        ></iframe>
      </motion.div>
    </div>
  );
}
