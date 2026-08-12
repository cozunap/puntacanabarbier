import { cloneElement, Children } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import { useBooking } from '../BookingContext';

export default function Layout({ children }) {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-screen flex flex-col pt-24 bg-navy text-white">
      <Header onOpenBooking={() => openBooking()} />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
