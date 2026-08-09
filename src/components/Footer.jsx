import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-dark text-white w-full border-t border-white/5 mt-auto relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand Column (Left) */}
        <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start gap-6">
          <img 
            src="/Punta_Cana_Barbier_Logo.webp" 
            alt="Punta Cana Barbier" 
            className="w-40 md:w-48 h-auto object-contain drop-shadow-lg" 
          />
          <p className="text-gray-400 font-light leading-relaxed max-w-sm">
            Urbain Élégant. The ultimate premium grooming experience in the heart of Laval.
          </p>
        </div>

        {/* Navigation Column (Middle) */}
        <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-6">
          <h4 className="font-serif text-xl text-gold">Navigation</h4>
          <ul className="flex flex-col gap-4 font-light text-gray-300">
            <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-gold transition-colors">Services</a></li>
            <li><a href="/about" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Hours Column (Right) */}
        <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-8">
          <div className="flex flex-col gap-3 text-gray-300 font-light">
            <h4 className="font-serif text-xl text-gold mb-1">Contact Us</h4>
            <p className="leading-relaxed">
              255 Boul. de la Concorde O.<br/>
              Laval, QC H7N 5T1
            </p>
            <a href="tel:+14388836129" className="text-white hover:text-gold transition-colors">
              (438) 883-6129
            </a>
          </div>

          <div className="flex flex-col gap-3 text-gray-300 font-light">
            <h4 className="font-serif text-xl text-gold mb-1">Hours</h4>
            <div className="grid grid-cols-2 gap-2 max-w-[200px]">
              <span>Mon - Sat</span>
              <span className="text-white text-right">9AM - 8PM</span>
              <span>Sunday</span>
              <span className="text-gold text-right">Closed</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="w-full border-t border-white/5 bg-[#080808] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-light text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Punta Cana Barbier. {t('footer.rights')}
          </p>
          <p className="text-gray-600 font-light text-xs tracking-widest uppercase">
            Developed by <a href="https://cozuna.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">cozuna.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
