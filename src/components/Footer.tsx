import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Clock, 
  BookOpen, 
  Heart,
  FileText,
  MessageCircle
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenAdminGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissions, onOpenAdminGuide }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Introduction (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-800 p-0.5 shadow">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-nastaliq text-white">
                  {ACADEMY_INFO.nameUrdu}
                </h3>
                <span className="text-xs font-english text-emerald-400 font-semibold tracking-wider uppercase">
                  {ACADEMY_INFO.nameEnglish} • Gujranwala
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-light">
              بسمہ اکیڈمی نوشہرہ روڈ، مومن آباد، گوجرانوالہ میں نرسری تا جماعت پنجم کے بچوں کو اخلاقی تربیت، جدید بنیادی تعلیم اور فکری خود اعتمادی فراہم کرنے کا ایک مخلص ادارہ ہے۔
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold">
                نرسری تا جماعت پنجم
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300 text-xs font-bold">
                داخلے جاری ہیں
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white font-nastaliq border-b border-slate-800 pb-2">
              اہم لنکس
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition">ہوم پیج</a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition">ہمارے بارے میں</a>
              </li>
              <li>
                <a href="#classes" className="hover:text-emerald-400 transition">ہماری کلاسز (نرسری تا پنجم)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition">تعلیمی پروگرام</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition">تصویری گیلری</a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-emerald-400 transition">داخلے کی معلومات</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition">ہم سے رابطہ کریں</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-bold text-white font-nastaliq border-b border-slate-800 pb-2">
              رابطہ اور پتہ
            </h4>

            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-medium">پتہ:</span>
                  <span>{ACADEMY_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-medium">فون نمبرز:</span>
                  <div className="space-y-1 font-sans text-xs sm:text-sm">
                    <a href="tel:03157947161" className="block hover:text-amber-300 transition" dir="ltr">
                      0315-7947161
                    </a>
                    <a href="tel:03107115054" className="block hover:text-amber-300 transition" dir="ltr">
                      03107115054
                    </a>
                  </div>
                </div>
              </div>

              {/* Both WhatsApp Links */}
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-medium">سرکاری واٹس ایپ:</span>
                  <div className="flex flex-col gap-1 pt-1 font-sans text-xs">
                    <a
                      href="https://wa.me/923157947161"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-100 transition"
                      dir="ltr"
                    >
                      <span>https://wa.me/923157947161</span>
                    </a>
                    <a
                      href="https://wa.me/923107115054"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-100 transition"
                      dir="ltr"
                    >
                      <span>https://wa.me/923107115054</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-medium">اوقات کار:</span>
                  <span>{ACADEMY_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmissions}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>آن لائن داخلہ فارم کھولیں</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Management Guide */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-right">
            <p className="text-slate-400 font-medium">
              © Bisma Academy. جملہ حقوق محفوظ ہیں۔
            </p>
            <p className="text-slate-600 text-[11px] mt-0.5">
              نوشہرہ روڈ، مومن آباد، گوجرانوالہ، پاکستان
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdminGuide}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-300 transition underline underline-offset-4"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>اکیڈمی مینجمنٹ گائیڈ (ہدایات برائے ویب سائٹ)</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
