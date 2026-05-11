import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

const faqs = [
  {
    question: "My friend or loved one was just arrested — what do I do?",
    answer: "Once someone is arrested, they must have a bond set before they can be released. In most cases, a magistrate judge will determine the bond amount within 24 hours of the arrest — even on weekends or holidays.\nIf the arrest is based on a warrant, the bond amount may already be pre-set, allowing the person to be released faster without appearing before a judge.\n\nTip: Call Center City Bailbonds immediately — we’ll verify the bond status and start the release process right away."
  },
  {
    question: "What is a bond?",
    answer: "A bond is the financial amount set by the court to allow a defendant to be released from jail while awaiting trial. It serves as a guarantee that the individual will return to court as scheduled.\n\nThere are three common types of bonds:\n\n• Surety Bond – Posted through a bail bondsman like Center City Bailbonds\n• Cash Bond – Paid in full directly to the court or jail\n• Personal Bond (ROR) – The defendant is released on their own recognizance, with court approval"
  },
  {
    question: "What is a surety bond?",
    answer: "A surety bond is posted by a licensed bail bondsman. The defendant (or a co-signer) pays a percentage of the total bond amount — usually 10% — as a non-refundable fee. The bondsman guarantees the full bond amount to the court.\n\nIf the defendant appears at all required court dates, no further action is needed. If they fail to appear, the co-signer may be held financially responsible for the full bond amount and any recovery or court costs."
  },
  {
    question: "What is a cash bond?",
    answer: "A cash bond must be paid in full, upfront, to the court or jail before the defendant is released. If the defendant complies with all court requirements, the full amount (minus any court fees or fines) is typically refunded at the end of the case."
  },
  {
    question: "What is a personal bond or ROR?",
    answer: "A personal bond, also known as “Release on Recognizance” (ROR), is when the court releases the defendant without requiring money upfront. The judge trusts that the person will return for all court appearances. This type of bond is not available for all charges and must be approved by a judge."
  },
  {
    question: "What is a co-signer?",
    answer: "A co-signer (also called an indemnitor) is someone who signs for the defendant and agrees to take full financial responsibility if the defendant fails to meet their court obligations.\n\nThis includes:\n• Paying back the full bond if forfeited\n• Covering any legal or recovery fees\n• Ensuring the defendant appears at court as scheduled\n\nThe co-signer agreement is a civil contract, meaning it has legal weight but no criminal liability."
  },
  {
    question: "Will I get my money back after the case is over?",
    answer: "The fee paid to a bail bondsman is non-refundable — it covers the cost of securing the defendant’s release.\nIf you used collateral (e.g., property, a car title), it will be returned once the case is resolved and all obligations are met."
  },
  {
    question: "How long does it take to get someone out of jail?",
    answer: "In most cases, it takes 2 to 4 hours after the bond is posted for a defendant to be released, depending on how busy the jail is and how quickly they process paperwork."
  },
  {
    question: "When can someone be released from jail?",
    answer: "Jails in most Philadelphia counties operate 24/7. That means a defendant can usually be released anytime, day or night, once bond is posted.\n\nHowever, after-hours releases may require a family member or friend to pick the person up."
  },
  {
    question: "Can you help with a walk-through if there’s a warrant?",
    answer: "Yes. If there’s a warrant out for arrest, Center City can often arrange a walk-through — allowing the defendant to be processed and released without spending unnecessary time in jail.\n\nThis is especially useful for non-violent offenses, probation violations, or pre-set bond warrants."
  },
  {
    question: "What if my loved one’s car was towed during the arrest?",
    answer: "Center City does not handle vehicle impounds, but the jail or local police department will have towing records. We can help you find out where the vehicle was taken and what steps are needed for retrieval."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative z-10 flex flex-col min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gregsbailbondsgavel.jpeg')" }}
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
              You Have Questions.<br />
              <span className="text-gold-500">We Have Answers.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions about the bail process in Philadelphia? You’re not alone. Here are the most common questions we receive — answered simply and clearly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-12 md:py-24 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            
            {/* Main Content: FAQs Accordion */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-4"
            >
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-dark-900 border border-white/5 overflow-hidden rounded-sm group transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg text-white pr-8 group-hover:text-gold-500 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    <div className="text-slate-400 whitespace-pre-wrap leading-relaxed pt-4 border-t border-white/5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Sidebar: Still have questions? */}
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
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Still Have Questions?</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    If you didn't find the answer you were looking for, or if you need immediate assistance with a bond, don't hesitate to reach out. We are available 24/7.
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
