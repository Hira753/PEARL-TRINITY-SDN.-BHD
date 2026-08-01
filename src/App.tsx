/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { ChatWidget } from './components/common/ChatWidget';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Sync route with window pathname on initial load and popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/about' || path === '/about.html') setCurrentRoute('about');
      else if (path === '/solutions' || path === '/solutions.html') setCurrentRoute('solutions');
      else if (path === '/industries' || path === '/industries.html') setCurrentRoute('industries');
      else if (path === '/process' || path === '/process.html') setCurrentRoute('process');
      else if (path === '/contact' || path === '/contact.html') setCurrentRoute('contact');
      else setCurrentRoute('home');
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    const targetPath = route === 'home' ? '/' : `/${route}`;
    window.history.pushState({}, '', targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a141d] text-[#FFF1E7] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#326080] selection:text-[#FFF1E7] flex flex-col justify-between">
      {/* Global Corporate Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="flex-1 pb-20">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
        {currentRoute === 'solutions' && (
          <SolutionsPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
        {currentRoute === 'industries' && (
          <IndustriesPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
        {currentRoute === 'process' && (
          <ProcessPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
        {currentRoute === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Proposal Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Floating AI Architecture Concierge Chat */}
      <ChatWidget onOpenProposal={() => setIsQuoteModalOpen(true)} />
    </div>
  );
}
