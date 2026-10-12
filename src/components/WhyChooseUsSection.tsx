import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Smile, 
  MessageSquare, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/academyData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-amber-600" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-blue-600" />;
      case 'MessageSquareCheck':
        return <MessageSquare className="w-6 h-6 text-indigo-600" />;
      case 'Sparkle':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-500/30">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>ہماری اقدار اور عزم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-nastaliq leading-tight">
            بسمہ اکیڈمی کا انتخاب کیوں؟
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            ہم صرف روایتی اسباق نہیں پڑھاتے، بلکہ بچوں کے اخلاق، سوچ اور تعلیمی خود اعتمادی کو ایک محفوظ اور مخلصانہ ماحول میں نکھارتے ہیں۔
          </p>
        </div>

        {/* 6 Colorful Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const cardAccents = [
              { border: 'hover:border-emerald-400', glow: 'from-emerald-500/10 to-teal-500/5', titleColor: 'group-hover:text-emerald-300', iconBg: 'bg-emerald-500/20 text-emerald-300' },
              { border: 'hover:border-rose-400', glow: 'from-rose-500/10 to-pink-500/5', titleColor: 'group-hover:text-rose-300', iconBg: 'bg-rose-500/20 text-rose-300' },
              { border: 'hover:border-amber-400', glow: 'from-amber-500/10 to-yellow-500/5', titleColor: 'group-hover:text-amber-300', iconBg: 'bg-amber-500/20 text-amber-300' },
              { border: 'hover:border-sky-400', glow: 'from-sky-500/10 to-blue-500/5', titleColor: 'group-hover:text-sky-300', iconBg: 'bg-sky-500/20 text-sky-300' },
              { border: 'hover:border-purple-400', glow: 'from-purple-500/10 to-fuchsia-500/5', titleColor: 'group-hover:text-purple-300', iconBg: 'bg-purple-500/20 text-purple-300' },
              { border: 'hover:border-teal-400', glow: 'from-teal-500/10 to-emerald-500/5', titleColor: 'group-hover:text-teal-300', iconBg: 'bg-teal-500/20 text-teal-300' },
            ];
            const acc = cardAccents[index % cardAccents.length];

            return (
              <div
                key={index}
                className={`bg-gradient-to-b ${acc.glow} bg-slate-800/90 border border-slate-700/80 ${acc.border} rounded-3xl p-7 text-right transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/60 group`}
              >
                <div className={`w-14 h-14 rounded-2xl ${acc.iconBg} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition`}>
                  {getIcon(item.icon)}
                </div>

                <h3 className={`text-xl font-bold font-nastaliq text-white mb-2 ${acc.titleColor} transition`}>
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-emerald-400 font-medium">بسمہ اکیڈمی معیار</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-800/60 to-slate-800/80 border border-emerald-500/30 rounded-3xl p-8 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
            “ہمارا اولین ہدف یہ ہے کہ ہر طالب علم اپنے تعلیمی سفر کے ابتدائی سالوں میں محبت، عزت اور خود اعتمادی سے فیض یاب ہو۔”
          </p>
          <span className="block mt-2 text-xs font-english tracking-widest text-amber-300 uppercase">
            Bisma Academy Commitment to Quality Early Education
          </span>
        </div>

      </div>
    </section>
  );
};
