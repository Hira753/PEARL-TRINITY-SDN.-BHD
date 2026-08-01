import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SOLUTIONS } from '../data/companyData';
import { TechIllustration } from '../components/common/TechIllustration';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Code2,
  Calculator,
  Sliders,
  DollarSign,
  Clock,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  // Interactive ROI & Project Estimator State
  const [projectType, setProjectType] = useState<'software' | 'app' | 'ai' | 'cloud'>('ai');
  const [complexity, setComplexity] = useState<'standard' | 'enterprise' | 'flagship'>('enterprise');
  const [teamSize, setTeamSize] = useState<number>(5);

  // Estimator Calculations
  const calculateEstimate = () => {
    let base = 35000;
    if (projectType === 'app') base = 40000;
    if (projectType === 'ai') base = 55000;
    if (projectType === 'cloud') base = 45000;

    const multiplier = complexity === 'flagship' ? 2.2 : complexity === 'enterprise' ? 1.5 : 1.0;
    const estCost = Math.round((base * multiplier * (1 + teamSize * 0.12)) / 1000) * 1000;
    const estWeeks = Math.round(6 + (teamSize * 1.5) + (complexity === 'flagship' ? 6 : 2));
    const estRoi = Math.round(180 + (complexity === 'flagship' ? 220 : 120));

    return { estCost, estWeeks, estRoi };
  };

  const { estCost, estWeeks, estRoi } = calculateEstimate();

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* UNIQUE HERO SECTION FOR SOLUTIONS */}
      <section className="relative py-16 sm:py-24 bg-radial from-[#326080]/30 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#132536] border border-[#326080]/50 text-xs text-[#B5D2E6] font-semibold">
            <Sparkles className="w-4 h-4 text-[#805232]" />
            <span>Architectural Services Matrix</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-[#FFF1E7] tracking-tight">
            Enterprise-Grade <span className="text-gradient-accent">Digital & AI Solutions</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B5D2E6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            From zero-trust cloud microservices to custom Gemini-powered agentic workflows, PEARL TRINITY SDN. BHD. delivers end-to-end technical engineering.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SOLUTIONS.map((s) => (
            <div
              key={s.id}
              className="p-8 rounded-3xl glass-card border border-[#326080]/30 hover:border-[#B5D2E6]/40 transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#326080]/30 text-xs font-bold text-[#B5D2E6] border border-[#326080]/50 uppercase tracking-wider">
                    {s.badge}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#805232]/20 border border-[#805232]/40 flex items-center justify-center text-[#FFF1E7]">
                    <Code2 className="w-6 h-6 text-[#805232]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7]">{s.title}</h2>
                  <p className="text-xs font-semibold text-[#805232]">{s.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#B5D2E6]/90 leading-relaxed font-light">
                  {s.description}
                </p>

                {/* Custom Vector Graphic */}
                <TechIllustration type={s.illustrationType} />

                {/* Features Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#326080]/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B5D2E6]">Key Capabilities:</p>
                  <ul className="space-y-2 text-xs text-[#B5D2E6]/90">
                    {s.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#805232] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivered Metrics Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {s.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-[#0a141d]/80 border border-[#326080]/30">
                      <p className="text-[10px] text-[#B5D2E6]/70 font-mono uppercase">{m.label}</p>
                      <p className="text-lg font-bold font-['Outfit'] text-gradient-primary">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#326080]/20 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {s.techStack.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-[#132536] text-[11px] font-mono text-[#B5D2E6]">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  className="px-5 py-2.5 rounded-xl bg-[#805232] hover:bg-[#96613b] text-[#FFF1E7] text-xs font-bold shrink-0 transition-colors flex items-center space-x-1"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE ROI & PROJECT COST ESTIMATOR CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/40 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#805232]/20 border border-[#805232]/40 text-xs text-[#FFF1E7] font-semibold">
              <Calculator className="w-3.5 h-3.5 text-[#805232]" />
              <span>Interactive Decision Tool</span>
            </div>
            <h2 className="text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
              Interactive Project Scope & ROI Estimator
            </h2>
            <p className="text-sm text-[#B5D2E6]/80">
              Adjust project parameters below to view instant estimated budget brackets, team sizing, and target deployment timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#B5D2E6]">1. Primary Solution Focus</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'ai', label: 'AI & Generative' },
                    { id: 'software', label: 'Custom Software' },
                    { id: 'app', label: 'Web & Mobile' },
                    { id: 'cloud', label: 'Cloud Systems' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id as any)}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                        projectType === item.id
                          ? 'bg-[#326080] border-[#B5D2E6] text-[#FFF1E7]'
                          : 'bg-[#132536] border-[#326080]/30 text-[#B5D2E6]/70 hover:text-[#FFF1E7]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Architecture Complexity */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#B5D2E6]">2. Governance & Complexity Tier</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'standard', label: 'Standard Enterprise' },
                    { id: 'enterprise', label: 'High Security (SOC2)' },
                    { id: 'flagship', label: 'Multi-Region Sovereign' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setComplexity(item.id as any)}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                        complexity === item.id
                          ? 'bg-[#805232] border-[#FFF1E7]/40 text-[#FFF1E7]'
                          : 'bg-[#132536] border-[#326080]/30 text-[#B5D2E6]/70 hover:text-[#FFF1E7]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Size Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-[#B5D2E6]">
                  <span>3. Allocated Engineering Squad Size</span>
                  <span className="text-[#FFF1E7] font-mono">{teamSize} Dedicated Engineers</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={15}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-[#326080] bg-[#132536] h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Live Calculation Card */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0a141d] border border-[#326080]/50 space-y-6 text-center">
              <span className="text-xs font-mono uppercase text-[#805232] font-bold">Estimated Engagement Metrics</span>

              <div className="space-y-1">
                <p className="text-xs text-[#B5D2E6]/70 uppercase font-mono">Estimated Investment Bracket</p>
                <p className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-gradient-accent">
                  ${estCost.toLocaleString()} USD
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#326080]/30">
                <div className="space-y-1">
                  <p className="text-[10px] text-[#B5D2E6]/70 uppercase font-mono">Target Delivery</p>
                  <p className="text-lg font-bold font-['Outfit'] text-[#FFF1E7]">{estWeeks} Weeks</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-[#B5D2E6]/70 uppercase font-mono">Projected 3-Yr ROI</p>
                  <p className="text-lg font-bold font-['Outfit'] text-emerald-400">+{estRoi}%</p>
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#805232] to-[#326080] text-[#FFF1E7] font-bold text-xs tracking-wide shadow-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <span>Request Custom Blueprint for this Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
