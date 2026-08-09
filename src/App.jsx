import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { BookingProvider } from './BookingContext';
import FloatingActions from './components/FloatingActions';

function App() {
  useEffect(() => {
    // 1. Bloqueo de Clic Derecho
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    
    // 2. Bloqueo de Teclado (Inspección y Código Fuente)
    const handleKeyDown = (e) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      
      // Combinaciones con Ctrl o Cmd (Mac)
      if (e.ctrlKey || e.metaKey) {
        // Ctrl + U / Cmd + U (Código fuente)
        if (e.key === 'u' || e.key === 'U') {
          e.preventDefault();
        }
        // Ctrl + S / Cmd + S (Guardar página)
        if (e.key === 's' || e.key === 'S') {
          e.preventDefault();
        }
        
        // Ctrl + Shift + I/J o Cmd + Option + I/J
        if (e.shiftKey || e.altKey) {
          if (e.key === 'i' || e.key === 'I' || e.key === 'j' || e.key === 'J') {
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <BookingProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <FloatingActions />
        </Layout>
      </BookingProvider>
    </Router>
  );
}

export default App;
