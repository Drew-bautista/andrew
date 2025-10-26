  'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Language translations
 */
const translations = {
  en: {
    nav_home: "Home.",
    nav_about: "About.",
    nav_skills: "Skills.",
    nav_portfolio: "My Projects.",
    nav_contact: "Contact.",
    hero_title: "We Design & Build Creative Products",
    hero_cta: "Get in touch",
    about_subtitle: "About me",
    about_title: "Need a Creative Product? I can Help You!",
    about_text: "Hi! I'm John Andrew Bautista, and I'm a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I'm always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.",
    download_cv: "Download CV",
    stats_college: "4 Year",
    stats_college_strong: "College",
    stats_projects: "60+",
    stats_projects_strong: "Completed Projects",
    stats_clients: "60+",
    stats_clients_strong: "Happy Clients",
    skills_subtitle: "My skills",
    skills_title: "What My Programming Skills Included?",
    skills_text: "I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.",
    skills_tab: "Skills",
    tools_tab: "Tools",
    works_subtitle: "My Works",
    works_title: "See My Works Which Will Amaze You!",
    works_text: "We develop the best quality website and application that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.",
    contact_subtitle: "Contact",
    contact_title: "Have You Any Project? Please Drop a Message",
    contact_text: "Get in touch and let me know how i can help. Fill out the form and i'll be in touch as soon as possible.",
    contact_address_label: "Address:",
    contact_phone_label: "Phone:",
    contact_email_label: "Email:",
    contact_send_btn: "Send",
    sending: "Sending...",
    form_success: "Message sent successfully!",
    form_error: "Failed to send message. Please try again.",
    load_more_work: "Load more work",
    view_more_github: "View more on GitHub"
  },
  tl: {
    nav_home: "Tahanan.",
    nav_about: "Tungkol.",
    nav_skills: "Kasanayan.",
    nav_portfolio: "Aking mga Proyekto.",
    nav_contact: "Makipag-ugnayan.",
    hero_title: "Gumagawa Kami ng Mga Creative na Produkto",
    hero_cta: "Makipag-ugnayan",
    about_subtitle: "Tungkol sa akin",
    about_title: "Kailangan mo ba ng Creative na Produkto? Makakatulong ako!",
    about_text: "Kumusta! Ako si John Andrew Bautista, at ako ay isang developer na may passion sa paggawa ng malinis na web applications na may intuitive na functionalities. Nasisiyahan ako sa proseso ng paggawa ng mga ideya na maging totoo gamit ang mga creative solutions. Laging curious ako sa pag-aaral ng mga bagong skills, tools, at concepts. Bukod sa paggawa ng iba't ibang solo full stack projects, nakagawa na rin ako kasama ang mga creative teams, na kasama ang daily stand-ups at communications, source control, at project management.",
    download_cv: "I-download ang CV",
    stats_college: "4 Taon",
    stats_college_strong: "Kolehiyo",
    stats_projects: "60+",
    stats_projects_strong: "Natapos na Proyekto",
    stats_clients: "60+",
    stats_clients_strong: "Masayang Kliyente",
    skills_subtitle: "Aking mga kasanayan",
    skills_title: "Ano ang Kasama sa Aking Programming Skills?",
    skills_text: "Gumagawa ako ng simple, intuitive at responsive na user interface na tumutulong sa mga user na magawa ang mga bagay nang mas madali at mabilis gamit ang mga teknolohiyang ito.",
    skills_tab: "Kasanayan",
    tools_tab: "Mga Tool",
    works_subtitle: "Aking mga Gawa",
    works_title: "Tingnan ang Aking mga Gawa na Magpapamangha sa Iyo!",
    works_text: "Gumagawa kami ng pinakamataas na kalidad na website at application na magtatagal. Well-documented, malinis, madali at eleganteng interface na tumutulong sa lahat ng non-technical na kliyente.",
    contact_subtitle: "Makipag-ugnayan",
    contact_title: "May Proyekto Ka Ba? Magpadala ng Mensahe",
    contact_text: "Makipag-ugnayan at sabihin mo kung paano kita matutulungan. Punan ang form at makikipag-ugnayan ako sa lalong madaling panahon.",
    contact_address_label: "Address:",
    contact_phone_label: "Telepono:",
    contact_email_label: "Email:",
    contact_send_btn: "Ipadala",
    sending: "Nagpapadala...",
    form_success: "Matagumpay na naipadala ang mensahe!",
    form_error: "Hindi naipadala ang mensahe. Subukan ulit.",
    load_more_work: "Tingnan pa ang mga gawa",
    view_more_github: "Tingnan pa sa GitHub"
  },
  es: {
    nav_home: "Inicio.",
    nav_about: "Acerca de.",
    nav_skills: "Habilidades.",
    nav_portfolio: "Mis Proyectos.",
    nav_contact: "Contacto.",
    hero_title: "Diseñamos y Construimos Productos Creativos",
    hero_cta: "Ponte en contacto",
    about_subtitle: "Acerca de mí",
    about_title: "¿Necesitas un Producto Creativo? ¡Puedo Ayudarte!",
    about_text: "¡Hola! Soy John Andrew Bautista, y soy un desarrollador que tiene pasión por construir aplicaciones web limpias con funcionalidades intuitivas. Disfruto el proceso de convertir ideas en realidad usando soluciones creativas. Siempre tengo curiosidad por aprender nuevas habilidades, herramientas y conceptos. Además de trabajar en varios proyectos full stack en solitario, he trabajado con equipos creativos, lo que involucra reuniones diarias y comunicaciones, control de código fuente y gestión de proyectos.",
    download_cv: "Descargar CV",
    stats_college: "4 Años",
    stats_college_strong: "Universidad",
    stats_projects: "60+",
    stats_projects_strong: "Proyectos Completados",
    stats_clients: "60+",
    stats_clients_strong: "Clientes Felices",
    skills_subtitle: "Mis habilidades",
    skills_title: "¿Qué Incluyen Mis Habilidades de Programación?",
    skills_text: "Desarrollo interfaces de usuario simples, intuitivas y responsivas que ayudan a los usuarios a hacer las cosas con menos esfuerzo y tiempo con estas tecnologías.",
    skills_tab: "Habilidades",
    tools_tab: "Herramientas",
    works_subtitle: "Mis Trabajos",
    works_title: "¡Mira Mis Trabajos Que Te Sorprenderán!",
    works_text: "Desarrollamos sitios web y aplicaciones de la mejor calidad que sirven a largo plazo. Interfaz bien documentada, limpia, fácil y elegante que ayuda a cualquier cliente no técnico.",
    contact_subtitle: "Contacto",
    contact_title: "¿Tienes Algún Proyecto? Por Favor Envía un Mensaje",
    contact_text: "Ponte en contacto y déjame saber cómo puedo ayudarte. Completa el formulario y me pondré en contacto lo antes posible.",
    contact_address_label: "Dirección:",
    contact_phone_label: "Teléfono:",
    contact_email_label: "Email:",
    contact_send_btn: "Enviar",
    sending: "Enviando...",
    form_success: "Mensaje enviado con éxito!",
    form_error: "Error al enviar mensaje. Por favor, inténtalo de nuevo.",
    load_more_work: "Ver más trabajos",
    view_more_github: "Ver más en GitHub"
  },
  fr: {
    nav_home: "Accueil.",
    nav_about: "À propos.",
    nav_skills: "Compétences.",
    nav_portfolio: "Mes Projets.",
    nav_contact: "Contact.",
    hero_title: "Nous Concevons et Construisons des Produits Créatifs",
    hero_cta: "Entrer en contact",
    about_subtitle: "À propos de moi",
    about_title: "Besoin d'un Produit Créatif? Je Peux Vous Aider!",
    about_text: "Salut! Je suis John Andrew Bautista, et je suis un développeur qui a une passion pour créer des applications web propres avec des fonctionnalités intuitives. J'aime le processus de transformer les idées en réalité en utilisant des solutions créatives. Je suis toujours curieux d'apprendre de nouvelles compétences, outils et concepts. En plus de travailler sur divers projets full stack en solo, j'ai travaillé avec des équipes créatives, ce qui implique des réunions quotidiennes et des communications, le contrôle de code source et la gestion de projet.",
    download_cv: "Télécharger CV",
    stats_college: "4 Ans",
    stats_college_strong: "Université",
    stats_projects: "60+",
    stats_projects_strong: "Projets Terminés",
    stats_clients: "60+",
    stats_clients_strong: "Clients Satisfaits",
    skills_subtitle: "Mes compétences",
    skills_title: "Que Comprennent Mes Compétences en Programmation?",
    skills_text: "Je développe des interfaces utilisateur simples, intuitives et responsives qui aident les utilisateurs à accomplir leurs tâches avec moins d'effort et de temps avec ces technologies.",
    skills_tab: "Compétences",
    tools_tab: "Outils",
    works_subtitle: "Mes Travaux",
    works_title: "Découvrez Mes Travaux Qui Vous Émerveilleront!",
    works_text: "Nous développons des sites web et applications de la meilleure qualité qui servent à long terme. Interface bien documentée, propre, facile et élégante qui aide tous les clients non techniques.",
    contact_subtitle: "Contact",
    contact_title: "Avez-Vous Un Projet? Veuillez Envoyer Un Message",
    contact_text: "Entrez en contact et faites-moi savoir comment je peux vous aider. Remplissez le formulaire et je vous contacterai dès que possible.",
    contact_address_label: "Adresse:",
    contact_phone_label: "Téléphone:",
    contact_email_label: "Email:",
    contact_send_btn: "Envoyer",
    load_more_work: "Voir plus de travaux"
  },
  de: {
    nav_home: "Startseite.",
    nav_about: "Über uns.",
    nav_skills: "Fähigkeiten.",
    nav_portfolio: "Meine Projekte.",
    nav_contact: "Kontakt.",
    hero_title: "Wir Entwerfen und Bauen Kreative Produkte",
    hero_cta: "Kontakt aufnehmen",
    about_subtitle: "Über mich",
    about_title: "Brauchen Sie ein Kreatives Produkt? Ich Kann Helfen!",
    about_text: "Hallo! Ich bin John Andrew Bautista und ich bin ein Entwickler, der eine Leidenschaft für das Erstellen sauberer Webanwendungen mit intuitiven Funktionalitäten hat. Ich genieße den Prozess, Ideen mit kreativen Lösungen in die Realität umzusetzen. Ich bin immer neugierig darauf, neue Fähigkeiten, Tools und Konzepte zu lernen. Zusätzlich zur Arbeit an verschiedenen Solo-Full-Stack-Projekten habe ich mit kreativen Teams gearbeitet, was tägliche Stand-ups und Kommunikation, Quellcode-Kontrolle und Projektmanagement beinhaltet.",
    download_cv: "CV Herunterladen",
    stats_college: "4 Jahre",
    stats_college_strong: "Hochschule",
    stats_projects: "60+",
    stats_projects_strong: "Abgeschlossene Projekte",
    stats_clients: "60+",
    stats_clients_strong: "Zufriedene Kunden",
    skills_subtitle: "Meine Fähigkeiten",
    skills_title: "Was Beinhalten Meine Programmierfähigkeiten?",
    skills_text: "Ich entwickle einfache, intuitive und responsive Benutzeroberflächen, die Benutzern helfen, Aufgaben mit weniger Aufwand und Zeit mit diesen Technologien zu erledigen.",
    skills_tab: "Fähigkeiten",
    tools_tab: "Werkzeuge",
    works_subtitle: "Meine Arbeiten",
    works_title: "Sehen Sie Meine Arbeiten, Die Sie Erstaunen Werden!",
    works_text: "Wir entwickeln Websites und Anwendungen von bester Qualität, die langfristig dienen. Gut dokumentierte, saubere, einfache und elegante Benutzeroberfläche hilft allen nicht-technischen Kunden.",
    contact_subtitle: "Kontakt",
    contact_title: "Haben Sie Ein Projekt? Bitte Senden Sie Eine Nachricht",
    contact_text: "Nehmen Sie Kontakt auf und lassen Sie mich wissen, wie ich Ihnen helfen kann. Füllen Sie das Formular aus und ich werde mich so schnell wie möglich bei Ihnen melden.",
    contact_address_label: "Adresse:",
    contact_phone_label: "Telefon:",
    contact_email_label: "Email:",
    contact_send_btn: "Senden",
    load_more_work: "Mehr Arbeiten ansehen"
  },
  ja: {
    nav_home: "ホーム。",
    nav_about: "について。",
    nav_skills: "スキル。",
    nav_portfolio: "私のプロジェクト。",
    nav_contact: "お問い合わせ。",
    hero_title: "クリエイティブな製品をデザイン・構築します",
    hero_cta: "お問い合わせ",
    about_subtitle: "私について",
    about_title: "クリエイティブな製品が必要ですか？お手伝いできます！",
    about_text: "こんにちは！私はJohn Andrew Bautistaです。直感的な機能を持つクリーンなWebアプリケーションの構築に情熱を持つ開発者です。創造的なソリューションを使ってアイデアを現実に変えるプロセスを楽しんでいます。新しいスキル、ツール、概念を学ぶことに常に好奇心を持っています。様々なソロフルスタックプロジェクトでの作業に加えて、日々のスタンドアップやコミュニケーション、ソースコントロール、プロジェクト管理を含むクリエイティブチームと協力してきました。",
    download_cv: "CV をダウンロード",
    stats_college: "4年間",
    stats_college_strong: "大学",
    stats_projects: "60+",
    stats_projects_strong: "完了したプロジェクト",
    stats_clients: "60+",
    stats_clients_strong: "満足したクライアント",
    skills_subtitle: "私のスキル",
    skills_title: "私のプログラミングスキルには何が含まれていますか？",
    skills_text: "これらの技術を使用して、ユーザーがより少ない労力と時間で物事を成し遂げるのに役立つシンプルで直感的でレスポンシブなユーザーインターフェースを開発します。",
    skills_tab: "スキル",
    tools_tab: "ツール",
    works_subtitle: "私の作品",
    works_title: "あなたを驚かせる私の作品をご覧ください！",
    works_text: "長期的に役立つ最高品質のウェブサイトとアプリケーションを開発します。よく文書化された、クリーンで使いやすくエレガントなインターフェースは、すべての非技術的なクライアントを支援します。",
    contact_subtitle: "お問い合わせ",
    contact_title: "プロジェクトはありますか？メッセージをお送りください",
    contact_text: "お気軽にお問い合わせいただき、どのようにお手伝いできるかお知らせください。フォームにご記入いただければ、できるだけ早くご連絡いたします。",
    contact_address_label: "住所：",
    contact_phone_label: "電話：",
    contact_email_label: "メール：",
    contact_send_btn: "送信",
    load_more_work: "もっと見る"
  },
  ko: {
    nav_home: "홈.",
    nav_about: "소개.",
    nav_skills: "기술.",
    nav_portfolio: "내 프로젝트.",
    nav_contact: "연락처.",
    hero_title: "창의적인 제품을 디자인하고 구축합니다",
    hero_cta: "연락하기",
    about_subtitle: "저에 대해",
    about_title: "창의적인 제품이 필요하신가요? 도와드릴 수 있습니다!",
    about_text: "안녕하세요! 저는 John Andrew Bautista이며, 직관적인 기능을 가진 깔끔한 웹 애플리케이션 구축에 열정을 가진 개발자입니다. 창의적인 솔루션을 사용하여 아이디어를 현실로 바꾸는 과정을 즐깁니다. 새로운 기술, 도구, 개념을 배우는 것에 항상 호기심이 많습니다. 다양한 개인 풀스택 프로젝트 작업 외에도 일일 스탠드업과 커뮤니케이션, 소스 제어, 프로젝트 관리를 포함하는 창의적인 팀과 함께 일해왔습니다.",
    download_cv: "이력서 다운로드",
    stats_college: "4년",
    stats_college_strong: "대학",
    stats_projects: "60+",
    stats_projects_strong: "완료된 프로젝트",
    stats_clients: "60+",
    stats_clients_strong: "만족한 고객",
    skills_subtitle: "내 기술",
    skills_title: "내 프로그래밍 기술에는 무엇이 포함되나요?",
    skills_text: "이러한 기술을 사용하여 사용자가 더 적은 노력과 시간으로 작업을 완료할 수 있도록 도와주는 간단하고 직관적이며 반응형 사용자 인터페이스를 개발합니다.",
    skills_tab: "기술",
    tools_tab: "도구",
    works_subtitle: "내 작품",
    works_title: "당신을 놀라게 할 내 작품들을 보세요!",
    works_text: "장기적으로 도움이 되는 최고 품질의 웹사이트와 애플리케이션을 개발합니다. 잘 문서화되고 깔끔하며 쉽고 우아한 인터페이스는 모든 비기술적 고객을 도와줍니다.",
    contact_subtitle: "연락처",
    contact_title: "프로젝트가 있으신가요? 메시지를 보내주세요",
    contact_text: "연락하여 제가 어떻게 도울 수 있는지 알려주세요. 양식을 작성해 주시면 가능한 한 빨리 연락드리겠습니다.",
    contact_address_label: "주소:",
    contact_phone_label: "전화:",
    contact_email_label: "이메일:",
    contact_send_btn: "보내기",
    load_more_work: "더 많은 작품 보기"
  },
  zh: {
    nav_home: "首页。",
    nav_about: "关于。",
    nav_skills: "技能。",
    nav_portfolio: "我的项目。",
    nav_contact: "联系。",
    hero_title: "我们设计和构建创意产品",
    hero_cta: "联系我们",
    about_subtitle: "关于我",
    about_title: "需要创意产品吗？我可以帮助您！",
    about_text: "你好！我是John Andrew Bautista，我是一名对构建具有直观功能的干净网络应用程序充满热情的开发者。我享受使用创意解决方案将想法变为现实的过程。我总是对学习新技能、工具和概念感到好奇。除了从事各种个人全栈项目外，我还与创意团队合作过，这涉及日常站会和沟通、源代码控制和项目管理。",
    download_cv: "下载简历",
    stats_college: "4年",
    stats_college_strong: "大学",
    stats_projects: "60+",
    stats_projects_strong: "已完成项目",
    stats_clients: "60+",
    stats_clients_strong: "满意客户",
    skills_subtitle: "我的技能",
    skills_title: "我的编程技能包括什么？",
    skills_text: "我开发简单、直观和响应式的用户界面，帮助用户使用这些技术以更少的努力和时间完成任务。",
    skills_tab: "技能",
    tools_tab: "工具",
    works_subtitle: "我的作品",
    works_title: "看看我会让您惊叹的作品！",
    works_text: "我们开发长期服务的最高质量网站和应用程序。文档完善、干净、简单优雅的界面帮助所有非技术客户。",
    contact_subtitle: "联系",
    contact_title: "您有项目吗？请发送消息",
    contact_text: "请联系我，让我知道如何为您提供帮助。填写表格，我会尽快与您联系。",
    contact_address_label: "地址：",
    contact_phone_label: "电话：",
    contact_email_label: "邮箱：",
    contact_send_btn: "发送",
    load_more_work: "查看更多作品"
  }
};

