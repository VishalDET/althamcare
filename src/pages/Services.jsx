import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Shield, Users, Coffee, Thermometer, ArrowRight, Check, Target, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
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
      title: 'Medical Monitoring',
      icon: Thermometer,
      desc: 'Advanced medical oversight by on-site nursing staff, coordinating with external medical professionals and families.',
      features: ['Medication management', 'Vital signs tracking', 'Doctor coordination']
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

      {/* Community Impact Section */}
      <section className="relative py-32 bg-secondary/40">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c63.59-32.06,133.56-42.6,204.67-33.31C254.94,90.3,284.05,71,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <ScrollReveal direction="right">
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Empowering People</span>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic">Charity & <span className="text-accent not-italic">Community</span></h2>
              </div>
              <p className="text-xl text-dark/70 font-bold italic leading-relaxed">
                As a non-profit driven organization, Altham Care Home relies on the generous contributions of our community. Your support directly funds our resident activity programs and facility upgrades.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="btn bg-accent text-white px-12 py-5 shadow-premium">Donate Now</button>
                <button className="btn bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white px-12 py-5 rounded-full font-black uppercase tracking-widest transition-all">Volunteer</button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { count: '500+', label: 'Residents Supported', icon: Heart, color: 'primary' },
                { count: '50+', label: 'Care Professionals', icon: Users, color: 'accent' },
                { count: '10+', label: 'Years of Excellence', icon: Activity, color: 'dark' },
                { count: '100%', label: 'Dedicated Support', icon: Shield, color: 'primary' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] shadow-premium border border-dark/5 space-y-4 transform hover:-translate-y-2 transition-all">
                  <div className={`w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-${stat.color}`}>
                    <stat.icon size={32} />
                  </div>
                  <div>
                    <h4 className={`text-4xl font-black text-${stat.color} tracking-tighter`}>{stat.count}</h4>
                    <p className="text-dark/40 font-black uppercase tracking-widest text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
