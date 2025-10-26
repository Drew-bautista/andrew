/**
 * Projects Page JavaScript
 * Handles filtering, animations, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeProjectsPage();
});

/**
 * Initialize projects page functionality
 */
function initializeProjectsPage() {
  initializeProjectFilter();
  initializeProjectAnimations();
  initializeProjectHovers();
}

/**
 * Project filtering functionality
 */
function initializeProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      filterProjects(filter, projectItems);
      
      // Announce to screen readers
      const filterText = this.textContent;
      announceToScreenReader(`Showing ${filterText.toLowerCase()}`);
    });
  });
}

/**
 * Filter projects based on category
 */
function filterProjects(filter, projectItems) {
  projectItems.forEach((item, index) => {
    const category = item.getAttribute('data-category');
    const shouldShow = filter === 'all' || category === filter;
    
    if (shouldShow) {
      // Show with staggered animation
      setTimeout(() => {
        item.classList.remove('hidden');
      }, index * 100);
    } else {
      // Hide immediately
      item.classList.add('hidden');
    }
  });
}

/**
 * Initialize scroll animations for projects
 */
function initializeProjectAnimations() {
  const projectItems = document.querySelectorAll('.project-item');
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Initially hide projects for animation
  projectItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });
}

/**
 * Initialize project hover effects
 */
function initializeProjectHovers() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Add subtle scale effect to nearby cards
      const allCards = document.querySelectorAll('.project-card');
      allCards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.style.transform = 'scale(0.95)';
          otherCard.style.opacity = '0.7';
        }
      });
    });
    
    card.addEventListener('mouseleave', function() {
      // Reset all cards
      const allCards = document.querySelectorAll('.project-card');
      allCards.forEach(otherCard => {
        otherCard.style.transform = '';
        otherCard.style.opacity = '';
      });
    });
  });
}

/**
 * Add project translations to the main translations object
 */
if (typeof translations !== 'undefined') {
  // Add projects page translations to existing translations
  Object.keys(translations).forEach(lang => {
    const projectTranslations = getProjectTranslations(lang);
    translations[lang] = { ...translations[lang], ...projectTranslations };
  });
}

/**
 * Get project-specific translations for each language
 */
