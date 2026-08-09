import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src="/Punta_Cana_Barbier_Logo.webp" alt="Punta Cana Barbier Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-[0.1em] uppercase font-medium transition-colors duration-300 hover:text-gold ${
                location.pathname === link.path ? 'text-gold border-b-2 border-gold pb-1' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Book Now Button */}
        <button 
          onClick={onOpenBooking}
          className="hidden md:block bg-gold text-navy px-6 py-2 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-gold-light transition-colors premium-hover"
        >
          Book Now
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gold hover:text-gold-light transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-navy border-b border-white/10 py-6 px-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm tracking-[0.1em] uppercase font-medium transition-colors ${
                location.pathname === link.path ? 'text-gold' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (onOpenBooking) onOpenBooking();
            }}
            className="bg-gold text-navy px-6 py-3 rounded-sm text-sm uppercase tracking-widest font-bold mt-4 w-full"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
