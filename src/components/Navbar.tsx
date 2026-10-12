import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  BookOpen, 
  GraduationCap, 
  Clock, 
  Sparkles,
  FileText,
  MessageCircle
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface NavbarProps {
  onOpenAdmissions: () => void;
  onOpenInquiriesList: () => void;
  inquiriesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAdmissions, 
  onOpenInquiriesList,
  inquiriesCount 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ہوم', href: '#hero' },
    { label: 'ہمارے بارے میں', href: '#about' },
    { label: 'ہماری کلاسز', href: '#classes' },
    { label: 'تعلیمی پروگرام', href: '#programs' },
    { label: 'ہماری خصوصیات', href: '#why-us' },
    { label: 'تصاویر', href: '#gallery' },
    { label: 'داخلے', href: '#admissions' },
    { label: 'رابطہ کریں', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-slate-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-right">
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 font-bold text-xs tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              داخلے جاری ہیں!
            </span>
            <span className="text-emerald-100 font-medium">
              نرسری تا جماعت پنجم — نیا تعلیمی سیشن
            </span>
            <span className="hidden lg:inline text-emerald-300/70">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-emerald-100">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              نوشہرہ روڈ، مومن آباد، گوجرانوالہ
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-sans flex-wrap justify-center md:justify-end">
            {/* Phone Calls */}
            <div className="flex items-center gap-2">
              <a 
                href="tel:03157947161" 
                className="flex items-center gap-1 text-white hover:text-amber-300 transition font-medium"
                title="کال کریں"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-300" />
                <span dir="ltr">0315-7947161</span>
              </a>
              <span className="text-emerald-400">/</span>
              <a 
                href="tel:03107115054" 
                className="flex items-center gap-1 text-white hover:text-amber-300 transition font-medium"
                title="کال کریں"
              >
                <span dir="ltr">03107115054</span>
              </a>
            </div>

            {/* Direct WhatsApp Links */}
            <div className="flex items-center gap-1.5 border-r border-emerald-600/70 pr-3 mr-1">
              <span className="text-[11px] text-emerald-200 hidden xl:inline">واٹس ایپ:</span>
              <a
                href="https://wa.me/923157947161"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-200 hover:text-white border border-emerald-400/40 transition text-[11px]"
                title="واٹس ایپ 0315-7947161"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span dir="ltr">0315-7947161</span>
              </a>
              <a
                href="https://wa.me/923107115054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-200 hover:text-white border border-emerald-400/40 transition text-[11px]"
                title="واٹس ایپ 03107115054"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span dir="ltr">03107115054</span>
              </a>
            </div>

            {/* Inquiries quick link */}
            {inquiriesCount > 0 && (
              <button
                onClick={onOpenInquiriesList}
                className="hidden sm:inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded text-amber-200 text-xs transition"
              >
                <FileText className="w-3 h-3" />
                <span>درخواستیں ({inquiriesCount})</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Branding */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group text-right focus:outline-none"
          >
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-0.5 shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-amber-50/50" />
                <div className="relative flex flex-col items-center justify-center text-emerald-700">
                  <GraduationCap className="w-6 h-6 text-emerald-700" />
                  <div className="w-5 h-0.5 bg-amber-500 rounded-full mt-0.5" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-nastaliq text-emerald-800 tracking-tight leading-none group-hover:text-emerald-700 transition">
                  {ACADEMY_INFO.nameUrdu}
                </span>
                <span className="text-[11px] font-english font-semibold tracking-wider text-slate-400 uppercase">
                  Bisma Academy
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                بچوں کے روشن مستقبل کی بنیاد
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>داخلہ فارم</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-1.5 bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>داخلہ</span>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition focus:outline-none"
              aria-label="مینو کھولیں"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-right px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissions();
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl shadow transition"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>داخلہ فارم کھولیں</span>
            </button>

            {/* Direct Calls */}
            <div className="flex gap-2">
              <a
                href="tel:03157947161"
                className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-lg transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span dir="ltr">0315-7947161</span>
              </a>
              <a
                href="tel:03107115054"
                className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-lg transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span dir="ltr">03107115054</span>
              </a>
            </div>

            {/* Direct WhatsApps */}
            <div className="flex gap-2 pt-1">
              <a
                href="https://wa.me/923157947161"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 rounded-lg transition shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>واٹس ایپ 1 (7947161)</span>
              </a>
              <a
                href="https://wa.me/923107115054"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2.5 rounded-lg transition shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>واٹس ایپ 2 (7115054)</span>
              </a>
            </div>

            <div className="text-center text-xs text-slate-500 pt-1">
              نوشہرہ روڈ، مومن آباد، گوجرانوالہ
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
