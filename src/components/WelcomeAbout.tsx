import React from 'react';
import { 
  Heart, 
  Target, 
  Users, 
  Sparkles, 
  CheckCircle, 
  GraduationCap, 
  Building2,
  Clock
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const WelcomeAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>ہمارے بارے میں</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-nastaliq leading-tight">
            بسمہ اکیڈمی میں خوش آمدید
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            نوشہرہ روڈ، مومن آباد، گوجرانوالہ میں واقع ایک بااعتماد ادارہ جہاں ہر بچے کی ابتدائی فاؤنڈیشن کو مضبوط، محفوظ اور باوقار بنایا جاتا ہے۔
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and Pillars Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                <strong>بسمہ اکیڈمی</strong> کی بنیاد اس پرخلوص سوچ پر رکھی گئی ہے کہ ابتدائی تعلیم محض کتابیں حفظ کروانے کا نام نہیں، بلکہ بچے کی فکری صلاحیتوں، بول چال کی خود اعتمادی اور اخلاقی تربیت کی بنیاد رکھنے کا حساس مرحلہ ہے۔
              </p>
              <p>
                ہم نرسری اور پریپ کے ننھے بچوں سے لے کر جماعت پنجم کے طلبہ تک ایک دوستانہ، محبت بھرا اور پرسکون تعلیمی ماحول فراہم کرتے ہیں، تاکہ بچہ روزانہ سکول خوشی اور شوق سے آئے اور اس میں سیکھنے کا جذبہ پروان چڑھے۔
              </p>
            </div>

            {/* 4 Pillars Cards with Colorful Vibrant Themes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200/80 hover:border-emerald-400 hover:shadow-md transition group">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">ٹھوس بنیادی فاؤنڈیشن</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  فونکس، حروف شناسی، ہینڈ رائٹنگ اور بنیادی ریاضی پر گہری توجہ تاکہ اعلیٰ درجات میں کوئی کمی نہ رہے۔
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50/50 border border-rose-200/80 hover:border-rose-400 hover:shadow-md transition group">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">ڈرائنگ و تخلیقی محبت کا ماحول</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  سختی اور روایتی بینچوں کے بجائے قالین اور کشنز پر بیٹھ کر رنگوں اور ڈرائنگ کے ذریعے خوشگوار سیکھنا۔
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200/80 hover:border-sky-400 hover:shadow-md transition group">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">والدین سے قریبی اشتراک</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  بچے کی ڈائری، حاضری اور کارکردگی کے حوالے سے والدین کے ساتھ مسلسل اور ذمہ دارانہ رابطہ۔
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50/50 border border-amber-200/80 hover:border-amber-400 hover:shadow-md transition group">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">اخلاقی اور دینی اقدار</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ناظرہ قرآن، مسنون دعائیں اور سچائی، صفائی و احترام جیسی عادات کو روزمرہ عمل کا حصہ بنانا۔
                </p>
              </div>
            </div>

            {/* Extensible Future Readiness Note */}
            <div className="p-3.5 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border border-emerald-300 rounded-xl text-xs sm:text-sm text-emerald-950 flex items-center gap-3 shadow-xs">
              <Building2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                <strong>توسیع کا عزم:</strong> اکیڈمی اس وقت نرسری تا جماعت پنجم تعلیم فراہم کر رہی ہے، اور مستقبل میں طلبہ کے تسلسل کے لیے اگلے درجات تک توسیع کی منصوبہ بندی شامل ہے۔
              </span>
            </div>

          </div>

          {/* Visual Showcase Card with Kids Art on Cushions */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Background colorful gradient blur */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-rose-500 to-amber-400 rounded-3xl opacity-30 blur-xl"></div>
              
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white">
                <div className="relative h-64 sm:h-76">
                  <img
                    src="/src/assets/images/kids_art_cushions_1791821271381.jpg"
                    alt="بچے رنگین کوشنز پر بیٹھ کر پینٹنگ اور ڈرائنگ کرتے ہوئے - بسمہ اکیڈمی"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  <div className="absolute bottom-4 right-4 left-4 text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold mb-2 shadow">
                      🎨 دوستانہ و رنگین تعلیمی ماحول
                    </span>
                    <h3 className="text-xl font-bold font-nastaliq text-white">
                      کشنز پر بیٹھ کر تخلیقی ڈرائنگ اور علم کی بنیاد
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-sm">
                    <span className="text-slate-400">موجودہ کلاسز:</span>
                    <span className="font-bold text-amber-300">نرسری تا جماعت پنجم</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-sm">
                    <span className="text-slate-400">تعلیمی اوقات:</span>
                    <span className="font-medium text-slate-200">صبح 8:00 تا دوپہر 1:30</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-sm">
                    <span className="text-slate-400">مقام:</span>
                    <span className="font-medium text-slate-200 text-xs sm:text-sm">نوشہرہ روڈ، مومن آباد</span>
                  </div>

                  <div className="pt-2">
                    <div className="bg-emerald-950/80 border border-emerald-800/80 p-3 rounded-xl text-center">
                      <p className="text-xs text-emerald-200 mb-1">
                        اپنے بچے کے روشن اور پُراعتماد مستقبل کے لیے تشریف لائیں:
                      </p>
                      <a
                        href="tel:03157947161"
                        className="inline-flex items-center justify-center gap-2 font-bold text-white text-sm hover:text-amber-300 transition"
                      >
                        <span dir="ltr">0315-7947161</span>
                        <span>/</span>
                        <span dir="ltr">03107115054</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
