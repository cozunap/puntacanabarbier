export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-[60vh] py-section px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 mt-12">
        <h1 className="font-serif text-5xl text-gold mb-8">Contact Us</h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-3xl text-white">Get in Touch</h2>
          <p className="text-gray-300 font-light">
            We are always here to answer your questions and help you book your next appointment.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-gray-300">
              <span className="font-serif text-gold text-xl">Address:</span>
              <span className="font-light">123 Luxury Ave, Punta Cana</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="font-serif text-gold text-xl">Phone:</span>
              <span className="font-light">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="font-serif text-gold text-xl">Email:</span>
              <span className="font-light">hello@puntacanabarbier.com</span>
            </div>
          </div>
        </div>
        
        <form className="bg-navy-light p-8 rounded-md border border-white/5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gold font-sans text-sm uppercase tracking-widest">Name</label>
            <input type="text" className="bg-navy border border-white/20 p-3 text-white focus:outline-none focus:border-gold rounded-sm transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gold font-sans text-sm uppercase tracking-widest">Email</label>
            <input type="email" className="bg-navy border border-white/20 p-3 text-white focus:outline-none focus:border-gold rounded-sm transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gold font-sans text-sm uppercase tracking-widest">Message</label>
            <textarea rows="4" className="bg-navy border border-white/20 p-3 text-white focus:outline-none focus:border-gold rounded-sm transition-colors"></textarea>
          </div>
          <button type="button" className="bg-gold text-navy font-bold uppercase tracking-widest py-4 mt-2 hover:bg-gold-light premium-hover rounded-sm text-sm">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
