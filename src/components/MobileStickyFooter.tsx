import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Phone, Mail, X } from 'lucide-react';

export default function MobileStickyFooter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > window.innerHeight * 0.8) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    });
  }, [scrollY]);

  return (
    <>
      {/* Sticky Bottom Bar */}
      <AnimatePresence>
        {showFooter && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden bg-dark-950 border-t border-gold-500/20 flex items-center justify-between p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
          >
            <a 
              href="tel:2158708197" 
              className="relative overflow-hidden group flex-1 flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] py-4 transition-all mr-3 hover:border-gold-500"
            >
              <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                <Phone className="w-4 h-4" />
                Call Now
              </span>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
            </a>
            <button 
              onClick={() => setIsOpen(true)}
              className="relative overflow-hidden group flex-1 flex items-center justify-center gap-2 bg-gold-500 text-black font-black uppercase tracking-widest text-[10px] py-4 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                <Mail className="w-4 h-4" />
                Contact Form
              </span>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Form Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-h-[90dvh] bg-dark-950 border-t border-gold-500/30 z-[120] lg:hidden flex flex-col shadow-2xl overflow-hidden pb-[env(safe-area-inset-bottom)]"
            >
              <div className="flex-shrink-0 bg-dark-950/95 backdrop-blur-sm border-b border-white/10 p-5 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter text-white">Get Help Fast</h3>
                  <p className="text-[9px] text-gold-500 uppercase tracking-widest">Confidential • 24/7 Response</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 overflow-y-auto flex-grow">
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="mobileFullName"
                      className="peer w-full bg-white/5 border border-white/10 rounded-sm p-3 pt-5 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300" 
                      placeholder="John Doe" 
                    />
                    <label 
                      htmlFor="mobileFullName" 
                      className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
                    >
                      Full Name
                    </label>
                  </div>



                  <div className="relative group">
                    <input 
                      type="tel" 
                      id="mobilePhone"
                      className="peer w-full bg-white/5 border border-white/10 rounded-sm p-3 pt-5 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300" 
                      placeholder="(215) 870-8197" 
                    />
                    <label 
                      htmlFor="mobilePhone" 
                      className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
                    >
                      Phone Number
                    </label>
                  </div>

                  <div className="relative group">
                    <label htmlFor="mobileService" className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest pointer-events-none z-10">
                      Services Needed
                    </label>
                    <select 
                      id="mobileService"
                      defaultValue=""
                      className="w-full bg-white/5 border border-white/10 rounded-sm p-3 pt-5 text-white focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-dark-950">Select a Service</option>
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

                  <div className="relative group flex-grow flex flex-col min-h-[80px]">
                    <textarea 
                      id="mobileMessage"
                      className="peer w-full h-full min-h-[60px] bg-white/5 border border-white/10 rounded-sm p-3 pt-5 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none" 
                      placeholder="Message"
                    ></textarea>
                    <label 
                      htmlFor="mobileMessage" 
                      className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
                    >
                      Message
                    </label>
                  </div>

                  <button className="relative overflow-hidden group bg-gold-500 text-black p-4 font-black uppercase tracking-widest text-sm transition-all duration-300 mt-4 w-full flex-shrink-0">
                    <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">Request Bail Now</span>
                    <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
