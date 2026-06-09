/* ════════════════════════════════════════════════════════════
   Helper Circle — shared helper data (single source of truth)
   ────────────────────────────────────────────────────────────
   Edit ONLY this file to add / update / retire a helper.
   Both the home page and the browse page read from it.

   status:  "available" → open to a transfer
              · home page: shown in the compact grid (max 3)
              · browse:    shown under "Looking for their next family"
            "placed"    → has joined / is joining a new family
              · home page: not shown
              · browse:    shown under "Helpers who've found their
                           next family" (proof)

   To retire someone from public view entirely, set status to
   "hidden" (or just delete her block).
   ════════════════════════════════════════════════════════════ */
window.HELPERS = [
  {
    id: "kartika",
    name: "Kartika",
    initial: "S.",
    status: "placed",
    statusLabel: "Joining a new family &middot; 1 July&nbsp;2026",
    line: "Indonesian &middot; Elderly care &amp;&nbsp;household",
    summary: "Sincere, calm, and quietly very good at her&nbsp;work.",
    referredBy: "Referred by Sheila, her previous&nbsp;employer",
    quote: "\u201cShe follows the schedule and asks when she doesn\u2019t understand &mdash; she never guesses her way through.\u201d",
    quoteCite: "&mdash; Sheila",
    nationality: "Indonesian",
    yearsSG: "",
    bestFit: "Elderly care &amp; household",
    strengths: ["Elderly care", "Household", "Bahasa Melayu"],
    photo: "images/kartika.jpg",
    profile: "profile-kartika.html"
  },
  {
    id: "jessie",
    name: "Jessie Ann",
    initial: "",
    status: "available",
    statusLabel: "Available from 30 June&nbsp;2026",
    line: "Filipino &middot; 49 &middot; Housekeeping focus &amp;&nbsp;cooking",
    summary: "Independent, proactive, and quietly takes ownership of what needs&nbsp;doing.",
    referredBy: "Referred by Annie, her current employer of 2&nbsp;years",
    quote: "\u201cIt\u2019s simply not in her nature to walk past something that needs&nbsp;doing.\u201d",
    quoteCite: "&mdash; Annie",
    nationality: "Filipino",
    yearsSG: "16 years",
    bestFit: "Housekeeping &amp; cooking, older children",
    strengths: ["Children (primary &amp; teen)", "Multi-cuisine cooking", "16 years in SG"],
    photo: "images/jessie.jpg",
    profile: "profile-jessie.html"
  },
  {
    id: "amie",
    name: "Amie",
    initial: "",
    status: "available",
    statusLabel: "Available from end July&nbsp;2026",
    line: "Filipino &middot; 44 &middot; Childcare, household &amp;&nbsp;cooking",
    summary: "Trustworthy, capable, and quietly steady across 8 years with her current&nbsp;family.",
    referredBy: "Referred by Anne, her current employer of 8&nbsp;years",
    quote: "\u201cWhile not naturally demonstrative, Amie is genuinely caring and dependable &mdash; she shows her concern through practical&nbsp;actions.\u201d",
    quoteCite: "&mdash; Anne",
    nationality: "Filipino",
    yearsSG: "17 years",
    bestFit: "Childcare &amp; all-round household",
    strengths: ["Childcare (3 to teens)", "Western cooking", "17 years in SG"],
    photo: "images/amie.jpg",
    profile: "profile-amie.html"
  },
  {
    id: "evelyn",
    name: "Evelyn",
    initial: "",
    status: "available",
    statusLabel: "Available from July / August&nbsp;2026",
    line: "Filipino &middot; 50 &middot; Childcare, household &amp;&nbsp;cooking",
    summary: "Reliable and independent, with 17 years caring for international families in&nbsp;Singapore.",
    referredBy: "Referred by Marianne, her current employer of 1&nbsp;year",
    quote: "\u201cReliable, honest, independent, energetic &mdash; and always in a good&nbsp;mood.\u201d",
    quoteCite: "&mdash; Marianne",
    nationality: "Filipino",
    yearsSG: "17 years",
    bestFit: "Childcare across ages &amp; cooking",
    strengths: ["Childcare (infants to teens)", "Adaptable cooking", "17 years in SG"],
    photo: "images/evelyn.jpeg",
    profile: "profile-evelyn.html"
  }
];

