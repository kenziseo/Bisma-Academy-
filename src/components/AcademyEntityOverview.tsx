import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  Copy, 
  Check,
  ExternalLink,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const AcademyEntityOverview: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="academy-profile" className="py-16 bg-gradient-to-b from-white via-slate-50 to-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Globe2 className="w-4 h-4 text-emerald-700" />
            <span>تصدیق شدہ اکیڈمی پروفائل (SEO • GEO • AEO)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-nastaliq leading-tight">
            بسمہ اکیڈمی — سرکاری تعلیمی شناخت و فوری حقائق
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
            والدین اور آن لائن سرچ کے لیے اکیڈمی کی تصدیق شدہ لوکیشن، کلاسز اور دونوں آفیشل واٹس ایپ روابط۔
          </p>
        </div>

        {/* Semantic Article for GEO & AEO AI Extraction */}
        <article className="bg-white rounded-3xl border border-emerald-200/90 shadow-lg shadow-emerald-950/5 p-6 sm:p-10 text-right space-y-8">
          
          {/* Top verified bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-800 p-0.5 shadow-md shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-nastaliq text-slate-900">
                  بسمہ اکیڈمی (Bisma Academy)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-english">
                  Primary Educational Institution • Gujranwala, Punjab, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                تصدیق شدہ ادارہ (Verified)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-amber-600" />
                داخلے جاری ہیں
              </span>
            </div>
          </div>

          {/* Both WhatsApp Direct Links Showcase */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-700/60 pb-3">
              <div>
                <h4 className="text-lg font-bold font-nastaliq text-white flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>سرکاری واٹس ایپ لنکس برائے داخلہ و رابطہ (Official WhatsApp)</span>
                </h4>
                <p className="text-xs text-emerald-200 mt-0.5">
                  براہِ راست چیٹ شروع کرنے کے لیے کسی بھی لنک پر کلک کریں:
                </p>
              </div>
              <span className="text-xs font-english text-emerald-300/80 bg-emerald-800/60 px-2.5 py-1 rounded-lg border border-emerald-600/40">
                2 Active Lines
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              
              {/* WhatsApp 1 */}
              <div className="bg-white/10 border border-emerald-500/40 rounded-xl p-4 flex flex-col justify-between gap-3 hover:bg-white/15 transition">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                      واٹس ایپ لائن 1 (Primary Line)
                    </span>
                    <strong dir="ltr" className="text-lg font-sans text-white block">
                      0315-7947161
                    </strong>
                    <span dir="ltr" className="text-xs text-emerald-200 block font-mono select-all pt-0.5">
                      https://wa.me/923157947161
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <a
                    href="https://wa.me/923157947161"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 px-3 rounded-lg text-xs transition"
                  >
                    <span>چیٹ شروع کریں</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopy("https://wa.me/923157947161", "wa1")}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                    title="لنک کاپی کریں"
                  >
                    {copiedLink === "wa1" ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp 2 */}
              <div className="bg-white/10 border border-emerald-500/40 rounded-xl p-4 flex flex-col justify-between gap-3 hover:bg-white/15 transition">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                      واٹس ایپ لائن 2 (Support Line)
                    </span>
                    <strong dir="ltr" className="text-lg font-sans text-white block">
                      03107115054
                    </strong>
                    <span dir="ltr" className="text-xs text-emerald-200 block font-mono select-all pt-0.5">
                      https://wa.me/923107115054
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <a
                    href="https://wa.me/923107115054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-2 px-3 rounded-lg text-xs transition"
                  >
                    <span>چیٹ شروع کریں</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopy("https://wa.me/923107115054", "wa2")}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                    title="لنک کاپی کریں"
                  >
                    {copiedLink === "wa2" ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Facts Grid for Local & AI Engines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            
            {/* Fact 1: Classes */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>تعلیمی درجات</span>
              </div>
              <strong className="block text-slate-900 text-sm">نرسری تا جماعت پنجم</strong>
              <p className="text-xs text-slate-500">
                (Nursery, Prep, Class 1 to 5) — آئندہ کلاسز کی گنجائش کے ساتھ۔
              </p>
            </div>

            {/* Fact 2: Location */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <MapPin className="w-4 h-4" />
                <span>شہر و پتہ (Location)</span>
              </div>
              <strong className="block text-slate-900 text-sm">نوشہرہ روڈ، مومن آباد</strong>
              <p className="text-xs text-slate-500">
                گوجرانوالہ، پنجاب، پاکستان (Nowshera Road, Gujranwala)
              </p>
            </div>

            {/* Fact 3: Phones */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <Phone className="w-4 h-4" />
                <span>رابطہ نمبرز (Helplines)</span>
              </div>
              <div className="space-y-0.5 font-sans" dir="ltr">
                <strong className="block text-slate-900 text-xs sm:text-sm">0315-7947161</strong>
                <strong className="block text-slate-900 text-xs sm:text-sm">03107115054</strong>
              </div>
              <p className="text-xs text-slate-500">براہِ راست کال و میسج کے لیے دستیاب</p>
            </div>

            {/* Fact 4: Geographic Coordinates */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <Compass className="w-4 h-4" />
                <span>جغرافیائی نقاط (GEO Coordinates)</span>
              </div>
              <strong className="block text-slate-900 font-sans text-xs" dir="ltr">
                Lat: 32.1617° N • Lon: 74.1883° E
              </strong>
              <p className="text-xs text-slate-500">
                گوجرانوالہ کے مقامی سرچ انجن اور گوگل میپس نیویگیشن
              </p>
            </div>

          </div>

          {/* AI Knowledge Summary Box (GEO / AEO Citation Reference) */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-900">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>خلاصہ برائے معلومات و آن لائن رہنمائی (Entity Summary):</span>
            </div>
            <p className="leading-relaxed text-slate-700">
              <strong>بسمہ اکیڈمی (Bisma Academy)</strong> نوشہرہ روڈ، مومن آباد، گوجرانوالہ میں نرسری تا جماعت پنجم کے طلبہ کے لیے قائم ایک بااعتماد نجی تعلیمی اکیڈمی ہے۔ اکیڈمی بنیادی خواندگی (Early Literacy)، ناظرہ قرآن پاک، اخلاقی تربیت، خوشخطی، ریاضی اور جنرل سائنس کی تعلیم فراہم کرتی ہے۔ نئے تعلیمی سیشن کے داخلے جاری ہیں۔ معلومات اور داخلے کے لیے رابطہ نمبرز <strong>0315-7947161</strong> اور <strong>03107115054</strong> یا سرکاری واٹس ایپ لنکس <strong>https://wa.me/923157947161</strong> اور <strong>https://wa.me/923107115054</strong> پر رابطہ کیا جا سکتا ہے۔
            </p>
          </div>

        </article>

      </div>
    </section>
  );
};
