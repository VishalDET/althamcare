import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Headset } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
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
            <Headset className="text-accent-pale" size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-8xl font-black tracking-tighter uppercase italic leading-none"
          >
            Get In <span className="text-accent-pale">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto italic font-medium leading-relaxed"
          >
            "We are always here to help. Reach out to us for any inquiries or to schedule a professional visit."
          </motion.p>
        </div>
        
        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(110%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V11.8C63.59,43.86,133.56,54.4,204.67,45.11,254.94,38.6,284.05,57.9,321.39,72.46Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Form */}
          <ScrollReveal direction="right">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Send a message</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic">Write to <span className="text-accent not-italic">Us</span></h2>
                <p className="text-dark/60 font-medium italic">Our team will get back to you within 24 hours.</p>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-dark/40 ml-4">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-8 py-5 rounded-[2rem] bg-secondary border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all placeholder:text-dark/20 font-bold shadow-soft" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-dark/40 ml-4">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 rounded-[2rem] bg-secondary border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all placeholder:text-dark/20 font-bold shadow-soft" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-dark/40 ml-4">Phone Number</label>
                  <input type="tel" placeholder="+44 123 456 789" className="w-full px-8 py-5 rounded-[2rem] bg-secondary border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all placeholder:text-dark/20 font-bold shadow-soft" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-dark/40 ml-4">Your Message</label>
                  <textarea rows="6" placeholder="How can we help you?" className="w-full px-8 py-5 rounded-[2rem] bg-secondary border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all placeholder:text-dark/20 font-bold shadow-soft resize-none"></textarea>
                </div>
                <button className="btn btn-primary w-full py-6 text-sm font-black uppercase tracking-widest shadow-premium">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-primary bg-[image:--background-image-primary-gradient] p-12 lg:p-20 rounded-[4rem] text-white space-y-16 shadow-premium relative overflow-hidden h-full">
              <div className="relative z-10 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-none">Our Contact <span className="text-accent-pale block not-italic">Infomation</span></h2>
                <div className="w-20 h-1.5 bg-accent mx-0 rounded-full" />
              </div>

              <div className="relative z-10 space-y-12">
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white group-hover:text-primary transition-all">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-accent-pale mb-2">Office Address</h4>
                    <p className="text-xl font-bold leading-relaxed italic">Althamcare Lane, Burnley Road, Lancashire, England, BB12 7RT</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group text-white">
                   <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white group-hover:text-primary transition-all">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-accent-pale mb-2">Phone Number</h4>
                    <p className="text-xl font-bold leading-relaxed italic">+44 1234 567 890</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white group-hover:text-primary transition-all">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-accent-pale mb-2">Email Support</h4>
                    <p className="text-xl font-bold leading-relaxed italic uppercase">hello@althamcare.org.uk</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 pt-12 border-t border-white/10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 text-accent-pale border border-white/20">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-accent-pale mb-2">Visiting Hours</h4>
                    <p className="text-xl font-bold italic leading-relaxed">Mon - Fri: 09:00 AM - 08:00 PM<br />Sat - Sun: 10:00 AM - 04:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Background Texture */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-48 -mb-48" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 grayscale contrast-125 opacity-30 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Lancashire,England&zoom=13&size=1200x600&sensor=false')]" />
        <div className="relative z-10 flex items-center justify-center h-full max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-premium text-center space-y-8 border border-dark/5">
              <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center text-primary mx-auto">
                <MapPin size={48} />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter italic">Find Us in <span className="text-accent not-italic">Lancashire</span></h3>
                <p className="text-dark/60 text-xl font-bold italic">Schedule a personal tour today.</p>
              </div>
              <button className="btn btn-primary px-16 py-6 text-sm uppercase font-black tracking-widest">
                Open in Google Maps
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
