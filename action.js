// ─── Traduccion Inicio ────────────────────────────────────────────────
const translations = {
  es: {
    nav_about:"Sobre mí", nav_skills:"Habilidades",
    nav_projects:"Proyectos", nav_edu:"Educación", nav_contact:"Contacto",
    hero_kicker:"Desarrollador Frontend",
    hero_h1:"Diseñando experiencias modernas y funcionales.",
    hero_text:"Soy técnico superior universitario en tecnologías de la información y pasante de Ingeniería en Desarrollo y Gestión de Software. Me especializo en frontend y experiencias centradas en el usuario, tengo conocimientos sobre administración, dirección de eventos musicales.",
    hero_btn_projects:"Ver proyectos", hero_btn_contact:"Contacto",
    hero_stack:"Stack principal",
    hero_avail:"Disponible para prácticas, freelance y oportunidades Jr.",
    about_title:"Sobre mí",
    about_text:"Soy desarrollador frontend en formación con experiencia en Angular, Ionic y tecnologías web modernas. He trabajado en proyectos académicos y personales integrando APIs, diseño responsive y buenas prácticas de desarrollo. También soy DJ Productor y tengo experiencias en dirección y creaciones de eventos musicales, así como en diseños de flyers.",
    skills_title:"Habilidades",
    skill_frontend_h:"Frontend", skill_frontend_p:"Angular, Ionic, React, HTML5, CSS3, TailwindCSS, Responsive Design, TypeScript.",
    skill_tools_h:"Herramientas", skill_tools_p:"Git, GitHub, Figma, Postman y metodologías ágiles.",
    skill_backend_h:"Backend básico", skill_backend_p:"MySQL, NestJS, XAMPP y consumo de APIs REST.",
    projects_title:"Proyectos destacados",
    proj1_desc:"Creación de la aplicación web del sistema escolar de Grupo Educativo de México para control de estudiantes, docentes, administrativo de finanzas y académico.",
    proj1_link:"Ver aplicación →",
    proj2_desc:"Aplicación móvil de alquiler desarrollada con Angular + Ionic conectada a backend NestJS y MySQL.",
    proj2_link:"Ver repositorio →",
    proj3_desc:"Propuesta frontend para aplicación móvil empresarial usando Ionic y Angular.",
    proj3_link:"Ver repositorio →",
    proj4_desc:"Robot con ESP32 y sensores para resolución de laberintos y medición de distancia.",
    edu_title:"Educación",
    edu1_h:"TSU en Tecnologías de la Información",
    edu1_sub:"Universidad Tecnológica de los Valles Centrales de Oaxaca", edu1_date:"2022 — 2024",
    edu2_h:"Ingeniería en Desarrollo y Gestión de Software",
    edu2_sub:"Universidad Tecnológica de los Valles Centrales de Oaxaca", edu2_date:"2024 — 2026",
    contact_title:"Contacto", contact_text:"¿Te interesa colaborar o trabajar juntos?",
    contact_email:"Email", contact_wa:"WhatsApp", footer_role:"Desarrollador Frontend",
  },
  en: {
    nav_about:"About", nav_skills:"Skills",
    nav_projects:"Projects", nav_edu:"Education", nav_contact:"Contact",
    hero_kicker:"Frontend Developer",
    hero_h1:"Building modern and functional experiences.",
    hero_text:"I am a University Technical Graduate in Information Technology and a Software Engineering student. I specialize in frontend development and user-centered experiences, with knowledge in business administration and music event management.",
    hero_btn_projects:"View projects", hero_btn_contact:"Contact",
    hero_stack:"Main stack",
    hero_avail:"Available for internships, freelance and Jr. opportunities.",
    about_title:"About me",
    about_text:"Software Engineering Intern and Senior University Technician in Information Technology, with supplementary training in business administration. I combine a solid technical foundation with practical experience in event production, audio and lighting systems, logistics, and team coordination. I am distinguished by my analytical skills, my ability to adapt quickly to new environments, and my focus on process optimization and problem-solving. I am results-oriented, with experience in direct client and supplier relations in high-demand environments.",
    skills_title:"Skills",
    skill_frontend_h:"Frontend", skill_frontend_p:"Angular, Ionic, React, HTML5, CSS3, TailwindCSS, Responsive Design, TypeScript.",
    skill_tools_h:"Tools", skill_tools_p:"Git, GitHub, Figma, Resolume Arena, Ableton Live, Premiere, Ilustrator, Postman, Excel, and agile methodologies.",
    skill_backend_h:"Basic Backend", skill_backend_p:"MySQL, NestJS, XAMPP and REST API consumption.",
    projects_title:"Featured Projects",
    proj1_desc:"Development of the school management web application for Grupo Educativo de México, covering student, teacher, finance and academic administration.",
    proj1_link:"View app →",
    proj2_desc:"Mobile rental application built with Angular + Ionic connected to a NestJS and MySQL backend.",
    proj2_link:"View repository →",
    proj3_desc:"Frontend proposal for a business mobile application using Ionic and Angular.",
    proj3_link:"View repository →",
    proj4_desc:"Robot with ESP32 and sensors for maze solving and distance measurement.",
    edu_title:"Education",
    edu1_h:"Technical Degree in Information Technology",
    edu1_sub:"Universidad Tecnológica de los Valles Centrales de Oaxaca", edu1_date:"2022 — 2024",
    edu2_h:"B.Eng. in Software Development and Management",
    edu2_sub:"Universidad Tecnológica de los Valles Centrales de Oaxaca", edu2_date:"2024 — 2026",
    contact_title:"Contact", contact_text:"Interested in collaborating or working together?",
    contact_email:"Email", contact_wa:"WhatsApp", footer_role:"Frontend Developer",
  }
};


