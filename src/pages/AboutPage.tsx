import { motion } from 'motion/react';
import { ShieldCheck, Clock, MapPin, Award, CheckCircle2 } from 'lucide-react';
import CallToAction from '../components/CallToAction';

export default function AboutPage() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen bg-dark-950">
      <section className="relative pt-40 pb-12 md:pt-40 md:pb-16 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gregsbailbondscoplights.jpeg')" }}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Helping You When It <span className="text-gold-500">Matters Most</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Need help right now? Call Center City Bailbonds of Philadelphia 24/7 — and get real answers, fast action, and someone who truly cares.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-12 md:py-24 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-slate-300 leading-relaxed"
            >
              <p className="text-lg">
                At <strong className="text-white">Center City Bailbonds of Philadelphia</strong>, we believe everyone deserves a second chance — and fast, judgment-free help when they need it most. Founded over 13 years ago by Center City, a licensed bail bondsman with deep knowledge of the legal system, our mission is simple: to help families, friends, and individuals navigate the bail process with compassion, clarity, and confidence.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden group mt-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-[50px] pointer-events-none" />
                <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-gold-500 w-6 h-6" /> Why Choose Center City?
                </h2>
                <p className="mb-6">
                  Center City isn’t just another agent behind a desk — he’s a one-man operation who puts people first. His background and experience in the legal bonding system mean you’re getting more than bail; you’re getting personal guidance and honest support through one of life’s most stressful moments.
                </p>
                <p className="italic text-slate-400 border-l-2 border-gold-500 pl-4">
                  "Whether you’re calling from a jail in Philly, a courtroom downtown, or need discreet help in a nearby county, Center City works quickly and respectfully — every single time."
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4 flex items-center gap-3">
                  <MapPin className="text-gold-500 w-6 h-6" /> Locally Philadelphia Owned & Operated
                </h2>
                <p>
                  As a locally owned and operated business with a dedicated focus on Philadelphia and surrounding areas, Center City Bailbonds combines local service with mobile flexibility. No matter where you are in Philly or beyond, help is just a phone call away.
                </p>
              </div>
            </motion.div>

            {/* Sidebar / Stats */}
            <div className="h-full relative">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-32 space-y-6"
              >
                <div className="bg-dark-900 border border-gold-500/20 p-8 rounded-sm">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-6">Our Credentials</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <Award className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">Licensed Bailbondsman</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <Clock className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">13+ Years of Experience</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <MapPin className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">Serving Philadelphia & Beyond</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">Accredited Agency</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <ShieldCheck className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">Member of Expert Bail Network</span>
                    </li>
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
