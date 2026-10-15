import React, { useState, useEffect } from 'react';
import { ShieldAlert, Check, X, Settings } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('altham_cookie_consent');
    if (!consent) {
      // Show banner after a brief delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentDetails = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('altham_cookie_consent', JSON.stringify(consentDetails));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consentDetails = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('altham_cookie_consent', JSON.stringify(consentDetails));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const consentDetails = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('altham_cookie_consent', JSON.stringify(consentDetails));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-bounce-in">
      <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] border border-dark/5 shadow-premium p-8 text-dark space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h4 className="text-lg font-black uppercase italic tracking-tight">Cookie Consent</h4>
            <p className="text-xs text-dark/40 font-bold uppercase tracking-widest">UK GDPR & PECR Compliant</p>
          </div>
        </div>

        {!showSettings ? (
          <>
            <p className="text-sm text-dark/70 font-medium leading-relaxed italic">
              We use cookies to optimize our website, personalize content, and analyze our traffic. Please choose your preferences below. Learn more in our <a href="/privacy-policy" className="text-primary font-bold hover:underline">Privacy Policy</a>.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <button 
                onClick={handleAcceptAll}
                className="btn bg-gradient-to-br from-primary to-primary-light text-white font-black text-xs uppercase tracking-widest py-4 w-full justify-center shadow-premium"
              >
                Accept All <Check size={16} />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleRejectAll}
                  className="btn bg-secondary border border-dark/10 text-dark hover:bg-dark hover:text-white font-black text-xs uppercase tracking-widest py-4 justify-center"
                >
                  Reject All
                </button>
                <button 
                  onClick={() => setShowSettings(true)}
                  className="btn bg-secondary border border-dark/10 text-dark hover:bg-dark hover:text-white font-black text-xs uppercase tracking-widest py-4 justify-center"
                >
                  Preferences <Settings size={14} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4 p-4 bg-secondary rounded-2xl">
                <div className="space-y-1">
                  <h5 className="font-bold text-sm">Essential Cookies</h5>
                  <p className="text-xs text-dark/60 italic leading-relaxed">Necessary for the site to function securely. Cannot be disabled.</p>
                </div>
                <div className="w-12 h-6 bg-accent rounded-full flex items-center justify-end px-1 select-none cursor-not-allowed">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-4 bg-secondary rounded-2xl">
                <div className="space-y-1">
                  <h5 className="font-bold text-sm">Analytics Cookies</h5>
                  <p className="text-xs text-dark/60 italic leading-relaxed">Help us understand visitor usage and improve performance.</p>
                </div>
                <button 
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 ${preferences.analytics ? 'bg-accent justify-end' : 'bg-dark/10 justify-start'}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-soft" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-4 bg-secondary rounded-2xl">
                <div className="space-y-1">
                  <h5 className="font-bold text-sm">Marketing Cookies</h5>
                  <p className="text-xs text-dark/60 italic leading-relaxed">Used to deliver relevant advertisements and measure campaign effectiveness.</p>
                </div>
                <button 
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 ${preferences.marketing ? 'bg-accent justify-end' : 'bg-dark/10 justify-start'}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-soft" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button 
                onClick={() => setShowSettings(false)}
                className="btn bg-secondary border border-dark/10 text-dark font-black text-xs uppercase tracking-widest py-4 w-1/3 justify-center"
              >
                Back
              </button>
              <button 
                onClick={handleSavePreferences}
                className="btn bg-gradient-to-br from-primary to-primary-light text-white font-black text-xs uppercase tracking-widest py-4 w-2/3 justify-center shadow-premium"
              >
                Save Choice <Check size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
