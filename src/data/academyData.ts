export interface ClassItem {
  id: string;
  name: string;
  englishName: string;
  category: 'early' | 'primary';
  ageRange: string;
  description: string;
  features: string[];
  subjects: string[];
  badgeColor: string;
  iconName: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'activities' | 'learning' | 'creativity';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const ACADEMY_INFO = {
  nameUrdu: "بسمہ اکیڈمی",
  nameEnglish: "Bisma Academy",
  tagline: "بچوں کے روشن مستقبل کی بنیاد",
  subTagline: "نرسری تا جماعت پنجم معیاری، جدید اور اخلاقی بنیادوں پر استوار تعلیم",
  city: "گوجرانوالہ",
  cityEnglish: "Gujranwala",
  location: "نوشہرہ روڈ، مومن آباد، گوجرانوالہ، پنجاب، پاکستان",
  locationEnglish: "Nowshera Road, Mominabad, Gujranwala, Pakistan",
  geoCoordinates: {
    latitude: 32.1617,
    longitude: 74.1883
  },
  phones: [
    { display: "0315-7947161", raw: "+923157947161", clean: "03157947161" },
    { display: "0310-7115054", raw: "+923107115054", clean: "03107115054" }
  ],
  whatsappNumbers: [
    {
      display: "0315-7947161",
      number: "03157947161",
      international: "+923157947161",
      url: "https://wa.me/923157947161",
      label: "واٹس ایپ 1 (0315-7947161)",
      shortLabel: "0315-7947161"
    },
    {
      display: "0310-7115054",
      number: "03107115054",
      international: "+923107115054",
      url: "https://wa.me/923107115054",
      label: "واٹس ایپ 2 (03107115054)",
      shortLabel: "03107115054"
    }
  ],
  whatsappUrl: "https://wa.me/923157947161",
  whatsappUrlSecondary: "https://wa.me/923107115054",
  workingHours: "پیر تا ہفتہ: صبح 8:00 بجے تا دوپہر 1:30 بجے",
  fridayHours: "جمعہ: صبح 8:00 بجے تا دوپہر 12:00 بجے",
  admissionStatus: {
    isOpen: true,
    title: "داخلے جاری ہیں",
    sessionText: "برائے نیا تعلیمی سیشن (نرسری تا پنجم)",
    note: "محدود نشستیں — اپنے بچے کے محفوظ اور باوقار تعلیمی سفر کا آغاز کریں"
  }
};

export const CLASSES_DATA: ClassItem[] = [
  {
    id: "nursery",
    name: "نرسری",
    englishName: "Nursery",
    category: "early",
    ageRange: "3 تا 4 سال",
    description: "ابتدائی سیکھنے کا پُرجوش آغاز، جہاں بچے کھیلوں، سرگرمیوں، رنگوں اور فونکس کے ذریعے محبت سے پڑھنا سیکھتے ہیں۔",
    features: [
      "پنسل گرپ اور ہینڈ کوآرڈینیشن کی مشق",
      "حروف اور اعداد کی تصویری شناخت",
      "دوستانہ اور خوشگوار ماحول",
      "بنیادی گفتگو اور تمیز سکھانا"
    ],
    subjects: ["بنیادی فونکس", "اردو حروف شناسی", "بنیادی گنتی (1 تا 20)", "ڈرائنگ و رنگ آمیزی"],
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    iconName: "Baby"
  },
  {
    id: "prep",
    name: "پریپ",
    englishName: "Prep",
    category: "early",
    ageRange: "4 تا 5 سال",
    description: "بچوں کو باقاعدہ سکولنگ اور جماعت اوّل کے لیے تیار کرنے والی مضبوط اور سرگرم بنیاد۔",
    features: [
      "انگریزی اور اردو کے سادہ الفاظ کا پڑھنا",
      "حساب کے بنیادی تصورات اور اشکال",
      "ناظرہ قاعدہ اور دعائیں",
      "تخلیقی اور تصویری سرگرمیاں"
    ],
    subjects: ["انگریزی ریڈنگ و رائٹنگ", "اردو قاعدہ و الفاظ", "ریاضی بنیادی تصورات", "جنرل نالج و اسلامیات"],
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    iconName: "Sparkles"
  },
  {
    id: "class-1",
    name: "جماعت اوّل",
    englishName: "Class 1",
    category: "primary",
    ageRange: "5 تا 6 سال",
    description: "باقاعدہ پرائمری تعلیم کا پہلا سال، جہاں تلفظ، خوشخطی اور بنیادی حسابی صلاحیتوں کو پروان چڑھایا جاتا ہے۔",
    features: [
      "کتاب بینی کا شوق اور روانی سے پڑھنا",
      "اردو اور انگریزی کی صاف ستھری املا",
      "جمع اور تفریق کے بنیادی اصول",
      "نظم و ضبط اور خود اعتمادی"
    ],
    subjects: ["اردو", "English", "ریاضی (Mathematics)", "جنرل نالج / سائنس", "اسلامیات و ناظرہ"],
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    iconName: "BookOpen"
  },
  {
    id: "class-2",
    name: "جماعت دوم",
    englishName: "Class 2",
    category: "primary",
    ageRange: "6 تا 7 سال",
    description: "الفاظ سے جملوں کی طرف پیش رفت، سوچنے سمجھنے کی صلاحیت اور روزمرہ مشاہدات کی سائنسی فہم۔",
    features: [
      "مختصر پیراگراف نویسی اور فہم عبارت",
      "ضرب کے ابتدائی پہاڑے اور حسابی مشقیں",
      "سائنس کے دلچسپ تجربات و معلومات",
      "ہم نصابی سرگرمیوں میں شرکت"
    ],
    subjects: ["اردو", "English Language", "Mathematics", "جنرل سائنس", "اسلامیات"],
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    iconName: "GraduationCap"
  },
  {
    id: "class-3",
    name: "جماعت سوم",
    englishName: "Class 3",
    category: "primary",
    ageRange: "7 تا 8 سال",
    description: "مضامین کی گہرائی، سوال پوچھنے کی ہمت اور تحریری و زبانی اظہار کو نکھارنے کا سنہری مرحلہ۔",
    features: [
      "تحریری امتحانات کی باقاعدہ تیاری",
      "انگریزی گرامر اور روزمرہ بات چیت",
      "مسائل حل کرنے والی حسابی سوچ",
      "اخلاقی کہانیاں اور عملی کردار سازی"
    ],
    subjects: ["اردو قواعد و انشا", "English Grammar", "Mathematics", "سائنس", "معاشرتی علوم", "اسلامیات"],
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    iconName: "Bookmark"
  },
  {
    id: "class-4",
    name: "جماعت چہارم",
    englishName: "Class 4",
    category: "primary",
    ageRange: "8 تا 9 سال",
    description: "خود انحصاری، گہری سوچ اور مضامین پر مکمل گرفت۔ طلبہ کو پراعتماد اور ذمہ دار بنانے کی کوشش۔",
    features: [
      "جامع فہم عبارت اور تخلیقی مضمون نویسی",
      "کسور، جیومیٹری اور پیمائش کے اسباق",
      "سائنسی تصورات کی عملی جانچ",
      "گروہی سرگرمیاں اور باہمی تعاون"
    ],
    subjects: ["اردو", "English", "Mathematics", "General Science", "Social Studies", "اسلامیات"],
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    iconName: "Compass"
  },
  {
    id: "class-5",
    name: "جماعت پنجم",
    englishName: "Class 5",
    category: "primary",
    ageRange: "9 تا 10 سال",
    description: "پرائمری مرحلے کی تکمیل اور مڈل کلاسز کے لیے بہترین تعلیمی اور اخلاقی تیاری۔",
    features: [
      "مستقبل کے درجات کے لیے ٹھوس علمی بنیاد",
      "انگریزی و اردو میں پراعتماد بول چال اور تحریر",
      "ریاضی و سائنس کے پیچیدہ موضوعات کی آسان فہم",
      "کردار سازی اور قیادت کے اوصاف"
    ],
    subjects: ["اردو ایڈوانسڈ", "English Composition", "Mathematics", "Science", "معاشرتی علوم", "اسلامیات"],
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    iconName: "Award"
  }
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "prog-foundational",
    title: "بنیادی خواندگی اور اعداد شناسی",
    englishTitle: "Early Literacy & Numeracy",
    description: "بچوں میں پڑھنے، لکھنے اور حساب کتاب کے بنیادی تصورات کو پختہ بنانا تاکہ آئندہ کلاسز میں کبھی مشکل پیش نہ آئے۔",
    highlights: ["فونکس اور صوتیات پر مبنی تدریس", "روزمرہ عملی مثالوں سے حساب", "بچوں کی عمر کے مطابق تدریسی مواد"],
    icon: "BookOpenCheck"
  },
  {
    id: "prog-quran",
    title: "ناظرہ قرآن پاک اور اخلاقی تربیت",
    englishTitle: "Nazra Quran & Moral Tarbiyah",
    description: "تلفظ اور تجوید کے بنیادی قواعد کے ساتھ ناظرہ قرآن مجید کی تعلیم اور روزمرہ دعاؤں و اسلامی اقدار کا اہتمام۔",
    highlights: ["تجوید کے بنیادی اصول", "مسنون دعائیں اور کلمے", "والدین اور بڑوں کے ادب کی عملی تربیت"],
    icon: "HeartHandshake"
  },
  {
    id: "prog-handwriting",
    title: "خوشخطی اور درست تلفظ (اردو و انگلش)",
    englishTitle: "Handwriting & Phonics",
    description: "بچپن ہی سے خوبصورت لکھائی اور درست تلفظ کی عادت پختہ کی جاتی ہے جو طالب علم کے پورے تعلیمی سفر میں معاون ثابت ہوتی ہے۔",
    highlights: ["اردو نستعلیق و خطِ شکستہ کے بنیادی اصول", "انگریزی کرسیو اور پرنٹ رائٹنگ", "صحیح مخارج کے ساتھ ادائیگی"],
    icon: "PenTool"
  },
  {
    id: "prog-activity",
    title: "سرگرمی پر مبنی تدریس",
    englishTitle: "Activity-Based Learning",
    description: "صرف روایتی رٹہ لگانے کے بجائے تصویری چارٹس، ماڈلز اور تعلیمی گیمز کے ذریعے بچوں کی فطری تجسس کو بیدار کیا جاتا ہے۔",
    highlights: ["عملی چارٹس اور فلیش کارڈز", "انٹرایکٹو گروپ ورک", "بچوں کی ذہنی صلاحیتوں کی بیداری"],
    icon: "Layers"
  },
  {
    id: "prog-parents",
    title: "والدین سے مسلسل مشاورت",
    englishTitle: "Parent-Teacher Partnership",
    description: "بچے کی روزانہ اور ماہانہ تعلیمی و اخلاقی پیش رفت سے والدین کو باقاعدگی سے آگاہ رکھا جاتا ہے تاکہ مشترکہ کوشش رنگ لائے۔",
    highlights: ["ماہانہ کارکردگی رپورٹس", "والدین اساتذہ رابطہ اجلاس", "انفرادی توجہ اور خصوصی رہنمائی"],
    icon: "Users"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "بچوں کے لیے دوستانہ و محفوظ ماحول",
    desc: "محبت، احترام اور شفقت پر مبنی کلاس روم کا ماحول جہاں بچہ بلا خوف و جھجھک سیکھتا ہے۔",
    icon: "ShieldCheck"
  },
  {
    title: "بنیادی تعلیم پر خصوصی توجہ",
    desc: "پرائمری سطح کے ہر بچے کے فکری لیول کے مطابق تدریس تاکہ کوئی بچہ پیچھے نہ رہے۔",
    icon: "Target"
  },
  {
    title: "سیکھنے کے شوق کی حوصلہ افزائی",
    desc: "روایتی سختی کے بجائے حوصلہ افزائی اور شاباش کا طریقہ کار، جس سے پڑھائی بوجھ نہیں بلکہ شوق بنتی ہے۔",
    icon: "Smile"
  },
  {
    title: "والدین سے مؤثر اور بروقت رابطہ",
    desc: "بچے کی حاضری، رویے اور پڑھائی کی ہر پیش رفت پر والدین سے قریبی اور ذمہ دارانہ اشتراک۔",
    icon: "MessageSquareCheck"
  },
  {
    title: "اچھی تربیت، شائستگی اور نظم و ضبط",
    desc: "صرف کتابی علم نہیں بلکہ تہذیب، صفائی، سچائی اور وقت کی پابندی کی عملی مشق۔",
    icon: "Sparkle"
  },
  {
    title: "مستقبل کی کلاسز کے لیے آسان توسیع",
    desc: "نرسری تا پنجم کی مستحکم فاؤنڈیشن کے بعد آئندہ تعلیمی درجات کی تیاری کا جامع نظام۔",
    icon: "TrendingUp"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "قالین پر بیٹھ کر تخلیقی ڈرائنگ اور رنگ آمیزی",
    category: "creativity",
    categoryLabel: "ڈرائنگ و آرٹ",
    imageUrl: "/src/assets/images/kids_drawing_colorful_1791821229904.jpg",
    caption: "ننھے بچے قالین پر بیٹھ کر آزادی اور خوشی کے ساتھ کریونز سے سورج، رینبو اور حروف کی خوبصورت ڈرائنگ بناتے ہوئے۔"
  },
  {
    id: "g2",
    title: "رنگین کوشنز پر بیٹھ کر پینٹنگ اور تتلیاں بنانا",
    category: "activities",
    categoryLabel: "رنگ آمیزی",
    imageUrl: "/src/assets/images/kids_art_cushions_1791821271381.jpg",
    caption: "روایتی بینچوں اور سختی سے پاک دوستانہ ماحول، جہاں بچے پرسکون کشنز پر بیٹھ کر پھولوں اور تتلیوں کے رنگ بھرتے ہیں۔"
  },
  {
    id: "g3",
    title: "بچوں کے ہاتھ کے بنائے ہوئے شاہکاروں کی خوشی",
    category: "learning",
    categoryLabel: "بچوں کا آرٹ",
    imageUrl: "/src/assets/images/kids_creative_fun_1791821302684.jpg",
    caption: "طلبہ و طالبات اپنی تخلیق کردہ رنگین ڈرائنگز کے ساتھ خوشی اور فخر سے مسکراتے ہوئے۔"
  },
  {
    id: "g4",
    title: "تخلیقی آرٹ اور مٹی کے ماڈلنگ سیشنز",
    category: "creativity",
    categoryLabel: "تخلیقی سرگرمیاں",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    caption: "ہاتھوں سے مختلف اشکال اور رنگ برنگے ڈیزائن بنانا جس سے بچوں کی ذہنی اور تخلیقی صلاحیتیں پروان چڑھتی ہیں۔"
  },
  {
    id: "g5",
    title: "رنگین تصویری کتب اور باہمی تفریحی مطالعہ",
    category: "learning",
    categoryLabel: "تصویری مطالعہ",
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    caption: "دلچسپ کہانیوں اور رنگین چارٹس کے ذریعے بچوں میں کتاب بینی کا شوق اور خود اعتمادی پیدا کرنا۔"
  },
  {
    id: "g6",
    title: "فونکس اور حروف شناسی کی عملی مشقیں",
    category: "activities",
    categoryLabel: "عملی سرگرمیاں",
    imageUrl: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=800&q=80",
    caption: "اردو اور انگریزی حروف کو کھلونوں اور عملی کارڈز کے ساتھ تفریحی انداز میں سیکھنے کا سیشن۔"
  }
];

