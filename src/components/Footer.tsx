import { Phone, MapPin, Mail, ChevronRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Footer() {
  const services = [
    { name: "Drug Charge Bailbonds", path: "/services/drug-charges" },
    { name: "DUI / DWI Bailbonds", path: "/services/dui-dwi" },
    { name: "Felony Charges Bailbonds", path: "/services/felony" },
    { name: "Probation/Parole Violations", path: "/services/probation-parole" },
    { name: "Theft Charges Bailbonds", path: "/services/theft" },
    { name: "Violent Crimes Bailbonds", path: "/services/violent-crimes" },
    { name: "Sex Crimes Bailbonds", path: "/services/sex-crimes" },
    { name: "Domestic Violence Bailbonds", path: "/services/domestic-violence" }
  ];

  const locations = [
    "Philadelphia (HQ)",
    "Chambersburg",
    "Harrisburg",
    "The Poconos",
    "Pennsylvania",
    "Maryland",
    "West Virginia"
  ];

  return (
    <footer className="bg-dark-900 border-t border-gold-500/20 pt-20 pb-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
              <div className="leading-none">
                <h1 className="text-2xl font-black uppercase tracking-tighter text-white">CENTER CITY <span className="text-gold-500">BAILBONDS</span></h1>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">of Philadelphia</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Locally Philadelphia Owned & Operated. Trusted 24/7 bail help in Philadelphia. With over 13 years of experience, we provide fast, confidential support when you need it most.
            </p>
          </div>

          {/* Column 2: Our Services */}
          <div className="flex flex-col">
            <h4 className="text-white font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link to={service.path} className="text-slate-400 text-sm hover:text-gold-500 transition-colors duration-300 flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Column 4: 24/7 Contact */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <h4 className="text-white font-black uppercase tracking-widest">Open Now</h4>
            </div>
            <div className="bg-dark-950 border border-gold-500/20 p-6 relative group overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center rounded-full mb-4 group-hover:bg-black/10 transition-colors duration-500">
                  <Phone className="w-5 h-5 text-gold-500 group-hover:text-black transition-colors duration-500" />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-black/70 transition-colors duration-500">Emergency Bail Line</p>
                <a href="tel:215-870-8197" className="text-white text-xl font-black group-hover:text-black transition-colors duration-500">
                  (215) 870-8197
                </a>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 text-white text-base font-bold">
                <MapPin className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                <p>1238 South Street<br/>Philadelphia, PA 19147</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
          <p>&copy; {new Date().getFullYear()} Center City Bailbonds. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Forms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
