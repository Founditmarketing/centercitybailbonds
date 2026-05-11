import { motion } from 'motion/react';
import { ShieldCheck, Scale, AlertTriangle, FileWarning, Briefcase, EyeOff, ShieldAlert, Gavel, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Drug Charge Bailbonds",
      description: "Arrested for possession, distribution, or intent to deliver? Call Center City Bailbonds of Philly 24/7.",
      icon: <AlertTriangle className="w-8 h-8 mb-4" />,
      link: "/services/drug-charges"
    },
    {
      title: "DUI / DWI Bailbonds",
      description: "Get fast help for a DUI or DWI charge. We’ll secure release and walk you through every step forward.",
      icon: <FileWarning className="w-8 h-8 mb-4" />,
      link: "/services/dui-dwi"
    },
    {
      title: "Felony Charges Bailbonds",
      description: "Felony bonds can be costly — we offer expert help and flexible options to get your loved one out fast.",
      icon: <Scale className="w-8 h-8 mb-4" />,
      link: "/services/felony"
    },
    {
      title: "Probation/Parole Violations",
      description: "Handle warrants, walk-throughs, or court violations before they lead to jail. Call Center City Bailbonds 24/7.",
      icon: <FileCheck className="w-8 h-8 mb-4" />,
      link: "/services/probation-parole"
    },
    {
      title: "Theft Charges Bail bonds",
      description: "From shoplifting to grand theft, we post bail fast and guide your loved one through every next step.",
      icon: <ShieldCheck className="w-8 h-8 mb-4" />,
      link: "/services/theft"
    },
    {
      title: "Violent Crimes Bailbonds",
      description: "Assault, robbery, or violent charges — we post bail fast and guide you through every step of the process.",
      icon: <ShieldAlert className="w-8 h-8 mb-4" />,
      link: "/services/violent-crimes"
    },
    {
      title: "Sex Crimes Bailbonds",
      description: "Sensitive cases need expert, confidential help. We provide respectful, 24/7 bail support when it counts.",
      icon: <EyeOff className="w-8 h-8 mb-4" />,
      link: "/services/sex-crimes"
    },
    {
      title: "Domestic Violence Bailbonds",
      description: "When emotions run high, you need calm, expert help. We post bail fast, discreetly, and without judgment.",
      icon: <Gavel className="w-8 h-8 mb-4" />,
      link: "/services/domestic-violence"
    },
    {
      title: "White Collar Crimes Bailbonds",
      description: "We handle high bonds and complex bail cases for fraud, embezzlement, and other serious charges.",
      icon: <Briefcase className="w-8 h-8 mb-4" />,
      link: "/services/white-collar"
    }
  ];

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Our Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive 24/7 bail bond assistance for all types of charges in Philadelphia.</p>
          <div className="w-20 h-px bg-gold-500/50 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link 
                to={service.link}
                className="relative overflow-hidden flex flex-col p-8 border border-white/5 bg-dark-900 rounded-sm group cursor-pointer h-full w-full block"
              >
                <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                
                <div className="relative z-10 text-gold-500 group-hover:text-black transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-black transition-colors duration-500">{service.title}</h3>
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-black/80 transition-colors duration-500">{service.description}</p>
                
                {/* Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-110"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-110"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
