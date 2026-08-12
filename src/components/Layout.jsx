import { useState, cloneElement, Children } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';
import FloatingActions from './FloatingActions';

export default function Layout({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col pt-24 bg-navy text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
