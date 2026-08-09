import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-dark text-white w-full border-t border-gold/20 mt-auto relative overflow-hidden">
      {/* Subtle gold glow at the top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & Rights */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <img 
            src="/Punta_Cana_Barbier_Logo.webp" 
            alt="Punta Cana Barbier" 
            className="h-20 w-auto object-contain object-left drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]" 
          />
          <p className="text-gray-400 font-light text-sm">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-xl text-gold mb-2">Navigation</h4>
          <ul className="flex flex-col gap-3 font-light text-gray-400">
            <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-gold transition-colors">Services</a></li>
            <li><a href="/about" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-xl text-gold mb-2">Contact</h4>
          <p className="text-gray-400 font-light tracking-wide leading-relaxed">
            255 Boul. de la Concorde O.<br/>
            Laval, QC H7N 5T1
          </p>
          <a href="tel:+14388836129" className="text-white hover:text-gold transition-colors text-lg mt-2 font-medium">
            (438) 883-6129
          </a>
        </div>
        
        {/* Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-xl text-gold mb-2">Hours</h4>
          <ul className="flex flex-col gap-3 text-gray-400 font-light tracking-wide">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Mon - Sat</span>
              <span className="text-white">9AM - 8PM</span>
            </li>
            <li className="flex justify-between pt-2">
              <span>Sunday</span>
              <span className="text-gold">Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
