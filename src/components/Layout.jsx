import { useState, cloneElement, Children } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';

export default function Layout({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // We can inject onOpenBooking into children if needed, or just let them use a context. 
  // For simplicity, we clone element if it's a single child, but react-router Routes is complex.
  // Instead of passing to children automatically, we'll just expose it if we use context.
  // Wait, I will just export a simple context or just let Layout handle Header.
  // Let's pass it to Header directly.
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-navy text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-grow flex flex-col">
        {/* We need Home to access it too, let's just use Context to be clean */}
        {children}
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
