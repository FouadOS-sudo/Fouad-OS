/* Update this value with the public URL of your release before deploying. */
const DOWNLOAD_URL = "https://drive.google.com/file/d/1vL8kPheS2MlntShZMVifSsJUjTRkf_x8/view?usp=drive_link";

const translations = {
  en: {
    navFeatures: "Features", navRequirements: "Requirements", navInstall: "Install", navDownload: "Download OS",
    release: "Live release · 2026.09.09", heroTitle: "Linux that looks<br><em>exactly how you want it.</em>",
    heroText: "Fouad OS is a fast, beautiful system built on Arch Linux, with KDE Plasma ready for your work, creativity, or play from the very first moment.",
    downloadFouad: "Download Fouad OS", explore: "Explore the system", free: "Completely free", welcome: "Welcome", welcomeSub: "Everything you need is ready", system: "System", ready: "Ready to work", fastLight: "Fast and lightweight", alwaysReady: "Always ready", modernDesign: "Modern design",
    arch: "Power and flexibility", kde: "A beautiful desktop experience", open: "Freedom and full control", live: "Try it before installing",
    madeForYou: "Made for you", featuresTitle: "Elegance that never slows you down.", featuresText: "Every detail in Fouad OS is designed to feel familiar and smooth, without limiting your ambition.",
    featureOneTitle: "An interface with life", featureOneText: "A coherent theme, welcome screen, and exclusive wallpapers give your desktop a refined identity from the first boot.",
    featureTwoTitle: "Your tools are ready", featureTwoText: "A browser, file manager, media tools, and essential productivity apps are ready to use.",
    featureThreeTitle: "Fast when it matters", featureThreeText: "The modern Arch Linux foundation brings the latest packages and excellent performance to compatible hardware.",
    featureFourTitle: "Control without limits", featureFourText: "Customize the look, applications, and workflow with complete freedom. This is truly your system.",
    currentRelease: "Current release", downloadTitle: "Start your journey with<br>Fouad OS today.", downloadText: "Download the ISO, try the system directly from a USB drive, or install it on your device in minutes.", downloadVersion: "Download Fouad OS 2026.09.09",
    version: "Version", architecture: "Architecture", fileSize: "File size", fileType: "File type", ram: "RAM", ramText: "4 GB minimum<br>8 GB recommended", storage: "Storage", storageText: "32 GB minimum<br>64 GB recommended", cpu: "64-bit processor", cpuText: "Intel or AMD processor<br>with x86_64 support",
    threeSteps: "Just three steps", installTitle: "From download to desktop.", stepOneTitle: "Download the ISO", stepOneText: "Get the latest Fouad OS release using the download button.", stepTwoTitle: "Create a bootable USB", stepTwoText: "Use Balena Etcher or Rufus to write the file to a USB drive with 8 GB or more.", stepThreeTitle: "Try or install", stepThreeText: "Boot from the USB, then choose to try the system or open the installer from the desktop.",
    yourWorld: "Your world. Your rules.", finalTitle: "Make your device<br><em>feel more like you.</em>", footer: "Made with love for the free software community.", backTop: "Back to top ↑"
  },
  ar: {
    navFeatures: "المميزات", navRequirements: "المتطلبات", navInstall: "التثبيت", navDownload: "تحميل النظام",
    release: "إصدار مباشر · 2026.09.09", heroTitle: "لينكس يبدو<br><em>كما تريد تمامًا.</em>",
    heroText: "Fouad OS هو نظام سريع وجميل مبني على Arch Linux، مع سطح مكتب KDE Plasma مُجهّز لتبدأ عملك أو إبداعك أو لعبك منذ اللحظة الأولى.",
    downloadFouad: "حمّل Fouad OS", explore: "اكتشف النظام", free: "مجاني بالكامل", welcome: "مرحبًا بك", welcomeSub: "كل ما تحتاجه جاهز هنا", system: "النظام", ready: "جاهز للعمل", fastLight: "سريع وخفيف", alwaysReady: "جاهز دائمًا", modernDesign: "تصميم عصري",
    arch: "قوة ومرونة", kde: "تجربة سطح مكتب جميلة", open: "حرية وتحكم كامل", live: "جرّبه قبل التثبيت",
    madeForYou: "صُمم لك", featuresTitle: "أناقة لا تُبطئك.", featuresText: "كل تفصيلة في Fouad OS صُممت لتكون مألوفة وسلسة، دون أن تحدّ من طموحك.",
    featureOneTitle: "واجهة تنبض بالحياة", featureOneText: "ثيم متناسق، شاشة ترحيب، وخلفيات حصرية تمنح سطح مكتبك هوية أنيقة من أول تشغيل.",
    featureTwoTitle: "كل أدواتك جاهزة", featureTwoText: "متصفح، مدير ملفات، أدوات وسائط، وتطبيقات إنتاجية أساسية جاهزة للاستخدام.",
    featureThreeTitle: "سريع عند الحاجة", featureThreeText: "أساس Arch Linux الحديث يمنحك أحدث الحزم وأداءً ممتازًا على الأجهزة المتوافقة.",
    featureFourTitle: "تحكم بلا حدود", featureFourText: "خصص المظهر، التطبيقات، وسير عملك بحرية كاملة. هذا نظامك فعلًا.",
    currentRelease: "الإصدار الحالي", downloadTitle: "ابدأ رحلتك مع<br>Fouad OS اليوم.", downloadText: "نزّل ملف ISO، جرّب النظام مباشرة من USB أو ثبّته على جهازك خلال دقائق.", downloadVersion: "تحميل Fouad OS 2026.09.09",
    version: "الإصدار", architecture: "المعمارية", fileSize: "حجم التحميل", fileType: "نوع الملف", ram: "ذاكرة RAM", ramText: "4 GB كحد أدنى<br>8 GB موصى به", storage: "مساحة تخزين", storageText: "32 GB كحد أدنى<br>64 GB موصى به", cpu: "معالج 64-bit", cpuText: "معالج Intel أو AMD<br>يدعم x86_64",
    threeSteps: "ثلاث خطوات فقط", installTitle: "من التحميل إلى سطح المكتب.", stepOneTitle: "حمّل ملف ISO", stepOneText: "احصل على أحدث إصدار من Fouad OS عبر زر التحميل.", stepTwoTitle: "أنشئ USB قابلًا للإقلاع", stepTwoText: "استخدم Balena Etcher أو Rufus لنسخ الملف إلى USB بسعة 8 GB أو أكثر.", stepThreeTitle: "جرّب أو ثبّت", stepThreeText: "أقلع من USB، ثم اختر تجربة النظام أو افتح المُثبّت من سطح المكتب.",
    yourWorld: "عالمك. قواعدك.", finalTitle: "اجعل جهازك<br><em>يشبهك أكثر.</em>", footer: "صُنع بحب للمجتمع الحر.", backTop: "العودة للأعلى ↑"
  }
};

