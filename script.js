// --- Scrollspy simple y limpio para menú de navegación ---
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const header = document.querySelector('.main-header');

  function scrollSpy() {
    const headerHeight = header ? header.offsetHeight : 0;
    let currentSectionId = sections[0]?.id;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.getBoundingClientRect().top - headerHeight - 1;
      if (sectionTop <= 0) {
        currentSectionId = section.id;
      }
    }
    navLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);
  window.addEventListener('resize', scrollSpy);
  scrollSpy();

  // Scroll suave y blur al hacer click en el menú
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      this.blur();
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});

// --- Animación de scroll ---
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  const sections = document.querySelectorAll('section, .testimonios, .productos-mosaico, .filosofia, .footer, .header, .hero');
  const triggerBottom = window.innerHeight * 0.92;
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
  sections.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// --- CTA botón Hero scroll suave ---
document.addEventListener('DOMContentLoaded', function () {
  const ctaBtn = document.querySelector('.cta-btn[href="#productos"]');
  const header = document.querySelector('.main-header');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function (e) {
      const target = document.querySelector('#productos');
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 60;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    });
  }
});

// --- Slider testimonios ---
let currentTestimonio = 0;
const testimonios = document.querySelectorAll('.testimonios-slider .testimonio');
function showTestimonio(idx) {
  testimonios.forEach((t, i) => {
    t.classList.toggle('activo', i === idx);
  });
}
function nextTestimonio() {
  currentTestimonio = (currentTestimonio + 1) % testimonios.length;
  showTestimonio(currentTestimonio);
}
if (testimonios.length > 0) {
  setInterval(nextTestimonio, 4000);
}

// --- Formulario de contacto ---
const form = document.querySelector('.contacto-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  });
}

// --- Scroll Up ---
const scrollUpBtn = document.querySelector('.scroll-up');
if (scrollUpBtn) {
  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Burger Menu y overlay ---
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  if (burger && navMenu && overlay) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      navMenu.classList.toggle('show-menu');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll', navMenu.classList.contains('show-menu'));
    });

    overlay.addEventListener('click', closeMenu);
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    function closeMenu() {
      burger.classList.remove('active');
      navMenu.classList.remove('show-menu');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  }
});

// --- WhatsApp mensaje flotante ---
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const wspBtn = document.querySelector('.whatsapp-float');
    if (wspBtn && !document.getElementById('wsp-seo-msg')) {
      const msg = document.createElement('div');
      msg.id = 'wsp-seo-msg';
      msg.textContent = '¿Necesitás pan artesanal, tortas o dulces? ¡Escribinos por WhatsApp!';
      msg.style.position = 'fixed';
      msg.style.right = '90px';
      msg.style.bottom = '38px';
      msg.style.background = 'rgba(255,253,250,0.92)';
      msg.style.color = '#7a3e1d';
      msg.style.padding = '0.7rem 1.3rem';
      msg.style.borderRadius = '10px';
      msg.style.boxShadow = '0 1px 6px rgba(180,138,120,0.08)';
      msg.style.zIndex = '10000';
      msg.style.opacity = '0';
      msg.style.transition = 'opacity 0.4s, transform 0.4s';
      msg.style.transform = 'translateY(20px)';
      msg.style.cursor = 'pointer';
      msg.style.pointerEvents = 'auto';

      msg.addEventListener('click', function () {
        window.open('https://wa.me/5491168654407?text=' + encodeURIComponent('Hola Jamón y Miga, me comunico desde tu sitio web.'), '_blank');
      });

      document.body.appendChild(msg);
      setTimeout(() => {
        msg.style.opacity = '1';
        msg.style.transform = 'translateY(0)';
      }, 100);
      setTimeout(() => {
        msg.style.opacity = '0';
        msg.style.transform = 'translateY(20px)';
        setTimeout(() => msg.remove(), 400);
      }, 5000);
    }
  }, 3000);
});



document.addEventListener('DOMContentLoaded', function () {
  const openPrivacidad = document.getElementById('open-privacidad');
  const modalPrivacidad = document.getElementById('modal-privacidad');
  const closePrivacidad = document.getElementById('close-privacidad');
  const aceptarPrivacidad = document.getElementById('aceptar-privacidad');

  if (openPrivacidad && modalPrivacidad) {
    openPrivacidad.addEventListener('click', function (e) {
      e.preventDefault();
      modalPrivacidad.style.display = 'block';
    });
  }
  if (closePrivacidad && modalPrivacidad) {
    closePrivacidad.addEventListener('click', function () {
      modalPrivacidad.style.display = 'none';
    });
  }
  if (aceptarPrivacidad && modalPrivacidad) {
    aceptarPrivacidad.addEventListener('click', function () {
      modalPrivacidad.style.display = 'none';
    });
  }
  // Cerrar modal al hacer click fuera del contenido
  if (modalPrivacidad) {
    modalPrivacidad.addEventListener('click', function (e) {
      if (e.target === modalPrivacidad) {
        modalPrivacidad.style.display = 'none';
      }
    });
  }
});