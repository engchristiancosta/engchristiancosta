/* ═══════════════════════════════════════════
   CHRISTIAN COSTA ENGENHARIA — script.js
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
  // Close on link click
  mobileMenu.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });

  /* ── Smooth scroll for internal anchors ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  /* ── Intersection Observer — AOS-like ── */
  const aosEls = document.querySelectorAll('[data-aos]');
  const delays = {};
  aosEls.forEach(function (el) {
    const delay = el.getAttribute('data-aos-delay');
    if (delay) {
      el.style.transitionDelay = delay + 'ms';
    }
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  aosEls.forEach(function (el) { observer.observe(el); });

  /* ── Portfolio filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      portfolioItems.forEach(function (item) {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* ── Counter animation for hero stats ── */
  function animateCounter(el, target, duration) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    const isPlus = el.textContent.includes('+');
    function step() {
      current += increment;
      if (current >= target) {
        el.textContent = (isPlus ? '+' : '') + target;
        return;
      }
      el.textContent = (isPlus ? '+' : '') + Math.floor(current);
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statNums = document.querySelectorAll('.stat-num');
  let countersStarted = false;

  const heroObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      statNums.forEach(function (el) {
        const raw = el.textContent.replace('+', '');
        const num = parseInt(raw, 10);
        if (!isNaN(num)) {
          animateCounter(el, num, 1200);
        }
      });
    }
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) heroObserver.observe(heroStats);

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchors.forEach(function (a) {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + id) {
              a.style.color = '#fff';
              a.style.fontWeight = '700';
            } else {
              a.style.fontWeight = '';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach(function (s) { sectionObserver.observe(s); });

})();
