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


/* ===================================================================
   Helper Circle — profile availability gate  (shared, data-driven)

   WHAT IT DOES
   On any profile page, this reads the helper's `status` from
   helpers-data.js and, for anyone who is NOT "available", it removes
   the "Ask about ___" enquiry section and the hero CTA button and
   replaces them with a short status panel ("joined a new family" /
   "no longer available") plus a Browse link.

   THE ONLY CONTROL is the helper's `status` in helpers-data.js:
       status: "available"  -> enquiry stays on
       status: "placed"     -> enquiry turns off  (joined a new family)
       status: "hidden"     -> enquiry turns off  (no longer available)
   Flip the status and the profile follows. No per-profile edits.

   HOW TO WIRE IT (pick one)
   A) Paste this whole file into script.js (every profile already loads
      script.js) -> zero new includes, done everywhere at once.
   B) Save as helper-status-gate.js and add ONE line to each profile,
      after script.js:
          <script src="helper-status-gate.js"></script>

   It self-loads helpers-data.js when needed, so profiles do NOT have to
   include helpers-data.js separately. Safe to load on browse/index too
   (it no-ops when there's no enquiry section). Fails open: if the data
   can't load, the enquiry is left exactly as it is.
   =================================================================== */
(function () {
  "use strict";

  /* Set to true to hide the enquiry the instant the page paints and only
     reveal it once the helper is confirmed available. This removes the
     brief flash of the enquiry on a placed profile, at the cost of a short
     blank gap on an available profile while helpers-data.js loads. Default
     false (never hide an available enquiry; placed profiles flash briefly). */
  var HIDE_UNTIL_READY = false;

  var ASK_SELECTOR = ".profile-ask, #ask";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  /* Normalise a filename / profile value for comparison: lowercase, drop a
     trailing slash and a trailing .html/.htm so clean URLs match too. */
  function norm(x) {
    return String(x == null ? "" : x).toLowerCase().replace(/\/+$/, "").replace(/\.html?$/, "");
  }

  function currentSlug() {
    var last = (location.pathname || "").split("/").filter(Boolean).pop() || "";
    return norm(last);
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* Ensure window.HELPERS is available; load helpers-data.js on demand. */
  function withHelpers(cb) {
    if (Array.isArray(window.HELPERS) && window.HELPERS.length) {
      cb(window.HELPERS);
      return;
    }
    if (window.__hcHelpersQueue) {
      window.__hcHelpersQueue.push(cb);
      return;
    }
    window.__hcHelpersQueue = [cb];

    var done = function (list) {
      var q = window.__hcHelpersQueue || [];
      window.__hcHelpersQueue = null;
      q.forEach(function (f) { try { f(list || []); } catch (e) {} });
    };

    // If the page already includes helpers-data.js, don't add it again.
    if (document.querySelector('script[src*="helpers-data.js"]')) {
      // Give the existing script a tick to define window.HELPERS.
      setTimeout(function () { done(Array.isArray(window.HELPERS) ? window.HELPERS : []); }, 0);
      return;
    }

    var s = document.createElement("script");
    s.src = "helpers-data.js";
    s.onload = function () { done(Array.isArray(window.HELPERS) ? window.HELPERS : []); };
    s.onerror = function () { done([]); }; // fail open
    (document.head || document.documentElement).appendChild(s);
  }

  function findHelper(list) {
    var slug = currentSlug();

    // Primary: match the page filename to h.profile.
    if (slug) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] && list[i].profile && norm(list[i].profile) === slug) return list[i];
      }
    }

    // Fallback: match the hidden helper-name field to a helper's display name.
    var input = document.querySelector('input[name="helper-name"]');
    if (input && input.value) {
      var want = input.value.trim().toLowerCase();
      for (var j = 0; j < list.length; j++) {
        var h = list[j];
        if (!h) continue;
        var full = ((h.name || "") + " " + (h.initial || "")).trim().toLowerCase();
        if (want === full || want === (h.name || "").trim().toLowerCase()) return h;
      }
    }
    return null;
  }

  function panelHtml(h) {
    var placed = (h.status === "placed");
    var name = esc(h.name || "This helper");
    var heading = placed ? (name + " has joined a new family.") : (name + " is no longer available.");
    var sub = placed
      ? "This profile is kept up as a record. She is no longer available to hire, but we introduce new helpers regularly."
      : "This profile is no longer taking enquiries. We introduce new helpers regularly.";
    if (h.statusLabel) sub = h.statusLabel + ". " + sub;

    return (
      '<div class="profile-ask-inner">' +
        '<span class="profile-ask-kicker">Update</span>' +
        '<h2 class="profile-ask-h">' + heading + "</h2>" +
        '<p class="profile-ask-sub">' + sub + "</p>" +
        '<a href="browse.html" class="btn btn-green">Browse available helpers</a>' +
      "</div>"
    );
  }

  /* Inject the optional "hide until ready" style + a fail-open timeout. */
  function armHideUntilReady() {
    if (!HIDE_UNTIL_READY) return;
    var st = document.createElement("style");
    st.id = "hc-gate-hide";
    st.textContent = ".hc-gating .profile-ask, .hc-gating .profile-hero-cta{visibility:hidden !important;}";
    (document.head || document.documentElement).appendChild(st);
    document.documentElement.classList.add("hc-gating");
    // Fail open after 4s so a slow/failed data load never hides a live enquiry.
    setTimeout(function () { document.documentElement.classList.remove("hc-gating"); }, 4000);
  }

  function applyGate(list) {
    try {
      document.documentElement.classList.remove("hc-gating"); // reveal (decision made)

      var ask = document.querySelector(ASK_SELECTOR);
      if (!ask) return;                       // not a profile page
      if (window.__hcGateApplied) return;     // run once
      var h = findHelper(list);
      if (!h) return;                         // unknown profile — leave as-is
      if (h.status == null || h.status === "available") return; // available — keep enquiry

      window.__hcGateApplied = true;

      // Swap the enquiry for a status panel.
      ask.innerHTML = panelHtml(h);
      ask.setAttribute("data-gated", h.status);

      // Remove the hero CTA button.
      var cta = document.querySelector(".profile-hero-cta");
      if (cta && cta.parentNode) cta.parentNode.removeChild(cta);
    } catch (e) {
      // Fail open: never let a gate error affect the page.
      try { document.documentElement.classList.remove("hc-gating"); } catch (e2) {}
    }
  }

  ready(function () {
    try {
      if (!document.querySelector(ASK_SELECTOR)) return; // nothing to gate here
      armHideUntilReady();
      withHelpers(applyGate);
    } catch (e) { /* fail open */ }
  });
})();
