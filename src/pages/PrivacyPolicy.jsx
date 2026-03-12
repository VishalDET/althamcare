import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Data Collection",
      content: "We collect information only necessary to provide high-quality care services. This includes contact details, medical history for residents, and website usage statistics via cookies to improve our digital experience."
    },
    {
      icon: Shield,
      title: "How We Use Your Info",
      content: "Information is used strictly for health assessments, administrative purposes, and legal compliance. We never sell your personal data to third parties."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement industry-standard physical and technological security measures to protect your sensitive information from unauthorized access, loss, or theft."
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: "Under GDPR and UK data protection laws, you have the right to access, correct, or request the deletion of your personal data. Contact us directly to exercise these rights."
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
            <Shield className="text-accent-pale" size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-8xl font-black tracking-tighter uppercase italic leading-none"
          >
            Privacy <span className="text-accent-pale">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto italic font-medium leading-relaxed"
          >
            "Your trust and privacy are the foundation of our care standards."
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

      {/* Policy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none text-dark/70 font-medium leading-relaxed space-y-6">
                <p>
                  At Altham Care Home, we are committed to safeguarding the personal information of our residents, their families, and our website visitors. This Privacy Policy outlines how we collect, use, and protect your data in accordance with the Data Protection Act 2018 and the UK General Data Protection Regulation (UK GDPR).
                </p>
                <div className="p-8 bg-secondary/50 rounded-3xl border border-dark/5 italic">
                  <strong>Last Updated:</strong> March 12, 2026
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8">
              {sections.map((section, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-10 rounded-[3rem] shadow-soft border border-dark/5 hover:shadow-premium transition-all group">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <section.icon size={28} />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black uppercase italic tracking-tight text-dark">{section.title}</h3>
                        <p className="text-dark/60 leading-relaxed font-medium">{section.content}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="bg-primary/5 p-12 rounded-[4rem] text-center space-y-8 border border-primary/10">
                <h2 className="text-3xl font-black text-dark uppercase italic tracking-tighter">Have any questions?</h2>
                <p className="text-dark/60 font-bold italic">Our data protection officer is available for any clarifications regarding your information.</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="mailto:privacy@althamcare.org.uk" className="btn btn-primary px-10 py-4 shadow-premium">
                    Email Officer
                  </a>
                  <button className="btn btn-secondary px-10 py-4">
                    Download Full Policy (PDF)
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
