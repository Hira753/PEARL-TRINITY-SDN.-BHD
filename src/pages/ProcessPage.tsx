import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PROCESS_PHASES } from '../data/companyData';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Search,
  Palette,
  Code,
  Sparkles,
} from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6 text-[#805232]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#805232]" />;
      case 'Code': return <Code className="w-6 h-6 text-[#805232]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#805232]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* UNIQUE HERO SECTION FOR OUR PROCESS */}
      <section className="relative py-16 sm:py-24 bg-radial from-[#326080]/30 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#132536] border border-[#326080]/50 text-xs text-[#B5D2E6] font-semibold">
            <Compass className="w-4 h-4 text-[#805232]" />
            <span>Structured Software Engineering Lifecycle</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-[#FFF1E7] tracking-tight">
            Proven Methodology, <span className="text-gradient-accent">Agile Execution</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B5D2E6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            From initial product discovery to production multi-region deployment, our 4-stage engineering methodology guarantees transparency, code quality, and predictable delivery schedules.
          </p>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PROCESS_PHASES.map((p) => {
            const isActive = activeStep === p.step;
            return (
              <button
                key={p.step}
                onClick={() => setActiveStep(p.step)}
                className={`p-6 rounded-2xl text-left transition-all border relative overflow-hidden ${
                  isActive
                    ? 'bg-[#326080] border-[#B5D2E6] text-[#FFF1E7] shadow-xl shadow-[#326080]/40'
                    : 'bg-[#0a141d] border-[#326080]/30 text-[#B5D2E6]/70 hover:text-[#FFF1E7]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold uppercase opacity-80">Phase 0{p.step}</span>
                  <span className="text-xs font-bold text-[#805232] bg-[#0a141d] px-2 py-0.5 rounded">
                    {p.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-['Outfit']">{p.title}</h3>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#805232]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Showcase */}
        {(() => {
          const phase = PROCESS_PHASES.find((p) => p.step === activeStep) || PROCESS_PHASES[0];
          return (
            <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#805232]/20 border border-[#805232]/40 flex items-center justify-center">
                    {getStepIcon(phase.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#805232] uppercase">
                      Phase 0{phase.step} • {phase.duration}
                    </span>
                    <h2 className="text-3xl font-bold font-['Outfit'] text-[#FFF1E7]">{phase.title}</h2>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#B5D2E6]">{phase.subtitle}</p>
                <p className="text-xs sm:text-sm text-[#B5D2E6]/80 leading-relaxed font-light">
                  {phase.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 pt-2 border-t border-[#326080]/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FFF1E7]">Guaranteed Deliverables:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {phase.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="p-3 rounded-xl bg-[#0a141d]/80 border border-[#326080]/30 flex items-center space-x-2.5 text-xs text-[#B5D2E6]">
                        <CheckCircle2 className="w-4 h-4 text-[#805232] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0a141d] border border-[#326080]/50 space-y-6 text-center">
                <ShieldCheck className="w-12 h-12 text-[#805232] mx-auto" />
                <h3 className="text-lg font-bold font-['Outfit'] text-[#FFF1E7]">
                  Quality Assurance Commitment
                </h3>
                <p className="text-xs text-[#B5D2E6]/80 leading-relaxed">
                  Every deliverable in Phase 0{phase.step} undergoes rigorous peer code review, automated static security analysis (SAST), and executive sign-off before advancing.
                </p>

                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3.5 rounded-xl bg-[#805232] hover:bg-[#96613b] text-[#FFF1E7] font-bold text-xs tracking-wide transition-colors flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Phase 01 Discovery with Us</span>
                </button>
              </div>
            </div>
          );
        })()}
      </section>

      {/* SLA & GOVERNANCE GUARANTEES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/30 space-y-8 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
              Post-Launch SLA & Managed Operations
            </h2>
            <p className="text-xs sm:text-sm text-[#B5D2E6]/80">
              We stay with you long after the initial build. Our 24/7 Managed Operations Center in Cyberjaya guarantees ongoing system health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0a141d] border border-[#326080]/30 space-y-2">
              <p className="text-2xl font-bold font-['Outfit'] text-gradient-primary">&lt; 15 Minutes</p>
              <p className="text-xs text-[#B5D2E6]/80">P1 Critical Incident Response SLA</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a141d] border border-[#326080]/30 space-y-2">
              <p className="text-2xl font-bold font-['Outfit'] text-gradient-accent">100% IP Transfer</p>
              <p className="text-xs text-[#B5D2E6]/80">Complete Source Code & Repository Rights</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a141d] border border-[#326080]/30 space-y-2">
              <p className="text-2xl font-bold font-['Outfit'] text-gradient-primary">24/7/365</p>
              <p className="text-xs text-[#B5D2E6]/80">Active Infrastructure Telemetry Monitoring</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