/**
 * Change language function
 */
window.changeLanguage = function() {
  try {
    const langSelect = document.getElementById('lang');
    if (!langSelect) {
      console.error('Language selector not found');
      return;
    }
    
    const selectedLang = langSelect.value;
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    if (!translations[selectedLang]) {
      console.error('Translation not found for language:', selectedLang);
      return;
    }
    
    console.log('Selected language:', selectedLang);
    console.log('Elements to translate:', elementsToTranslate.length);
    
    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[selectedLang] && translations[selectedLang][key]) {
        element.textContent = translations[selectedLang][key];
        // Update aria-label for accessibility
        if (element.hasAttribute('aria-label')) {
          element.setAttribute('aria-label', translations[selectedLang][key]);
        }
      } else {
        console.warn('Translation not found for:', key, 'in language:', selectedLang);
      }
    });
    
    // Update document language attribute
    document.documentElement.lang = selectedLang === 'tl' ? 'fil' : selectedLang;
    
    // Save selected language to localStorage
    localStorage.setItem('selectedLanguage', selectedLang);
    
    // Announce language change to screen readers
    announceToScreenReader(`Language changed to ${langSelect.options[langSelect.selectedIndex].text}`);
    
  } catch (error) {
    console.error('Error changing language:', error);
  }
}

