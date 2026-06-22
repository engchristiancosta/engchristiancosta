/* ═══════════════════════════════════════════
   CHRISTIAN COSTA ENGENHARIA — script.js (v3.1)
   ═══════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Navbar scroll ── */
  const navbar = document.getElementById('navbar');
  function checkScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();

  /* ── Menu mobile ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const spans = hamburger.querySelectorAll('span');

  function toggleMenu(force) {
    const open = (force !== undefined) ? force : !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)'  : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  }

  hamburger.addEventListener('click', function() { toggleMenu(); });
  mobileMenu.querySelectorAll('.mobile-link').forEach(function(l) {
    l.addEventListener('click', function() { toggleMenu(false); });
  });

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── Scroll reveal (data-aos) ── */
  var aosEls = document.querySelectorAll('[data-aos]');
  aosEls.forEach(function(el) {
    var d = el.getAttribute('data-aos-delay');
    if (d) el.style.transitionDelay = d + 'ms';
  });

  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

  aosEls.forEach(function(el) { revealObs.observe(el); });

  /* ── Active nav link on scroll ──
     Tracks which section is most visible and marks the matching nav link.
     Uses a map so multiple IntersectionObserver fires don't conflict.   ── */
  var sections   = Array.from(document.querySelectorAll('section[id]'));
  var navLinks   = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  var visible    = {};   // sectionId → ratio

  function updateActiveLink() {
    var best = null, bestRatio = -1;
    sections.forEach(function(s) {
      var r = visible[s.id] || 0;
      if (r > bestRatio) { bestRatio = r; best = s.id; }
    });
    navLinks.forEach(function(a) {
      var isActive = (a.getAttribute('href') === '#' + best);
      a.classList.toggle('nav-active', isActive);
    });
  }

  var secObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      visible[entry.target.id] = entry.intersectionRatio;
    });
    updateActiveLink();
  }, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  });

  sections.forEach(function(s) { secObs.observe(s); });

})();