export const ADMISSION_STEPS = [
  {
    step: "1",
    title: "معلومات اور رابطہ",
    desc: "اکیڈمی تشریف لائیں یا دی گئی فون نمبرز پر رابطہ کر کے مطلوبہ جماعت کی تفصیلات معلوم کریں۔"
  },
  {
    step: "2",
    title: "انکوائری فارم کی تکمیل",
    desc: "آن لائن یا بالمشافہ داخلہ فارم مکمل کریں اور بچے کی بنیادی معلومات فراہم کریں۔"
  },
  {
    step: "3",
    title: "بنیادی تعلیمی جائزہ",
    desc: "بچے کی مناسب جماعت کے تعین کے لیے ایک محبت بھرا اور آسان غیر رسمی تعلیمی جائزہ۔"
  },
  {
    step: "4",
    title: "داخلہ کنفرمیشن اور سیشن کا آغاز",
    desc: "نشست کی تصدیق، کتابوں اور وردی کی تفصیلات کی فراہمی، اور روشن تعلیمی سفر کا آغاز۔"
  }
];

export const REQUIRED_DOCUMENTS = [
  "بچے کا کمپیوٹرائزڈ 'ب' فارم (B-Form) یا برتھ سرٹیفکیٹ کی کاپی",
  "والد یا سرپرست کے قومی شناختی کارڈ (CNIC) کی کاپی",
  "بچے کی 2 عدد تازہ ترین پاسپورٹ سائز تصاویر",
  "پچھلے سکول کا رزلٹ کارڈ یا لیونگ سرٹیفکیٹ (اگر پہلے کسی سکول میں پڑھ چکے ہوں)"
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "بسمہ اکیڈمی میں کن جماعتوں کے داخلے ہو رہے ہیں؟",
    answer: "اکیڈمی میں اس وقت نرسری، پریپ اور جماعت اوّل تا جماعت پنجم (Nursery to Class 5) کے باقاعدہ داخلے جاری ہیں، جنہیں مستقبل میں مزید درجات تک وسعت دی جائے گی۔"
  },
  {
    question: "اکیڈمی کا صحیح پتہ اور رابطہ کے اوقات کیا ہیں؟",
    answer: "بسمہ اکیڈمی نوشہرہ روڈ، مومن آباد، گوجرانوالہ میں واقع ہے۔ دفتری اوقات پیر تا ہفتہ صبح 8:00 تا دوپہر 1:30 بجے تک ہیں۔ آپ 0315-7947161 یا 03107115054 پر بھی رابطہ کر سکتے ہیں۔"
  },
  {
    question: "کیا اکیڈمی میں ناظرہ قرآن پاک اور دینی تعلیم شامل ہے؟",
    answer: "جی ہاں! نصابی کتب کے ساتھ ساتھ ناظرہ قرآن پاک کے بنیادی مخارج، مسنون دعائیں اور اسلامی اخلاقی اقدار کی روزمرہ بنیادوں پر باقاعدہ تربیت دی جاتی ہے۔"
  },
  {
    question: "کیا بچوں کی ہینڈ رائٹنگ اور خوشخطی پر خصوصی توجہ دی جاتی ہے؟",
    answer: "بالکل۔ اردو نستعلیق اور انگلش لکھائی کو سنوارنے کے لیے کلاس ٹیچرز روزانہ کی بنیاد پر کاپیوں کے جائزے اور مخصوص مشقوں پر خصوصی محنت کرتے ہیں۔"
  },
  {
    question: "والدین کو بچے کی کارکردگی کے بارے میں کیسے آگاہ کیا جاتا ہے؟",
    answer: "ماہانہ ٹیسٹ رپورٹس، باقاعدہ ڈائری چیکنگ اور والدین اساتذہ ملاقاتوں کے ذریعے والدین کو بروقت آگاہ رکھا جاتا ہے۔"
  }
];
