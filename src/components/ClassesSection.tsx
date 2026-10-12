import React, { useState } from 'react';
import { 
  BookOpen, 
  Baby, 
  Sparkles, 
  GraduationCap, 
  Bookmark, 
  Compass, 
  Award,
  CheckCircle2, 
  Info, 
  ArrowLeft,
  X,
  Phone
} from 'lucide-react';
import { CLASSES_DATA, ClassItem, ACADEMY_INFO } from '../data/academyData';

interface ClassesSectionProps {
  onSelectClassForAdmission: (className: string) => void;
}

export const ClassesSection: React.FC<ClassesSectionProps> = ({ onSelectClassForAdmission }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'early' | 'primary'>('all');
  const [activeModalClass, setActiveModalClass] = useState<ClassItem | null>(null);

  const filteredClasses = CLASSES_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Baby':
        return <Baby className="w-6 h-6 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-teal-600" />;
      case 'Bookmark':
        return <Bookmark className="w-6 h-6 text-indigo-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-cyan-600" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-amber-700" />;
    }
  };

  const classThemes: Record<string, {
    headerBg: string;
    badgeBg: string;
    borderHover: string;
    accentColor: string;
    tagBg: string;
  }> = {
    'nursery': {
      headerBg: 'bg-gradient-to-r from-amber-400/15 via-rose-300/15 to-orange-300/15 border-b border-amber-200',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
      borderHover: 'hover:border-amber-400 hover:shadow-amber-500/15',
      accentColor: 'text-amber-800',
      tagBg: 'bg-amber-50 text-amber-900 border-amber-200'
    },
    'prep': {
      headerBg: 'bg-gradient-to-r from-emerald-400/15 via-teal-300/15 to-lime-300/15 border-b border-emerald-200',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      borderHover: 'hover:border-emerald-400 hover:shadow-emerald-500/15',
      accentColor: 'text-emerald-800',
      tagBg: 'bg-emerald-50 text-emerald-900 border-emerald-200'
    },
    'class-1': {
      headerBg: 'bg-gradient-to-r from-sky-400/15 via-blue-300/15 to-indigo-300/15 border-b border-sky-200',
      badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
      borderHover: 'hover:border-sky-400 hover:shadow-sky-500/15',
      accentColor: 'text-sky-800',
      tagBg: 'bg-sky-50 text-sky-900 border-sky-200'
    },
    'class-2': {
      headerBg: 'bg-gradient-to-r from-purple-400/15 via-fuchsia-300/15 to-pink-300/15 border-b border-purple-200',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
      borderHover: 'hover:border-purple-400 hover:shadow-purple-500/15',
      accentColor: 'text-purple-800',
      tagBg: 'bg-purple-50 text-purple-900 border-purple-200'
    },
    'class-3': {
      headerBg: 'bg-gradient-to-r from-orange-400/15 via-amber-300/15 to-rose-300/15 border-b border-orange-200',
      badgeBg: 'bg-orange-100 text-orange-900 border-orange-300',
      borderHover: 'hover:border-orange-400 hover:shadow-orange-500/15',
      accentColor: 'text-orange-800',
      tagBg: 'bg-orange-50 text-orange-900 border-orange-200'
    },
    'class-4': {
      headerBg: 'bg-gradient-to-r from-teal-400/15 via-emerald-300/15 to-cyan-300/15 border-b border-teal-200',
      badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
      borderHover: 'hover:border-teal-400 hover:shadow-teal-500/15',
      accentColor: 'text-teal-800',
      tagBg: 'bg-teal-50 text-teal-900 border-teal-200'
    },
    'class-5': {
      headerBg: 'bg-gradient-to-r from-indigo-400/15 via-violet-300/15 to-amber-300/15 border-b border-indigo-200',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      borderHover: 'hover:border-indigo-400 hover:shadow-indigo-500/15',
      accentColor: 'text-indigo-800',
      tagBg: 'bg-indigo-50 text-indigo-900 border-indigo-200'
    }
  };

  return (
    <section id="classes" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-100 via-amber-100 to-rose-100 text-slate-900 text-xs font-bold border border-emerald-300">
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span>رنگین اور دلچسپ تعلیمی درجات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-nastaliq leading-tight">
            ہماری کلاسز — نرسری تا جماعت پنجم
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            ہر جماعت کے لیے موزوں، مرحلہ وار اور محبت سے تیار کردہ تدریسی لائحہ عمل تاکہ بچوں کی ذہنی و اخلاقی نشوونما متوازن ہو۔
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center items-center gap-2 pt-4 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              تمام کلاسز (7)
            </button>
            <button
              onClick={() => setSelectedCategory('early')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === 'early'
                  ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ابتدائی درجات (نرسری و پریپ)
            </button>
            <button
              onClick={() => setSelectedCategory('primary')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === 'primary'
                  ? 'bg-gradient-to-r from-sky-700 to-indigo-700 text-white shadow-md shadow-sky-700/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              پرائمری درجات (اوّل تا پنجم)
            </button>
          </div>
        </div>

        {/* Classes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredClasses.map((item) => {
            const theme = classThemes[item.id] || classThemes['nursery'];
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl ${theme.borderHover} transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                <div>
                  {/* Colorful Card Top Banner */}
                  <div className={`p-5 pb-3.5 ${theme.headerBg}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                          {getIcon(item.iconName)}
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold font-nastaliq ${theme.accentColor} transition`}>
                            {item.name}
                          </h3>
                          <span className="text-xs font-english font-medium text-slate-500">
                            {item.englishName}
                          </span>
                        </div>
                      </div>

                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${theme.badgeBg}`}>
                        {item.ageRange}
                      </span>
                    </div>

                    <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-slate-700">
                      <span>🎨</span>
                      <span>ڈرائنگ، رنگ آمیزی اور اخلاقی تربیت</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4 text-right">
                    <p className="text-sm text-slate-600 leading-relaxed min-h-[4rem]">
                      {item.description}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-bold text-slate-700 block">نمایاں خصوصیات:</span>
                      {item.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Subject Badges */}
                    <div className="pt-2">
                      <span className="text-xs font-bold text-slate-700 block mb-1.5">اہم کتب و مضامین:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.subjects.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className={`text-[11px] px-2 py-0.5 rounded-lg font-medium border ${theme.tagBg}`}
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalClass(item)}
                    className="text-xs font-bold text-slate-700 hover:text-emerald-700 flex items-center gap-1 transition px-2 py-1"
                  >
                    <Info className="w-3.5 h-3.5 text-emerald-600" />
                    <span>تفصیلات</span>
                  </button>

                  <button
                    onClick={() => onSelectClassForAdmission(item.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 py-2 rounded-xl shadow-xs transition active:scale-95"
                  >
                    <span>داخلہ انکوائری</span>
                    <ArrowLeft className="w-3 h-3 text-amber-300" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Future Expansion */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-dashed border-emerald-300 max-w-2xl mx-auto shadow-xs">
          <p className="text-sm text-slate-700">
            <strong>مستقبل کی وسعت:</strong> اکیڈمی کا تدریسی ڈھانچہ اس انداز میں مرتب کیا گیا ہے کہ طلبہ کے آئندہ تعلیمی تسلسل کو برقرار رکھنے کے لیے بوقتِ ضرورت مزید کلاسز شامل کی جا سکیں۔
          </p>
        </div>

      </div>

      {/* Class Details Modal */}
      {activeModalClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-right border border-emerald-100">
            <button
              onClick={() => setActiveModalClass(null)}
              className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              aria-label="بند کریں"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                {getIcon(activeModalClass.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold font-nastaliq text-emerald-800">
                  {activeModalClass.name}
                </h3>
                <span className="text-xs font-english text-slate-400">
                  {activeModalClass.englishName} • مطلوبہ عمر: {activeModalClass.ageRange}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-5">
              {activeModalClass.description}
            </p>

            <div className="space-y-4 border-t border-slate-100 pt-4 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-900 block mb-2">تدریسی اہداف اور فوائد:</strong>
                <ul className="space-y-2">
                  {activeModalClass.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-slate-900 block mb-2">پڑھائے جانے والے مضامین:</strong>
                <div className="flex flex-wrap gap-2">
                  {activeModalClass.subjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-semibold border border-emerald-200"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={() => {
                  const targetName = activeModalClass.name;
                  setActiveModalClass(null);
                  onSelectClassForAdmission(targetName);
                }}
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl shadow-md transition text-sm"
              >
                اس جماعت کے داخلے کے لیے رابطہ کریں
              </button>
              <button
                onClick={() => setActiveModalClass(null)}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
              >
                بند کریں
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
