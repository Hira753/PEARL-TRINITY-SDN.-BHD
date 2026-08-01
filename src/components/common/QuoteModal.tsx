import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles, Building, User, Mail, Phone, Calendar, ShieldCheck } from 'lucide-react';
import { SOLUTIONS } from '../../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(['custom-software']);
  const [budgetRange, setBudgetRange] = useState('$50k - $100k');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    preferredTimeline: '1-3 Months',
  });

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0a141d] border border-[#326080]/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#132536] text-[#B5D2E6] hover:text-[#FFF1E7] border border-[#326080]/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7]">
                Proposal Request Received
              </h3>
              <p className="text-sm text-[#B5D2E6]/80 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-[#FFF1E7]">{formData.name || 'Valued Client'}</span>! A Senior Solutions Architect from Pearl Trinity SDN. BHD. will contact you within 24 business hours to schedule an architecture session.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#132536] border border-[#326080]/30 text-xs text-[#B5D2E6] space-y-1 text-left max-w-md mx-auto">
              <p><strong>Confirmation Code:</strong> PT-PROPOSAL-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p><strong>Selected Scope:</strong> {selectedServices.join(', ')}</p>
              <p><strong>Budget Bracket:</strong> {budgetRange}</p>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-[#326080] hover:bg-[#254963] text-[#FFF1E7] font-bold text-sm tracking-wide transition-all shadow-md"
            >
              Back to Pearl Trinity
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#805232]/20 border border-[#805232]/40 text-xs text-[#FFF1E7] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#805232]" />
                <span>Enterprise Consultation</span>
              </div>
              <h2 className="text-2xl font-bold font-['Outfit'] text-[#FFF1E7]">
                Request a Custom Technical Proposal
              </h2>
              <p className="text-xs text-[#B5D2E6]/80">
                Tell us about your project requirements to receive a detailed solution blueprint, timeline, and budget estimate.
              </p>
            </div>

            {/* Service Interest Checklist */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#B5D2E6]">
                Select Primary Solutions Needed
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SOLUTIONS.map((s) => {
                  const isSelected = selectedServices.includes(s.id);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#326080] border-[#B5D2E6] text-[#FFF1E7]'
                          : 'bg-[#132536]/60 border-[#326080]/30 text-[#B5D2E6]/70 hover:text-[#FFF1E7]'
                      }`}
                    >
                      <span className="line-clamp-1">{s.title}</span>
                      {isSelected && <CheckCircle className="w-3.5 h-3.5 text-[#FFF1E7] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Range & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#B5D2E6]">
                  Estimated Investment Range
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] focus:outline-none focus:border-[#B5D2E6]"
                >
                  <option value="< $25k">&lt; $25,000 USD</option>
                  <option value="$25k - $50k">$25,000 - $50,000 USD</option>
                  <option value="$50k - $100k">$50,000 - $100,000 USD</option>
                  <option value="$100k - $250k">$100,000 - $250,000 USD</option>
                  <option value="$250k+">$250,000+ USD Enterprise</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#B5D2E6]">
                  Target Deployment Timeline
                </label>
                <select
                  value={formData.preferredTimeline}
                  onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] focus:outline-none focus:border-[#B5D2E6]"
                >
                  <option value="Immediate (< 1 Mo)">Immediate (&lt; 1 Month)</option>
                  <option value="1-3 Months">1 - 3 Months</option>
                  <option value="3-6 Months">3 - 6 Months</option>
                  <option value="Long Term (> 6 Mo)">Long-Term Strategic Partner</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#326080] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Alexander Wright"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Corporate Email *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#326080] absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alexander@company.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Company / Organization</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-[#326080] absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Global Tech Corp"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#326080] absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+60 12 345 6789"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="text-xs text-[#B5D2E6] font-semibold mb-1 block">
                Project Overview & Objectives
              </label>
              <textarea
                rows={3}
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                placeholder="Briefly describe your current technical challenges or target system capabilities..."
                className="w-full p-3 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/30 focus:outline-none focus:border-[#B5D2E6]"
              />
            </div>

            {/* Privacy Guarantee */}
            <div className="flex items-center space-x-2 text-[11px] text-[#B5D2E6]/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                NDA protected. We strictly respect your intellectual property and confidential data.
              </span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#805232] via-[#a3683f] to-[#805232] text-[#FFF1E7] font-bold text-sm tracking-wide hover:opacity-90 transition-all shadow-lg shadow-[#805232]/30 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Proposal Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
