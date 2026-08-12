import { motion } from 'framer-motion';

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="flex flex-col w-full py-section px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="mx-auto w-full"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6 leading-tight">Welcome to Punta Cana Barbier</h1>
          <h2 className="font-sans text-lg md:text-xl text-gray-400 uppercase tracking-widest mb-8">Premier Luxury Men's Grooming in Laval</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:gap-24 text-gray-300 font-light leading-relaxed text-lg md:text-xl">
          
          {/* Section 1 */}
          <motion.section variants={fadeUp} className="text-center max-w-4xl mx-auto">
            <p className="mb-6">
              Welcome to Punta Cana Barbier, Laval’s destination for elevated men’s grooming. Where traditional barbering techniques meet modern sophistication, we transform standard haircutting into an art form. 
            </p>
            <p>
              Our sanctuary is crafted specifically for the gentleman who values precision, style, and an uncompromised standard of excellence. Step inside and immerse yourself in the epitome of urbain élégant.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={fadeUp} className="bg-navy-light border border-white/5 p-8 md:p-16 rounded-md shadow-2xl hover:border-gold/30 transition-colors duration-500">
            <h3 className="font-serif text-3xl md:text-4xl text-gold mb-6 text-center">The Punta Cana Experience: Precision Meets Luxury</h3>
            <p className="mb-6 text-center max-w-3xl mx-auto">
              At Punta Cana Barbier, we believe grooming is more than routine maintenance—it is a personal ritual. Located in the heart of Laval, our shop offers a refined escape from the daily noise. From the moment you sit in our chair, our master barbers tailor every service to your unique features, facial structure, and aesthetic goals.
            </p>
            <p className="text-center max-w-3xl mx-auto">
              We blend timeless razor techniques with contemporary styling methods to ensure every edge is sharp, every fade is seamless, and every line is exact.
            </p>
          </motion.section>

          {/* Section 3: Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            <motion.section variants={fadeUp}>
              <h3 className="font-serif text-3xl text-white mb-8 border-b border-white/10 pb-4">Our Signature Services</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-gold mt-1">⚬</span>
                  <div>
                    <strong className="text-white block font-medium mb-1 font-serif text-xl">Bespoke Hair Sculpting & Fades</strong>
                    <span className="text-gray-400 text-base">Precision cutting tailored to your personal style, finished with a crisp lineup and professional styling.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1">⚬</span>
                  <div>
                    <strong className="text-white block font-medium mb-1 font-serif text-xl">Traditional Hot Towel & Straight Razor Shaves</strong>
                    <span className="text-gray-400 text-base">Experience the ultimate classic shave featuring aromatic hot towels, rich lather, and ultra-smooth straight razor execution.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1">⚬</span>
                  <div>
                    <strong className="text-white block font-medium mb-1 font-serif text-xl">Beard Design & Conditioning</strong>
                    <span className="text-gray-400 text-base">Custom beard shaping, line-ups, and deep-conditioning oil treatments to keep your beard impeccably groomed.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1">⚬</span>
                  <div>
                    <strong className="text-white block font-medium mb-1 font-serif text-xl">Revitalizing Facial & Scalp Treatments</strong>
                    <span className="text-gray-400 text-base">Restorative skin and scalp care designed to cleanse, exfoliate, and refresh.</span>
                  </div>
                </li>
              </ul>
            </motion.section>

            <motion.section variants={fadeUp}>
              <h3 className="font-serif text-3xl text-white mb-8 border-b border-white/10 pb-4">Why Choose Us in Laval?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-gold mt-1">⚬</span>
                  <div>
                    <strong className="text-white block font-medium mb-1 font-serif text-xl">Master Craftsmen</strong>
                    <span className="text-gray-400 text-base">Our team of barbers brings years of dedicated expertise, staying ahead of global style trends while honoring classic traditions.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1">⚬</span>
                  <div>
                    <strong className="text-white block font-medium mb-1 font-serif text-xl">Unmatched Atmosphere</strong>
                    <span className="text-gray-400 text-base">Designed with modern luxury in mind, our lounge offers a comfortable, upscale environment where you can unwind.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1">⚬</span>
                  <div>
                    <strong className="text-white block font-medium mb-1 font-serif text-xl">Premium Products</strong>
                    <span className="text-gray-400 text-base">We use only top-tier pomades, beard oils, and skin treatments formulated to protect and nourish.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1">⚬</span>
                  <div>
                    <strong className="text-white block font-medium mb-1 font-serif text-xl">Convenient Laval Location</strong>
                    <span className="text-gray-400 text-base">Easily accessible with dedicated service designed around your busy schedule.</span>
                  </div>
                </li>
              </ul>
            </motion.section>
            
          </div>

          {/* Call to action */}
          <motion.section variants={fadeUp} className="text-center max-w-3xl mx-auto mt-8 mb-24">
            <h3 className="font-serif text-3xl text-gold mb-6">Elevate Your Everyday Look</h3>
            <p className="mb-8">
              Whether preparing for an important business presentation, a special event, or maintaining your signature look, Punta Cana Barbier is Laval's premier choice for modern grooming.
            </p>
            <p className="text-xl text-white font-medium">
              Book your appointment today at Punta Cana Barbier in Laval and experience the pinnacle of luxury barbering.
            </p>
          </motion.section>

        </div>
      </motion.div>
    </div>
  );
}
