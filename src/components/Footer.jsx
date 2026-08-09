import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-dark text-white w-full border-t border-white/5 mt-auto relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-12">
        
        {/* Logo */}
        <div className="mb-4">
          <img 
            src="/Punta_Cana_Barbier_Logo.webp" 
            alt="Punta Cana Barbier" 
            className="w-48 md:w-56 h-auto object-contain drop-shadow-2xl" 
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-8 md:gap-12 font-serif text-lg text-gray-300">
          <li><a href="/" className="hover:text-gold transition-colors premium-hover block">Home</a></li>
          <li><a href="/services" className="hover:text-gold transition-colors premium-hover block">Services</a></li>
          <li><a href="/about" className="hover:text-gold transition-colors premium-hover block">About Us</a></li>
          <li><a href="/contact" className="hover:text-gold transition-colors premium-hover block">Contact</a></li>
        </ul>

        {/* Separator */}
        <div className="w-16 h-[1px] bg-gold/50"></div>

        {/* Contact & Hours Info */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-gray-400 font-light tracking-wide">
          <div className="flex flex-col gap-2">
            <span className="font-serif text-gold text-xl mb-1">Visit Us</span>
            <p className="leading-relaxed">
              255 Boul. de la Concorde O.<br/>
              Laval, QC H7N 5T1
            </p>
            <a href="tel:+14388836129" className="text-white hover:text-gold transition-colors mt-2">
              (438) 883-6129
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-serif text-gold text-xl mb-1">Hours</span>
            <p className="leading-relaxed">
              Mon - Sat: <span className="text-white">9AM - 8PM</span><br/>
              Sunday: <span className="text-gold">Closed</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full border-t border-white/5 bg-[#080808] py-6 flex flex-col items-center gap-2">
        <p className="text-gray-500 font-light text-xs tracking-widest uppercase text-center">
          © {new Date().getFullYear()} Punta Cana Barbier. {t('footer.rights')}
        </p>
        <p className="text-gray-600 font-light text-[10px] tracking-widest uppercase text-center">
          Developed by <a href="https://cozuna.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">cozuna.com</a>
        </p>
      </div>
    </footer>
  );
}
