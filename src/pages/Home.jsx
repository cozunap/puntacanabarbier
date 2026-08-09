import { ArrowRight, Scissors, Sparkles, Smile } from 'lucide-react';
import { useBooking } from '../BookingContext';

export default function Home() {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 text-center pt-20">
        <div className="absolute inset-0 z-0">
          <div 
            className="bg-cover bg-center w-full h-full opacity-40" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAraE8hzFdMmex4llxa4U8IK-dZziMdjUiHuhIhUWtDZBNWN5O0MubJkH_xDjhCj_5nQwDWxJQpgWR136-KJthR4NxzoQpdFQyHH0e0dn22RelQoP_ndYURsRsN1O_sccXJDJx7y81-xpk1CXXBAXZhrIHYMSBwhRzPUSfmnVx5V9L4W003M8efwdhkAvMB_yvKXQOl1fOc10gbpuw9Wi5m_4gyHHO4_ZA8CEJOISWWa0x-BlSX6PUm')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-8">
          <h1 className="font-serif text-5xl md:text-7xl text-white drop-shadow-lg leading-tight">
            L'expérience Urbaine et Élégante
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light">
            Where raw urban energy meets high-end tropical relaxation. A sanctuary for the modern gentleman.
          </p>
          <button 
            onClick={openBooking}
            className="bg-gold text-navy font-bold uppercase tracking-widest py-4 px-8 mt-4 hover:bg-gold-light premium-hover flex items-center gap-3 group rounded-sm text-sm"
          >
            Book Appointment
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Our Craft Section */}
      <section className="py-section px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-gold mb-4">Our Craft</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Meticulous attention to detail, premium products, and a masterful touch. We don't just cut hair; we curate your identity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Scissors, title: "Precision Cuts", desc: "Tailored to your bone structure and personal style. From classic tapers to modern textures." },
            { icon: Smile, title: "Hot Towel Shaves", desc: "The traditional straight razor experience. Relaxing, close, and uncompromisingly smooth." },
            { icon: Sparkles, title: "Grooming Rituals", desc: "Beard sculpting, facial treatments, and scalp massages designed for the discerning man." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-navy-light p-10 rounded-md border border-white/5 flex flex-col items-center text-center premium-hover">
              <feature.icon className="text-gold mb-6" size={48} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-white mb-4">{feature.title}</h3>
              <p className="font-sans text-gray-400 font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Cuts Gallery */}
      <section className="py-section px-6 md:px-12 bg-navy-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl text-gold mb-4">Signature Cuts</h2>
              <p className="font-sans text-lg text-gray-300 font-light">Explore our portfolio of curated styles.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-gold uppercase tracking-widest text-sm hover:text-gold-light transition-colors font-medium">
              View All <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "The Executive", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlX9kLQllC9WIkcaKB4aMpxwGad66NFstZV9mV5SdKHmyZ66y6zlzFE5zwWGC_FjUZXiEfaN8ejxCNT-_m4D1yUH6AojrZyqGvfd_eGTegW88DUYdyEW_gkYYV-e8dkLC45vj_wjPpEbWFekdfhcOXJVZ-0vl173i3skYt4PFrvbwkBupHOxnFKric6MMfV5HXTJ7FxgLAgNEZmGrTgpde6llZIVGzj0QLqfcRINMZ2Twav_QUKzn9" },
              { title: "Urban Texture", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdNvHQAMGJfMR4FyaG5yDMTKpAJOnnSFjp7NEpuLhfWntz9ZEpJUe_XLcz-a4ugkEcQF2aOktZjCrchfLDRb4klJkT29KHFRT10dM_SdC1C7f6OH47GpIFPC_ZsyAfhZj-vXtqcnXVlm8Vi_MibVaTIErZYgG5NzTQ42tD7LY-34uYdgaAti1wiOE7RKpdYYFthAmjR0oEiOvauJEkcTxL3xAM0E3bLpAGAOxWUu4_gXsfdjEtca8J" },
              { title: "Classic Pompadour", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIWOaVq0GHncUjDaJniIS1v4oc61XK13bfXl_sdEHkyZ-pfq5Kcwl-xlUqSSM87aiw-389HycXYS74YzgJ3b0uhMwg3qrpcjQQpWFjowzUeehlER9BaMZB80qvXH7yCMl2l2TPGgGbWIdTCQMWw4klPr2oMlftfOmnmUnyEPsH4m-YEgy3qFjU9u8qFgXr27Em0sgIMTIXazpK1pZauwwOufttC7IfVncuIBZNWZXl18M65dtXXbGk" },
              { title: "Zero Fade", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBghMpCmeOTYhRhZGfTF3o8oDBTnVW1r653BHwPj5zf3_zyco-vCD2pRr-Mdeav6LZdJDEFHIEXProLrinYDAiaNwenivNIsAI9jQMtXbK-Mk_IoZeycvW8R6tRgrogGuwXXXuu_9KuBW9mLARX1KYLvxhzuoBc9axOB9JjV8iA8ObGTEoE-5AU5u4YF_QkgCUdgPCbN0W52HS87bjF8ocYYaJ7DFFm0OO76bh6lXAhZY21mm6X92RT" }
            ].map((cut, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-md aspect-[3/4] premium-hover">
                <div 
                  className="bg-cover bg-center w-full h-full group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" 
                  style={{ backgroundImage: `url('${cut.img}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                  <h3 className="font-serif text-2xl text-gold">{cut.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-12 w-full md:hidden flex justify-center items-center gap-2 text-gold border border-gold font-sans uppercase tracking-widest py-4 rounded-sm hover:bg-gold/10 transition-colors text-sm font-medium">
            View All Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}
