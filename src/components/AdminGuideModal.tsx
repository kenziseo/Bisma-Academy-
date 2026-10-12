import React from 'react';
import { 
  X, 
  HelpCircle, 
  Settings, 
  Globe, 
  Image as ImageIcon, 
  PlusCircle, 
  Phone, 
  FileCode, 
  CheckCircle2,
  Server
} from 'lucide-react';

interface AdminGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminGuideModal: React.FC<AdminGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative text-right border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-nastaliq text-slate-900">
                اکیڈمی ویب سائٹ ایڈمن گائیڈ اور تدوین کا طریقہ کار
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Bisma Academy Website Management & Deployment Guide
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

        {/* Scrollable instructions */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-slate-700 leading-relaxed">
          
          {/* Section 1: Updating Content & Contact info */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>1. رابطہ نمبرز، پتہ اور معلومات تبدیل کرنے کا طریقہ</span>
            </div>
            <p className="text-xs text-slate-600">
              ویب سائٹ کا تمام اہم ڈیٹا ایک ہی مرکزی فائل <code className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-mono text-xs">src/data/academyData.ts</code> میں محفوظ ہے۔
            </p>
            <ul className="text-xs space-y-1.5 text-slate-700 list-disc list-inside">
              <li><strong>فون نمبرز:</strong> <code className="font-mono">ACADEMY_INFO.phones</code> میں اپنا نیا فون نمبر لکھیں۔</li>
              <li><strong>واٹس ایپ:</strong> <code className="font-mono">ACADEMY_INFO.whatsappUrl</code> میں نمبر تبدیل کریں۔</li>
              <li><strong>پتہ:</strong> <code className="font-mono">ACADEMY_INFO.location</code> میں پتہ اپ ڈیٹ کریں۔</li>
            </ul>
          </div>

          {/* Section 2: Adding future classes */}
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold">
              <PlusCircle className="w-4 h-4 text-blue-700" />
              <span>2. مستقبل میں نئی کلاسز (مثلاً جماعت ششم، ہفتم وغیرہ) شامل کرنا</span>
            </div>
            <p className="text-xs text-slate-600">
              جب اکیڈمی اگلے درجات تک توسیع کرے تو <code className="bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-mono text-xs">src/data/academyData.ts</code> کی لسٹ <code className="font-mono">CLASSES_DATA</code> میں نیا آبجیکٹ شامل کریں:
            </p>
            <pre className="p-3 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto text-left" dir="ltr">
{`{
  id: "class-6",
  name: "جماعت ششم",
  englishName: "Class 6",
  category: "primary",
  ageRange: "10 تا 11 سال",
  description: "مڈل کلاسز کی ابتدا اور مضامین کی گہرائی...",
  features: ["انگریزی و سائنسی مضامین", "کمپیوٹر سائنس کی مشق"],
  subjects: ["English", "Urdu", "Math", "Science", "Islamiyat"],
  badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
  iconName: "Award"
}`}
            </pre>
          </div>

          {/* Section 3: Replacing gallery photos */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold">
              <ImageIcon className="w-4 h-4 text-amber-700" />
              <span>3. گیلری اور اصل تصاویر لگانا</span>
            </div>
            <p className="text-xs text-slate-600">
              اکیڈمی کی اصل کیمرہ تصاویر لگانے کے لیے:
            </p>
            <ol className="text-xs space-y-1.5 text-slate-700 list-decimal list-inside">
              <li>اپنی تصاویر کو پروجیکٹ کے <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">public/images/</code> فولڈر میں رکھیں۔</li>
              <li><code className="bg-slate-100 px-1 py-0.5 rounded font-mono">GALLERY_ITEMS</code> میں <code className="font-mono">imageUrl</code> کو <code className="font-mono">"/images/classroom.jpg"</code> سے بدل دیں۔</li>
            </ol>
          </div>

          {/* Section 4: Hosting & Custom Domain */}
          <div className="p-5 rounded-2xl bg-slate-100 border border-slate-300 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Globe className="w-4 h-4 text-slate-700" />
              <span>4. اپنی ڈومین (Custom Domain) اور ویب ہوسٹنگ پر چلانا</span>
            </div>
            <ul className="text-xs space-y-2 text-slate-700">
              <li>
                <strong>لوکل ٹیسٹنگ:</strong> ٹرمینل میں <code className="bg-white px-2 py-0.5 rounded font-mono border">npm run dev</code> چلائیں، ویب سائٹ فوراً پورٹ 3000 پر کھل جائے گی۔
              </li>
              <li>
                <strong>پروڈکشن بلڈ:</strong> ٹرمینل میں <code className="bg-white px-2 py-0.5 rounded font-mono border">npm run build</code> چلائیں۔ اس سے ایک انتہائی تیز رفتار <code className="font-mono">dist</code> فولڈر بن جاتا ہے۔
              </li>
              <li>
                <strong>ہوسٹنگ پلیٹ فارم:</strong> آپ اس پروجیکٹ کو Vercel، Netlify، Cloud Run، یا کسی بھی روایتی cPanel پر باآسانی اپلوڈ کر سکتے ہیں۔
              </li>
              <li>
                <strong>ڈومین کنکشن:</strong> ڈومین فراہم کنندہ (جیسے GoDaddy، Namecheap یا PKNIC) میں CNAME یا A Record ہوسٹنگ سرور کی طرف پوائنٹ کر دیں (مثال: <code className="font-mono">bismaacademy.com</code> یا <code className="font-mono">bismaacademy.edu.pk</code>)۔
              </li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition"
          >
            سمجھ آگیا، بند کریں
          </button>
        </div>

      </div>
    </div>
  );
};