function getProjectTranslations(lang) {
  const projectTexts = {
    en: {
      projects_page_title: "My Projects",
      projects_page_subtitle: "Explore my portfolio of web applications, showcasing expertise in full-stack development, modern frameworks, and creative problem-solving.",
      my_projects_title: "My Projects",
      projects_showcase_subtitle: "Showcase of Creative Solutions",
      filter_all: "All Projects",
      filter_web: "Web Apps",
      filter_mobile: "Mobile",
      filter_ui: "UI/UX",
      view_project: "View Project",
      view_code: "View Code",
      view_live: "View Live",
      view_all_projects: "View All Projects on GitHub"
    },
    tl: {
      projects_page_title: "Aking mga Proyekto",
      projects_page_subtitle: "Tingnan ang aking portfolio ng mga web applications, na nagpapakita ng expertise sa full-stack development, modern frameworks, at creative problem-solving.",
      my_projects_title: "Aking mga Proyekto",
      projects_showcase_subtitle: "Pagtatanghal ng mga Creative Solutions",
      filter_all: "Lahat ng Proyekto",
      filter_web: "Web Apps",
      filter_mobile: "Mobile",
      filter_ui: "UI/UX",
      view_project: "Tingnan ang Proyekto",
      view_code: "Tingnan ang Code",
      view_live: "Tingnan Live",
      view_all_projects: "Tingnan Lahat sa GitHub"
    },
    es: {
      projects_page_title: "Mis Proyectos",
      projects_page_subtitle: "Explora mi portafolio de aplicaciones web, mostrando experiencia en desarrollo full-stack, frameworks modernos y resolución creativa de problemas.",
      my_projects_title: "Mis Proyectos",
      projects_showcase_subtitle: "Muestra de Soluciones Creativas",
      filter_all: "Todos los Proyectos",
      filter_web: "Aplicaciones Web",
      filter_mobile: "Móvil",
      filter_ui: "UI/UX",
      view_project: "Ver Proyecto",
      view_code: "Ver Código",
      view_live: "Ver En Vivo",
      view_all_projects: "Ver Todos en GitHub"
    },
    fr: {
      projects_page_title: "Mes Projets",
      projects_page_subtitle: "Explorez mon portfolio d'applications web, démontrant une expertise en développement full-stack, frameworks modernes et résolution créative de problèmes.",
      my_projects_title: "Mes Projets",
      projects_showcase_subtitle: "Vitrine de Solutions Créatives",
      filter_all: "Tous les Projets",
      filter_web: "Applications Web",
      filter_mobile: "Mobile",
      filter_ui: "UI/UX",
      view_project: "Voir le Projet",
      view_code: "Voir le Code",
      view_live: "Voir en Direct",
      view_all_projects: "Voir Tout sur GitHub"
    },
    de: {
      projects_page_title: "Meine Projekte",
      projects_page_subtitle: "Erkunden Sie mein Portfolio von Webanwendungen, das Expertise in Full-Stack-Entwicklung, modernen Frameworks und kreativer Problemlösung zeigt.",
      my_projects_title: "Meine Projekte",
      projects_showcase_subtitle: "Präsentation Kreativer Lösungen",
      filter_all: "Alle Projekte",
      filter_web: "Web-Apps",
      filter_mobile: "Mobile",
      filter_ui: "UI/UX",
      view_project: "Projekt Ansehen",
      view_code: "Code Ansehen",
      view_live: "Live Ansehen",
      view_all_projects: "Alle auf GitHub Ansehen"
    },
    ja: {
      projects_page_title: "私のプロジェクト",
      projects_page_subtitle: "フルスタック開発、モダンフレームワーク、創造的問題解決の専門知識を示すWebアプリケーションのポートフォリオをご覧ください。",
      my_projects_title: "私のプロジェクト",
      projects_showcase_subtitle: "創造的ソリューションの紹介",
      filter_all: "すべてのプロジェクト",
      filter_web: "ウェブアプリ",
      filter_mobile: "モバイル",
      filter_ui: "UI/UX",
      view_project: "プロジェクトを見る",
      view_code: "コードを見る",
      view_live: "ライブを見る",
      view_all_projects: "GitHubですべて見る"
    },
    ko: {
      projects_page_title: "내 프로젝트",
      projects_page_subtitle: "풀스택 개발, 모던 프레임워크, 창의적 문제 해결의 전문성을 보여주는 웹 애플리케이션 포트폴리오를 탐색해보세요.",
      my_projects_title: "내 프로젝트",
      projects_showcase_subtitle: "창의적 솔루션 쇼케이스",
      filter_all: "모든 프로젝트",
      filter_web: "웹 앱",
      filter_mobile: "모바일",
      filter_ui: "UI/UX",
      view_project: "프로젝트 보기",
      view_code: "코드 보기",
      view_live: "라이브 보기",
      view_all_projects: "GitHub에서 모두 보기"
    },
    zh: {
      projects_page_title: "我的项目",
      projects_page_subtitle: "探索我的Web应用程序作品集，展示全栈开发、现代框架和创造性问题解决的专业知识。",
      my_projects_title: "我的项目",
      projects_showcase_subtitle: "创意解决方案展示",
      filter_all: "所有项目",
      filter_web: "网络应用",
      filter_mobile: "移动端",
      filter_ui: "UI/UX",
      view_project: "查看项目",
      view_code: "查看代码",
      view_live: "查看演示",
      view_all_projects: "在GitHub查看全部"
    }
  };
  
  return projectTexts[lang] || projectTexts.en;
}

/**
 * Announce text to screen readers (reuse from main script)
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
 * Smooth scroll to top functionality
 */
const backToTopBtn = document.querySelector('[data-back-to-top]');
if (backToTopBtn) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });
}
