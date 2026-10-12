import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  Phone, 
  MessageCircle, 
  Trash2, 
  Download, 
  User, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { AdmissionInquiry } from './AdmissionSection';

interface InquiriesListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshCount: () => void;
}

export const InquiriesListModal: React.FC<InquiriesListModalProps> = ({ 
  isOpen, 
  onClose,
  onRefreshCount 
}) => {
  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>([]);

  const loadInquiries = () => {
    try {
      const stored = localStorage.getItem('bisma_admissions_inquiries');
      if (stored) {
        setInquiries(JSON.parse(stored));
      } else {
        setInquiries([]);
      }
    } catch {
      setInquiries([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
    }
  }, [isOpen]);

  const handleDelete = (id: string) => {
    const updated = inquiries.filter((item) => item.id !== id);
    setInquiries(updated);
    localStorage.setItem('bisma_admissions_inquiries', JSON.stringify(updated));
    onRefreshCount();
  };

  const handleClearAll = () => {
    if (window.confirm('کیا آپ تمام موصول شدہ انکوائریز کو حذف کرنا چاہتے ہیں؟')) {
      localStorage.removeItem('bisma_admissions_inquiries');
      setInquiries([]);
      onRefreshCount();
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ["Reference ID,Child Name,Father Name,Class,Phone,Age,Message,Date"];
    const rows = inquiries.map((item) => 
      `"${item.id}","${item.childName}","${item.fatherName}","${item.targetClass}","${item.phone}","${item.age}","${item.message.replace(/"/g, '""')}","${item.submittedAt}"`
    );
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `bisma_academy_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative text-right border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-nastaliq text-slate-900">
                موصول شدہ داخلہ درخواستیں ({inquiries.length})
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Bisma Academy Online Admission Inquiries
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {inquiries.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <p className="text-base font-bold text-slate-700 font-nastaliq">
                فی الحال کوئی نئی درخواست موصول نہیں ہوئی۔
              </p>
              <p className="text-xs text-slate-500">
                جیسے ہی کوئی سرپرست ویب سائٹ پر داخلہ فارم جمع کرائے گا، اس کی تفصیلات یہاں محفوظ ہو جائیں گی۔
              </p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-emerald-300 transition space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                      {inq.id}
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      مطلوبہ جماعت: <strong className="text-emerald-800">{inq.targetClass}</strong>
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 font-sans" dir="ltr">
                    {inq.submittedAt}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-400 block mb-0.5">بچے کا نام:</span>
                    <strong className="text-slate-900 text-sm">{inq.childName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">والد کا نام:</span>
                    <strong className="text-slate-900 text-sm">{inq.fatherName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">عمر:</span>
                    <span className="text-slate-800">{inq.age}</span>
                  </div>
                </div>

                {inq.message && inq.message !== 'کوئی اضافی پیغام نہیں' && (
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs text-slate-600">
                    <span className="text-slate-400 block mb-1">پیغام:</span>
                    {inq.message}
                  </div>
                )}

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${inq.phone.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span dir="ltr">{inq.phone}</span>
                    </a>

                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold hover:bg-emerald-200 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>واٹس ایپ جواب</span>
                    </a>
                  </div>

                  <button
                    onClick={() => handleDelete(inq.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                    title="درخواست ڈیلیٹ کریں"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {inquiries.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 px-4 py-2 rounded-xl hover:bg-slate-100 transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              <span>ایکسل / CSV ڈاؤن لوڈ کریں</span>
            </button>

            <button
              onClick={handleClearAll}
              className="text-xs text-rose-600 hover:text-rose-800 font-semibold px-3 py-1.5"
            >
              تمام ڈیلیٹ کریں
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