function applyLang(lang) {
  const t = translations[lang];
  const set = (sel, key) => { const el = document.querySelector(sel); if (el && t[key]) el.textContent = t[key]; };
  set('nav a[href="#about"]','nav_about'); set('nav a[href="#skills"]','nav_skills');
  set('nav a[href="#projects"]','nav_projects'); set('nav a[href="#edu"]','nav_edu');
  set('nav a[href="#contact"]','nav_contact');
  set('.hero-kicker','hero_kicker'); set('h1','hero_h1'); set('.hero-text','hero_text');
  set('.hero-actions .btn.primary','hero_btn_projects');
  set('.hero-actions .btn.secondary','hero_btn_contact');
  set('.small-title','hero_stack'); set('.availability','hero_avail');
  set('#about h2','about_title'); set('#about .content-box p','about_text');
  set('#skills h2','skills_title');
  const sc = document.querySelectorAll('.skill-card');
  if(sc[0]){sc[0].querySelector('h3').textContent=t.skill_frontend_h;sc[0].querySelector('p').textContent=t.skill_frontend_p;}
  if(sc[1]){sc[1].querySelector('h3').textContent=t.skill_tools_h;sc[1].querySelector('p').textContent=t.skill_tools_p;}
  if(sc[2]){sc[2].querySelector('h3').textContent=t.skill_backend_h;sc[2].querySelector('p').textContent=t.skill_backend_p;}
  set('#projects h2','projects_title');
  const pc=document.querySelectorAll('.project-card');
  const pd=[{d:'proj1_desc',l:'proj1_link'},{d:'proj2_desc',l:'proj2_link'},{d:'proj3_desc',l:'proj3_link'},{d:'proj4_desc',l:null}];
  pc.forEach((c,i)=>{ if(!pd[i])return; const p=c.querySelector('p'),a=c.querySelector('.project-link'); if(p)p.textContent=t[pd[i].d]; if(a&&pd[i].l)a.textContent=t[pd[i].l]; });
  set('#edu h2','edu_title');
  const ti=document.querySelectorAll('.timeline-item');
  if(ti[0]){ti[0].querySelector('h3').textContent=t.edu1_h;ti[0].querySelector('.muted').textContent=t.edu1_sub;ti[0].querySelector('small').textContent=t.edu1_date;}
  if(ti[1]){ti[1].querySelector('h3').textContent=t.edu2_h;ti[1].querySelector('.muted').textContent=t.edu2_sub;ti[1].querySelector('small').textContent=t.edu2_date;}
  set('#contact h2','contact_title'); set('.contact-box > p','contact_text');
  const cb=document.querySelectorAll('.contact-actions .btn');
  if(cb[0])cb[0].textContent=t.contact_email; if(cb[1])cb[1].textContent=t.contact_wa;
  set('.footer-content p:last-child','footer_role');
  localStorage.setItem('lang',lang);
  document.documentElement.lang=lang;
  const lbl=document.getElementById('lang-current');
  if(lbl)lbl.textContent=lang==='es'?'ES':'EN';
}


