import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/companyData';
import {
  Building2,
  Target,
  Eye,
  Award,
  Users,
  CheckCircle2,
  Linkedin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Compass,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const [selectedTeamMember, setSelectedTeamMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

  const timelineMilestones = [
    { year: '2018', title: 'Incorporation in Cyberjaya', desc: 'PEARL TRINITY SDN. BHD. incorporated as a specialized software research lab in Cyberjaya, Malaysia.' },
    { year: '2020', title: 'Fintech Core Expansion', desc: 'Engineered sub-second payment gateway & core banking microservices for regional financial institutions.' },
    { year: '2022', title: 'Singapore Innovation Node', desc: 'Established Singapore regional hub to oversee ASEAN enterprise cloud deployments & ISO compliance audits.' },
    { year: '2024', title: 'Generative AI & Agentic Lab', desc: 'Launched direct Gemini 1.5 LLM fine-tuning & private retrieval-augmented generation (RAG) frameworks.' },
    { year: '2026+', title: 'Global Multi-Region Scaling', desc: 'Serving over 150+ enterprise clients across 14 countries with bank-grade 99.99% SLA uptime.' },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* UNIQUE HERO SECTION FOR ABOUT US */}
      <section className="relative py-16 sm:py-24 bg-radial from-[#326080]/30 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#132536] border border-[#326080]/50 text-xs text-[#B5D2E6] font-semibold">
            <Building2 className="w-4 h-4 text-[#805232]" />
            <span>Corporate Governance & Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-[#FFF1E7] tracking-tight">
            Pioneering Intelligent <span className="text-gradient-accent">Enterprise Solutions</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B5D2E6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            PEARL TRINITY SDN. BHD. delivers resilient software engineering, cloud architecture, and artificial intelligence frameworks for global enterprises, financial institutions, and government entities.
          </p>
        </div>
      </section>

      {/* COMPANY STORY & HERITAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#805232] font-mono">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
              Rooted in Engineering Precision & Sovereign Technology
            </h2>
            <p className="text-sm text-[#B5D2E6]/80 leading-relaxed font-light">
              Founded with the belief that technology should serve as a force multiplier for business growth, PEARL TRINITY SDN. BHD. has grown from a specialized software R&D unit into an international technology power.
            </p>
            <p className="text-sm text-[#B5D2E6]/80 leading-relaxed font-light">
              Headquartered in Cyberjaya's Menara Trinity with research nodes in Singapore, we adhere to strict international software engineering standards, continuous security audits, and human-centric design philosophies.
            </p>

            <div className="p-4 rounded-2xl bg-[#132536] border border-[#326080]/30 space-y-2">
              <p className="text-xs text-[#B5D2E6] font-semibold">Official Corporate Registration</p>
              <p className="text-sm font-mono text-[#FFF1E7] font-bold">{COMPANY_INFO.name}</p>
              <p className="text-xs text-[#B5D2E6]/70">Company Reg No: {COMPANY_INFO.registrationNo}</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glass-card border border-[#326080]/30 space-y-2">
                <p className="text-3xl font-extrabold font-['Outfit'] text-gradient-accent">150+</p>
                <p className="text-xs text-[#B5D2E6]/80">Global Enterprise Engagements</p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-[#326080]/30 space-y-2">
                <p className="text-3xl font-extrabold font-['Outfit'] text-gradient-primary">99.99%</p>
                <p className="text-xs text-[#B5D2E6]/80">System SLA Uptime Record</p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-[#326080]/30 space-y-2">
                <p className="text-3xl font-extrabold font-['Outfit'] text-gradient-primary">14+</p>
                <p className="text-xs text-[#B5D2E6]/80">Countries Active Deployments</p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-[#326080]/30 space-y-2">
                <p className="text-3xl font-extrabold font-['Outfit'] text-gradient-accent">0 Breaches</p>
                <p className="text-xs text-[#B5D2E6]/80">Zero-Trust Audit Record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & CORE VALUES TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/30 space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[#326080]/20 pb-6">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'mission'
                  ? 'bg-[#326080] text-[#FFF1E7] shadow-lg shadow-[#326080]/30'
                  : 'bg-[#132536] text-[#B5D2E6]/70 hover:text-[#FFF1E7]'
              }`}
            >
              <Target className="w-4 h-4 text-[#805232]" />
              <span>Our Mission</span>
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'vision'
                  ? 'bg-[#326080] text-[#FFF1E7] shadow-lg shadow-[#326080]/30'
                  : 'bg-[#132536] text-[#B5D2E6]/70 hover:text-[#FFF1E7]'
              }`}
            >
              <Eye className="w-4 h-4 text-[#B5D2E6]" />
              <span>Our Vision</span>
            </button>

            <button
              onClick={() => setActiveTab('values')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'values'
                  ? 'bg-[#326080] text-[#FFF1E7] shadow-lg shadow-[#326080]/30'
                  : 'bg-[#132536] text-[#B5D2E6]/70 hover:text-[#FFF1E7]'
              }`}
            >
              <Award className="w-4 h-4 text-[#805232]" />
              <span>Core Values</span>
            </button>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4">
            {activeTab === 'mission' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7]">
                  Empowering Enterprises through Resilient & Intelligent Software
                </h3>
                <p className="text-sm text-[#B5D2E6]/90 leading-relaxed">
                  Our mission is to engineer software platforms and AI systems that solve mission-critical operational challenges, accelerate digital transformation, and unlock sustainable enterprise value.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7]">
                  The Preferred International Technology Partner for 2030 and Beyond
                </h3>
                <p className="text-sm text-[#B5D2E6]/90 leading-relaxed">
                  To be recognized globally as the standard for sovereign cloud systems, agentic AI integration, and zero-trust software craftsmanship.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left animate-in fade-in duration-300">
                <div className="p-4 rounded-2xl bg-[#0a141d] border border-[#326080]/30 space-y-2">
                  <h4 className="text-sm font-bold text-[#FFF1E7]">Absolute Integrity</h4>
                  <p className="text-xs text-[#B5D2E6]/70">Zero compromise on data privacy, source code quality, or corporate commitments.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0a141d] border border-[#326080]/30 space-y-2">
                  <h4 className="text-sm font-bold text-[#FFF1E7]">Engineering Excellence</h4>
                  <p className="text-xs text-[#B5D2E6]/70">Rigorous test-driven development, clean architecture, and continuous innovation.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0a141d] border border-[#326080]/30 space-y-2">
                  <h4 className="text-sm font-bold text-[#FFF1E7]">Future-Focused AI</h4>
                  <p className="text-xs text-[#B5D2E6]/70">Pioneering safe, private, agentic intelligence for real-world enterprise utility.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CORPORATE TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#805232] font-mono">Milestones</span>
          <h2 className="text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
            History of Innovation & Growth
          </h2>
        </div>

        <div className="relative border-l-2 border-[#326080]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {timelineMilestones.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#805232] border-4 border-[#0a141d] shadow-md group-hover:scale-125 transition-transform" />
              <div className="p-6 rounded-2xl glass-card border border-[#326080]/30 space-y-2 max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-[#326080]/30 text-xs font-mono font-bold text-[#B5D2E6]">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold font-['Outfit'] text-[#FFF1E7]">{item.title}</h3>
                <p className="text-xs text-[#B5D2E6]/80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#805232] font-mono">Executive Leadership</span>
          <h2 className="text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
            Meet Our Architectural Steering Committee
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((m, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedTeamMember(m)}
              className="p-4 rounded-2xl glass-card border border-[#326080]/30 space-y-4 cursor-pointer hover:border-[#B5D2E6]/40 transition-all group"
            >
              <div className="h-60 rounded-xl overflow-hidden relative">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a141d] via-transparent to-transparent opacity-80" />
              </div>
              <div>
                <h3 className="text-base font-bold font-['Outfit'] text-[#FFF1E7] group-hover:text-[#B5D2E6] transition-colors">
                  {m.name}
                </h3>
                <p className="text-xs font-semibold text-[#805232]">{m.role}</p>
                <p className="text-[11px] text-[#B5D2E6]/70 line-clamp-2 pt-1">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Member Detail Modal */}
        {selectedTeamMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg bg-[#0a141d] border border-[#326080]/40 rounded-3xl p-6 sm:p-8 space-y-6">
              <button
                onClick={() => setSelectedTeamMember(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#132536] text-[#FFF1E7]"
              >
                ✕
              </button>
              <div className="flex items-center space-x-4">
                <img
                  src={selectedTeamMember.image}
                  alt={selectedTeamMember.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-[#326080]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#FFF1E7] font-['Outfit']">{selectedTeamMember.name}</h3>
                  <p className="text-xs text-[#805232] font-bold">{selectedTeamMember.role}</p>
                  <a
                    href={selectedTeamMember.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-[#B5D2E6] hover:underline pt-1"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#B5D2E6]/90 leading-relaxed">{selectedTeamMember.bio}</p>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B5D2E6]">Key Focus Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedTeamMember.expertise.map((e, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#132536] text-xs text-[#FFF1E7] border border-[#326080]/30">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ABOUT PAGE CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7]">
              Interested in Joining or Partnering with Pearl Trinity?
            </h3>
            <p className="text-xs text-[#B5D2E6]/80">
              We welcome technology collaborations, research partnerships, and senior engineering talent.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl bg-[#805232] hover:bg-[#96613b] text-[#FFF1E7] text-xs font-bold shrink-0 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};
