import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-dark text-white w-full py-16 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-serif text-2xl text-gold">Punta Cana Barbier</span>
          <p className="text-gray-400 font-light max-w-xs">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-xl text-white">Contact</h4>
          <p className="text-gray-400 font-light tracking-wide">123 Grooming Ave<br/>Punta Cana, DR</p>
          <a href="tel:+18095551234" className="text-gold hover:text-gold-light transition-colors">(809) 555-1234</a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-xl text-white">Hours</h4>
          <p className="text-gray-400 font-light tracking-wide">
            Mon-Sat: 9AM - 8PM<br/>
            Sunday: Closed
          </p>
        </div>
      </div>
    </footer>
  );
}
