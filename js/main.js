document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Scroll progress bar */
const progressBar = document.getElementById('scrollProgress');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}

document.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

/* Reveal on scroll */
if (prefersReducedMotion) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* Nav scrollspy */
const sections = document.querySelectorAll('main section[id]');
const navLinkMap = new Map();
navLinks.querySelectorAll('a').forEach(link => {
  navLinkMap.set(link.getAttribute('href').slice(1), link);
});

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = navLinkMap.get(entry.target.id);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinkMap.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => spyObserver.observe(section));

/* Scrollytelling — proyectos de campo */
const scrollySteps = document.querySelectorAll('.scrolly-step');
const scrollyIndex = document.getElementById('scrollyIndex');
const scrollyYear = document.getElementById('scrollyYear');
const scrollyTrackFill = document.getElementById('scrollyTrackFill');

if (scrollySteps.length) {
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollySteps.forEach(step => step.classList.remove('is-active'));
        entry.target.classList.add('is-active');
        scrollyIndex.textContent = entry.target.dataset.index;
        scrollyYear.textContent = entry.target.dataset.year;
        const progress = (Number(entry.target.dataset.index) / scrollySteps.length) * 100;
        scrollyTrackFill.style.height = progress + '%';
      }
    });
  }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });

  scrollySteps.forEach(step => stepObserver.observe(step));
}

/* Subtle parallax on hero portrait */
const portraitFrame = document.getElementById('portraitFrame');

if (portraitFrame && !prefersReducedMotion) {
  document.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.08;
    portraitFrame.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
}
