import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/academyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>والدین کے لیے رہنمائی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-nastaliq leading-tight">
            عام طور پر پوچھے جانے والے سوالات
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            داخلے اور تدریسی طریقہ کار سے متعلق والدین کے عمومی سوالات کے واضح جوابات۔
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5 text-right">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-slate-800 hover:text-emerald-800 transition focus:outline-none"
                >
                  <span className="text-base font-nastaliq leading-relaxed">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-50 text-emerald-700' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
