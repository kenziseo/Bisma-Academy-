import React from 'react';
import { 
  BookOpen, 
  Phone, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Award,
  ArrowDown,
  CheckCircle2
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface HeroProps {
  onOpenAdmissions: () => void;
  onExploreClasses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onExploreClasses }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 text-white py-16 sm:py-24 lg:py-28">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content (RTL Right side) */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Colorful Admission Open Tag with multiple cheerful badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/30 to-amber-500/30 border border-emerald-400/50 text-emerald-200 text-xs sm:text-sm font-semibold shadow-inner">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span>داخلے جاری ہیں برائے تعلیمی سیشن</span>
                <span className="text-amber-300 font-bold">|</span>
                <span className="text-white">نرسری تا جماعت پنجم</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-bold">
                <span>🎨 آرٹ و ڈرائنگ پر مبنی تدریس</span>
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-nastaliq text-white leading-tight">
                <span className="block text-emerald-300 drop-shadow-sm">
                  {ACADEMY_INFO.nameUrdu}
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-sans font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-300 bg-clip-text text-transparent mt-2">
                  {ACADEMY_INFO.tagline}
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-english tracking-widest text-slate-400 uppercase pt-1">
                Bisma Academy • Nowshera Road, Mominabad, Gujranwala
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
              “ہم بچوں کی تعلیمی ترقی، اچھی تربیت اور سیکھنے کے شوق کو فروغ دینے کے لیے ایک مثبت، رنگین اور دوستانہ ماحول فراہم کرنے کا عزم رکھتے ہیں۔”
            </p>

            {/* Trust Highlights Checklist with Colorful Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5 bg-gradient-to-r from-emerald-900/60 to-emerald-950/60 border border-emerald-500/30 px-3.5 py-2.5 rounded-xl shadow-xs">
                <span className="text-base">🎨</span>
                <span className="font-medium text-emerald-100">تخلیقی ڈرائنگ اور رنگین سرگرمیاں</span>
              </div>
              <div className="flex items-center gap-2.5 bg-gradient-to-r from-amber-900/40 to-amber-950/60 border border-amber-500/30 px-3.5 py-2.5 rounded-xl shadow-xs">
                <span className="text-base">✨</span>
                <span className="font-medium text-amber-100">روایتی بینچوں کی سختی سے پاک دوستانہ ماحول</span>
              </div>
              <div className="flex items-center gap-2.5 bg-gradient-to-r from-cyan-900/40 to-cyan-950/60 border border-cyan-500/30 px-3.5 py-2.5 rounded-xl shadow-xs">
                <span className="text-base">📖</span>
                <span className="font-medium text-cyan-100">ناظرہ قرآن و اخلاقی تربیت کی فاؤنڈیشن</span>
              </div>
              <div className="flex items-center gap-2.5 bg-gradient-to-r from-rose-900/40 to-rose-950/60 border border-rose-500/30 px-3.5 py-2.5 rounded-xl shadow-xs">
                <span className="text-base">🤝</span>
                <span className="font-medium text-rose-100">والدین سے مسلسل اور ذمہ دارانہ رابطہ</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all active:scale-95"
              >
                <BookOpen className="w-5 h-5 text-amber-300" />
                <span>داخلے کے لیے رابطہ کریں</span>
              </button>

              <button
                onClick={onExploreClasses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700 font-semibold text-base transition-all active:scale-95"
              >
                <span>ہماری کلاسز دیکھیں</span>
                <ArrowDown className="w-4 h-4 text-emerald-400" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/923157947161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/40 transition"
                >
                  <span>واٹس ایپ 1: 0315-7947161</span>
                </a>
                <a
                  href="https://wa.me/923107115054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/40 transition"
                >
                  <span>واٹس ایپ 2: 03107115054</span>
                </a>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / School Kids Drawing Presentation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Colorful Card Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-rose-500 to-amber-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative bg-slate-900/95 border border-emerald-500/40 rounded-3xl p-5 sm:p-7 backdrop-blur-xl shadow-2xl space-y-5">
                
                {/* Header Card Details */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-amber-400 to-rose-500 p-0.5 shadow">
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                        <Award className="w-6 h-6 text-amber-300" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white font-nastaliq">بسمہ اکیڈمی</h2>
                      <p className="text-xs text-emerald-300">مومن آباد، گوجرانوالہ</p>
                    </div>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-amber-500/20 text-amber-300 border border-amber-400/30 font-bold">
                    🎨 ڈرائنگ و تخلیقی لرننگ
                  </span>
                </div>

                {/* Imagery Preview - KIDS SITTING ON CARPET DRAWING (NO BENCHES) */}
                <div className="relative h-60 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-inner group">
                  <img
                    src="/src/assets/images/kids_drawing_colorful_1791821229904.jpg"
                    alt="بچے قالین پر بیٹھ کر ڈرائنگ اور رنگ آمیزی کرتے ہوئے - بسمہ اکیڈمی"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-4">
                    <div className="space-y-0.5">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold">
                        تخلیقی اور دوستانہ ماحول
                      </span>
                      <p className="text-xs text-white font-medium drop-shadow-sm">
                        قالین پر بیٹھ کر کھلے ذہن کے ساتھ ڈرائنگ اور رنگین کریونز سے سیکھنا
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid with Colorful Cards */}
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-700/50">
                    <span className="text-emerald-300 block mb-1">تعلیمی سطح</span>
                    <strong className="text-white text-sm">نرسری تا جماعت پنجم</strong>
                  </div>
                  <div className="bg-amber-950/60 p-3 rounded-xl border border-amber-700/50">
                    <span className="text-amber-300 block mb-1">تدریسی سرگرمیاں</span>
                    <strong className="text-white text-sm">ڈرائنگ و آرٹ ورک</strong>
                  </div>
                  <div className="bg-cyan-950/60 p-3 rounded-xl border border-cyan-700/50">
                    <span className="text-cyan-300 block mb-1">اخلاقی فاؤنڈیشن</span>
                    <strong className="text-white text-sm">ناظرہ قرآن و دعائیں</strong>
                  </div>
                  <div className="bg-rose-950/60 p-3 rounded-xl border border-rose-700/50">
                    <span className="text-rose-300 block mb-1">پتہ و لوکیشن</span>
                    <strong className="text-white text-sm">نوشہرہ روڈ، مومن آباد</strong>
                  </div>
                </div>

                {/* Direct Phone / WhatsApp Buttons */}
                <div className="pt-1 flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://wa.me/923157947161"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-xl transition shadow"
                  >
                    <span>واٹس ایپ: 0315-7947161</span>
                  </a>
                  <a
                    href="https://wa.me/923107115054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 rounded-xl transition shadow"
                  >
                    <span>واٹس ایپ: 03107115054</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
