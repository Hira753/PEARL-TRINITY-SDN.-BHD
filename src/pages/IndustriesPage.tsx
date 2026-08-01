import React, { useState } from 'react';
import { PageRoute, IndustryItem } from '../types';
import { INDUSTRIES } from '../data/companyData';
import {
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Activity,
  Cpu,
  ShoppingBag,
  Factory,
  Briefcase,
  Rocket,
  X,
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#805232]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#805232]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#805232]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-[#805232]" />;
      case 'Factory': return <Factory className="w-6 h-6 text-[#805232]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#805232]" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-[#805232]" />;
      default: return <Building2 className="w-6 h-6 text-[#805232]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* UNIQUE HERO SECTION FOR INDUSTRIES */}
      <section className="relative py-16 sm:py-24 bg-radial from-[#326080]/30 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#132536] border border-[#326080]/50 text-xs text-[#B5D2E6] font-semibold">
            <Globe2 className="w-4 h-4 text-[#805232]" />
            <span>Vertical Domain Expertise</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-[#FFF1E7] tracking-tight">
            Tailored Technology Solutions <span className="text-gradient-accent">Across Global Sectors</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B5D2E6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Every industry faces unique regulatory mandates, legacy dependencies, and security constraints. We build specialized software architectures designed around your sector's exact operational realities.
          </p>
        </div>
      </section>

      {/* INTERACTIVE INDUSTRY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="p-8 rounded-3xl glass-card border border-[#326080]/30 hover:border-[#B5D2E6]/40 transition-all space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#805232]/20 border border-[#805232]/40 flex items-center justify-center">
                    {getIndustryIcon(ind.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B5D2E6] px-2.5 py-1 rounded-full bg-[#326080]/30 border border-[#326080]/50">
                    Sector Leader
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7] group-hover:text-[#B5D2E6] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#805232]">{ind.tagline}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#B5D2E6]/80 leading-relaxed font-light">
                  {ind.description}
                </p>

                {/* Key Benefits Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#326080]/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B5D2E6]">Domain Capabilities:</p>
                  <ul className="space-y-1.5 text-xs text-[#B5D2E6]/90">
                    {ind.keyBenefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#805232] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metric Banner */}
                <div className="p-4 rounded-2xl bg-[#0a141d]/80 border border-[#326080]/40 space-y-1">
                  <p className="text-[10px] text-[#B5D2E6]/60 font-mono uppercase">Validated Benchmark</p>
                  <p className="text-sm font-bold text-[#FFF1E7]">{ind.caseStudyTitle}</p>
                  <p className="text-xs font-extrabold font-['Outfit'] text-gradient-accent">{ind.caseStudyStat}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#326080]/20 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {ind.compliance.map((c, cIdx) => (
                    <span key={cIdx} className="px-2 py-0.5 rounded bg-[#132536] text-[10px] font-mono text-[#B5D2E6]">
                      {c}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedIndustry(ind)}
                  className="px-4 py-2 rounded-xl bg-[#326080]/30 hover:bg-[#326080] text-[#FFF1E7] text-xs font-bold shrink-0 transition-colors flex items-center space-x-1"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY MODAL */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#0a141d] border border-[#326080]/50 rounded-3xl p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#132536] text-[#B5D2E6] hover:text-[#FFF1E7]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#805232] uppercase">Case Study Spotlight</span>
              <h2 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7]">{selectedIndustry.name}</h2>
              <p className="text-xs text-[#B5D2E6]/80">{selectedIndustry.tagline}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#132536] border border-[#326080]/30 space-y-2">
              <p className="text-xs font-bold text-[#B5D2E6] uppercase font-mono">Case Study Focus:</p>
              <p className="text-base font-bold text-[#FFF1E7]">{selectedIndustry.caseStudyTitle}</p>
              <p className="text-xl font-extrabold text-gradient-accent">{selectedIndustry.caseStudyStat}</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-[#B5D2E6]">Key Sector Deliverables:</p>
              <ul className="space-y-2 text-xs text-[#B5D2E6]/90">
                {selectedIndustry.keyBenefits.map((kb, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{kb}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => {
                  setSelectedIndustry(null);
                  onOpenQuoteModal();
                }}
                className="px-6 py-3 rounded-xl bg-[#805232] text-[#FFF1E7] text-xs font-bold"
              >
                Request Proposal for {selectedIndustry.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
