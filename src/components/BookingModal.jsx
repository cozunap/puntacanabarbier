import { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const servicesList = [
    "Classic Haircut",
    "Skin Fade / Zero Fade",
    "The Executive Cut",
    "Hot Towel Straight Razor Shave",
    "Beard Sculpting & Line-up",
    "Scalp Treatment & Massage",
    "Kids Haircut",
    "Hair & Beard Coloring"
  ];

  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-navy-light border border-gold/30 rounded-md w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gold transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl text-gold mb-2">Book an Appointment</h2>
          <p className="text-gray-400 font-light mb-8">Select your services and schedule your visit.</p>

          <form className="flex flex-col gap-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gold font-sans text-xs uppercase tracking-widest">Full Name</label>
                <input type="text" className="bg-navy border border-white/10 p-3 text-white focus:outline-none focus:border-gold rounded-sm transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gold font-sans text-xs uppercase tracking-widest">Phone Number</label>
                <input type="tel" className="bg-navy border border-white/10 p-3 text-white focus:outline-none focus:border-gold rounded-sm transition-colors" placeholder="(555) 000-0000" />
              </div>
            </div>

            {/* Services Selection */}
            <div className="flex flex-col gap-4">
              <label className="text-gold font-sans text-xs uppercase tracking-widest">Select Services</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesList.map((service, idx) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleService(service)}
                      className={`flex items-center gap-3 p-3 rounded-sm border cursor-pointer transition-all ${
                        isSelected ? 'border-gold bg-gold/10' : 'border-white/10 bg-navy hover:border-gold/50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-sm flex items-center justify-center border ${isSelected ? 'bg-gold border-gold text-navy' : 'border-white/30'}`}>
                        {isSelected && <Check size={14} strokeWidth={3} />}
                      </div>
                      <span className="text-sm text-gray-200">{service}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gold font-sans text-xs uppercase tracking-widest">Preferred Date</label>
                <input type="date" className="bg-navy border border-white/10 p-3 text-white focus:outline-none focus:border-gold rounded-sm transition-colors [color-scheme:dark]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gold font-sans text-xs uppercase tracking-widest">Preferred Time</label>
                <select className="bg-navy border border-white/10 p-3 text-white focus:outline-none focus:border-gold rounded-sm transition-colors">
                  <option>Morning (9AM - 12PM)</option>
                  <option>Afternoon (12PM - 4PM)</option>
                  <option>Evening (4PM - 8PM)</option>
                </select>
              </div>
            </div>

            <button 
              type="button" 
              onClick={onClose} // For now just closes
              className="bg-gold text-navy font-bold uppercase tracking-widest py-4 mt-4 hover:bg-gold-light premium-hover rounded-sm text-sm"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
