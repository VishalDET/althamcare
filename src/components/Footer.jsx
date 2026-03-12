import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../assets/images/altham.png';

const Footer = () => {
  return (
    <footer className="relative bg-[#2D1B20] text-white pt-32 pb-6 overflow-hidden">
      {/* Wavy Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Altham Care Home"
              className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <p className="text-white/70 leading-relaxed text-lg font-normal">
            Providing compassionate and professional care for the elderly in England with dignity, respect, and a sense of community.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all backdrop-blur-md">
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-accent-pale mb-10">Quick Links</h4>
          <ul className="space-y-5">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white/60 hover:text-white transition-all hover:translate-x-2 inline-block font-normal"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-accent-pale mb-10">Our Services</h4>
          <ul className="space-y-5 text-white/60 font-normal">
            <li className="hover:text-white transition-colors cursor-pointer capitalize">Assisted Living</li>
            <li className="hover:text-white transition-colors cursor-pointer capitalize">Dementia Care</li>
            <li className="hover:text-white transition-colors cursor-pointer capitalize">24/7 Medical Support</li>
            <li className="hover:text-white transition-colors cursor-pointer capitalize">Rehabilitation</li>
            <li className="hover:text-white transition-colors cursor-pointer capitalize">Personal Care</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-accent-pale mb-10">Contact Details</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="text-accent-pale" size={20} />
              </div>
              <span className="text-white/70 group-hover:text-white transition-colors font-normal">
                Althamcare Lane, Burnley Road, BB12 7RT
              </span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="text-accent-pale" size={20} />
              </div>
              <span className="text-white/70 group-hover:text-white transition-colors font-normal">
                +44 1234 567 890
              </span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="text-accent-pale" size={20} />
              </div>
              <span className="text-white/70 group-hover:text-white transition-colors font-normal">
                hello@althamcare.org.uk
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-normal text-white/40">
        <p>© {new Date().getFullYear()} Altham Care Home. All rights reserved.</p>
        <div className="flex gap-10">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <a href="https://www.digitaledgetech.in/" target='blank' className="hover:text-white transition-colors">Developed by - Digital Edge Technologies</a>
        </div>
      </div>

      {/* Background Decorative Blob */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
