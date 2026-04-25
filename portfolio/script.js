/* ============================================
   PORTFOLIO — Main JavaScript
   Author: Saif Ur Rahman Khan
   
   Features:
   1. Lucide icon initialization
   2. Dark/Light theme toggle (persisted)
   3. Smart navbar (hide on scroll down, show on scroll up, glass blur)
   4. Mobile menu toggle
   5. GSAP hero entrance + ScrollTrigger fade-ups
   6. Active nav link highlighting on scroll
   7. Contact form with success message
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     1. INITIALIZE LUCIDE ICONS
     ------------------------------------------ */
  lucide.createIcons();

  /* ------------------------------------------
     2. THEME TOGGLE
     Reads saved preference from localStorage.
     Defaults to dark mode if nothing is saved.
     ------------------------------------------ */
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  // Apply saved theme on load
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
    // Swap moon/sun icon on both toggle buttons
    const icon = theme === 'dark' ? 'moon' : 'sun';
    [themeToggle, themeToggleMobile].forEach(btn => {
      if (!btn) return;
      const i = btn.querySelector('i');
      if (i) {
        i.setAttribute('data-lucide', icon);
      }
    });
    // Re-render icons after attribute change
    lucide.createIcons();
  }

  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);

  /* ------------------------------------------
     3. SMART NAVBAR
     - Transparent at top, glass blur after 80px
     - Hides on scroll down, reveals on scroll up
     ------------------------------------------ */
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;
  const SCROLL_THRESHOLD = 80;

  function handleNavbar() {
    const currentY = window.scrollY;

    // Add/remove glass effect
    if (currentY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Hide on scroll down, show on scroll up (only after threshold)
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
     4. MOBILE MENU
     ------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  // Show mobile-only theme toggle when below 900px
  function handleMobileUI() {
    const isMobile = window.innerWidth <= 900;
    if (themeToggleMobile) {
      themeToggleMobile.style.display = isMobile ? 'flex' : 'none';
    }
  }
  handleMobileUI();
  window.addEventListener('resize', handleMobileUI);

  menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);

    // Swap hamburger / X icon
    const icon = menuToggle.querySelector('i');
    icon.setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
    lucide.createIcons();

    // Prevent body scroll when menu is open
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      const icon = menuToggle.querySelector('i');
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
      document.body.style.overflow = '';
    });
  });

  /* ------------------------------------------
     5. GSAP ANIMATIONS
     ------------------------------------------ */
  gsap.registerPlugin(ScrollTrigger);

  // 5a. Hero entrance — staggered on page load
  const heroElements = document.querySelectorAll('.hero .gs-reveal');
  gsap.fromTo(heroElements,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2,
      onComplete: () => {
        // Remove will-change after animation to free GPU memory
        heroElements.forEach(el => el.style.willChange = 'auto');
      }
    }
  );

  // 5b. Scroll-triggered fade-up for all other sections
  const revealElements = document.querySelectorAll(
    'section:not(.hero) .gs-reveal'
  );

  revealElements.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',   // fires when element top hits 88% of viewport
          toggleActions: 'play none none none', // only play once
        },
        onComplete: () => {
          el.style.willChange = 'auto';
        }
      }
    );
  });

  /* ------------------------------------------
     6. ACTIVE NAV LINK HIGHLIGHTING
     Highlights the nav link for the section
     currently in view.
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
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // run once on load

  /* ------------------------------------------
     7. CONTACT FORM — UI-only success message
     No backend — just shows a confirmation.
     ------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) return;

    // Show success message
    formSuccess.classList.add('visible');

    // Re-render any icons inside success message
    lucide.createIcons();

    // Reset form fields
    contactForm.reset();

    // Hide success after 5 seconds
    setTimeout(() => {
      formSuccess.classList.remove('visible');
    }, 5000);
  });

  /* ------------------------------------------
     8. SMOOTH SCROLL for anchor links
     (enhances native scroll-behavior: smooth)
     ------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // skip placeholder links
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height')
      );
      const top = target.offsetTop - navHeight;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  });

});
