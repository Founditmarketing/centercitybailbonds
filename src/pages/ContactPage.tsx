import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen pt-32 pb-24 px-4 bg-dark-950">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4 inline-block px-3 py-1 border border-green-500/40 bg-green-500/10 text-[10px] uppercase tracking-[0.3em] font-bold text-green-400 flex items-center gap-2 justify-center w-max mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              OPEN NOW • 24/7 DISPATCH
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6">
              Get In <span className="text-gold-500">Touch</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              When you need fast, confidential bail bonds assistance, Center City Bailbonds is here. We are available 24 hours a day, 7 days a week in Philadelphia.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-1">Call Us Immediately</p>
                <a href="tel:2158708197" className="text-2xl md:text-4xl font-black text-white hover:text-gold-500 transition-colors uppercase tracking-tight block">
                  (215) 870-8197
                </a>
              </div>
            </motion.div>



            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-gold-500/30 group-hover:text-gold-500 transition-all duration-300 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-1">Headquarters</p>
                <p className="text-2xl md:text-3xl font-black text-white block uppercase tracking-tight">
                  1238 South Street<br/>
                  Philadelphia, PA 19147
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 pt-8 border-t border-white/5"
            >
              <div className="flex flex-col gap-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">Ready to proceed?</p>
                <a href="https://powerforms.docusign.net/07c12434-d9b7-4673-af54-697d1620ae41?acct=f9d9aa56-250c-4c8f-9a7f-ac54ca827d7f&env=na3&accountId=f9d9aa56-250c-4c8f-9a7f-ac54ca827d7f" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group bg-transparent border-2 border-gold-500 text-gold-500 px-6 py-4 w-full lg:w-max font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center">
                  <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                    Sign Bail Agreement
                  </span>
                  <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                </a>
                <p className="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">
                  Complete our secure, online bail agreement via DocuSign to expedite the release process.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-dark-900 border border-white/5 p-8 md:p-12 shadow-2xl overflow-hidden rounded-sm"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[100px] pointer-events-none rounded-full" />
            
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 relative z-10">Send a Secure Message</h3>
            
            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="contactName"
                    className="peer w-full bg-dark-950 border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-dark-950 focus:outline-none transition-all duration-300" 
                    placeholder="John Doe" 
                  />
                  <label 
                    htmlFor="contactName" 
                    className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="tel" 
                    id="contactPhone"
                    className="peer w-full bg-dark-950 border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-dark-950 focus:outline-none transition-all duration-300" 
                    placeholder="(215) 870-8197" 
                  />
                  <label 
                    htmlFor="contactPhone" 
                    className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
                  >
                    Phone Number
                  </label>
                </div>
              </div>



              <div className="relative group">
                <textarea 
                  id="contactMessage"
                  className="peer w-full min-h-[150px] bg-dark-950 border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-dark-950 focus:outline-none transition-all duration-300 resize-none" 
                  placeholder="How can we help?"
                ></textarea>
                <label 
                  htmlFor="contactMessage" 
                  className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none"
                >
                  Message
                </label>
              </div>

              <button className="relative overflow-hidden group bg-gold-500 text-black p-5 font-black uppercase tracking-widest text-sm transition-all duration-300 mt-2 flex items-center justify-center gap-3 w-full lg:w-max ml-auto">
                <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">Send Secure Message</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
