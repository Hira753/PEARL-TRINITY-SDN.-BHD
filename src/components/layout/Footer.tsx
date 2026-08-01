import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { COMPANY_INFO, SOLUTIONS, INDUSTRIES } from '../../data/companyData';
import {
  Shield,
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
  Globe,
  ArrowUpRight,
  Clock,
  Building2,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060c12] text-[#FFF1E7] border-t border-[#326080]/30 relative overflow-hidden pt-16 pb-12">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#326080]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#805232]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[#326080]/30 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#326080]/30 border border-[#326080]/50 text-xs text-[#B5D2E6] font-semibold">
                <Send className="w-3.5 h-3.5 text-[#805232]" />
                <span>Pearl Trinity Tech Briefing</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-[#FFF1E7]">
                Subscribe to Enterprise AI & Technology Insights
              </h3>
              <p className="text-sm text-[#B5D2E6]/80 max-w-xl">
                Get monthly executive research on private LLMs, cloud architecture, and ASEAN digital transformation directly in your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm font-semibold flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! You have successfully subscribed to Pearl Trinity Tech Briefing.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-[#0a141d] border border-[#326080]/50 text-sm text-[#FFF1E7] placeholder-[#B5D2E6]/40 focus:outline-none focus:border-[#B5D2E6] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#805232] hover:bg-[#96613b] text-[#FFF1E7] font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#326080]/20">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#326080] via-[#132536] to-[#805232] p-0.5 shadow-lg shadow-[#326080]/30">
                <div className="w-full h-full bg-[#0a141d] rounded-[10px] flex items-center justify-center">
                  <span className="font-['Outfit'] font-black text-xl text-gradient-accent">P</span>
                </div>
              </div>
              <div>
                <span className="font-['Outfit'] font-extrabold text-xl tracking-tight text-[#FFF1E7]">
                  PEARL TRINITY
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest ml-2 px-1.5 py-0.5 rounded bg-[#326080]/30 border border-[#326080]/50 text-[#B5D2E6]">
                  SDN BHD
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B5D2E6]/80 leading-relaxed">
              PEARL TRINITY SDN. BHD. is a premier international software engineering and AI technology firm delivering resilient cloud platforms, custom software, and agentic AI systems for global enterprises.
            </p>

            <div className="space-y-2 text-xs text-[#B5D2E6]/70">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#805232] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#326080] shrink-0" />
                <span>SG Hub: {COMPANY_INFO.singaporeOffice}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#B5D2E6] shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-[#132536] border border-[#326080]/30 flex items-center justify-center text-[#B5D2E6] hover:text-[#FFF1E7] hover:border-[#B5D2E6] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-[#132536] border border-[#326080]/30 flex items-center justify-center text-[#B5D2E6] hover:text-[#FFF1E7] hover:border-[#B5D2E6] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-[#132536] border border-[#326080]/30 flex items-center justify-center text-[#B5D2E6] hover:text-[#FFF1E7] hover:border-[#B5D2E6] transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-[#132536] border border-[#326080]/30 flex items-center justify-center text-[#B5D2E6] hover:text-[#FFF1E7] hover:border-[#B5D2E6] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFF1E7] font-['Outfit'] border-b border-[#326080]/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5D2E6]/80">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#FFF1E7] transition-colors flex items-center space-x-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#805232]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#FFF1E7] transition-colors flex items-center space-x-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#805232]" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#FFF1E7] transition-colors flex items-center space-x-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#805232]" />
                  <span>Solutions</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-[#FFF1E7] transition-colors flex items-center space-x-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#805232]" />
                  <span>Industries</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-[#FFF1E7] transition-colors flex items-center space-x-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#805232]" />
                  <span>Our Process</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#FFF1E7] transition-colors flex items-center space-x-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#805232]" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFF1E7] font-['Outfit'] border-b border-[#326080]/30 pb-2">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5D2E6]/80">
              {SOLUTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('solutions')}
                    className="hover:text-[#FFF1E7] transition-colors text-left line-clamp-1"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Compliance Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFF1E7] font-['Outfit'] border-b border-[#326080]/30 pb-2">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5D2E6]/80">
              {INDUSTRIES.slice(0, 5).map((ind) => (
                <li key={ind.id}>
                  <button
                    onClick={() => handleNav('industries')}
                    className="hover:text-[#FFF1E7] transition-colors text-left"
                  >
                    {ind.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#326080]/20">
              <div className="flex items-center space-x-2 text-[11px] text-[#B5D2E6]/70">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>ISO 27001 | SOC 2 Type II | HIPAA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#B5D2E6]/60 gap-4">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.registrationNo}). All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button onClick={onOpenQuoteModal} className="hover:text-[#FFF1E7] transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenQuoteModal} className="hover:text-[#FFF1E7] transition-colors">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={onOpenQuoteModal} className="hover:text-[#FFF1E7] transition-colors">
              Security Governance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
