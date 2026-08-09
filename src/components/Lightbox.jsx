import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Si no hay índice seleccionado, no renderizar
  if (currentIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Botón Cerrar */}
        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors z-50 p-2"
        >
          <X size={36} strokeWidth={1.5} />
        </button>

        {/* Controles de navegación */}
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-12 text-white/50 hover:text-gold transition-colors z-50 p-4"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-12 text-white/50 hover:text-gold transition-colors z-50 p-4"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        {/* Imagen principal */}
        <div 
          className="relative max-w-5xl w-full max-h-[85vh] px-4 md:px-0 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={images[currentIndex].img}
            alt={images[currentIndex].title}
            className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
          />
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-gold">{images[currentIndex].title}</h3>
            <p className="text-white/50 text-sm mt-2 font-light">
              {currentIndex + 1} / {images.length}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
