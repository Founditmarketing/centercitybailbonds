import { motion } from 'motion/react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { HelpCircle, ChevronRight, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { servicesData } from '../data/servicesData';
import React from 'react';

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !servicesData[id as keyof typeof servicesData]) {
    return <Navigate to="/" replace />;
  }

  const service = servicesData[id as keyof typeof servicesData];

  // Helper function to format paragraphs that contain lists
  const renderParagraph = (text: string, idx: number) => {
    if (text.includes('\n• ')) {
      const parts = text.split('\n• ');
      const intro = parts[0];
      const listItems = parts.slice(1);
      
      // Parse out bold headers if they exist
      let header = '';
      let introText = intro;
      if (intro.startsWith('**') && intro.includes('**\n')) {
        const splitIntro = intro.split('**\n');
        header = splitIntro[0].replace(/\*\*/g, '');
        introText = splitIntro[1] || '';
      } else if (intro.startsWith('**') && intro.endsWith('**')) {
        header = intro.replace(/\*\*/g, '');
        introText = '';
      }

      return (
        <div key={idx} className="mb-8">
          {header && <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">{header}</h2>}
          {introText && <p className="text-slate-300 leading-relaxed mb-4">{introText}</p>}
          <ul className="space-y-3">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // Handle just bold headers
    if (text.startsWith('**') && text.endsWith('**')) {
      return (
        <h2 key={idx} className="text-2xl font-black uppercase tracking-tighter text-white mb-4 mt-8">
          {text.replace(/\*\*/g, '')}
        </h2>
      );
    }

    return (
      <p key={idx} className="text-slate-300 leading-relaxed mb-6 text-lg">
        {text}
      </p>
    );
  };

  return (
    <main className="relative z-10 flex flex-col min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gregsbailbondshandcuffs.jpeg')" }}
          />
          <div className="absolute inset-0 bg-dark-950/80 z-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-30 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl flex flex-col items-center"
          >
            <div className="mb-6 px-3 py-1 border border-gold-500/40 w-max text-[10px] uppercase tracking-[0.3em] font-bold text-gold-500 flex items-center gap-2">
              <ShieldCheck className="w-3 h-3" /> Bail Bond Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4">
              {service.title.split(' Bailbonds')[0]} <span className="text-gold-500">Bailbonds</span>
            </h1>
            <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase text-slate-400 mb-6">
              {service.subtitle}
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {service.heroText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-12 md:py-24 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-dark-900 border border-white/5 p-8 md:p-12 rounded-sm shadow-xl shadow-black/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
                {service.paragraphs.map((p, idx) => renderParagraph(p, idx))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="h-full relative">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-32 space-y-6"
              >
                <div className="bg-dark-900 border border-gold-500/20 p-8 rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[40px] pointer-events-none" />
                  
                  <HelpCircle className="w-10 h-10 text-gold-500 mb-6" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Need Help Now?</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Don't let your loved one sit in jail any longer than necessary. We are available 24/7 to start the release process immediately.
                  </p>
                  
                  <div className="space-y-4">
                    <a href="tel:2158708197" className="flex items-center gap-4 group p-4 border border-white/10 hover:border-gold-500/50 transition-colors rounded-sm bg-dark-950">
                      <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors text-gold-500 group-hover:text-black">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">Call 24/7</p>
                        <p className="font-bold text-white group-hover:text-gold-500 transition-colors">(215) 870-8197</p>
                      </div>
                    </a>


                  </div>
                </div>

                <div className="bg-dark-900 border border-white/5 p-8 rounded-sm">
                  <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    {Object.entries(servicesData).map(([key, data]) => (
                      key !== id && (
                        <li key={key}>
                          <Link 
                            to={`/services/${key}`} 
                            className="flex items-center justify-between group text-sm"
                          >
                            <span className="text-slate-400 group-hover:text-gold-500 transition-colors">
                              {data.title.split(' Bailbonds')[0]}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-gold-500 transition-colors" />
                          </Link>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </main>
  );
}
