/**
 * BiteCycle – Frontend interactions
 * Mobile menu, FAQ accordion, form → WhatsApp, smooth scroll helpers
 */

(function () {
  'use strict';

  // ---------- Year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Header scroll effect ----------
  const header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile hamburger menu ----------
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  function closeMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  function openMenu() {
    hamburger.classList.add('active');
    nav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      if (nav.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when clicking a nav link
    nav.querySelectorAll('.nav__link, .btn--nav').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // ---------- FAQ Accordion ----------
  const accordion = document.getElementById('faq-accordion');
  if (accordion) {
    const triggers = accordion.querySelectorAll('.accordion__trigger');

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const panel = trigger.nextElementSibling;

        // Close all others (optional – single open)
        triggers.forEach(function (other) {
          if (other !== trigger) {
            other.setAttribute('aria-expanded', 'false');
            other.nextElementSibling.classList.remove('open');
          }
        });

        // Toggle current
        trigger.setAttribute('aria-expanded', String(!isExpanded));
        panel.classList.toggle('open', !isExpanded);
      });
    });
  }

  // ---------- Active nav link on scroll ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  function highlightNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });

  // ---------- Enquiry Form → WhatsApp ----------
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      const errorIds = ['name-error', 'service-error', 'message-error'];
      errorIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
      });

      const name = document.getElementById('name').value.trim();
      const service = document.getElementById('service').value;
      const pickup = document.getElementById('pickup').value.trim();
      const destination = document.getElementById('destination').value.trim();
      const message = document.getElementById('message').value.trim();

      let valid = true;

      if (!name) {
        document.getElementById('name-error').textContent = 'Please enter your name.';
        valid = false;
      }

      if (!service) {
        document.getElementById('service-error').textContent = 'Please select a service.';
        valid = false;
      }

      if (!message) {
        document.getElementById('message-error').textContent = 'Please enter a message.';
        valid = false;
      }

      if (!valid) return;

      // Build WhatsApp message
      let text = 'Hi BiteCycle! I would like to enquire about ' + service + '.\n\n';
      text += 'Name: ' + name + '\n';
      if (pickup) text += 'Pickup location: ' + pickup + '\n';
      if (destination) text += 'Delivery destination: ' + destination + '\n';
      text += '\nMessage:\n' + message;

      const encoded = encodeURIComponent(text);
      const waUrl = 'https://wa.me/27606248852?text=' + encoded;

      // Show success briefly then open
      const successEl = document.getElementById('form-success');
      if (successEl) {
        successEl.hidden = false;
      }

      // Open WhatsApp
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // Optional: reset form after short delay
      setTimeout(function () {
        form.reset();
        if (successEl) successEl.hidden = true;
      }, 2500);
    });
  }

  // ---------- Smooth scroll for same-page anchors (fallback) ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without jump
        history.pushState(null, '', targetId);
      }
    });
  });
})();
