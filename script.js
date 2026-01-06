"use strict";

const PHONE_RAW = "+212601633330";
const PHONE_DISPLAY = "+212 6 01 63 33 30";
const ADDRESS_TEXT = "Bd 6 Novembre , Sbata, Casablanca, Morocco, 20450";
const MAP_QUERY = encodeURIComponent(ADDRESS_TEXT);
const MAP_URL = `https://www.google.com/maps?q=${MAP_QUERY}`;

const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

function setMobileNav(open){
  if (!navToggle || !mobileNav) return;
  if (open){
    mobileNav.hidden = false;
    navToggle.setAttribute('aria-expanded','true');
    navToggle.classList.add('open');
  } else {
    mobileNav.hidden = true;
    navToggle.setAttribute('aria-expanded','false');
    navToggle.classList.remove('open');
  }
}

if (navToggle && mobileNav){
  setMobileNav(false);

  navToggle.addEventListener('click', () => {
    const isOpen = !mobileNav.hidden;
    setMobileNav(!isOpen);
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setMobileNav(false));
  });

  document.addEventListener('click', (e) => {
    if (mobileNav.hidden) return;
    const within = mobileNav.contains(e.target) || navToggle.contains(e.target);
    if (!within) setMobileNav(false);
  });
}

const i18n = {
  fr: {
    brand_name: "Centre Errahik",
    brand_tagline: "Esthétique non-surgical & alternative médecine",
    nav_services: "Services",
    nav_about: "À propos",
    nav_contact: "Contact",
    nav_testimonials: "Témoignages",
    nav_gallery: "Galerie",
    nav_faq: "FAQ",
    cta_whatsapp: "WhatsApp",
    badge: "Casablanca • Sbata",
    hero_title_line1: "Centre Errahik",
    hero_title_line2: "Esthétique non-surgical & alternative médecine",
    hero_subtitle: "Nous réunissons soins esthétiques, traitements de la peau, laser, et thérapies naturelles pour votre bien-être.",
    hero_cta: "Prendre rendez-vous sur WhatsApp",
    hero_secondary: "Découvrir nos services",
    trust_1_title: "Accueil professionnel",
    trust_1_desc: "Écoute, confidentialité, suivi",
    trust_2_title: "Soins combinés",
    trust_2_desc: "Esthétique + thérapie naturelle",
    trust_3_title: "À Sbata",
    trust_3_desc: "Bd 6 Novembre, Casablanca",
    quick_contact: "Contact rapide",
    phone: "Téléphone",
    address: "Adresse",
    addr_value: "Bd 6 Novembre, Sbata, Casablanca, 20450",
    note: "Écrivez-nous sur WhatsApp pour connaître les disponibilités et recevoir une réponse rapide.",
    cta_whatsapp_message: "Envoyer un message WhatsApp",

    services_title: "Nos services",
    services_sub: "Des soins esthétiques et thérapeutiques adaptés à vos besoins.",

    s1_title: "Médecine naturelle",
    s1_desc: "Approche esthétique moderne avec accompagnement et conseils personnalisés.",
    s1_li1: "Bilan & orientation",
    s1_li2: "Suivi et recommandations",

    s2_title: "Thérapie naturelle",
    s2_desc: "Techniques naturelles pour soutenir votre bien-être et votre énergie.",
    s2_li1: "Hijama (الحجامة)",
    s2_li2: "Fatigue & douleurs",

    s3_title: "Articulations & récupération",
    s3_desc: "Soins pour les douleurs, les articulations et la récupération fonctionnelle.",
    s3_li1: "Douleurs articulaires",
    s3_li2: "Accompagnement de la fatigue",

    s4_title: "Laser & épilation",
    s4_desc: "Épilation au laser avec protocole et conseils d’entretien.",
    s4_li1: "Épilation laser",
    s4_li2: "Suivi des séances",

    s5_title: "Traitements de la peau",
    s5_desc: "Soins pour l’hyperpigmentation, mélasma, taches, et imperfections.",
    s5_li1: "Kélf / mélasma",
    s5_li2: "Taches / pigmentation",

    s6_title: "Sculpture & silhouette",
    s6_desc: "Programmes orientés bien-être pour améliorer la silhouette.",
    s6_li1: "Remodelage / نحت الجسم",
    s6_li2: "Conseils hygiène de vie",

    s7_title: "Chute de cheveux",
    s7_desc: "Accompagnement pour la chute de cheveux et la santé du cuir chevelu.",
    s7_li1: "Traitement chute de cheveux",
    s7_li2: "Conseils d’entretien",

    s8_title: "Cicatrices, tatouages",
    s8_desc: "Solutions pour atténuer cicatrices, marques et retrait de tatouage.",
    s8_li1: "Retrait de tatouage",
    s8_li2: "Cicatrices / marques",

    callout_title: "Un message = une réponse rapide",
    callout_desc: "Dites-nous votre besoin (laser, peau, cheveux, hijama…) et nous vous guidons.",
    callout_cta: "Écrire sur WhatsApp",

    about_title: "À propos du centre",
    about_p1: "Centre Errahik propose une approche qui réunit l’esthétique et la thérapie naturelle, pour accompagner chaque personne avec sérieux et bienveillance.",
    about_p2: "Notre objectif : vous aider à améliorer votre bien-être, votre peau et votre confiance, grâce à des soins adaptés.",
    f1: "Approche personnalisée",
    f2: "Hygiène et confidentialité",
    f3: "Conseils et suivi",
    hours_title: "Horaires",
    hours_note: "Indiquez vos horaires ici (ex : Lun–Sam 10:00–19:00). Pour l’instant, contactez-nous sur WhatsApp pour confirmer la disponibilité.",
    mini_location: "📍 Localisation",
    mini_phone: "📞 WhatsApp",
    about_cta: "Réserver sur WhatsApp",

    trust_title: "Confiance & Sécurité",
    trust_sub: "Votre sécurité et votre confort sont notre priorité absolue.",
    ts_1_title: "Hygiène & Stérilisation",
    ts_1_desc: "Protocoles médicaux stricts et matériel stérile à usage unique.",
    ts_2_title: "Expertise Professionnelle",
    ts_2_desc: "Équipe qualifiée et formée aux meilleures pratiques de soin.",
    ts_3_title: "Confidentialité Totale",
    ts_3_desc: "Respect absolu de votre vie privée et de votre intimité.",
    ts_4_title: "Approche Personnalisée",
    ts_4_desc: "Chaque soin est adapté à vos besoins uniques.",

    contact_title: "Contact",
    contact_sub: "Contactez-nous par WhatsApp et trouvez facilement le centre.",
    contact_card_title: "Coordonnées",
    contact_whatsapp: "WhatsApp",
    contact_address: "Adresse",
    contact_map: "Carte",
    open_map: "Ouvrir Google Maps",
    contact_note: "Astuce : Envoyez votre nom + le service souhaité (laser / peau / cheveux / hijama) pour une réponse plus rapide.",
    contact_cta: "Envoyer un message",
    form_name_label: "Nom",
    form_phone_label: "Téléphone",
    form_service_label: "Service",
    form_service_placeholder: "Choisir un service",
    form_service_opt1: "Médecine naturelle",
    form_service_opt2: "Hijama / Thérapie naturelle",
    form_service_opt3: "Laser & épilation",
    form_service_opt4: "Soins de la peau (kélf / taches)",
    form_service_opt5: "Chute de cheveux",
    form_service_opt6: "Tatouage / Cicatrices",
    form_message_label: "Message",
    form_submit: "Envoyer sur WhatsApp",
    form_sending: "Envoi...",
    form_success: "Message prêt ! WhatsApp va s’ouvrir.",
    form_error: "Erreur. Réessayez ou contactez-nous sur WhatsApp.",
    map_title: "Localisation",

    fab_text: "WhatsApp",
    footer_rights: "©",
    footer_city: "Casablanca",

    testimonials_title: "Témoignages",
    testimonials_sub: "Découvrez les expériences de nos patients satisfaits.",
    testimonial_1_text: "\"Depuis plusieurs mois, je consulte au Centre Errahik pour des soins esthétiques. L'accueil est toujours chaleureux et professionnel. Les traitements pour ma peau ont donné des résultats exceptionnels - ma peau est plus lumineuse et les imperfections ont considérablement diminué. L'équipe prend le temps d'expliquer chaque étape et de donner des conseils personnalisés pour l'entretien à domicile. Je recommande vivement ce centre à toutes mes amies.\"",
    testimonial_1_name: "Fatima Z.",
    testimonial_1_service: "Médecine naturelle",
    testimonial_2_text: "\"Je souffrais de douleurs articulaires chroniques depuis des années. Après plusieurs séances de hijama au Centre Errahik, j'ai ressenti une amélioration significative. La thérapeute est très compétente et explique parfaitement les bienfaits de chaque traitement. L'approche naturelle correspond parfaitement à mes valeurs. Le centre est propre, moderne et l'ambiance est apaisante. Un grand merci à toute l'équipe pour leur professionnalisme et leur bienveillance.\"",
    testimonial_2_name: "Ahmed M.",
    testimonial_2_service: "Thérapie naturelle",
    testimonial_3_text: "\"J'ai opté pour l'épilation au laser au Centre Errahik et je suis ravie du résultat. Les séances sont rapides, indolores grâce aux équipements modernes, et les techniciennes sont extrêmement professionnelles. Elles m'ont donné des conseils précieux pour préparer ma peau et entretenir les résultats. Après seulement quelques séances, les poils ont considérablement diminué. Le suivi personnalisé et l'attention portée à chaque détail font vraiment la différence.\"",
    testimonial_3_name: "Sara L.",
    testimonial_3_service: "Laser & épilation",

    gallery_title: "Notre Centre",
    gallery_sub: "Découvrez notre espace moderne et accueillant dédié à votre bien-être.",
    gallery_1_title: "Salle de consultation",
    gallery_2_title: "Équipements laser",
    gallery_3_title: "Zone de relaxation",
    gallery_4_title: "Réception",
    gallery_5_title: "Zone de relaxation",

    before_after_title: "Avant / Après",
    before_after_sub: "Résultats de nos traitements pour la peau et les imperfections.",
    comparison_1_title: "Traitement anti-âge",
    comparison_2_title: "Traitement peau"
    ,
    faq_title: "Questions fréquentes",
    faq_sub: "Réponses rapides avant votre visite.",
    faq_q1: "Comment réserver un rendez-vous ?",
    faq_a1: "Le plus rapide : envoyez un message WhatsApp. Indiquez votre nom + le service souhaité.",
    faq_q2: "Faut-il une consultation avant le laser ?",
    faq_a2: "Oui, un bilan permet de choisir le protocole adapté à votre peau et vos besoins.",
    faq_q3: "Où se trouve le centre ?",
    faq_a3: "Bd 6 Novembre, Sbata, Casablanca (20450). Vous pouvez ouvrir la carte Google Maps ci-dessous.",

    why_title: "Pourquoi nous choisir",
    why_sub: "Des soins de qualité dans un environnement professionnel et bienveillant.",
    why_1_title: "Équipements modernes",
    why_1_desc: "Technologies de pointe pour des résultats optimaux et sécurisés.",
    why_2_title: "Équipe qualifiée",
    why_2_desc: "Professionnels expérimentés avec une approche personnalisée.",
    why_3_title: "Hygiène & sécurité",
    why_3_desc: "Protocoles stricts pour votre sécurité et votre confort.",
    why_4_title: "Résultats garantis",
    why_4_desc: "Suivi personnalisé et conseils pour maintenir vos résultats.",
  },

  ar: {
    brand_name: "مركز الرحيق",
    brand_tagline: "التجميل الطبي و العلاج الطبيعي",
    nav_services: "الخدمات",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    cta_whatsapp: "واتساب",
    badge: "الدار البيضاء • سباتة",
    hero_title_line1: "مركز الرحيق",
    hero_title_line2: "التجميل الطبي و العلاج الطبيعي",
    hero_subtitle: "نجمع بين التجميل والعلاج الطبيعي: ليزر، علاج البشرة، نحت الجسم، الحجامة، وتساقط الشعر.",
    hero_cta: "حجز موعد عبر واتساب",
    hero_secondary: "اكتشف خدماتنا",
    trust_1_title: "استقبال احترافي",
    trust_1_desc: "خصوصية، متابعة، اهتمام",
    trust_2_title: "خدمات متكاملة",
    trust_2_desc: "تجميل + علاج طبيعي",
    trust_3_title: "في سباتة",
    trust_3_desc: "شارع 6 نونبر، الدار البيضاء",
    quick_contact: "تواصل سريع",
    phone: "الهاتف",
    address: "العنوان",
    addr_value: "Bd 6 Novembre, Sbata, Casablanca, 20450",
    note: "راسلنا على واتساب لمعرفة المواعيد والرد بسرعة.",
    cta_whatsapp_message: "إرسال رسالة واتساب",

    services_title: "خدماتنا",
    services_sub: "خدمات تجميلية وعلاجية حسب احتياجك.",

    s1_title: "التجميل الطبي",
    s1_desc: "رعاية احترافية مع نصائح وإرشاد مناسب لكل حالة.",
    s1_li1: "تقييم وتوجيه",
    s1_li2: "متابعة ونصائح",

    s2_title: "العلاج الطبيعي",
    s2_desc: "تقنيات طبيعية لدعم صحتك وطاقتك.",
    s2_li1: "الحجامة",
    s2_li2: "علاج التعب والآلام",

    s3_title: "علاج المفاصل والتعافي",
    s3_desc: "خدمات للمفاصل والآلام ودعم التعافي.",
    s3_li1: "آلام المفاصل",
    s3_li2: "مرافقة علاج التعب",

    s4_title: "الليزر وإزالة الشعر",
    s4_desc: "إزالة الشعر بالليزر مع بروتوكول ونصائح.",
    s4_li1: "إزالة الشعر بالليزر",
    s4_li2: "متابعة الجلسات",

    s5_title: "علاج البشرة",
    s5_desc: "علاج الكلف، النمش، التصبغات، ومشاكل البشرة.",
    s5_li1: "الكلف",
    s5_li2: "النمش والتصبغات",

    s6_title: "نحت الجسم",
    s6_desc: "برامج لتحسين القوام ودعم نمط حياة صحي.",
    s6_li1: "نحت الجسم",
    s6_li2: "نصائح ونمط حياة",

    s7_title: "علاج تساقط الشعر",
    s7_desc: "مرافقة لحالات تساقط الشعر وصحة فروة الرأس.",
    s7_li1: "علاج تساقط الشعر",
    s7_li2: "نصائح العناية",

    s8_title: "إزالة الوشم والندبات",
    s8_desc: "حلول لتخفيف الندبات وآثار الجلد وإزالة الوشم.",
    s8_li1: "إزالة الوشم",
    s8_li2: "الندبات والآثار",

    callout_title: "رسالة واحدة = رد سريع",
    callout_desc: "أخبرنا بالخدمة المطلوبة (ليزر/بشرة/شعر/حجامة…) وسنرشدك.",
    callout_cta: "راسلنا على واتساب",

    about_title: "من نحن",
    about_p1: "مركز الرحيق يجمع بين التجميل والعلاج الطبيعي لمرافقة كل حالة باهتمام واحترافية.",
    about_p2: "هدفنا مساعدتك على تحسين صحتك وبشرتك وثقتك بنفسك بخدمات مناسبة.",
    f1: "نهج شخصي لكل حالة",
    f2: "نظافة وخصوصية",
    f3: "نصائح ومتابعة",
    hours_title: "الأوقات",
    hours_note: "يمكنك إضافة الأوقات هنا (مثال: الإثنين–السبت 10:00–19:00). حالياً تواصل معنا على واتساب لتأكيد الموعد.",
    mini_location: "📍 الموقع",
    mini_phone: "📞 واتساب",
    mini_email: "📧 البريد الإلكتروني",
    about_cta: "احجز عبر واتساب",

    trust_title: "ثقة وأمان",
    trust_sub: "سلامتكم وراحتكم هي أولويتنا القصوى.",
    ts_1_title: "نظافة وتعقيم",
    ts_1_desc: "بروتوكولات طبية صارمة ومعدات معقمة.",
    ts_2_title: "خبرة مهنية",
    ts_2_desc: "فريق مؤهل ومدرب على أفضل الممارسات.",
    ts_3_title: "خصوصية تامة",
    ts_3_desc: "احترام كامل لخصوصيتك وسرية معلوماتك.",
    ts_4_title: "علاج مخصص",
    ts_4_desc: "كل علاج مصمم خصيصاً لاحتياجاتك.",

    contact_title: "اتصل بنا",
    contact_sub: "تواصل معنا على واتساب واطّلع على موقع المركز.",
    contact_card_title: "معلومات التواصل",
    contact_whatsapp: "واتساب",
    contact_email: "البريد الإلكتروني",
    contact_address: "العنوان",
    contact_map: "الخريطة",
    open_map: "فتح خرائط Google",
    contact_note: "نصيحة: أرسل اسمك + الخدمة المطلوبة (ليزر/بشرة/شعر/حجامة) للحصول على رد أسرع.",
    contact_cta: "إرسال رسالة",
    form_name_label: "الاسم",
    form_phone_label: "الهاتف",
    form_service_label: "الخدمة",
    form_service_placeholder: "اختر خدمة",
    form_service_opt1: "التجميل الطبي",
    form_service_opt2: "الحجامة / العلاج الطبيعي",
    form_service_opt3: "الليزر وإزالة الشعر",
    form_service_opt4: "علاج البشرة (كلف / تصبغات)",
    form_service_opt5: "علاج تساقط الشعر",
    form_service_opt6: "إزالة الوشم / الندبات",
    form_message_label: "رسالتك",
    form_submit: "إرسال عبر واتساب",
    form_sending: "جار الإرسال...",
    form_success: "تم تجهيز الرسالة! سيفتح واتساب الآن.",
    form_error: "وقع خطأ. حاول مرة أخرى أو تواصل عبر واتساب.",
    map_title: "الموقع",

    fab_text: "واتساب",
    footer_rights: "©",
    footer_city: "الدار البيضاء",

    testimonials_title: "تأكيدات",
    testimonials_sub: "اكتشف تجارب مرضانا الراضين.",
    testimonial_1_text: "\"منذ عدة أشهر، أستشير في مركز الرحيق للعناية التجميلية. الاستقبال دائما دافئ ومحترف. العلاجات لبشرتي أعطت نتائج استثنائية - بشرتي أكثر إشراقا والعيوب انخفضت بشكل كبير. الفريق يأخذ الوقت لشرح كل خطوة وإعطاء نصائح مخصصة للعناية في المنزل. أوصي بهذا المركز بشدة لجميع صديقاتي.\"",
    testimonial_1_name: "فاطمة ز.",
    testimonial_1_service: "الطب التجميلي",
    testimonial_2_text: "\"كنت أعاني من آلام المفاصل المزمنة لسنوات. بعد عدة جلسات حجامة في مركز الرحيق، شعرت بتحسن كبير. المعالجة ماهرة جدا وتشرح بشكل مثالي فوائد كل علاج. النهج الطبيعي يتناسب تماما مع قيمي. المركز نظيف، حديث والبيئة هادئة. شكرا كبيرا للفريق بأكمله على احترافيتهم وطيبتهم.\"",
    testimonial_2_name: "أحمد م.",
    testimonial_2_service: "العلاج الطبيعي",
    testimonial_3_text: "\"اخترت إزالة الشعر بالليزر في مركز الرحيق وأنا سعيدة بالنتيجة. الجلسات سريعة، غير مؤلمة بفضل المعدات الحديثة، والفنيات محترفات للغاية. أعطوني نصائح قيمة لتحضير بشرتي والحفاظ على النتائج. بعد بضع جلسات فقط، انخفض الشعر بشكل كبير. المتابعة الشخصية والاهتمام بكل التفاصيل يجعل الفرق حقا.\"",
    testimonial_3_name: "سارة ل.",
    testimonial_3_service: "الليزر والإزالة",

    before_after_title: "قبل / بعد",
    before_after_sub: "نتائج علاجاتنا لبشرة والعيوب.",
    comparison_1_title: "علاج مضاد للشيخوخة",
    comparison_2_title: "علاج البشرة",

    gallery_title: "مركزنا",
    gallery_sub: "اكتشف مساحاتنا الحديثة والمريحة المخصصة لرفاهيتك.",
    gallery_1_title: "قاعة الاستشارة",
    gallery_2_title: "معدات الليزر",
    gallery_3_title: "منطقة الاسترخاء",
    gallery_4_title: "الاستقبال",
    gallery_5_title: "منطقة الاسترخاء"
  }
};

