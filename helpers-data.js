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

   ─── TO ADD A NEW HELPER ─────────────────────────────────────
   1. Scroll to the TEMPLATE block at the bottom of this list.
   2. Copy it, remove the "//" at the start of each line.
   3. Add a comma after the previous helper's closing  }  so the
      list stays comma-separated.
   4. Fill in the values (you type these yourself — do NOT copy
      from the profile page's HTML).
   5. Upload her photo to images/ and create her profile-*.html.
   Commit, and she appears on both pages automatically.

   Special characters used in the text (type them exactly):
     &nbsp;   = a space that won't line-break (use before last word)
     &amp;    = the "&" symbol
     &middot; = the "·" dot separator
     &mdash;  = a long dash "—"
     \u201c \u201d = curly quotes  “ ”      \u2019 = curly apostrophe ’
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
    skills: ["Elderly Care", "Housekeeping"],
    photo: "images/kartika.jpg",
    profile: "profile-kartika.html"
  },
  {
    id: "jessie",
    name: "Jessie Ann",
    initial: "",
    status: "hidden",
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
    skills: ["Housekeeping", "Cooking", "Childcare"],
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
    skills: ["Childcare", "Cooking", "Housekeeping"],
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
    bestFit: "Childcare (ages 5+) &amp; cooking",
    strengths: ["Childcare (ages 5+)", "Adaptable cooking", "17 years in SG"],
    skills: ["Childcare", "Cooking", "Pets"],
    photo: "images/evelyn.jpeg",
    profile: "profile-evelyn.html"
  },
  {
    id: "mariafe",
    name: "Maria Fe",
    initial: "T.",
    status: "available",
    statusLabel: "Available from 22 July&nbsp;2026",
    line: "Filipino &middot; 49 &middot; Cooking, household &amp;&nbsp;caregiving",
    summary: "Trustworthy and adaptable, with cooking a particular strength across her years in&nbsp;Singapore.",
    referredBy: "Referred by Anna, her current employer of 3.5&nbsp;years",
    quote: "\u201cOne of her greatest strengths is her cooking &mdash; she prepares a wide variety of meals, follows recipes well, and consistently produces tasty, well-presented&nbsp;dishes.\u201d",
    quoteCite: "&mdash; Anna",
    nationality: "Filipino",
    yearsSG: "10 years",
    bestFit: "Cooking, household &amp; caregiving",
    strengths: ["Cooking (wide variety)", "Housekeeping &amp; cleaning", "10 years in SG"],
    skills: ["Cooking", "Housekeeping", "Elderly Care"],
    photo: "images/mariafe.jpeg",
    profile: "profile-mariafe.html"
  },
  {
    name: "Eni",
    initial: "T.",
    status: "available",
    statusLabel: "Available now",
    line: "Indonesian &middot; 38 &middot; Housekeeping &amp; elderly&nbsp;support",
    summary: "Ten years with one Singapore family, confirmed against MOM records &mdash; a housekeeping-focused helper used to running a busy landed&nbsp;home.",
    referredBy: "",
    signal: "verified",
    verifiedYears: 10,
    quote: "",
    quoteCite: "",
    nationality: "Indonesian",
    yearsSG: "10 years",
    bestFit: "Housekeeping &amp; elderly&nbsp;support",
    strengths: ["Housekeeping", "Elderly support", "10 years, one family"],
    skills: ["Housekeeping", "Cooking", "Elderly Care"],
    age: 38,
    salary: "S$800&ndash;900",
    availability: "overseas",
    photo: "images/eni.jpeg",
    profile: "profile-eni.html"
  },
  {
    name: "Liza",
    initial: "",
    status: "available",
    statusLabel: "Available from 26 June&nbsp;2026",
    line: "Filipino &middot; 54 &middot; Childcare, household &amp;&nbsp;cooking",
    summary: "Warm and endlessly creative with children of every age, referred by the family she's been with for the past&nbsp;year.",
    referredBy: "Referred by her current employer of one&nbsp;year",
    signal: "referred",
    quote: "\u201cShe's incredibly creative with crafts, games and keeping younger kids engaged without simply relying on&nbsp;screens.\u201d",
    quoteCite: "&mdash; her current employer",
    nationality: "Filipino",
    yearsSG: "Since 2018 in SG",
    bestFit: "Childcare &amp; household",
    strengths: ["Childcare (newborns to teens)", "Crafts &amp; creative play", "Nearly 30 years\u2019 experience"],
    skills: ["Childcare", "Infant Care", "Cooking", "Housekeeping"],
    age: 54,
    salary: "",
    availability: "transfer",
    photo: "images/liza.jpeg",
    profile: "profile-liza.html"
  }

  // ─── TEMPLATE — copy this, remove the //'s, add a comma after the
  //     helper above, and fill in the values. Then delete this note. ───
  // ,{
  //   id: "firstname",                                  // short lowercase tag, no spaces
  //   name: "First name",                               // e.g. "Maria Fe"
  //   initial: "",                                      // surname initial e.g. "T." — or ""
  //   status: "available",                              // "available" or "placed"
  //   statusLabel: "Available from 1 Aug&nbsp;2026",    // her availability line
  //   line: "Filipino &middot; 40 &middot; Cooking &amp;&nbsp;childcare",
  //   summary: "One honest sentence about her — shows as the one-line on the card.",
  //   referredBy: "Referred by [Name], her current employer of X&nbsp;years",
  //   signal: "referred",                               // "referred" (default, 🟢) or "verified" (🔵)
  //   // ↑ For a LONG-TERM EMPLOYMENT VERIFIED helper (no recommendation):
  //   //   signal: "verified", leave referredBy "", and set ONE of:
  //   //   verifiedYears: 10,   // → "10 years with same employer"
  //   //   renewals: 3,         // → "3 contract renewals, same employer"
  //   skills: ["Childcare", "Cooking", "Housekeeping"],  // first 3 show as ticks + power filters
  //   //   (use the filter vocabulary: Childcare, Infant Care, Housekeeping, Cooking, Elderly Care, Pets)
  //   age: 40,                                          // optional; else read from `line`
  //   salary: "S$700&ndash;800",                        // optional; blank shows "Salary on enquiry"
  //   availability: "transfer",                         // "transfer" (in SG, default) or "overseas"
  //   quote: "\u201cA short line from the employer about her.\u201d",
  //   quoteCite: "&mdash; [Referrer first name]",
  //   nationality: "Filipino",
  //   yearsSG: "10 years",                              // or "" if unknown
  //   bestFit: "Cooking &amp; childcare",               // shows on the home-page card
  //   strengths: ["Skill one", "Skill two", "10 years in SG"],  // home-page card chips
  //   photo: "images/firstname.jpeg",                   // upload this file to images/
  //   profile: "profile-firstname.html"                 // create this page
  // }
];

