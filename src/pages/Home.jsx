import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Clock, ArrowRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import heroImg from '../assets/images/hero.png';
import aboutImg from '../assets/images/about.png';

const Home = () => {
  return (
    <div className="overflow-hidden bg-secondary">
      {/* Premium Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Elderly care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/20 shadow-premium">
              <Heart className="text-white" size={60} fill="currentColor" />
            </div>
            <div className="space-y-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1.5 bg-accent mx-auto rounded-full"
              />
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase italic leading-none">
                Altham <span className="text-white/80 block not-italic font-bold text-4xl lg:text-5xl mt-2 tracking-[0.2em]">Care Home</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl font-medium max-w-2xl text-white/90 leading-relaxed italic">
              "Providing compassionate and professional care for the elderly with dignity and respect."
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <Link to="/contact" className="btn btn-primary px-12 py-5 text-sm uppercase tracking-widest font-black shadow-premium">
                Book a Visit <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary px-12 py-5 text-sm uppercase tracking-widest font-black">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-secondary">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V11.8C63.59,43.86,133.56,54.4,204.67,45.11,254.94,38.6,284.05,57.9,321.39,72.46Z"></path>
          </svg>
        </div>
      </section>

      {/* Intro Section with Gradient accent */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute -inset-6 bg-accent/20 rounded-[3rem] -rotate-3" />
              <img src={aboutImg} alt="Residents smiling" className="relative rounded-[2.5rem] shadow-premium z-10 w-full border-8 border-white" />
              <div className="absolute -bottom-10 -right-10 bg-[image:--background-image-primary-gradient] p-10 rounded-3xl shadow-premium z-20 hidden xl:block max-w-sm text-white">
                <Quote className="mb-4 text-white/30" size={40} fill="currentColor" />
                <p className="text-xl font-medium italic leading-relaxed">"The most caring environment I've ever experienced for my parents."</p>
                <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
                  <span className="font-bold tracking-widest uppercase text-xs">Sarah Williams</span>
                  <div className="flex gap-1 text-accent-pale">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-black tracking-[0.2em] uppercase text-xs">Since 2010</span>
                <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-dark leading-none">
                  A Heart for Service, <br /><span className="text-primary italic">A Legacy of Care</span>
                </h2>
              </div>
              <p className="text-xl text-dark/70 leading-relaxed font-medium">
                At Altham Care Home, we believe that every individual deserves to age with dignity, joy, and the highest standard of professional support.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                {[
                  'Personalized Care Plans',
                  '24/7 Professional Support',
                  'Vibrant Community Life',
                  'Beautiful Landscapes'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-dark/80">
                    <CheckCircle2 size={20} className="text-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-secondary px-8 py-4 text-sm uppercase tracking-widest font-black shadow-premium">
                Learn More About Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section with Wavy Top */}
      <section className="relative pt-40 pb-32 bg-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-secondary">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c63.59-32.06,133.56-42.6,204.67-33.31C254.94,90.3,284.05,71,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Our Expertise</span>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter">Comprehensive Care <br /><span className="text-accent italic">Tailored to You</span></h2>
              <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Heart, title: 'Assisted Living', desc: 'Personalized support with daily tasks in a vibrant community setting.' },
              { icon: Shield, title: 'Dementia Care', desc: 'Specialized, secure care for those living with memory loss conditions.' },
              { icon: Clock, title: '24/7 Medical Support', desc: 'Round-the-clock professional medical monitoring and nursing care.' },
              { icon: Users, title: 'Community Activities', desc: 'A rich calendar of social events, hobbies, and group excursions.' },
              { icon: Heart, title: 'Rehabilitation Support', desc: 'Post-surgery or illness recovery programs designed by specialists.' },
              { icon: Shield, title: 'Personal Care', desc: 'Dignified assistance with bathing, dressing, and hygiene.' }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-secondary border border-dark/5 p-10 rounded-[3rem] hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white border border-secondary shadow-soft rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:rotate-12 transition-transform">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight uppercase italic">{service.title}</h3>
                  <p className="text-dark/60 mb-8 leading-relaxed font-medium">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest group/link">
                    Explore Service <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Full Gradient */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-primary bg-[image:--background-image-primary-gradient] rounded-[4rem] p-12 lg:p-24 text-white flex flex-col items-center text-center gap-10 relative overflow-hidden shadow-premium">
            <div className="relative z-10 max-w-3xl space-y-6">
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none italic">
                Give Your Loved Ones The <span className="text-accent-pale">Care They Deserve</span>
              </h2>
              <p className="text-xl lg:text-2xl font-medium text-white/80 leading-relaxed italic">
                "Join our community and experience true peace of mind. We are here to support you 24/7."
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="btn bg-white text-primary px-16 py-6 text-sm uppercase tracking-widest font-black shadow-premium">
                Book a Visit
              </Link>
              <Link to="/contact" className="btn border-2 border-white/30 text-white hover:bg-white hover:text-primary px-16 py-6 text-sm uppercase tracking-widest font-black">
                Contact Us
              </Link>
            </div>
            {/* Background Texture Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -ml-48 -mb-48" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