function setTextByLang(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.lang = lang === "ar" ? "ar" : "fr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang][key];
    if (typeof value === "string") el.textContent = value;
  });

  const langLabel = document.getElementById("langLabel");
  const langAlt = document.getElementById("langAlt");
  if (langLabel && langAlt) {
    if (lang === "ar") { langLabel.textContent = "AR"; langAlt.textContent = "FR"; }
    else { langLabel.textContent = "FR"; langAlt.textContent = "AR"; }
  }

  document.title = (lang === "ar")
    ? "مركز الرحيق | التجميل الطبي و العلاج الطبيعي"
    : "Centre Errahik | Esthétique non-surgical & alternative médecine";
}

function buildWhatsAppLink(lang) {
  const msg = (lang === "ar")
    ? "السلام عليكم، بغيت ناخد موعد فمركز الرحيق. من فضلكم هاد الخدمة: "
    : "Bonjour, je souhaite prendre rendez-vous au Centre Errahik. Service souhaité : ";

  const text = encodeURIComponent(msg);
  return `https://wa.me/${PHONE_RAW.replace("+","")}?text=${text}`;
}

function wireLinks() {
  const currentLang = document.documentElement.getAttribute("data-lang") || "fr";

  const wa = buildWhatsAppLink(currentLang);
  const ids = [
    "whatsappTop","whatsappHero","whatsappCard","whatsappCallout",
    "whatsappAbout","whatsappLink","fabWhatsapp"
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = wa;
  });

  const addressLink = document.getElementById("addressLink");
  if (addressLink) addressLink.href = MAP_URL;

  const mapLink = document.getElementById("mapLink");
  if (mapLink) mapLink.href = MAP_URL;
}

