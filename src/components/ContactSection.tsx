import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('براہِ کرم تمام فیلڈز مکمل فرمائیں۔');
      return;
    }
    setError('');
    setIsSent(true);
  };

  const mapEmbedUrl = "https://maps.google.com/maps?q=Nowshera+Road,+Mominabad,+Gujranwala,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Phone className="w-4 h-4 text-emerald-700" />
            <span>رابطہ اور رہنمائی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-nastaliq leading-tight">
            ہم سے رابطہ کریں
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            اکیڈمی کے داخلوں، اوقات کار یا دیگر معلومات کے لیے آپ دیئے گئے فون نمبرز، واٹس ایپ یا براہِ راست اکیڈمی تشریف لا سکتے ہیں۔
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Primary Academy Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-bold font-nastaliq text-emerald-800">
                  {ACADEMY_INFO.nameUrdu}
                </h3>
                <p className="text-xs font-english font-medium text-slate-500 uppercase tracking-wider">
                  {ACADEMY_INFO.nameEnglish} • {ACADEMY_INFO.locationEnglish}
                </p>
              </div>

              {/* Verified Phone Numbers */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-700 block">سرکاری رابطہ نمبرز (Click to Call):</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:03157947161"
                    className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/70 hover:border-emerald-300 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block">پرائمری ہیلپ لائن</span>
                        <strong dir="ltr" className="text-base text-slate-900 font-sans">0315-7947161</strong>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200">
                      کال کریں
                    </span>
                  </a>

                  <a
                    href="tel:03107115054"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100/80 hover:border-slate-300 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block">سیکنڈری ہیلپ لائن</span>
                        <strong dir="ltr" className="text-base text-slate-900 font-sans">03107115054</strong>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      کال کریں
                    </span>
                  </a>
                </div>
              </div>

              {/* WhatsApp direct actions for both numbers */}
              <div className="p-5 rounded-2xl bg-emerald-950 text-white space-y-4">
                <div className="flex items-center gap-3 text-right">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">واٹس ایپ پر فوری رابطہ اور داخلہ معلومات</h4>
                    <p className="text-xs text-emerald-200">
                      اپنے پسندیدہ نمبر پر کلک کر کے فوری واٹس ایپ میسج بھیجیں:
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href="https://wa.me/923157947161"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-500/40 text-white transition group shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-emerald-300 block">واٹس ایپ ہیلپ لائن</span>
                        <strong dir="ltr" className="text-sm font-sans text-white">0315-7947161</strong>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-300 group-hover:text-amber-300 flex items-center gap-1">
                      <span>چیٹ کریں</span>
                      <MessageCircle className="w-3.5 h-3.5" />
                    </span>
                  </a>

                  <a
                    href="https://wa.me/923107115054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-500/40 text-white transition group shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-emerald-300 block">واٹس ایپ ہیلپ لائن</span>
                        <strong dir="ltr" className="text-sm font-sans text-white">03107115054</strong>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-300 group-hover:text-amber-300 flex items-center gap-1">
                      <span>چیٹ کریں</span>
                      <MessageCircle className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Address & Working Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-right space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <MapPin className="w-5 h-5" />
                    <strong className="text-slate-900 text-sm">اکیڈمی کا مکمل پتہ:</strong>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {ACADEMY_INFO.location}
                  </p>
                  <p className="text-[11px] font-english text-slate-400">
                    {ACADEMY_INFO.locationEnglish}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-right space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-700">
                    <Clock className="w-5 h-5" />
                    <strong className="text-slate-900 text-sm">دفتری و تعلیمی اوقات:</strong>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {ACADEMY_INFO.workingHours}
                  </p>
                  <p className="text-xs text-slate-500">
                    {ACADEMY_INFO.fridayHours}
                  </p>
                </div>
              </div>

            </div>

            {/* General Inquiry Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm text-right">
              <h4 className="text-xl font-bold font-nastaliq text-slate-900 mb-1">
                براہِ راست پیغام بھیجیں
              </h4>
              <p className="text-xs text-slate-500 mb-5">
                اگر آپ کے پاس کوئی سوال یا رائے ہے تو ہمیں پیغام ارسال فرمائیں۔
              </p>

              {isSent ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                  <p className="text-sm font-bold text-emerald-900">
                    آپ کا پیغام کامیابی سے موصول ہو گیا ہے!
                  </p>
                  <p className="text-xs text-emerald-700">
                    ہمارا نمائندہ جلد آپ کے رابطے نمبر پر جواب دے گا۔
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="text-xs text-emerald-800 underline font-semibold pt-1"
                  >
                    دوسرا پیغام بھیجیں
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 text-rose-700 text-xs flex items-center gap-2 border border-rose-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">آپ کا نام</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="اپنا نام لکھیں"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">رابطہ نمبر</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0315-xxxxxxx"
                        dir="ltr"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-right focus:bg-white focus:outline-none focus:border-emerald-600 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">پیغام / سوال</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="اپنا پیغام یہاں درج کریں..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition active:scale-95"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>پیغام ارسال کریں</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Location Map & Directions (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-right">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold font-nastaliq text-lg text-slate-900">
                    نقشہ اور لوکیشن گائیڈ
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-sans">
                  نوشہرہ روڈ، گوجرانوالہ
                </span>
              </div>

              {/* Map View */}
              <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Bisma Academy Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Location Route Directions */}
              <div className="space-y-2 pt-2 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">آمد کی رہنمائی:</strong>
                    <span>
                      اکیڈمی نوشہرہ روڈ پر واقع مومن آباد گوجرانوالہ میں مرکزی اور باآسانی قابلِ رسائی مقام پر واقع ہے۔
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">راستے کی رہنمائی کے لیے کال:</strong>
                    <span>
                      اگر تشریف لاتے ہوئے راستہ تلاش کرنے میں مشکل ہو تو <strong>0315-7947161</strong> پر کال فرمائیں۔
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Nowshera+Road,+Mominabad,+Gujranwala,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition"
                >
                  <span>گوگل میپس میں کھولیں</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