document.querySelectorAll("[data-download]").forEach((link) => { link.href = DOWNLOAD_URL; });

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const languageToggle = document.querySelector(".language-toggle");

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("is-arabic", language === "ar");
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = dictionary[element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = dictionary[element.dataset.i18nHtml]; });
  document.querySelector(".arrow").textContent = language === "ar" ? "←" : "→";
  languageToggle.textContent = language === "ar" ? "English" : "العربية";
  languageToggle.setAttribute("aria-label", language === "ar" ? "Switch to English" : "التبديل إلى العربية");
  document.title = language === "ar" ? "Fouad OS | نظامك، بطريقتك" : "Fouad OS | Your system, your way";
  document.querySelector('meta[name="description"]').content = language === "ar" ? "Fouad OS — نظام لينكس حديث وأنيق وسهل الاستخدام." : "Fouad OS — a modern, elegant, and easy-to-use Linux distribution.";
  localStorage.setItem("fouad-os-language", language);
}

languageToggle?.addEventListener("click", () => setLanguage(document.documentElement.lang === "ar" ? "en" : "ar"));
toggle?.addEventListener("click", () => { const isOpen = nav.classList.toggle("is-open"); toggle.setAttribute("aria-expanded", String(isOpen)); });
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("is-open"); toggle?.setAttribute("aria-expanded", "false"); }));

setLanguage(localStorage.getItem("fouad-os-language") === "ar" ? "ar" : "en");
