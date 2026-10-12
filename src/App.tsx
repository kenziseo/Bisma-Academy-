import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WelcomeAbout } from './components/WelcomeAbout';
import { ClassesSection } from './components/ClassesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AdmissionSection } from './components/AdmissionSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { AcademyEntityOverview } from './components/AcademyEntityOverview';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { InquiriesListModal } from './components/InquiriesListModal';
import { AdminGuideModal } from './components/AdminGuideModal';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { ACADEMY_INFO } from './data/academyData';

export default function App() {
  const [selectedClassForAdmission, setSelectedClassForAdmission] = useState<string>('نرسری');
  const [inquiriesModalOpen, setInquiriesModalOpen] = useState(false);
  const [adminGuideModalOpen, setAdminGuideModalOpen] = useState(false);
  const [inquiriesCount, setInquiriesCount] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const updateInquiriesCount = () => {
    try {
      const stored = localStorage.getItem('bisma_admissions_inquiries');
      if (stored) {
        const parsed = JSON.parse(stored);
        setInquiriesCount(parsed.length);
      } else {
        setInquiriesCount(0);
      }
    } catch {
      setInquiriesCount(0);
    }
  };

  useEffect(() => {
    updateInquiriesCount();

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAdmissions = (className?: string) => {
    if (className) {
      setSelectedClassForAdmission(className);
    }
    const elem = document.getElementById('admissions');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToClasses = () => {
    const elem = document.getElementById('classes');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* Navigation */}
      <Navbar
        onOpenAdmissions={() => scrollToAdmissions()}
        onOpenInquiriesList={() => setInquiriesModalOpen(true)}
        inquiriesCount={inquiriesCount}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenAdmissions={() => scrollToAdmissions()}
          onExploreClasses={scrollToClasses}
        />

        {/* 2. Welcome & About Section */}
        <WelcomeAbout />

        {/* 3. Classes Section (Nursery to Class 5) */}
        <ClassesSection
          onSelectClassForAdmission={(className) => scrollToAdmissions(className)}
        />

        {/* 4. Educational Programs */}
        <ProgramsSection />

        {/* 5. Why Choose Bisma Academy */}
        <WhyChooseUsSection />

        {/* 6. Admissions & Inquiry Form */}
        <AdmissionSection
          initialSelectedClass={selectedClassForAdmission}
          onInquirySubmitted={updateInquiriesCount}
        />

        {/* 7. Gallery Section */}
        <GallerySection />

        {/* 8. Academy Profile & SEO/GEO/AEO Entity Overview */}
        <AcademyEntityOverview />

        {/* 9. Contact & Map Section */}
        <ContactSection />

        {/* 10. FAQs */}
        <FAQSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenAdmissions={() => scrollToAdmissions()}
        onOpenAdminGuide={() => setAdminGuideModalOpen(true)}
      />

      {/* Floating Action Buttons (Sticky Quick Access to Both WhatsApp Numbers) */}
      <div className="fixed bottom-5 left-5 z-40 flex flex-col items-center gap-2.5">
        
        {/* WhatsApp 1: 0315-7947161 */}
        <a
          href="https://wa.me/923157947161"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all group relative border border-emerald-400/50"
          title="واٹس ایپ 1 (0315-7947161)"
          aria-label="واٹس ایپ 1 (0315-7947161)"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] flex items-center justify-center">
            1
          </span>
          <span className="absolute left-full ml-2.5 bg-slate-950 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-lg border border-slate-700">
            واٹس ایپ 1: <strong dir="ltr" className="text-emerald-300">0315-7947161</strong>
          </span>
        </a>

        {/* WhatsApp 2: 03107115054 */}
        <a
          href="https://wa.me/923107115054"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all group relative border border-emerald-300/40"
          title="واٹس ایپ 2 (03107115054)"
          aria-label="واٹس ایپ 2 (03107115054)"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] flex items-center justify-center">
            2
          </span>
          <span className="absolute left-full ml-2.5 bg-slate-950 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-lg border border-slate-700">
            واٹس ایپ 2: <strong dir="ltr" className="text-emerald-300">03107115054</strong>
          </span>
        </a>

        {/* Phone Call Button */}
        <a
          href="tel:03157947161"
          className="w-11 h-11 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-300 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all group relative border border-slate-700"
          title="کال کریں: 0315-7947161"
          aria-label="کال کریں"
        >
          <Phone className="w-4 h-4 text-amber-300" />
          <span className="absolute left-full ml-2.5 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-lg border border-slate-700">
            کال: <strong dir="ltr">0315-7947161</strong>
          </span>
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center shadow-md border border-slate-200 transition-all hover:scale-105 active:scale-95"
            title="اوپر جائیں"
            aria-label="اوپر جائیں"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Admin / Staff Inquiries Review Modal */}
      <InquiriesListModal
        isOpen={inquiriesModalOpen}
        onClose={() => setInquiriesModalOpen(false)}
        onRefreshCount={updateInquiriesCount}
      />

      {/* Website Management & Deployment Guide */}
      <AdminGuideModal
        isOpen={adminGuideModalOpen}
        onClose={() => setAdminGuideModalOpen(false)}
      />

    </div>
  );
}
