import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const ChatWidget: React.FC<{ onOpenProposal: () => void }> = ({ onOpenProposal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: `Hello! I am Pearl Trinity's AI Architecture Concierge. How can I assist with your software development or digital transformation strategy today?`,
    },
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    'What services do you provide?',
    'What is your typical project delivery timeline?',
    'Where are your headquarters located?',
    'Can I schedule a technical architecture review?',
  ];

  const handleSend = (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    // Add user message
    const updated = [...messages, { sender: 'user' as const, text: textToSend }];
    setMessages(updated);
    if (!userText) setInput('');

    // Generate smart bot response
    setTimeout(() => {
      let reply = `Thank you for your inquiry! Pearl Trinity SDN. BHD. specializes in custom enterprise software, cloud infrastructure, and Gemini-powered AI workflows tailored to your exact business objectives.`;

      const lower = textToSend.toLowerCase();
      if (lower.includes('service') || lower.includes('solutions')) {
        reply = `Our core engineering capabilities include Custom Software Development, Mobile & Web Applications, AI & Intelligent Automation, Multi-Cloud Architecture, Blockchain Systems, and Enterprise UI/UX Design.`;
      } else if (lower.includes('timeline') || lower.includes('time') || lower.includes('duration')) {
        reply = `Our average project phase runs in 2-week agile sprints. MVP deployments typically launch in 6-8 weeks, while complex enterprise platform modernizations span 3-6 months.`;
      } else if (lower.includes('headquarters') || lower.includes('location') || lower.includes('office')) {
        reply = `Our global engineering headquarters is located at ${COMPANY_INFO.address}, supported by our Regional Innovation Hub at ${COMPANY_INFO.singaporeOffice}.`;
      } else if (lower.includes('schedule') || lower.includes('meeting') || lower.includes('quote') || lower.includes('architecture')) {
        reply = `You can schedule a consultation directly! Click 'Request Proposal' below to submit your project requirements to our engineering team.`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative p-4 rounded-2xl bg-gradient-to-r from-[#326080] to-[#805232] text-[#FFF1E7] shadow-2xl shadow-[#326080]/50 hover:scale-110 active:scale-95 transition-all flex items-center space-x-3 border border-[#B5D2E6]/30"
          aria-label="Open Live AI Chat"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-[#FFF1E7]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          </div>
          <span className="text-xs font-bold tracking-wide hidden sm:inline">AI Concierge</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] bg-[#0a141d] border border-[#326080]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#132536] via-[#326080]/80 to-[#132536] p-4 border-b border-[#326080]/30 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#805232] flex items-center justify-center text-[#FFF1E7]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#FFF1E7] font-['Outfit']">Pearl Trinity Assistant</h4>
                <p className="text-[10px] text-[#B5D2E6]/80 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Online • AI Architecture Advisor</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-[#326080]/30 text-[#B5D2E6] hover:text-[#FFF1E7] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message History */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0a141d]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex space-x-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-lg bg-[#326080] flex items-center justify-center text-[#FFF1E7] shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#805232] text-[#FFF1E7] rounded-tr-none'
                      : 'bg-[#132536] text-[#B5D2E6] border border-[#326080]/30 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick Prompts */}
            <div className="pt-2 space-y-1.5">
              <p className="text-[10px] uppercase tracking-wider text-[#B5D2E6]/50 font-mono">Suggested Questions:</p>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-2 rounded-xl bg-[#132536]/60 border border-[#326080]/20 text-[11px] text-[#B5D2E6] hover:text-[#FFF1E7] hover:border-[#B5D2E6]/40 transition-colors flex items-center justify-between"
                >
                  <span className="line-clamp-1">{q}</span>
                  <ChevronRight className="w-3 h-3 text-[#805232] shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Input & CTA Footer */}
          <div className="p-3 bg-[#070e15] border-t border-[#326080]/30 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI, software or cloud..."
                className="flex-1 px-3 py-2 rounded-xl bg-[#132536] border border-[#326080]/40 text-xs text-[#FFF1E7] placeholder-[#B5D2E6]/40 focus:outline-none focus:border-[#B5D2E6]"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#805232] text-[#FFF1E7] hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenProposal();
              }}
              className="w-full py-2 rounded-xl bg-[#326080]/30 border border-[#326080]/50 text-[#FFF1E7] text-[11px] font-bold text-center hover:bg-[#326080] transition-colors"
            >
              Request Executive Architecture Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