/**
 * Announce text to screen readers
 */
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.overflow = 'hidden';
  
  document.body.appendChild(announcement);
  announcement.textContent = message;
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Load saved language on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  const langSelect = document.getElementById('lang');
  
  if (langSelect) {
    // Set saved language
    langSelect.value = savedLang;
    
    // Add event listener for language change
    langSelect.addEventListener('change', function() {
      console.log('Language changed to:', this.value);
      showLoadingIndicator();
      setTimeout(() => {
        window.changeLanguage();
        hideLoadingIndicator();
      }, 300);
    });
    
    // Apply initial translation
    window.changeLanguage();
  } else {
    console.error('Language selector not found!');
  }
  
  // Initialize contact form
  initializeContactForm();
});

/**
 * Loading indicator functions
 */
function showLoadingIndicator() {
  document.body.style.opacity = '0.7';
  document.body.style.transition = 'opacity 0.3s ease';
}

function hideLoadingIndicator() {
  document.body.style.opacity = '1';
}

/**
 * Contact form handling
 */
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = getTranslatedText('sending') || 'Sending...';
    submitBtn.disabled = true;
    
    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        showFormMessage(getTranslatedText('form_success') || 'Message sent successfully!', 'success');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      showFormMessage(getTranslatedText('form_error') || 'Failed to send message. Please try again.', 'error');
    }
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
}

function showFormMessage(message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;
  
  const form = document.getElementById('contact-form');
  form.insertBefore(messageDiv, form.firstChild);
  
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

function getTranslatedText(key) {
  const currentLang = document.getElementById('lang')?.value || 'en';
  return translations[currentLang]?.[key];
}