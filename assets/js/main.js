/**
* Lokesh Thakur - Official Author Website
* Adapted from iPortfolio with enhanced multi-page navigation and interactive features
*/

(function() {
  "use strict";

  /**
   * Vertical Navbar & Content Toggle Behavior
   * Responsive off-canvas on mobile with backdrop overlay
   */
  const sidebarCollapseBtn = document.getElementById('sidebarCollapse');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  // Inject backdrop overlay if not already in DOM
  let backdrop = document.querySelector('.sidebar-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);
  }

  function toggleSidebar(forceState) {
    if (!sidebar) return;
    const isCurrentlyActive = sidebar.classList.contains('active');
    const targetState = typeof forceState === 'boolean' ? forceState : !isCurrentlyActive;

    sidebar.classList.toggle('active', targetState);
    if (content) content.classList.toggle('active', targetState);

    if (window.innerWidth <= 768) {
      if (targetState) {
        backdrop.classList.add('show');
        document.body.classList.add('sidebar-open');
      } else {
        backdrop.classList.remove('show');
        document.body.classList.remove('sidebar-open');
      }
    } else {
      backdrop.classList.remove('show');
      document.body.classList.remove('sidebar-open');
    }
  }

  if (sidebarCollapseBtn) {
    sidebarCollapseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebar();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', function(e) {
      e.preventDefault();
      toggleSidebar(false);
    });
  }

  /**
   * Close mobile nav on clicking any nav link
   */
  document.querySelectorAll('#sidebar .nav-link').forEach(navLink => {
    navLink.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleSidebar(false);
      }
    });
  });

  /**
   * Close mobile menu when clicking outside sidebar
   */
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
      if (!sidebar.contains(e.target) && sidebarCollapseBtn && !sidebarCollapseBtn.contains(e.target)) {
        toggleSidebar(false);
      }
    }
  });

  /**
   * Handle window resize gracefully
   */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && backdrop.classList.contains('show')) {
      backdrop.classList.remove('show');
      document.body.classList.remove('sidebar-open');
    }
  });

  /**
   * Hero Squiggly Text Loading Animation
   */
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    function activateHeroAnimation() {
      heroSection.classList.add('hero-loaded');
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(activateHeroAnimation, 150);
    } else {
      window.addEventListener('DOMContentLoaded', () => setTimeout(activateHeroAnimation, 150));
      window.addEventListener('load', activateHeroAnimation);
    }

    const heroTitle = heroSection.querySelector('.hero-title-animated');
    if (heroTitle) {
      heroTitle.style.cursor = 'pointer';
      heroTitle.addEventListener('click', () => {
        heroSection.classList.remove('hero-loaded');
        void heroTitle.offsetWidth;
        setTimeout(() => heroSection.classList.add('hero-loaded'), 50);
      });
    }
  }

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll (AOS)
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== 'undefined') {
    const glightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true
    });
  }

  /**
   * Init isotope layout and filters (Portfolio & Gallery)
   */
  window.addEventListener('load', () => {
    if (typeof Isotope !== 'undefined') {
      document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        const container = isotopeItem.querySelector('.isotope-container');
        if (container && typeof imagesLoaded !== 'undefined') {
          imagesLoaded(container, function() {
            initIsotope = new Isotope(container, {
              itemSelector: '.isotope-item',
              layoutMode: layout,
              filter: filter,
              sortBy: sort
            });
          });
        }

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            const activeFilter = isotopeItem.querySelector('.isotope-filters .filter-active');
            if (activeFilter) {
              activeFilter.classList.remove('filter-active');
            }
            this.classList.add('filter-active');
            if (initIsotope) {
              initIsotope.arrange({
                filter: this.getAttribute('data-filter')
              });
            }
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });
      });
    }
  });

  /**
   * Dynamic WhatsApp link generator for books (if data attributes are used)
   */
  document.querySelectorAll('[data-whatsapp-book]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const bookTitle = this.getAttribute('data-whatsapp-book');
      if (bookTitle) {
        const text = `Hello, I am interested in purchasing the book ${bookTitle} by Lokesh Thakur. Please share the details.`;
        const url = `https://wa.me/919456593170?text=${encodeURIComponent(text)}`;
        this.setAttribute('href', url);
      }
    });
  });

})();
