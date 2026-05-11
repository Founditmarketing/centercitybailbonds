import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVars = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { x: "100%", transition: { duration: 0.5, ease: [0.12, 0, 0.39, 1] } }
  };

  const linkVars = {
    initial: { y: 30, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${isScrolled ? 'h-20 border-b border-gold-500/20 bg-dark-950/90 backdrop-blur-sm' : 'h-24 bg-transparent border-b border-white/5'} flex items-center px-4 md:px-10`}>
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
          <Link to="/" className="leading-none block">
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">CENTER CITY <span className="text-gold-500">BAILBONDS</span></h1>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 text-white">of Philadelphia</p>
          </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          <Link to="/" className="text-gold-500 hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-gold-500 transition-colors">About Us</Link>
          
          <div className="relative group flex items-center cursor-pointer">
            <span className="text-white group-hover:text-gold-500 transition-colors flex items-center gap-1">
              Our Services <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-dark-950/95 backdrop-blur-md border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50 rounded-sm shadow-xl shadow-black">
              <Link to="/services/drug-charges" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">Drug Charge Bailbonds</Link>
              <Link to="/services/dui-dwi" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">DUI / DWI Bailbonds</Link>
              <Link to="/services/felony" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">Felony Charges</Link>
              <Link to="/services/probation-parole" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">Probation/Parole Violations</Link>
              <Link to="/services/theft" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">Theft Charges</Link>
              <Link to="/services/violent-crimes" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">Violent Crimes</Link>
              <Link to="/services/sex-crimes" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">Sex Crimes</Link>
              <Link to="/services/domestic-violence" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">Domestic Violence</Link>
              <Link to="/services/white-collar" className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">White Collar Crimes</Link>
            </div>
          </div>

          <Link to="/faq" className="text-white hover:text-gold-500 transition-colors">FAQ</Link>
          <Link to="/contact" className="text-white hover:text-gold-500 transition-colors">Contact Us</Link>
        </nav>

        {/* Action */}
        <div className="hidden lg:flex flex-col items-center gap-1">
          <a href="https://powerforms.docusign.net/07c12434-d9b7-4673-af54-697d1620ae41?acct=f9d9aa56-250c-4c8f-9a7f-ac54ca827d7f&env=na3&accountId=f9d9aa56-250c-4c8f-9a7f-ac54ca827d7f" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group bg-gold-500 text-black px-6 py-3 font-black text-xs uppercase tracking-tighter transition-all flex items-center">
            <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 flex items-center gap-2">
              Bail Agreement
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
            </span>
            <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
          </a>
          <span className="text-[10px] text-white/60 uppercase tracking-widest">Click to sign</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white hover:text-gold-500 transition-colors" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </div>
      
      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[140] lg:hidden"
            />

            {/* Side Panel */}
            <motion.div
              key="mobile-panel"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-[100dvh] w-full sm:w-[400px] bg-dark-950 border-l border-gold-500/20 z-[150] p-6 sm:p-10 flex flex-col lg:hidden shadow-2xl overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center mb-16">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="leading-none block">
                  <h1 className="text-xl font-black uppercase tracking-tighter text-white">CENTER CITY <span className="text-gold-500">BAILBONDS</span></h1>
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors bg-dark-900/50"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Links */}
              <motion.div 
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col space-y-6"
              >
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Our Services', path: '#', subItems: [
                    { label: 'Drug Charges', path: '/services/drug-charges' },
                    { label: 'DUI / DWI', path: '/services/dui-dwi' },
                    { label: 'Felony Charges', path: '/services/felony' },
                    { label: 'Probation/Parole', path: '/services/probation-parole' },
                    { label: 'Theft Charges', path: '/services/theft' },
                    { label: 'Violent Crimes', path: '/services/violent-crimes' },
                    { label: 'Sex Crimes', path: '/services/sex-crimes' },
                    { label: 'Domestic Violence', path: '/services/domestic-violence' },
                    { label: 'White Collar', path: '/services/white-collar' }
                  ]},

                  { label: 'FAQ', path: '/faq' },
                  { label: 'Contact Us', path: '/contact' }
                ].map((link, idx) => (
                  <motion.div key={idx} variants={linkVars} className="overflow-hidden">
                    {link.subItems ? (
                      <div className="w-full">
                        <button 
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-colors flex items-center gap-2 text-white hover:text-gold-500 w-full text-left"
                        >
                          {link.label}
                          <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col gap-4 mt-6 pl-4 border-l-2 border-gold-500/30 overflow-hidden"
                            >
                              {link.subItems.map((sub, subIdx) => (
                                <Link 
                                  key={subIdx}
                                  to={sub.path} 
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-lg font-bold text-slate-300 hover:text-gold-500 uppercase tracking-widest block"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : link.path.startsWith('/#') ? (
                      <a 
                        href={link.path} 
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-colors inline-block ${
                          idx === 0 ? 'text-gold-500' : 'text-white hover:text-gold-500'
                        }`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.path} 
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-colors inline-block ${
                          idx === 0 ? 'text-gold-500' : 'text-white hover:text-gold-500'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Menu Footer */}
              <div className="mt-8">
                <div className="border-t border-white/10 pt-8">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">24/7 Dispatch Center</p>
                  <a href="tel:2158708197" className="text-3xl font-black text-gold-500 mb-8 block hover:text-white transition-colors">(215) 870-8197</a>
                  
                  <div className="flex flex-col items-center gap-2">
                    <a href="https://powerforms.docusign.net/07c12434-d9b7-4673-af54-697d1620ae41?acct=f9d9aa56-250c-4c8f-9a7f-ac54ca827d7f&env=na3&accountId=f9d9aa56-250c-4c8f-9a7f-ac54ca827d7f" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group bg-transparent border-2 border-gold-500 text-gold-500 px-6 py-5 w-full font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center">
                      <div className="absolute inset-0 w-full h-full bg-gold-500 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></div>
                      <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                        Bail Agreement
                      </span>
                      <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                      <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                    </a>
                    <span className="text-[10px] text-white/60 uppercase tracking-widest">Click to sign</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
