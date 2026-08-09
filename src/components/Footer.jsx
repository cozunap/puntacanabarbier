export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white w-full py-16 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-serif text-2xl text-gold">Punta Cana Barbershop</span>
          <p className="text-gray-400 font-light max-w-xs">
            © {new Date().getFullYear()} Punta Cana Barbershop. Urbain Élégant.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 text-gray-400">
          <h4 className="font-serif text-xl text-gold mb-2">Connect</h4>
          <a className="hover:text-gold transition-colors duration-200" href="#">Instagram</a>
          <a className="hover:text-gold transition-colors duration-200" href="#">Facebook</a>
        </div>
        
        <div className="flex flex-col gap-4 text-gray-400">
          <h4 className="font-serif text-xl text-gold mb-2">Visit</h4>
          <span className="font-light">Hours: Mon-Sat 9am - 8pm</span>
          <span className="font-light">Contact: (555) 123-4567</span>
        </div>
      </div>
    </footer>
  );
}
