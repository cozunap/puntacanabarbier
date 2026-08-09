export default function Services() {
  return (
    <div className="flex flex-col w-full min-h-[60vh] py-section px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 mt-12">
        <h1 className="font-serif text-5xl text-gold mb-8">Our Services</h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        {[
          { name: "The Executive Cut", price: "$45", desc: "Precision haircut, styling, and neck shave." },
          { name: "Hot Towel Shave", price: "$35", desc: "Classic straight razor shave with essential oils." },
          { name: "Beard Sculpting", price: "$25", desc: "Trimming, shaping, and conditioning for your beard." },
          { name: "The Full Ritual", price: "$75", desc: "Haircut, shave, and mini facial for complete relaxation." }
        ].map((service, idx) => (
          <div key={idx} className="bg-navy-light p-8 rounded-md border border-white/5 flex flex-col gap-4 premium-hover">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="font-serif text-2xl text-white">{service.name}</h3>
              <span className="font-sans text-xl text-gold font-medium">{service.price}</span>
            </div>
            <p className="font-sans text-gray-400 font-light">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
