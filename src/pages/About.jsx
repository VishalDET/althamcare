import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Target, CheckCircle2, Award, Clock, MapPin } from 'lucide-react';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import aboutImg from '../assets/images/about.png';
import galleryImg from '../assets/images/gallery1.png';

const About = () => {
  const values = [
    { icon: Heart, title: 'Respect', desc: 'Valuing each resident’s life story and unique preferences.' },
    { icon: Shield, title: 'Independence', desc: 'Supporting autonomy while providing necessary care.' },
    { icon: CheckCircle2, title: 'Compassion', desc: 'Empathy-driven care that prioritizes emotional wellbeing.' },
    { icon: Users, title: 'Community', desc: 'Fostering connections and a sense of belonging for all.' }
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
            <Award className="text-accent-pale" size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-8xl font-black tracking-tighter uppercase italic leading-none"
          >
            Our <span className="text-accent-pale">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto italic font-medium leading-relaxed"
          >
            "A tradition of excellence in senior care, dedicated to dignity and community."
          </motion.p>
        </div>
        
        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(110%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V11.8C63.59,43.86,133.56,54.4,204.67,45.11,254.94,38.6,284.05,57.9,321.39,72.46Z"></path>
          </svg>
        </div>

        {/* Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -ml-48 -mb-48" />
      </section>

      {/* Our Story Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <ScrollReveal direction="right">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Decades of Trust</span>
                <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-dark leading-none uppercase italic">Growing with <br /><span className="text-accent not-italic">Lancashire</span></h2>
              </div>
              <div className="space-y-6 text-dark/70 text-lg font-medium leading-relaxed">
                <p>
                  Founded over a decade ago in the picturesque county of Lancashire, Altham Care Home began with a simple yet profound vision: to transform the experience of elderly care in England.
                </p>
                <p>
                  What started as a small community initiative has grown into a leading care center, recognized for our innovative approach to assisted living and dementia support.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                <div className="p-8 bg-secondary rounded-[2rem] border-l-8 border-primary">
                  <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-4">Our Mission</h4>
                  <p className="font-bold text-dark/70 italic text-sm">To provide holistic, personalized care that empowers seniors.</p>
                </div>
                <div className="p-8 bg-secondary rounded-[2rem] border-l-8 border-accent">
                  <h4 className="text-sm font-black text-accent uppercase tracking-widest mb-4">Our Vision</h4>
                  <p className="font-bold text-dark/70 italic text-sm">To be the most trusted name in elderly care standards.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-6 bg-primary/10 rounded-[3rem] rotate-3" />
              <img src={aboutImg} alt="Care story" className="relative rounded-[3rem] shadow-premium z-10 w-full border-8 border-white" />
              <div className="absolute -top-10 -right-10 bg-accent p-12 rounded-[2.5rem] text-white hidden xl:block shadow-premium group transition-transform hover:scale-110">
                <span className="text-6xl font-black block mb-2 leading-none">10+</span>
                <span className="uppercase tracking-[0.2em] text-xs font-black text-accent-pale">Years of Heart</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section with Wavy divider */}
      <section className="relative py-32 bg-secondary/40">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c63.59-32.06,133.56-42.6,204.67-33.31C254.94,90.3,284.05,71,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic">Our Core <span className="text-accent not-italic">Philosophy</span></h2>
            <div className="w-24 h-2 bg-accent mx-auto rounded-full" />
            <p className="text-dark/60 text-xl font-bold italic">"We believe that every person is a unique individual with an extraordinary history."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-12 rounded-[3.5rem] shadow-soft hover:shadow-premium transition-all text-center group border border-dark/5">
                  <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all group-hover:rotate-6">
                    <val.icon size={36} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{val.title}</h3>
                  <p className="text-dark/60 font-medium leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Excellence in comfort</span>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter">Beautiful Facilities</h2>
              <p className="text-dark/60 text-xl font-bold italic">Modern, comfortable, and safe spaces designed for living life to the fullest.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollReveal direction="right" className="md:col-span-2">
              <div className="relative group overflow-hidden rounded-[4rem] aspect-[16/9] shadow-premium">
                <img src={galleryImg} alt="Modern living room" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                  <h4 className="text-4xl font-black text-white italic uppercase tracking-tighter">Spacious Communal Areas</h4>
                  <p className="text-white/70 font-medium italic mt-2">Designed for social engagement and comfort.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-secondary p-12 rounded-[4rem] h-full flex flex-col justify-center border border-dark/5 shadow-soft">
                <h4 className="text-3xl font-black mb-10 text-dark uppercase italic tracking-tighter border-b-4 border-accent pb-4 inline-block">What We Offer</h4>
                <ul className="space-y-6">
                  {['Private En-suite Rooms', 'Landscaped Gardens', 'Activity Rooms', 'Medical Stations'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-dark/70 font-bold text-lg">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                        <CheckCircle2 size={18} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
