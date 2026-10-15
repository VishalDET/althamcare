import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Shield, Users, Coffee, ArrowRight, Check, Target, Sparkles, Wifi, Gamepad2, Mic2, Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  useEffect(() => {
    document.title = "Our Care Services | Altham Care Home Accrington";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our elderly care services including Assisted Living, Dementia Care, Respite Care, Rehabilitation, and daily activities/entertainment programs.");
    }
  }, []);

  const services = [
    {
      title: 'Assisted Living',
      icon: Activity,
      desc: 'Our assisted living program provides help with daily activities while encouraging social engagement and independence.',
      features: ['24/7 personal care', 'Laundry & housekeeping', 'Nutritional meal plans']
    },
    {
      title: 'Dementia Care',
      icon: Shield,
      desc: 'A safe, calm, and supportive environment specifically designed for residents living with Alzheimer’s or other forms of dementia.',
      features: ['Memory enhancement programs', 'Safe & secure garden', 'Consistent staffing']
    },
    {
      title: 'Respite Care',
      icon: Heart,
      desc: 'Short-term care options designed to give primary caregivers a much-needed break while ensuring the senior is well cared for.',
      features: ['Custom stay durations', 'Full amenity access', 'Transition support']
    },
    {
      title: 'Rehabilitation',
      icon: Target,
      desc: 'Intensive therapy and support for those recovering from surgery, stroke, or injury to regain mobility and independence.',
      features: ['Physical therapy', 'Occupational therapy', 'Speech therapy']
    },
    {
      title: 'Daily Assistance',
      icon: Coffee,
      desc: 'Providing dignified support with errands, companionship, and routine household management to make life easier.',
      features: ['Errand assistance', 'Companionship', 'Hobby facilitation']
    },
    {
      title: 'Entertainment & Activities',
      icon: Users,
      desc: 'Keeping minds active and spirits high through our robust selection of technology, classic games, professional entertainers, and creative crafts.',
      features: ['Wi-Fi & iPad gaming', 'Live singers & choirs', 'Daily baking & crafts']
    }
  ];

  return (
    <div className="pt-0">
      {/* Premium Gradient Header */}
      <section className="relative bg-primary bg-[image:--background-image-primary-gradient] py-32 lg:py-48 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-premium"
          >
            <Sparkles className="text-accent-pale" size={32} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-8xl font-black tracking-tighter uppercase italic leading-none"
          >
            Our <span className="text-accent-pale">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto italic font-medium leading-relaxed"
          >
            "Comprehensive, person-centered services designed to support physical, emotional, and social health."
          </motion.p>
        </div>

        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(110%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V11.8C63.59,43.86,133.56,54.4,204.67,45.11,254.94,38.6,284.05,57.9,321.39,72.46Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-secondary/50 p-10 rounded-[3.5rem] border border-dark/5 hover:bg-white hover:shadow-premium transition-all h-full flex flex-col">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-primary mb-8 shadow-soft group-hover:bg-primary group-hover:text-white transition-all">
                    <service.icon size={36} />
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tight">{service.title}</h3>
                  <p className="text-dark/60 font-medium leading-relaxed mb-8 flex-grow italic">{service.desc}</p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-dark/70 font-bold">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary w-full py-5 text-sm uppercase font-black tracking-widest">
                    Request Info
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment and Activities Section */}
      <section className="relative py-32 bg-secondary/40">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c63.59-32.06,133.56-42.6,204.67-33.31C254.94,90.3,284.05,71,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 space-y-16">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Life at Altham Care Home</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic">Entertainment & <span className="text-accent not-italic">Activities</span></h2>
              <div className="w-24 h-2 bg-accent mx-auto rounded-full" />
              <p className="text-dark/60 text-xl font-bold italic">
                Keeping active, engaged, and connected is central to our day-to-day philosophy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal direction="right">
              <div className="bg-white p-10 rounded-[3rem] shadow-premium border border-dark/5 space-y-6 h-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                  <Wifi size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight">Embracing New Technology</h3>
                <p className="text-dark/70 font-medium leading-relaxed text-base italic">
                  At Altham Care Home, our team is always looking for fresh and exciting ways to keep our residents entertained and their minds active, and technology plays a big part in that.
                </p>
                <p className="text-dark/70 font-medium leading-relaxed text-base italic">
                  One of the first improvements we made was installing Wi-Fi throughout the home. This has made a real difference, giving residents the freedom to use their own mobile devices whenever they wish. We also provide iPads loaded with games and other apps for entertainment. Best of all, our home-wide Wi-Fi means residents can stay in touch with family and friends whenever and wherever they like.
                </p>
                <p className="text-dark/70 font-medium leading-relaxed text-base italic">
                  More recently, we've fitted our lounges with large TV, so residents can enjoy whatever they fancy watching, from live football matches to their favourite soaps like 'Corrie'.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white p-10 rounded-[3rem] shadow-premium border border-dark/5 space-y-6 h-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-accent">
                  <Gamepad2 size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight">Games</h3>
                <p className="text-dark/70 font-medium leading-relaxed text-base italic">
                  The activities we choose vary from day to day, keeping things fresh and interesting for everyone. Our residents love playing a whole range of games, from Scrabble, dominoes and hangman to Play Your Cards Right. These traditional games are a lovely way for our residents to reminisce about the days before electronic devices came along.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white p-10 rounded-[3rem] shadow-premium border border-dark/5 space-y-6 h-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-dark">
                  <Mic2 size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight">Entertainers</h3>
                <p className="text-dark/70 font-medium leading-relaxed text-base italic">
                  We're lucky to welcome entertainers from all sorts of backgrounds to Altham Care Home to perform for our residents. From wonderful solo singers to local school choirs, there's always a great variety of acts to enjoy, and our residents love the chance to sit back and be entertained.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-white p-10 rounded-[3rem] shadow-premium border border-dark/5 space-y-6 h-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                  <Star size={32} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight">Getting Involved</h3>
                <p className="text-dark/70 font-medium leading-relaxed text-base italic">
                  Our residents love getting stuck into all kinds of activities. Our cook enjoys involving them in a spot of baking, with a delicious final product to enjoy at the end. Craft activities are another firm favourite. Residents also love a bit of pampering, from manicures and beauty sessions to visits from our hairdresser, who's always happy to encourage them to try out a new style.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-primary bg-[image:--background-image-primary-gradient] rounded-[4rem] p-16 lg:p-24 text-center text-white relative overflow-hidden shadow-premium">
            <ScrollReveal>
              <div className="relative z-10 space-y-10">
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic">Need More <span className="text-accent-pale not-italic">Information?</span></h2>
                <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto italic font-medium">Download our comprehensive brochure to learn more about our specific care packages.</p>
                <button className="btn bg-white text-primary hover:bg-accent hover:text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] shadow-premium mx-auto">
                  Download Brochure
                </button>
              </div>
            </ScrollReveal>
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-48 -mb-48" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