function buildSwitcher(){
  const style=document.createElement('style');
  style.textContent=`
    #lang-switcher{position:fixed;bottom:2rem;right:2rem;z-index:9999;font-family:'Inter',sans-serif;}
    #lang-btn{width:48px;height:48px;border-radius:50%;background:#fff;border:1px solid rgba(0,0,0,.10);box-shadow:0 2px 8px rgba(0,0,0,.10);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;transition:box-shadow .2s,transform .2s;outline:none;color:#111827;}
    #lang-btn:hover{box-shadow:0 4px 16px rgba(0,0,0,.14);transform:translateY(-1px);}
    #lang-btn:focus-visible{outline:2px solid #0f766e;outline-offset:3px;}
    #lang-btn svg{width:18px;height:18px;color:#0f766e;flex-shrink:0;}
    #lang-current{font-size:.7rem;font-weight:700;letter-spacing:.05em;color:#111827;line-height:1;}
    #lang-menu{position:absolute;bottom:calc(100% + 10px);right:0;background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.10);padding:6px;min-width:130px;opacity:0;pointer-events:none;transform:translateY(6px) scale(.97);transform-origin:bottom right;transition:opacity .18s ease,transform .18s ease;}
    #lang-menu.open{opacity:1;pointer-events:all;transform:translateY(0) scale(1);}
    #lang-menu p{font-size:.7rem;font-weight:600;color:#6b7280;letter-spacing:.08em;text-transform:uppercase;padding:6px 10px 4px;}
    .lang-option{display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;border:none;background:transparent;border-radius:9px;cursor:pointer;font-family:'Inter',sans-serif;font-size:.9rem;font-weight:500;color:#111827;transition:background .15s;text-align:left;}
    .lang-option:hover{background:#f3f4f6;}
    .lang-option.active{color:#0f766e;font-weight:700;}
    .lang-option .check{margin-left:auto;width:14px;height:14px;color:#0f766e;opacity:0;}
    .lang-option.active .check{opacity:1;}
  `;
  document.head.appendChild(style);
  const w=document.createElement('div');
  w.id='lang-switcher';
  w.setAttribute('role','navigation');
  w.setAttribute('aria-label','Language selector');
  w.innerHTML=`
    <div id="lang-menu" role="menu">
      <p>Idioma</p>
      <button class="lang-option" data-lang="es" role="menuitem">
        <span>🇲🇽</span> Español
        <svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </button>
      <button class="lang-option" data-lang="en" role="menuitem">
        <span>🇺🇸</span> English
        <svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </button>
    </div>
    <button id="lang-btn" aria-haspopup="true" aria-expanded="false" aria-label="Change language">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span id="lang-current">ES</span>
    </button>
  `;
  document.body.appendChild(w);
  const btn=w.querySelector('#lang-btn'),menu=w.querySelector('#lang-menu'),opts=w.querySelectorAll('.lang-option');
  btn.addEventListener('click',()=>{const o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
  document.addEventListener('click',e=>{if(!w.contains(e.target)){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus();}});
  opts.forEach(o=>o.addEventListener('click',()=>{
    const lang=o.dataset.lang;
    applyLang(lang);
    opts.forEach(x=>x.classList.toggle('active',x.dataset.lang===lang));
    menu.classList.remove('open');btn.setAttribute('aria-expanded','false');
  }));
}


document.addEventListener('DOMContentLoaded',()=>{
  buildSwitcher();
  const saved=localStorage.getItem('lang')||'es';
  applyLang(saved);
  document.querySelectorAll('.lang-option').forEach(o=>o.classList.toggle('active',o.dataset.lang===saved));


// CARRUSEL  
  // ── Carousel ──────────────────────────────────────────────────
  let carouselIndex = 0;
  window.moveCarousel = function(dir) {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;
    const items = carousel.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 24;
    const maxIndex = items.length - 3;
    carouselIndex = Math.max(0, Math.min(carouselIndex + dir, maxIndex));
    carousel.style.transform = `translateX(-${carouselIndex * itemWidth}px)`;
  };

  // ── Scroll reveal "Experiencias" heading ──────────────────────
  const expHeading = document.getElementById('exp-heading');
  if (expHeading) {
    window.addEventListener('scroll', () => {
      const rect = expHeading.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowH)));
      if (progress > 0.3) {
        expHeading.classList.add('revealed');
      } else {
        expHeading.classList.remove('revealed');
      }
    });
  }
});
