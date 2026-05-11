import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
    }
  }, []);
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Video layer (Forced autoplay via ref) */}
      <div className="absolute inset-0 z-[-1]">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-center opacity-60 md:opacity-40 mix-blend-luminosity scale-105"
        >
          <source src="/handcuffsvideo.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradients for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 md:via-dark-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/30 md:from-dark-950/70 via-transparent to-dark-950/30 md:to-dark-950/70" />
      </div>

      <div className="w-full px-4 md:px-10 flex flex-col relative z-10 pt-20 lg:pr-[35vw]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-4 px-3 py-1 border border-green-500/40 bg-green-500/10 w-max text-[10px] uppercase tracking-[0.3em] font-bold text-green-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            OPEN NOW • 24/7 DISPATCH
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black uppercase tracking-tighter text-white mb-6 leading-[0.95]">
            <span className="whitespace-nowrap">#1 Bailbonds</span><br />
            <span className="whitespace-normal md:whitespace-nowrap">Service <br className="block md:hidden" />in <span className="text-gold-500">Philly</span></span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            <strong className="text-white font-bold">Jail’s No Place to Stay — Center City Posts Bail Today.</strong><br className="hidden sm:block" />
            <span className="mt-2 inline-block">Locally Philadelphia Owned & Operated. Immediate, 24/7 confidential bail services.</span><br />
            <span className="mt-4 inline-block text-white font-black text-xl lg:text-2xl tracking-widest border-l-4 border-gold-500 pl-4 pr-6 py-2 bg-dark-950/50">
              1238 South Street, Philadelphia, PA 19147
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link to="/contact" className="relative overflow-hidden group bg-gold-500 text-black px-8 py-4 font-black text-sm tracking-widest uppercase transition-all w-full sm:w-auto text-center block">
              <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Get Started Online</span>
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
            </Link>
            <a href="tel:2158708197" className="relative overflow-hidden group bg-transparent border border-white/20 text-white px-8 py-4 font-black text-sm tracking-widest uppercase transition-all w-full sm:w-auto text-center hover:border-gold-500 block">
              <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Call Center City Now</span>
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="hidden lg:flex absolute top-24 bottom-0 right-0 w-full lg:w-1/3 border-l border-white/10 bg-transparent p-12 flex-col z-20"
      >
        <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Get Help Fast</h3>
        <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-widest">Confidential • 24/7 Response</p>
        
        <form className="flex flex-col gap-3 flex-grow mt-2" onSubmit={(e) => e.preventDefault()}>
          <div className="relative group">
            <input 
              type="text" 
              id="fullName"
              className="peer w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300" 
              placeholder="John Doe" 
            />
            <label 
              htmlFor="fullName" 
              className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
            >
              Full Name
            </label>
          </div>



          <div className="relative group">
            <input 
              type="tel" 
              id="phone"
              className="peer w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300" 
              placeholder="(215) 870-8197" 
            />
            <label 
              htmlFor="phone" 
              className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
            >
              Phone Number
            </label>
          </div>

          <div className="relative group">
            <label htmlFor="service" className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest pointer-events-none z-10">
              Services Needed
            </label>
            <select 
              id="service"
              className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 pt-7 text-white focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="" disabled selected className="bg-dark-950">Select a Service</option>
              <option value="drug" className="bg-dark-950">Drug Charge Bailbonds</option>
              <option value="dui" className="bg-dark-950">DUI / DWI Bailbonds</option>
              <option value="felony" className="bg-dark-950">Felony Charges Bailbonds</option>
              <option value="probation" className="bg-dark-950">Probation/Parole Violations</option>
              <option value="theft" className="bg-dark-950">Theft Charges Bailbonds</option>
              <option value="violent" className="bg-dark-950">Violent Crimes Bailbonds</option>
              <option value="sex" className="bg-dark-950">Sex Crimes Bailbonds</option>
              <option value="domestic" className="bg-dark-950">Domestic Violence Bailbonds</option>
              <option value="white_collar" className="bg-dark-950">White Collar Crimes Bailbonds</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative group flex-grow flex flex-col">
            <textarea 
              id="message"
              className="peer w-full h-full min-h-[80px] bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none" 
              placeholder="Message"
            ></textarea>
            <label 
              htmlFor="message" 
              className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
            >
              Message
            </label>
          </div>

          <button className="relative overflow-hidden group bg-gold-500 text-black p-4 font-black uppercase tracking-widest text-sm transition-all duration-300 mt-2 w-full">
            <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">Request Bail Now</span>
            <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
          </button>
        </form>
      </motion.div>

      {/* Sleek Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden flex justify-center">
          <motion.div 
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-gold-500 to-transparent"
          />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-gold-500 transition-colors duration-300 ml-1">Scroll</span>
      </div>
    </section>
  );
}
