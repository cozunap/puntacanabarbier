import { createContext, useContext, useState } from 'react';
import BookingModal from './components/BookingModal';

const BookingContext = createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialService, setInitialService] = useState(null);

  const openBooking = (serviceName = null) => {
    setInitialService(serviceName);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setTimeout(() => setInitialService(null), 300); // Clear after animation
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} initialService={initialService} />
    </BookingContext.Provider>
  );
}