(function () {
  var H = window.HELPERS || [];

  function fullName(h) { return h.initial ? (h.name + " " + h.initial) : h.name; }
  function plain(s) { return String(s).replace(/&[a-z]+;/gi, " ").replace(/"/g, ""); }

  /* ── Home page: compact cards into #avail-grid (available only, max 3) ──
     When at least one helper is available, show the grid section and hide the
     "Introduced one at a time" pointer. When none are available, hide the grid
     section and reveal the pointer as the empty state. ── */
  function renderHome(grid) {
    var section = document.getElementById("helpers");   // the .avail section
    var pointer = document.getElementById("meet-circle"); // the empty-state pointer
    var accents = ["sage", "peach", "amber"];
    var list = H.filter(function (h) { return h.status === "available"; }).slice(0, 3);

    if (!list.length) {
      if (section) section.style.display = "none";
      if (pointer) pointer.style.display = "";
      return;
    }

    if (section) section.style.display = "";
    if (pointer) pointer.style.display = "none";

    grid.innerHTML = list.map(function (h, i) {
      var accent = accents[i % accents.length];
      // key strengths = skills only (drop the "X years in SG" chip), max 2
      var keyStrengths = h.strengths.filter(function (s) {
        return !/year/i.test(s);
      }).slice(0, 2);
      var chips = keyStrengths.map(function (s) {
        return '<span class="hc-chip">' + s + "</span>";
      }).join("");

      var natline = h.nationality;
      var expRow = h.yearsSG
        ? '<div class="hc-row"><span class="hc-k">Experience</span>' +
            '<span class="hc-v">' + h.yearsSG + ' in Singapore</span></div>'
        : "";

      return (
        '<a class="hc-card hc-card--' + accent + '" href="' + h.profile +
        '" aria-label="View ' + plain(h.name) + '\u2019s profile">' +
          '<div class="hc-media">' +
            '<img src="' + h.photo + '" alt="" loading="lazy"/>' +
            '<span class="hc-badge">Employer referred</span>' +
            '<div class="hc-namebar">' +
              '<span class="hc-name">' + fullName(h) + '</span>' +
              '<span class="hc-natline">' + natline + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="hc-body">' +
            '<p class="hc-status"><span class="hc-dot" aria-hidden="true"></span>' + h.statusLabel + '</p>' +
            '<div class="hc-snap">' +
              '<div class="hc-row"><span class="hc-k">Best fit</span>' +
                '<span class="hc-v">' + h.bestFit + '</span></div>' +
              '<div class="hc-row"><span class="hc-k">Strengths</span>' +
                '<span class="hc-v hc-chips">' + chips + '</span></div>' +
              expRow +
            '</div>' +
            '<span class="hc-cta">View profile &rarr;</span>' +
          '</div>' +
        "</a>"
      );
    }).join("");

    buildDots(grid);
  }

  /* ── Swipe tracker dots for the mobile carousel ── */
  function buildDots(grid) {
    // remove any previously injected dots (idempotent)
    var existing = grid.parentNode.querySelector(".avail-dots");
    if (existing) existing.parentNode.removeChild(existing);

    var cards = grid.querySelectorAll(".hc-card");
    if (cards.length < 2) return;

    var dots = document.createElement("div");
    dots.className = "avail-dots";
    dots.setAttribute("aria-hidden", "true");

    cards.forEach(function (card, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "avail-dot" + (i === 0 ? " is-active" : "");
      dot.addEventListener("click", function () {
        var cardRect = card.getBoundingClientRect();
        var gridRect = grid.getBoundingClientRect();
        grid.scrollBy({ left: cardRect.left - gridRect.left - 28, behavior: "smooth" });
      });
      dots.appendChild(dot);
    });
    grid.parentNode.insertBefore(dots, grid.nextSibling);

    var ticking = false;
    grid.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var gridRect = grid.getBoundingClientRect();
        var center = gridRect.left + gridRect.width / 2;
        var best = 0, bestDist = Infinity;
        cards.forEach(function (card, i) {
          var r = card.getBoundingClientRect();
          var d = Math.abs((r.left + r.width / 2) - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        dots.querySelectorAll(".avail-dot").forEach(function (d, i) {
          d.classList.toggle("is-active", i === best);
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* ── Browse page: full feature cards into a .circle-row container ── */
  function fullCard(h, wrapClass, statusPhrase) {
    var nameHtml = h.initial
      ? (h.name + ' <span class="preview-initial">' + h.initial + "</span>")
      : h.name;
    var chips = h.strengths.map(function (s) {
      return '<span class="preview-chip">' + s + "</span>";
    }).join("\n            ");

    return (
'    <div class="preview-card-wrap ' + wrapClass + '">\n' +
'      <a href="' + h.profile + '" class="preview-card-link" aria-label="Read ' + plain(h.name) + '\u2019s profile">\n' +
'        <article class="preview-card preview-card--live preview-card--feature" aria-label="' + plain(fullName(h)) + ' \u2014 ' + statusPhrase + '">\n' +
'          <div class="preview-top">\n' +
'            <div class="preview-photo-slot preview-photo-slot--live" aria-hidden="true">\n' +
'              <img src="' + h.photo + '" alt="" class="preview-photo-img"/>\n' +
'            </div>\n' +
'            <div class="preview-meta">\n' +
'              <div class="preview-status">\n' +
'                <span class="preview-status-dot" aria-hidden="true"></span>\n' +
'                <span>' + h.statusLabel + '</span>\n' +
'              </div>\n' +
'              <h3 class="preview-name">' + nameHtml + '</h3>\n' +
'              <p class="preview-line">' + h.line + '</p>\n' +
'            </div>\n' +
'          </div>\n' +
'          <div class="preview-section">\n' +
'            <p class="preview-summary">' + h.summary + '</p>\n' +
'            <p class="referred-by"><span class="referred-by-dot" aria-hidden="true"></span>' + h.referredBy + '</p>\n' +
'            <blockquote class="preview-quote">\n' +
'              ' + h.quote + '\n' +
'              <cite>' + h.quoteCite + '</cite>\n' +
'            </blockquote>\n' +
'          </div>\n' +
'          <div class="preview-chips">\n            ' + chips + '\n          </div>\n' +
'          <div class="preview-cta-row">\n' +
'            <span class="preview-cta">Read her profile &rarr;</span>\n' +
'          </div>\n' +
'        </article>\n' +
'      </a>\n' +
'    </div>'
    );
  }

  function renderBrowseRow(row, status, wrapClass, statusPhrase) {
    var list = H.filter(function (h) { return h.status === status; });
    row.innerHTML = list.map(function (h) {
      return fullCard(h, wrapClass, statusPhrase);
    }).join("\n");
  }

  function render() {
    var grid = document.getElementById("avail-grid");
    if (grid) renderHome(grid);

    var successRow = document.getElementById("success-row");
    if (successRow) renderBrowseRow(successRow, "placed", "success-card-wrap", "joining a new family");

    var availRow = document.getElementById("available-row");
    if (availRow) renderBrowseRow(availRow, "available", "available-card-wrap", "looking for her next family");

    return !!(grid || successRow || availRow);
  }

  /* Render synchronously (the script tag sits after its containers on both
     pages, so they already exist). Fall back to DOMContentLoaded only if no
     container was found yet — and never double-render. */
  if (!render()) {
    document.addEventListener("DOMContentLoaded", render);
  }
})();