(function () {
  var H = window.HELPERS || [];

  function fullName(h) { return h.initial ? (h.name + " " + h.initial) : h.name; }
  function plain(s) { return String(s).replace(/&[a-z]+;/gi, " ").replace(/"/g, ""); }

  /* ── Trust signals ──
       "referred" (default) → 🟢 Employer Referred  (current/former employer recommendation)
       "verified"           → 🔵 Long-Term Employment Verified  (4+ yrs, same employer)
     For a verified helper: signal:"verified" + verifiedYears (e.g. 10) OR renewals (e.g. 3).
     (Legacy "recommended"/"retention" still map correctly.) */
  function signalKey(h) { return (h.signal === "verified" || h.signal === "retention") ? "verified" : "referred"; }
  function signalLabel(h) { return signalKey(h) === "verified" ? "Long-Term Employment Verified" : "Employer Recommended"; }
  function signalSub(h) {
    if (signalKey(h) !== "verified") return "Recommended by current or former employer";
    if (h.verifiedYears || h.retentionYears) return (h.verifiedYears || h.retentionYears) + " years with same employer";
    if (h.renewals) return h.renewals + " contract renewals, same employer";
    return "Employment duration verified";
  }
  // Clean skill labels (prefer h.skills; else derive from strengths) — power ticks + filters
  function skillList(h) {
    if (h.skills && h.skills.length) return h.skills;
    return (h.strengths || []).filter(function (s) { return !/year/i.test(s); })
      .map(function (s) { return s.replace(/\s*\(.*?\)\s*/g, " ").replace(/\s+/g, " ").trim(); });
  }
  function ageOf(h) {
    if (h.age) return h.age;
    var parts = String(h.line || "").split("&middot;");
    for (var i = 0; i < parts.length; i++) {
      var n = parts[i].replace(/[^0-9]/g, "");
      if (n && +n > 17 && +n < 75) return +n;
    }
    return "";
  }
  function natCountry(h) {
    var n = (h.nationality || "").toLowerCase();
    if (n.indexOf("filipin") > -1) return "philippines";
    if (n.indexOf("indonesia") > -1) return "indonesia";
    if (n.indexOf("myanmar") > -1 || n.indexOf("burm") > -1) return "myanmar";
    return "other";
  }
  function availOf(h) { return h.availability === "overseas" ? "overseas" : "transfer"; }
  // Home-page photo badge: green pill (referred) · blue pill (verified) — colour is the signal
  function homeBadge(h) {
    return signalKey(h) === "verified"
      ? '<span class="hc-badge hc-badge--ver"><span class="tsig-mark" aria-hidden="true">\uD83D\uDD04</span> Long-Term Employment Verified</span>'
      : '<span class="hc-badge hc-badge--ref"><span class="tsig-mark" aria-hidden="true">\u2B50</span> Employer Recommended</span>';
  }

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
            homeBadge(h) +
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

  /* ── Browse marketplace card (compact, scannable) into a .mcard-grid ── */
  function fullCard(h, wrapClass, statusPhrase) {
    var key = signalKey(h);
    var skills = skillList(h);
    var ticks = skills.slice(0, 3).map(function (s) {
      return '<li><svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7.4l3 3 6-6.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' + s + '</li>';
    }).join("");
    var age = ageOf(h);
    var ageNat = (age ? age + ' &middot; ' : '') + h.nationality;
    var salary = h.salary ? h.salary : 'Salary on enquiry';
    var dataSkills = skills.map(function (s) { return s.toLowerCase(); }).join(" ");
    var placed = (h.status === "placed");
    var v = (key === "verified");
    var nameHtml = h.initial ? (h.name + ' <span class="mcard-init">' + h.initial + '</span>') : h.name;

    return (
'    <div class="mcard-wrap ' + wrapClass + '" data-signal="' + key + '" data-skills="' + dataSkills + '" data-nat="' + natCountry(h) + '" data-avail="' + availOf(h) + '">\n' +
'      <a href="' + h.profile + '" class="mcard mcard--' + (v ? 'ver' : 'ref') + '" aria-label="View ' + plain(fullName(h)) + '\u2019s profile">\n' +
'        <div class="mcard-media">\n' +
'          <img src="' + h.photo + '" alt="" loading="lazy"/>\n' +
(placed ? '          <span class="mcard-placed">Joined a family</span>\n' : '') +
'        </div>\n' +
'        <div class="mcard-body">\n' +
'          <span class="mcard-badge mcard-badge--' + (v ? 'ver' : 'ref') + '"><span class="tsig-mark" aria-hidden="true">' + (v ? '\uD83D\uDD04' : '\u2B50') + '</span> ' + signalLabel(h) + '</span>\n' +
'          <div class="mcard-head">\n' +
'            <h3 class="mcard-name">' + nameHtml + '</h3>\n' +
'            <p class="mcard-sub">' + ageNat + '</p>\n' +
'          </div>\n' +
(v ? '          <p class="mcard-trust">' + signalSub(h) + '</p>\n' : '') +
'          <ul class="mcard-skills">' + ticks + '</ul>\n' +
'          <p class="mcard-summary">' + h.summary + '</p>\n' +
'          <div class="mcard-foot">\n' +
'            <span class="mcard-salary">' + salary + '</span>\n' +
'            <span class="mcard-cta">View profile &rarr;</span>\n' +
'          </div>\n' +
'        </div>\n' +
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
