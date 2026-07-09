/* ============================================
   PORTFOLIO v2 — Main JavaScript
   Clean Energy Terminal Theme
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     1. LUCIDE ICONS
     ------------------------------------------ */
  lucide.createIcons();

  /* ------------------------------------------
     2. PARTICLE CANVAS — Energy Node Network
     ------------------------------------------ */
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouseX = -1000, mouseY = -1000;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse interaction
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        const force = (150 - dist) / 150;
        this.x -= dx * force * 0.01;
        this.y -= dy * force * 0.01;
      }

      // Wrap around
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 245, 212, ${this.opacity})`;
      ctx.fill();
    }
  }

  function initParticles() {
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 160) {
          const opacity = (1 - dist / 160) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 180, 216, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawConnections();
    animationId = requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  /* ------------------------------------------
     3. TYPING EFFECT
     ------------------------------------------ */
  const typedTextEl = document.getElementById('typedText');
  const phrases = [
    'Energy & Electrical Engineer',
    'EV Systems Specialist',
    'Green Hydrogen Researcher',
    'Renewable Energy Pioneer',
    'Power Electronics Designer'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 60;

  function typeEffect() {
    if (!typedTextEl) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 30;
    } else {
      typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 70;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // Pause before next phrase
    }

    setTimeout(typeEffect, typeSpeed);
  }

  setTimeout(typeEffect, 1000);

  /* ------------------------------------------
     4. THEME TOGGLE
     ------------------------------------------ */
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  function toggleTheme() {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    const icon = theme === 'dark' ? 'moon' : 'sun';
    if (themeToggle) {
      const i = themeToggle.querySelector('i');
      if (i) i.setAttribute('data-lucide', icon);
    }
    lucide.createIcons();
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  /* ------------------------------------------
     5. SMART NAVBAR
     ------------------------------------------ */
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;
  const SCROLL_THRESHOLD = 80;

  function handleNavbar() {
    const currentY = window.scrollY;
    if (currentY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (currentY > SCROLL_THRESHOLD) {
      if (currentY > lastScrollY && currentY - lastScrollY > 5) {
        navbar.classList.add('hidden');
      } else if (lastScrollY > currentY && lastScrollY - currentY > 5) {
        navbar.classList.remove('hidden');
      }
    } else {
      navbar.classList.remove('hidden');
    }

    lastScrollY = currentY;
  }

  window.addEventListener('scroll', handleNavbar, { passive: true });

  /* ------------------------------------------
     6. MOBILE MENU
     ------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      const icon = menuToggle.querySelector('i');
      if (icon) icon.setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
      lucide.createIcons();
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
        document.body.style.overflow = '';
      });
    });
  }

  /* ------------------------------------------
     7. GSAP ANIMATIONS
     ------------------------------------------ */
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  const heroElements = document.querySelectorAll('.hero .gs-reveal');
  gsap.fromTo(heroElements,
    { opacity: 0, y: 50 },
    {
      opacity: 1, y: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.3,
      onComplete: () => {
        heroElements.forEach(el => el.style.willChange = 'auto');
      }
    }
  );

  // Scroll-triggered reveals
  const revealElements = document.querySelectorAll('section:not(.hero) .gs-reveal');
  revealElements.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        onComplete: () => { el.style.willChange = 'auto'; }
      }
    );
  });

  /* ------------------------------------------
     8. COUNTER ANIMATION
     ------------------------------------------ */
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isDecimal = target % 1 !== 0;

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            const progress = this.progress();
            const current = target * progress;
            counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
          },
          onComplete: () => {
            counter.textContent = isDecimal ? target.toFixed(1) : target;
          }
        });
      }
    });
  });

  // Bar fill animations
  const barFills = document.querySelectorAll('.stat__bar-fill, .lang-card__bar-fill');
  barFills.forEach(bar => {
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 90%',
      once: true,
      onEnter: () => { bar.classList.add('animated'); }
    });
  });

  /* ------------------------------------------
     9. ACTIVE NAV LINK
     ------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__links a[href^="#"]');

  function updateActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ------------------------------------------
     10. CONTACT FORM
     ------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      if (!name || !email || !message) return;

      formSuccess.classList.add('visible');
      lucide.createIcons();
      contactForm.reset();

      setTimeout(() => {
        formSuccess.classList.remove('visible');
      }, 5000);
    });
  }

  /* ------------------------------------------
     11. SMOOTH SCROLL
     ------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
      const top = target.offsetTop - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ------------------------------------------
     12. CUSTOM CURSOR
     ------------------------------------------ */
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;

      cursorRing.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, { duration: 400, fill: 'forwards' });
    });

    document.querySelectorAll('a, button, input, textarea, .bento-card, .edu-card, .cert-card, .lang-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ------------------------------------------
     13. HORIZONTAL SCROLL — Certificates
     ------------------------------------------ */
  if (window.innerWidth > 768) {
    const certSection = document.querySelector('.certificates-section');
    const certWrapper = certSection ? certSection.querySelector('.cert-wrapper') : null;

    if (certWrapper) {
      function getScrollAmount() {
        return -(certWrapper.scrollWidth - window.innerWidth);
      }

      const tween = gsap.to(certWrapper, { x: getScrollAmount, ease: 'none' });

      ScrollTrigger.create({
        trigger: certSection,
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }
  }

});
