/* ============================================================
   HELPER CIRCLE — script.js
   ============================================================ */

/* ── Header scroll shadow ── */
const hdr = document.getElementById('site-header');
if (hdr) {
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── Mobile hamburger nav ── */
const burger = document.getElementById('hamburger');
const nav    = document.getElementById('site-nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('.nav-a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    });
  });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

/* ── Scroll reveal ── */
const revEls = document.querySelectorAll('.rev');
if (revEls.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const parent = entry.target.parentElement;
      const revSibs = [...parent.querySelectorAll(':scope > .rev')];
      const idx = revSibs.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('in'), idx * 75);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
  revEls.forEach(el => obs.observe(el));
}

/* ── Hero card parallax ── */
const heroEl   = document.querySelector('.hero');
const hcards   = document.querySelectorAll('.hc');
const baseRots = [-4, 3, -1.5];

if (heroEl && hcards.length && window.matchMedia('(min-width: 860px)').matches) {
  heroEl.addEventListener('mousemove', e => {
    const r  = heroEl.getBoundingClientRect();
    const mx = (e.clientX - r.left)  / r.width  - 0.5;
    const my = (e.clientY - r.top)   / r.height - 0.5;
    hcards.forEach((c, i) => {
      const d = (i + 1) * 7;
      c.style.transform = `rotate(${baseRots[i] + mx * 2}deg) translate(${mx * d}px,${my * d}px)`;
    });
  });
  heroEl.addEventListener('mouseleave', () => {
    hcards.forEach((c, i) => { c.style.transform = `rotate(${baseRots[i]}deg)`; });
  });
}

/* ── Browse: filter + search ── */
const filterBar   = document.getElementById('filter-bar');
const browseGrid  = document.getElementById('browse-grid');
const browseCt    = document.getElementById('browse-ct');
const searchInput = document.getElementById('search-input');
const emptyMsg    = document.getElementById('browse-empty');

function runFilters() {
  if (!browseGrid) return;
  const active = (filterBar?.querySelector('.fchip.on')?.dataset.filter) || 'all';
  const term   = (searchInput?.value || '').trim().toLowerCase();
  const cards  = [...browseGrid.querySelectorAll('.helper-card')];
  let vis = 0;

  cards.forEach(card => {
    const tags = card.dataset.tags?.toLowerCase() || '';
    const name = card.dataset.name?.toLowerCase() || '';
    const matchF = active === 'all' || tags.includes(active.toLowerCase());
    const matchS = !term || name.includes(term) || tags.includes(term);
    const show   = matchF && matchS;
    card.style.display = show ? '' : 'none';
    if (show) vis++;
  });

  if (browseCt)  browseCt.innerHTML = `<strong>${vis}</strong> helper${vis !== 1 ? 's' : ''} found`;
  if (emptyMsg)  emptyMsg.style.display = vis === 0 ? 'block' : 'none';
}

if (filterBar) {
  filterBar.addEventListener('click', e => {
    const chip = e.target.closest('.fchip');
    if (!chip) return;
    // Toggle active class and aria-pressed on all chips
    filterBar.querySelectorAll('.fchip').forEach(c => {
      c.classList.remove('on');
      c.setAttribute('aria-pressed', 'false');
    });
    chip.classList.add('on');
    chip.setAttribute('aria-pressed', 'true');
    runFilters();
  });
}
if (searchInput) searchInput.addEventListener('input', runFilters);

/* ── Refer form submit → success state ── */
const form       = document.getElementById('refer-form');
const formWrap   = document.getElementById('form-wrap');
const formOk     = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Basic required-field validation with red border
    let ok = true;
    form.querySelectorAll('[required]').forEach(f => {
      const invalid = !f.value.trim();
      f.style.borderColor = invalid ? '#FF8F70' : '';
      if (invalid) {
        ok = false;
        f.addEventListener('input', () => { f.style.borderColor = ''; }, { once: true });
      }
    });
    if (!ok) return;

    // Show success panel
    if (formWrap && formOk) {
      formWrap.style.display  = 'none';
      formOk.style.display    = 'block';
    }
  });
}

/* ── Smooth anchor scrolling ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

/* ── Staggered chip animation on referral banner ── */
const refBanner = document.querySelector('.ref-banner');
const refChips  = document.querySelectorAll('.ref-chips .chip-dk');

if (refBanner && refChips.length) {
  refChips.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(10px)'; });

  const chipObs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    refChips.forEach((c, i) => {
      c.style.transition = `opacity .4s ease ${i * .12}s, transform .4s ease ${i * .12}s`;
      setTimeout(() => { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }, 80 + i * 120);
    });
    chipObs.disconnect();
  }, { threshold: 0.3 });
  chipObs.observe(refBanner);
}
