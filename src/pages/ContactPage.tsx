import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, SOLUTIONS } from '../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Globe,
  ShieldCheck,
  Linkedin,
  Twitter,
  Github,
  MessageSquare,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState<'MY' | 'SG'>('MY');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'custom-software',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* UNIQUE HERO SECTION FOR CONTACT */}
      <section className="relative py-16 sm:py-24 bg-radial from-[#326080]/30 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#132536] border border-[#326080]/50 text-xs text-[#B5D2E6] font-semibold">
            <Mail className="w-4 h-4 text-[#805232]" />
            <span>Direct Enterprise Engagement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-[#FFF1E7] tracking-tight">
            Let's Build the <span className="text-gradient-accent">Future Together</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B5D2E6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Contact our engineering leadership in Cyberjaya or Singapore to discuss custom software development, AI agent deployment, or cloud modernization.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & COMPANY INFO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/40 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-[#FFF1E7]">
                Send Us a Direct Message
              </h2>
              <p className="text-xs text-[#B5D2E6]/80">
                A Senior Technical Lead will reply within 24 business hours under mutual NDA protection.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-[#FFF1E7] font-['Outfit']">Inquiry Transmitted</h3>
                <p className="text-xs text-[#B5D2E6]/90 max-w-md mx-auto">
                  Thank you, {formData.name || 'Valued Client'}! Your message has been logged with our executive consultation squad.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#326080] text-[#FFF1E7] text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alexander Tan"
                      className="w-full px-4 py-3 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 3 8312 9800"
                      className="w-full px-4 py-3 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Primary Area of Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] focus:outline-none focus:border-[#B5D2E6]"
                    >
                      {SOLUTIONS.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Message & Overview *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current software project, target architecture, or timeline..."
                    className="w-full p-4 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#805232] hover:bg-[#96613b] text-[#FFF1E7] font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Company Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-[#326080]/40 space-y-6">
              <h3 className="text-xl font-bold font-['Outfit'] text-[#FFF1E7]">
                Corporate Headquarters & Offices
              </h3>

              {/* Office Selector Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveOffice('MY')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeOffice === 'MY'
                      ? 'bg-[#326080] text-[#FFF1E7]'
                      : 'bg-[#132536] text-[#B5D2E6]/70'
                  }`}
                >
                  Malaysia HQ
                </button>
                <button
                  onClick={() => setActiveOffice('SG')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeOffice === 'SG'
                      ? 'bg-[#326080] text-[#FFF1E7]'
                      : 'bg-[#132536] text-[#B5D2E6]/70'
                  }`}
                >
                  Singapore Hub
                </button>
              </div>

              {activeOffice === 'MY' ? (
                <div className="space-y-4 text-xs text-[#B5D2E6]">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#805232] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#FFF1E7]">{COMPANY_INFO.name}</p>
                      <p className="text-[#B5D2E6]/80">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#326080] shrink-0" />
                    <span>{COMPANY_INFO.phone}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#B5D2E6] shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#805232] shrink-0" />
                    <span>{COMPANY_INFO.hours}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-xs text-[#B5D2E6]">
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-5 h-5 text-[#805232] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#FFF1E7]">Pearl Trinity (Singapore Node)</p>
                      <p className="text-[#B5D2E6]/80">{COMPANY_INFO.singaporeOffice}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#326080] shrink-0" />
                    <span>+65 6712 9000</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#B5D2E6] shrink-0" />
                    <span>sg-office@pearltrinity.com</span>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-[#326080]/20 space-y-2">
                <p className="text-xs font-bold text-[#FFF1E7]">Connect on Professional Channels:</p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="p-2.5 rounded-xl bg-[#132536] text-[#B5D2E6] hover:text-[#FFF1E7]">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2.5 rounded-xl bg-[#132536] text-[#B5D2E6] hover:text-[#FFF1E7]">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2.5 rounded-xl bg-[#132536] text-[#B5D2E6] hover:text-[#FFF1E7]">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP PLACEHOLDER WITH DARK CYBER THEME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 rounded-3xl overflow-hidden glass-card border border-[#326080]/40 flex items-center justify-center p-6 bg-cyber-grid">
          <div className="absolute inset-0 bg-[#0a141d]/90 backdrop-blur-sm" />
          
          <div className="relative z-10 text-center space-y-4 max-w-lg">
            <div className="w-12 h-12 rounded-full bg-[#805232]/30 border border-[#805232] text-[#FFF1E7] mx-auto flex items-center justify-center animate-bounce">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7]">
              Interactive Global Office Map
            </h3>
            <p className="text-xs text-[#B5D2E6]/80">
              Cyberjaya Menara Trinity HQ (63000 Cyberjaya, Selangor, Malaysia) & Singapore Tech Park (Ayer Rajah)
            </p>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Visitor Access Secured via Security Desk</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
