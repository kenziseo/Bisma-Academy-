import React from 'react';
import { 
  BookOpenCheck, 
  HeartHandshake, 
  PenTool, 
  Layers, 
  Users, 
  Sparkles,
  Check
} from 'lucide-react';
import { PROGRAMS_DATA } from '../data/academyData';

export const ProgramsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-emerald-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-600" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-blue-700" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-teal-700" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6 text-indigo-700" />;
    }
  };

  return (
    <section id="programs" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>تعلیمی منہاج</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-nastaliq leading-tight">
            ہمارے تعلیمی پروگرام
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            ہماری تدریسی حکمت عملی بچے کے فہم، اخلاق اور تخلیقی صلاحیتوں کو متوازن بنانے کے لیے ترتیب دی گئی ہے۔
          </p>
        </div>

        {/* Programs Grid with Vibrant Colorful Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS_DATA.map((prog, index) => {
            const progThemes = [
              { bg: 'bg-gradient-to-b from-emerald-50/80 via-white to-white border-emerald-300', iconBg: 'bg-emerald-100 text-emerald-800', checkBg: 'bg-emerald-100 text-emerald-700', borderHover: 'hover:border-emerald-400' },
              { bg: 'bg-gradient-to-b from-amber-50/80 via-white to-white border-amber-300', iconBg: 'bg-amber-100 text-amber-800', checkBg: 'bg-amber-100 text-amber-700', borderHover: 'hover:border-amber-400' },
              { bg: 'bg-gradient-to-b from-sky-50/80 via-white to-white border-sky-300', iconBg: 'bg-sky-100 text-sky-800', checkBg: 'bg-sky-100 text-sky-700', borderHover: 'hover:border-sky-400' },
              { bg: 'bg-gradient-to-b from-rose-50/80 via-white to-white border-rose-300', iconBg: 'bg-rose-100 text-rose-800', checkBg: 'bg-rose-100 text-rose-700', borderHover: 'hover:border-rose-400' },
              { bg: 'bg-gradient-to-b from-purple-50/80 via-white to-white border-purple-300', iconBg: 'bg-purple-100 text-purple-800', checkBg: 'bg-purple-100 text-purple-700', borderHover: 'hover:border-purple-400' }
            ];
            const th = progThemes[index % progThemes.length];

            return (
              <div
                key={prog.id}
                className={`p-7 rounded-3xl border ${th.bg} ${th.borderHover} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-right flex flex-col justify-between shadow-xs`}
              >
                <div>
                  {/* Icon & English title */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${th.iconBg} border border-white flex items-center justify-center shadow-xs`}>
                      {getIcon(prog.icon)}
                    </div>
                    <span className="text-xs font-english font-medium text-slate-400">
                      {prog.englishTitle}
                    </span>
                  </div>

                  {/* Urdu Title & Description */}
                  <h3 className="text-xl font-bold font-nastaliq text-slate-900 mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">
                    {prog.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {prog.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <div className={`w-4 h-4 rounded-full ${th.checkBg} flex items-center justify-center shrink-0`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100/70 flex items-center justify-between text-xs text-slate-400">
                  <span>بسمہ اکیڈمی پروگرام</span>
                  <span className="text-emerald-700 font-bold">باقاعدہ سلیبس</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