(function init(){
  document.getElementById("year").textContent = new Date().getFullYear();

  let lang = "fr";
  const saved = localStorage.getItem("alrahiq_lang");
  if (saved === "ar" || saved === "fr") lang = saved;

  setTextByLang(lang);
  wireLinks();

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-lang") || "fr";
      const next = current === "fr" ? "ar" : "fr";
      localStorage.setItem("alrahiq_lang", next);
      setTextByLang(next);
      wireLinks();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all fade-in-up elements
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // Loading animation
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // Register service worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }

  // Contact form handling (WhatsApp)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const currentLang = document.documentElement.getAttribute("data-lang") || "fr";
      const name = (contactForm.querySelector('#name')?.value || "").trim();
      const phone = (contactForm.querySelector('#phone')?.value || "").trim();
      const service = (contactForm.querySelector('#service')?.value || "").trim();
      const message = (contactForm.querySelector('#message')?.value || "").trim();

      // Basic validation
      if (!name || !service || !message) {
        showFormMessage(i18n[currentLang].form_error_required, 'error');
        return;
      }

      const lines = [
        `${i18n[currentLang].wa_form_title}`,
        `${i18n[currentLang].wa_form_name}: ${name}`,
        phone ? `${i18n[currentLang].wa_form_phone}: ${phone}` : null,
        `${i18n[currentLang].wa_form_service}: ${service}`,
        `${i18n[currentLang].wa_form_message}: ${message}`
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join("\n"));
      const waUrl = `https://wa.me/${PHONE_RAW.replace('+','')}?text=${text}`;

      window.open(waUrl, "_blank", "noopener");
      showFormMessage(i18n[currentLang].form_success, 'success');
      contactForm.reset();
    });
  }

  function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();

    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;

    const form = document.getElementById('contactForm');
    if (form) form.appendChild(messageEl);

    if (type === 'success') {
      setTimeout(() => messageEl.remove(), 5000);
    }
  }

})();
  // Reveal animations on scroll
  const revealEls = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('animate'));
  }

  // Gallery lightbox
  const galleryItems = document.querySelectorAll('.gallery__item');
  if (galleryItems.length) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `
      <div class="lightbox__content" role="dialog" aria-modal="true" aria-label="Image">
        <div class="lightbox__header">
          <div class="lightbox__title" id="lightboxTitle"></div>
          <button class="lightbox__close" type="button" aria-label="Close">✕</button>
        </div>
        <img class="lightbox__img" id="lightboxImg" alt="" />
      </div>
    `;
    document.body.appendChild(lb);

    const imgEl = lb.querySelector('#lightboxImg');
    const titleEl = lb.querySelector('#lightboxTitle');
    const closeBtn = lb.querySelector('.lightbox__close');

    function openLightbox(src, title){
      imgEl.src = src;
      imgEl.alt = title || '';
      titleEl.textContent = title || '';
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }
    function closeLightbox(){
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lb.classList.contains('open')) closeLightbox();
    });

    galleryItems.forEach((item) => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery__title')?.textContent?.trim();
      if (!img) return;
      item.addEventListener('click', () => openLightbox(img.src, title));
      item.style.cursor = 'pointer';
    });
  }

  // Interactive Before/After Slider Logic
  const sliders = document.querySelectorAll('.comparison-slider');
  sliders.forEach(slider => {
    const before = slider.querySelector('.img-layer.before');
    const handle = slider.querySelector('.handle');
    
    if (!before || !handle) return;

    const slide = (x) => {
      const rect = slider.getBoundingClientRect();
      let pos = x - rect.left;
      if (pos < 0) pos = 0;
      if (pos > rect.width) pos = rect.width;
      
      const percentage = (pos / rect.width) * 100;
      before.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };

    const onMove = (e) => {
      if (e.type === 'mousemove' && e.buttons === 0) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      slide(clientX);
    };

    slider.addEventListener('mousedown', (e) => slide(e.clientX));
    slider.addEventListener('mousemove', onMove);
    slider.addEventListener('touchstart', (e) => slide(e.touches[0].clientX), { passive: true });
    slider.addEventListener('touchmove', onMove, { passive: true });
  });

  // Promo Slider Logic
  const promoImages = document.querySelectorAll('.promo-img');
  if (promoImages.length > 0) {
    let currentPromoIndex = 0;
    setInterval(() => {
      promoImages[currentPromoIndex].classList.remove('active');
      currentPromoIndex = (currentPromoIndex + 1) % promoImages.length;
      promoImages[currentPromoIndex].classList.add('active');
    }, 5000); // Change every 5 seconds
  }