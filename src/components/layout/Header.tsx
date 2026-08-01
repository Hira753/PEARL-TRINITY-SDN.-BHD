import React, { useState, useEffect } from 'react';
import { PageRoute } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import { Globe, Menu, X, ArrowUpRight, Sparkles, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [region, setRegion] = useState<'MY' | 'SG' | 'GLOBAL'>('MY');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'home', label: 'Home' },
    { route: 'about', label: 'About Us' },
    { route: 'solutions', label: 'Solutions' },
    { route: 'industries', label: 'Industries' },
    { route: 'process', label: 'Our Process' },
    { route: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Corporate Bar */}
      <div className="bg-[#070e15] border-b border-[#326080]/20 text-xs py-2 px-4 sm:px-8 text-[#B5D2E6]/80 hidden md:flex items-center justify-between z-50">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>24/7 Enterprise Support Active</span>
          </span>
          <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#FFF1E7] transition-colors flex items-center space-x-1">
            <Mail className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.email}</span>
          </a>
          <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#FFF1E7] transition-colors flex items-center space-x-1">
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-[#FFF1E7]/70">
            <Globe className="w-3.5 h-3.5 text-[#B5D2E6]" />
            <span className="font-mono">Region:</span>
            {(['MY', 'SG', 'GLOBAL'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-all ${
                  region === r
                    ? 'bg-[#326080] text-[#FFF1E7]'
                    : 'text-[#B5D2E6]/60 hover:text-[#FFF1E7]'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <span className="text-[#326080]">|</span>
          <span className="font-mono text-[#FFF1E7]/50">REG: {COMPANY_INFO.registrationNo}</span>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a141d]/85 backdrop-blur-xl border-b border-[#326080]/30 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-[#0a141d]/50 backdrop-blur-md border-b border-[#326080]/15 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#326080] via-[#132536] to-[#805232] p-0.5 shadow-lg shadow-[#326080]/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0a141d] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <span className="font-['Outfit'] font-black text-xl text-gradient-accent">P</span>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#B5D2E6] rounded-full blur-[2px]" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-['Outfit'] font-extrabold text-lg sm:text-xl tracking-tight text-[#FFF1E7] group-hover:text-[#B5D2E6] transition-colors">
                  PEARL TRINITY
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#326080]/30 border border-[#326080]/50 text-[#B5D2E6]">
                  SDN BHD
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-[#B5D2E6]/70 uppercase font-mono hidden sm:block">
                Software & AI Innovation
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#132536]/40 p-1.5 rounded-full border border-[#326080]/20 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all relative ${
                    isActive
                      ? 'text-[#FFF1E7] bg-gradient-to-r from-[#326080] to-[#1f425b] shadow-md shadow-[#326080]/40'
                      : 'text-[#B5D2E6]/80 hover:text-[#FFF1E7] hover:bg-[#326080]/20'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#805232] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#805232] via-[#a3683f] to-[#805232] text-[#FFF1E7] text-xs font-bold tracking-wide shadow-lg shadow-[#805232]/30 hover:shadow-[#805232]/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 group border border-[#FFF1E7]/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFF1E7] group-hover:rotate-12 transition-transform" />
              <span>Get Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-full bg-[#805232] text-[#FFF1E7] text-xs font-bold flex items-center space-x-1"
            >
              <span>Quote</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-[#132536] border border-[#326080]/30 text-[#FFF1E7] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a141d]/95 backdrop-blur-2xl border-b border-[#326080]/30 px-6 py-6 space-y-3 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#326080] text-[#FFF1E7] border border-[#B5D2E6]/30'
                      : 'text-[#B5D2E6] hover:bg-[#132536]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#805232]" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#326080]/20 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#805232] to-[#326080] text-[#FFF1E7] font-bold text-sm text-center flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Custom Proposal</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
