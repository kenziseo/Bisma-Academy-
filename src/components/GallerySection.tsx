import React, { useState } from 'react';
import { 
  Sparkles, 
  Image as ImageIcon, 
  Maximize2, 
  X, 
  Layers, 
  HelpCircle,
  Camera
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/academyData';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'classroom' | 'activities' | 'learning' | 'creativity'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-100 via-amber-100 to-emerald-100 text-slate-900 text-xs font-bold border border-rose-300">
            <Camera className="w-4 h-4 text-rose-600" />
            <span>🎨 بچوں کی تخلیقی ڈرائنگ اور تصویری جھلکیاں</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-nastaliq leading-tight">
            تصاویر — بچے قالین پر بیٹھ کر خوشی سے ڈرائنگ کرتے ہوئے
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            روایتی بینچوں اور سختی کے بغیر دوستانہ ماحول، جہاں بچے نرم قالین اور کشنز پر بیٹھ کر کریونز سے اپنے تخیل کو رنگ دیتے ہیں۔
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              تمام تصاویر (6)
            </button>
            <button
              onClick={() => setSelectedFilter('creativity')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedFilter === 'creativity'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md shadow-rose-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🎨 ڈرائنگ و آرٹ ورک
            </button>
            <button
              onClick={() => setSelectedFilter('activities')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedFilter === 'activities'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🦋 رنگ آمیزی و تتلیاں
            </button>
            <button
              onClick={() => setSelectedFilter('learning')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedFilter === 'learning'
                  ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🌟 بچوں کا ہاتھ کا آرٹ
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer text-right"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Badge top right */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-800 text-xs font-bold shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Enlarge Icon top left */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-4 right-4 left-4 space-y-1">
                  <h3 className="text-base font-bold text-white font-nastaliq drop-shadow-xs">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note for Academy Administration */}
        <div className="mt-10 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 text-right">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>نوٹ برائے انتظامیہ:</strong> یہ تصویری البم حقیقی تدریسی ماڈل کی عکاسی کے لیے تیار کی گئی ہے اور اکیڈمی کی اصل تصاویر سے باآسانی تبدیل کی جا سکتی ہے۔
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-english shrink-0">
            Easily Replaceable Image Assets
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-right border border-slate-200">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 left-4 z-10 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition backdrop-blur-xs"
              aria-label="بند کریں"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-96 bg-slate-900">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-2 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  {activePhoto.categoryLabel}
                </span>
                <span className="text-xs font-english text-slate-400">Bisma Academy Gallery</span>
              </div>
              <h3 className="text-xl font-bold font-nastaliq text-slate-900">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
