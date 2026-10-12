import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Send, 
  Phone, 
  MessageCircle, 
  AlertCircle, 
  FileText, 
  Sparkles, 
  Clock, 
  User, 
  GraduationCap
} from 'lucide-react';
import { 
  ACADEMY_INFO, 
  ADMISSION_STEPS, 
  REQUIRED_DOCUMENTS, 
  CLASSES_DATA 
} from '../data/academyData';

export interface AdmissionInquiry {
  id: string;
  childName: string;
  fatherName: string;
  targetClass: string;
  phone: string;
  age: string;
  message: string;
  submittedAt: string;
}

interface AdmissionSectionProps {
  initialSelectedClass?: string;
  onInquirySubmitted?: () => void;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ 
  initialSelectedClass,
  onInquirySubmitted 
}) => {
  const [childName, setChildName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [targetClass, setTargetClass] = useState(initialSelectedClass || 'نرسری');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<AdmissionInquiry | null>(null);

  useEffect(() => {
    if (initialSelectedClass) {
      setTargetClass(initialSelectedClass);
    }
  }, [initialSelectedClass]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!childName.trim()) {
      errs.childName = 'براہِ کرم بچے کا نام درج کریں۔';
    } else if (childName.trim().length < 2) {
      errs.childName = 'نام کم از کم 2 حروف پر مشتمل ہونا چاہیے۔';
    }

    if (!fatherName.trim()) {
      errs.fatherName = 'براہِ کرم والد یا سرپرست کا نام درج کریں۔';
    }

    if (!phone.trim()) {
      errs.phone = 'براہِ کرم رابطہ نمبر درج کریں۔';
    } else {
      const cleanPhone = phone.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        errs.phone = 'براہِ کرم درست 11 ہندسوں والا فون نمبر درج کریں (مثال: 03157947161)۔';
      }
    }

    if (!targetClass) {
      errs.targetClass = 'براہِ کرم مطلوبہ جماعت منتخب کریں۔';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const inquiry: AdmissionInquiry = {
      id: 'BA-' + Math.floor(100000 + Math.random() * 900000),
      childName: childName.trim(),
      fatherName: fatherName.trim(),
      targetClass,
      phone: phone.trim(),
      age: age.trim() || 'معلومات نہیں دی گئی',
      message: message.trim() || 'کوئی اضافی پیغام نہیں',
      submittedAt: new Date().toLocaleString('ur-PK')
    };

    // Save to localStorage for staff review
    try {
      const existing = localStorage.getItem('bisma_admissions_inquiries');
      const list: AdmissionInquiry[] = existing ? JSON.parse(existing) : [];
      list.unshift(inquiry);
      localStorage.setItem('bisma_admissions_inquiries', JSON.stringify(list));
    } catch {
      // Local storage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(inquiry);
      if (onInquirySubmitted) {
        onInquirySubmitted();
      }
    }, 600);
  };

  const handleResetForm = () => {
    setChildName('');
    setFatherName('');
    setTargetClass('نرسری');
    setPhone('');
    setAge('');
    setMessage('');
    setErrors({});
    setSubmittedData(null);
  };

  const generateWhatsAppMessage = () => {
    if (!submittedData) return '';
    const text = `السلام علیکم! بسمہ اکیڈمی انتظامیہ،
میں داخلے کے سلسلے میں معلومات چاہتا ہوں:
- بچے کا نام: ${submittedData.childName}
- والد/سرپرست کا نام: ${submittedData.fatherName}
- مطلوبہ جماعت: ${submittedData.targetClass}
- رابطہ نمبر: ${submittedData.phone}
- عمر: ${submittedData.age}
- پیغام: ${submittedData.message}
- ریفرنس نمبر: ${submittedData.id}

شکریہ!`;
    return encodeURIComponent(text);
  };

  return (
    <section id="admissions" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>نیا تعلیمی سیشن</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-nastaliq leading-tight">
            داخلے جاری ہیں
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            نرسری تا جماعت پنجم — اپنے بچے کے روشن اور پراعتماد تعلیمی سفر کی ابتدا کے لیے فارم پُر کریں یا براہِ راست رابطہ فرمائیں۔
          </p>
        </div>

        {/* Admission Info & Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 text-right">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
              <div>
                <h3 className="text-2xl font-bold font-nastaliq text-emerald-800">
                  داخلہ انکوائری فارم
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  معلومات درج کریں، اکیڈمی کا عملہ جلد از جلد آپ سے رابطہ کرے گا۔
                </p>
              </div>
              <span className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/70">
                <BookOpen className="w-6 h-6" />
              </span>
            </div>

            {submittedData ? (
              /* Success Message Screen */
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-emerald-900 font-nastaliq">
                    آپ کی درخواست کامیابی سے موصول ہو گئی ہے!
                  </h4>
                  <p className="text-sm text-emerald-800 font-medium">
                    درخواست ریفرنس نمبر: <strong className="font-mono text-emerald-950 font-bold">{submittedData.id}</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-emerald-200 text-right text-xs sm:text-sm text-slate-700 space-y-1.5">
                  <p><strong>بچے کا نام:</strong> {submittedData.childName}</p>
                  <p><strong>والد کا نام:</strong> {submittedData.fatherName}</p>
                  <p><strong>مطلوبہ جماعت:</strong> {submittedData.targetClass}</p>
                  <p><strong>رابطہ نمبر:</strong> <span dir="ltr">{submittedData.phone}</span></p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  ہماری انتظامیہ جلد آپ کے دیے گئے نمبر پر رابطہ کرے گی۔ آپ فوری تصدیق کے لیے واٹس ایپ پر بھی یہی تفصیلات بھیج سکتے ہیں۔
                </p>

                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={`https://wa.me/923157947161?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl transition text-xs sm:text-sm shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>واٹس ایپ 1 (0315-7947161)</span>
                    </a>

                    <a
                      href={`https://wa.me/923107115054?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-3 rounded-xl transition text-xs sm:text-sm shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>واٹس ایپ 2 (03107115054)</span>
                    </a>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                  >
                    نیا فارم پُر کریں
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Child Name & Father Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      بچے کا نام <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="مثال: محمد احمد"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:bg-white focus:outline-none transition ${
                          errors.childName
                            ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-200'
                            : 'border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500'
                        }`}
                      />
                    </div>
                    {errors.childName && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.childName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      والد یا سرپرست کا نام <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fatherName}
                      onChange={(e) => setFatherName(e.target.value)}
                      placeholder="مثال: محمد سلیم"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:bg-white focus:outline-none transition ${
                        errors.fatherName
                          ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-200'
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500'
                      }`}
                    />
                    {errors.fatherName && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fatherName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Target Class & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      مطلوبہ جماعت <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={targetClass}
                      onChange={(e) => setTargetClass(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition"
                    >
                      {CLASSES_DATA.map((cls) => (
                        <option key={cls.id} value={cls.name}>
                          {cls.name} ({cls.englishName} - {cls.ageRange})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      رابطہ نمبر (موبائل) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0315-xxxxxxx"
                      dir="ltr"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm text-right focus:bg-white focus:outline-none transition ${
                        errors.phone
                          ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-200'
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Age & Optional note */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      بچے کی عمر یا تاریخِ پیدائش (اختیاری)
                    </label>
                    <input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="مثال: 4 سال"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      سابقہ تعلیمی ادارہ (اگر پڑھا ہو)
                    </label>
                    <input
                      type="text"
                      placeholder="اختیاری"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    کوئی سوال یا خصوصی پیغام (اختیاری)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اگر آپ کسی خاص معاملے پر استفسار کرنا چاہتے ہیں تو یہاں تحریر کریں..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition resize-none"
                  />
                </div>

                {/* Privacy reassurance */}
                <p className="text-[11px] text-slate-500 leading-normal">
                  آپ کی معلومات کو مکمل رازداری کے ساتھ صرف اکیڈمی کے داخلہ عمل اور رابطے کے لیے استعمال کیا جائے گا۔
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all active:scale-[0.99] disabled:opacity-70 text-base"
                >
                  {isSubmitting ? (
                    <span>درخواست جمع ہو رہی ہے...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-amber-300" />
                      <span>درخواست بھیجیں</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Left Side: Steps & Documents Information */}
          <div className="lg:col-span-5 space-y-6 text-right">
            
            {/* Direct Contact Card */}
            <div className="bg-gradient-to-br from-emerald-800 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-900 font-bold text-xs">
                فوری رابطہ
              </span>
              <h4 className="text-xl font-bold font-nastaliq text-white">
                داخلے کی معلومات حاصل کریں
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                اگر آپ براہِ راست بات چیت کرنا چاہتے ہیں یا اکیڈمی کا دورہ کرنا چاہتے ہیں تو دیئے گئے نمبروں پر بلا جھجھک کال کریں۔
              </p>

              <div className="space-y-2 pt-2">
                <a
                  href="tel:03157947161"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-sans"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-300" />
                    <span>کال نمبر 1</span>
                  </span>
                  <strong dir="ltr" className="text-white">0315-7947161</strong>
                </a>

                <a
                  href="tel:03107115054"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-sans"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-300" />
                    <span>کال نمبر 2</span>
                  </span>
                  <strong dir="ltr" className="text-white">03107115054</strong>
                </a>

                {/* WhatsApp Links in Sidebar */}
                <div className="pt-2 border-t border-emerald-700/60 flex flex-col gap-2">
                  <a
                    href="https://wa.me/923157947161"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 transition text-xs font-sans text-white font-bold"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>واٹس ایپ چیٹ (0315-7947161)</span>
                    </span>
                    <span className="bg-emerald-800/80 px-2 py-0.5 rounded text-[11px]">میسج کریں</span>
                  </a>

                  <a
                    href="https://wa.me/923107115054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 transition text-xs font-sans text-white font-bold"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>واٹس ایپ چیٹ (03107115054)</span>
                    </span>
                    <span className="bg-emerald-800/80 px-2 py-0.5 rounded text-[11px]">میسج کریں</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Admission Steps */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="text-lg font-bold font-nastaliq text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span>داخلہ کا مرحلہ وار طریقہ کار</span>
              </h4>

              <div className="space-y-3.5">
                {ADMISSION_STEPS.map((st) => (
                  <div key={st.step} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5 font-sans">
                      {st.step}
                    </div>
                    <div>
                      <strong className="block text-slate-900">{st.title}</strong>
                      <span className="text-slate-600 leading-relaxed">{st.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="text-lg font-bold font-nastaliq text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                <span>ضروری دستاویزات برائے داخلہ</span>
              </h4>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {REQUIRED_DOCUMENTS.map((doc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
