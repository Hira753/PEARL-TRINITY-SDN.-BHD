import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, SOLUTIONS, INDUSTRIES, TESTIMONIALS, INSIGHTS } from '../data/companyData';
import { ThreeGlobe } from '../components/canvas/ThreeGlobe';
import { ThreeParticles } from '../components/canvas/ThreeParticles';
import { TechIllustration } from '../components/common/TechIllustration';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Award,
  Globe2,
  Users,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Star,
  BookOpen,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  Lock,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedTechTab, setSelectedTechTab] = useState<'all' | 'ai' | 'cloud' | 'mobile' | 'security'>('all');

  const techStackData = [
    { name: 'Gemini 1.5 & Agentic LLMs', cat: 'ai', desc: 'Enterprise private RAG & multimodal agents' },
    { name: 'Google Cloud Platform', cat: 'cloud', desc: 'Multi-region auto-scaling Kubernetes' },
    { name: 'TypeScript & Node.js', cat: 'all', desc: 'Type-safe enterprise microservices' },
    { name: 'React Native & iOS Native', cat: 'mobile', desc: 'Sub-second cross-platform mobile apps' },
    { name: 'Zero-Trust Cyber Governance', cat: 'security', desc: 'ISO 27001 & SOC 2 compliant architecture' },
    { name: 'PyTorch & TensorFlow', cat: 'ai', desc: 'Custom predictive machine learning models' },
    { name: 'Amazon Web Services (AWS)', cat: 'cloud', desc: 'Active-active hybrid cloud failover' },
    { name: 'Solidity & Smart Contracts', cat: 'security', desc: 'Audited enterprise blockchain ledgers' },
  ];

  const filteredTech = selectedTechTab === 'all' 
    ? techStackData 
    : techStackData.filter(t => t.cat === selectedTechTab);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Background 3D Particles */}
        <ThreeParticles particleCount={160} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#132536]/80 border border-[#326080]/50 text-xs text-[#B5D2E6] font-semibold backdrop-blur-md shadow-lg shadow-[#326080]/20 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#805232] animate-spin-slow" />
              <span>Leading Enterprise Digital Transformation Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight text-[#FFF1E7] leading-[1.12]">
              Building Digital Solutions That Drive <span className="text-gradient-accent">Business Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-[#B5D2E6]/90 max-w-2xl leading-relaxed font-light">
              {COMPANY_INFO.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('solutions')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#326080] via-[#254963] to-[#326080] text-[#FFF1E7] text-sm font-bold tracking-wide shadow-xl shadow-[#326080]/40 hover:shadow-[#326080]/60 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center space-x-3 border border-[#B5D2E6]/30 group"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B5D2E6]" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-[#805232] hover:bg-[#96613b] text-[#FFF1E7] text-sm font-bold tracking-wide shadow-xl shadow-[#805232]/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center space-x-3 border border-[#FFF1E7]/20"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick Metrics Counter */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#326080]/20">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-gradient-primary">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-[#B5D2E6]/70 leading-tight uppercase font-mono">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive 3D Globe Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 bg-radial from-[#326080]/30 via-transparent to-transparent rounded-full blur-3xl" />
              <ThreeGlobe interactive={true} />
              
              {/* Floating Glass Badges */}
              <div className="absolute top-6 left-2 sm:-left-6 p-3 rounded-2xl glass-panel text-xs text-[#FFF1E7] flex items-center space-x-3 animate-float border border-[#B5D2E6]/20">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold">99.9% Uptime SLA</p>
                  <p className="text-[10px] text-[#B5D2E6]/70">Bank-Grade Governance</p>
                </div>
              </div>

              <div className="absolute bottom-8 right-2 sm:-right-6 p-3 rounded-2xl glass-panel text-xs text-[#FFF1E7] flex items-center space-x-3 animate-float duration-1000 border border-[#B5D2E6]/20">
                <div className="p-2 rounded-xl bg-[#805232]/30 text-[#FFF1E7]">
                  <Zap className="w-4 h-4 text-[#805232]" />
                </div>
                <div>
                  <p className="font-bold">Agentic AI Powered</p>
                  <p className="text-[10px] text-[#B5D2E6]/70">Gemini LLM Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PEARL TRINITY OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#326080]/30 text-xs font-semibold text-[#B5D2E6] border border-[#326080]/50">
              <span>About Pearl Trinity SDN. BHD.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-[#FFF1E7] leading-tight">
              Architecting Sovereign Technology for International Enterprises
            </h2>

            <p className="text-sm sm:text-base text-[#B5D2E6]/90 leading-relaxed font-light">
              Founded in Malaysia with global research nodes in Cyberjaya and Singapore, PEARL TRINITY SDN. BHD. bridges the gap between ambitious business vision and bulletproof software engineering. We specialize in high-concurrency cloud architectures, bespoke mobile platforms, and private enterprise generative AI models.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#132536]/60 border border-[#326080]/20 space-y-1">
                <h4 className="text-sm font-bold text-[#FFF1E7] flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#805232]" />
                  <span>ISO & Regulatory Compliant</span>
                </h4>
                <p className="text-xs text-[#B5D2E6]/70">Strict adherence to BNM RMiT, HIPAA, SOC 2 Type II, and GDPR standards.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#132536]/60 border border-[#326080]/20 space-y-1">
                <h4 className="text-sm font-bold text-[#FFF1E7] flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#805232]" />
                  <span>Full Code Ownership</span>
                </h4>
                <p className="text-xs text-[#B5D2E6]/70">Zero vendor lock-in with complete repository transfers and IP rights.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-xl bg-[#326080] hover:bg-[#254963] text-[#FFF1E7] text-xs font-bold tracking-wide transition-all flex items-center space-x-2 border border-[#B5D2E6]/30"
              >
                <span>Discover Our History & Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#326080]/40 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Pearl Trinity Cyberjaya Innovation Hub"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a141d] via-[#0a141d]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel text-xs space-y-1">
                <p className="font-bold text-[#FFF1E7]">Menara Trinity Headquarters</p>
                <p className="text-[11px] text-[#B5D2E6]/80">Cyberjaya Tech City, Selangor, Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#805232]/20 text-xs font-semibold text-[#FFF1E7] border border-[#805232]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#805232]" />
            <span>Comprehensive Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
            Enterprise Solutions Tailored for Digital Leaders
          </h2>
          <p className="text-sm sm:text-base text-[#B5D2E6]/80 font-light">
            Engineered with modern frameworks, high security standards, and scalable cloud topologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 relative group border border-[#326080]/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#326080]/30 border border-[#326080]/50 text-[10px] font-bold uppercase tracking-wider text-[#B5D2E6]">
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#805232]/20 border border-[#805232]/40 flex items-center justify-center text-[#FFF1E7]">
                    <Code2 className="w-5 h-5 text-[#805232]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-['Outfit'] text-[#FFF1E7] group-hover:text-[#B5D2E6] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#B5D2E6]/80 leading-relaxed">
                  {item.description}
                </p>

                <TechIllustration type={item.illustrationType} className="my-4" />

                <ul className="space-y-2 pt-2 border-t border-[#326080]/20 text-xs text-[#B5D2E6]/90">
                  {item.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#805232] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#326080]/20">
                <div className="flex flex-wrap gap-1">
                  {item.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-[#132536] text-[10px] text-[#B5D2E6]/70">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('solutions')}
                  className="p-2 rounded-xl bg-[#326080]/30 text-[#FFF1E7] hover:bg-[#326080] transition-colors"
                  aria-label={`View details for ${item.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/30 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
              Why International Brands Trust Pearl Trinity
            </h2>
            <p className="text-sm text-[#B5D2E6]/80">
              We combine enterprise consulting rigor with the agility of a modern AI-first software laboratory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Bank-Grade Security',
                desc: 'Zero-Trust network architecture with automated SAST/DAST security scanning on every pull request.',
              },
              {
                icon: Zap,
                title: 'Rapid Agile Sprints',
                desc: '2-week iterative delivery with production staging previews & transparent Slack/Jira communication.',
              },
              {
                icon: Cpu,
                title: 'AI Native Workflows',
                desc: 'Direct integration of Gemini 1.5 Pro, private fine-tuned LLMs, and autonomous decision pipelines.',
              },
              {
                icon: Award,
                title: 'Guaranteed SLAs',
                desc: 'Dedicated 24/7 technical escalation team with strict sub-15-minute response guarantees.',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#0a141d]/80 border border-[#326080]/30 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#326080]/30 border border-[#326080]/50 flex items-center justify-center text-[#B5D2E6]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-['Outfit'] text-[#FFF1E7]">{card.title}</h3>
                  <p className="text-xs text-[#B5D2E6]/70 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES PREVIEW CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#805232] font-mono">
              Sector Expertise
            </span>
            <h2 className="text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
              Engineered for Diverse Industry Mandates
            </h2>
          </div>
          <button
            onClick={() => onNavigate('industries')}
            className="px-5 py-2.5 rounded-full bg-[#326080]/30 hover:bg-[#326080] text-[#FFF1E7] text-xs font-bold flex items-center space-x-2 transition-colors border border-[#326080]/50 self-start sm:self-auto"
          >
            <span>View All 7 Industries</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INDUSTRIES.slice(0, 3).map((ind) => (
            <div key={ind.id} className="p-6 rounded-2xl glass-card border border-[#326080]/30 space-y-4 hover:border-[#B5D2E6]/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-[#805232] uppercase">{ind.caseStudyStat}</span>
                <Globe2 className="w-5 h-5 text-[#326080]" />
              </div>
              <h3 className="text-lg font-bold font-['Outfit'] text-[#FFF1E7]">{ind.name}</h3>
              <p className="text-xs text-[#B5D2E6]/80 leading-relaxed">{ind.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {ind.compliance.map((c, cIdx) => (
                  <span key={cIdx} className="px-2 py-0.5 rounded bg-[#132536] text-[10px] text-[#B5D2E6] font-mono">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTERABLE TECHNOLOGY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
            Enterprise Technology Stack
          </h2>
          <p className="text-sm text-[#B5D2E6]/80">
            Proven frameworks and modern tools driving our high-performance software builds.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'ai', label: 'AI & Intelligence' },
              { id: 'cloud', label: 'Cloud Infrastructure' },
              { id: 'mobile', label: 'Mobile & Web' },
              { id: 'security', label: 'Security & Web3' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTechTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedTechTab === tab.id
                    ? 'bg-[#805232] text-[#FFF1E7] shadow-lg shadow-[#805232]/30'
                    : 'bg-[#132536] text-[#B5D2E6]/70 hover:text-[#FFF1E7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#0a141d] border border-[#326080]/30 space-y-1 hover:border-[#B5D2E6]/40 transition-colors">
              <h4 className="text-sm font-bold text-[#FFF1E7] font-['Outfit']">{tech.name}</h4>
              <p className="text-xs text-[#B5D2E6]/70">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#326080]/30 relative overflow-hidden space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#805232] font-mono">
                Executive Endorsements
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
                Client Success & Impact
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                }
                className="p-2.5 rounded-full bg-[#132536] border border-[#326080]/30 text-[#FFF1E7] hover:bg-[#326080] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
                }
                className="p-2.5 rounded-full bg-[#132536] border border-[#326080]/30 text-[#FFF1E7] hover:bg-[#326080] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-1 text-[#805232]">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#805232]" />
                ))}
              </div>
              <p className="text-lg sm:text-xl font-light italic text-[#FFF1E7] leading-relaxed">
                "{TESTIMONIALS[activeTestimonial].quote}"
              </p>
              <div>
                <h4 className="text-base font-bold text-[#FFF1E7]">
                  {TESTIMONIALS[activeTestimonial].author}
                </h4>
                <p className="text-xs text-[#B5D2E6]/80">
                  {TESTIMONIALS[activeTestimonial].role} • <span className="text-[#FFF1E7] font-semibold">{TESTIMONIALS[activeTestimonial].company}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0a141d]/80 border border-[#326080]/40 text-center space-y-2">
              <p className="text-xs text-[#B5D2E6]/70 uppercase font-mono">Delivered Impact Metric</p>
              <p className="text-2xl font-extrabold font-['Outfit'] text-gradient-accent">
                {TESTIMONIALS[activeTestimonial].metric}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#805232] font-mono">
              Thought Leadership
            </span>
            <h2 className="text-3xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
              Latest Technology Insights
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((art) => (
            <article key={art.id} className="rounded-2xl glass-card border border-[#326080]/30 overflow-hidden group space-y-4">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0a141d]/80 backdrop-blur-md text-[10px] font-bold text-[#B5D2E6] border border-[#326080]/50">
                  {art.category}
                </span>
              </div>
              <div className="p-6 space-y-3 pt-0">
                <div className="text-[11px] text-[#B5D2E6]/60 flex items-center space-x-2">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-base font-bold font-['Outfit'] text-[#FFF1E7] group-hover:text-[#B5D2E6] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-[#B5D2E6]/70 line-clamp-2 leading-relaxed">
                  {art.summary}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-[#805232] font-semibold">
                  <span>By {art.author}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-[#132536] via-[#326080]/80 to-[#805232]/40 border border-[#B5D2E6]/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-[#FFF1E7]">
              Ready to Accelerate Your Digital Roadmap?
            </h2>
            <p className="text-sm sm:text-base text-[#B5D2E6]">
              Partner with PEARL TRINITY SDN. BHD. for enterprise-grade software development, AI automation, and cloud architecture.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-full bg-[#805232] hover:bg-[#96613b] text-[#FFF1E7] text-sm font-bold tracking-wide shadow-xl shadow-[#805232]/40 hover:scale-[1.02] transition-all flex items-center space-x-2 border border-[#FFF1E7]/20"
            >
              <Sparkles className="w-4 h-4 text-[#FFF1E7]" />
              <span>Schedule Architecture Session</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full bg-[#0a141d]/80 hover:bg-[#0a141d] text-[#FFF1E7] text-sm font-bold tracking-wide transition-all border border-[#326080]"
            >
              Contact Our Cyberjaya HQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
