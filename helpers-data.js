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
    id: "angie",
    name: "Angie",
    initial: "",
    status: "available",
    statusLabel: "Available from 23 July&nbsp;2026",
    line: "Filipino &middot; Housekeeping, cooking &amp; pet&nbsp;care",
    summary: "21 years with one family, deeply experienced and adaptable &mdash; loves to cook, and has cared for cats and dogs at&nbsp;home.",
    referredBy: "Referred by Monica, her employer of 21&nbsp;years",
    signal: "referred",
    quote: "\u201cShe has adapted really well to the changing needs of our&nbsp;household.\u201d",
    quoteCite: "&mdash; Monica",
    nationality: "Filipino",
    yearsSG: "21 years, one family",
    bestFit: "Housekeeping &amp; cooking; pet-friendly homes; children&nbsp;10+",
    strengths: ["21 years, one family", "Loves to cook", "Pet care (dogs &amp; cats)"],
    skills: ["Housekeeping", "Cooking", "Pet care"],
    age: 54,
    availability: "transfer",
    photo: "images/angie.jpeg",
    profile: "profile-angie.html"
  },
  {
    id: "analyn",
    name: "Analyn",
    initial: "",
    status: "hidden",
    statusLabel: "No longer available",
    line: "Filipino &middot; 46 &middot; Cleaning, caregiving &amp; pet&nbsp;care",
    summary: "Two years with one family, recommended by her current employer &mdash; warm with young children, devoted to pets, and keeps a spotless&nbsp;home.",
    referredBy: "Referred by Ashley, her employer of two&nbsp;years",
    signal: "referred",
    quote: "\u201cShe is great at cleaning, and our home is sparkling&nbsp;clean.\u201d",
    quoteCite: "&mdash; Ashley",
    nationality: "Filipino",
    yearsSG: "16 years\u2019 experience",
    bestFit: "Families with children &mdash; caregiving &amp; cleaning",
    strengths: ["Experienced with babies &amp; children", "Spotless cleaning", "Devoted pet care"],
    skills: ["Childcare", "Housekeeping", "Pet care"],
    age: 46,
    availability: "transfer",
    photo: "images/analyn.jpeg",
    profile: "profile-analyn.html"
  },
  {
    id: "stephanie",
    name: "Stephanie",
    initial: "",
    status: "available",
    statusLabel: "Available from mid-July&nbsp;2026",
    line: "Filipino &middot; 39 &middot; Cooking, childcare, household &amp; pet&nbsp;care",
    summary: "Two and a half years with one family, recommended by her current employer &mdash; a keen, creative cook, devoted to the home and the family&rsquo;s&nbsp;dog.",
    referredBy: "Referred by Jessica, her employer of two and a half&nbsp;years",
    signal: "referred",
    quote: "\u201cStephanie always tries her best at the tasks that she\u2019s&nbsp;doing.\u201d",
    quoteCite: "&mdash; Jessica",
    nationality: "Filipino",
    yearsSG: "Almost 4 years\u2019 experience",
    bestFit: "A warm family who loves home-cooked&nbsp;meals",
    strengths: ["Keen, creative cook", "Devoted dog care", "Household, laundry &amp; ironing"],
    skills: ["Cooking", "Childcare", "Housekeeping", "Pet care"],
    age: 39,
    availability: "transfer",
    photo: "images/stephanie.jpeg",
    profile: "profile-stephanie.html"
  },
  {
    id: "mariacristine",
    name: "Maria Cristine",
    initial: "",
    status: "hidden",
    statusLabel: "Available now",
    line: "Filipino &middot; 39 &middot; Childcare, elderly care, household &amp; cooking",
    summary: "Around 16 years in Singapore, recommended by her employer &mdash; experienced from young children to elderly care, runs large households, and enjoys&nbsp;cooking.",
    referredBy: "Referred by her employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cTrusted, kind and lively\u2026 excellent with young children (and&nbsp;pets).\u201d",
    quoteCite: "&mdash; her employer",
    nationality: "Filipino",
    yearsSG: "Around 16 years\u2019 experience",
    bestFit: "A family with young children (and&nbsp;pets)",
    strengths: ["Childcare to elderly care", "Cooking &amp; household", "Pet care (dogs)"],
    skills: ["Childcare", "Elderly care", "Cooking", "Housekeeping"],
    age: 39,
    availability: "transfer",
    photo: "images/mariacristine.jpeg",
    profile: "profile-mariacristine.html"
  },
  {
    id: "ami",
    name: "Ami",
    initial: "",
    status: "hidden",
    statusLabel: "Available soon",
    line: "Long-term carer &middot; Elderly care, childcare &amp; cooking",
    summary: "Ten years with one Singapore family, confirmed against MOM records &mdash; a warm, versatile carer, strong in elderly care, childcare and&nbsp;cooking.",
    referredBy: "",
    signal: "verified",
    verifiedYears: 10,
    quote: "",
    quoteCite: "",
    nationality: "",
    yearsSG: "About 15 years",
    bestFit: "Elderly care, childcare &amp; running a warm&nbsp;home",
    strengths: ["10 years, one family", "Elderly care", "Childcare &amp; cooking"],
    skills: ["Elderly Care", "Childcare", "Cooking", "Housekeeping"],
    age: 43,
    salary: "",
    availability: "transfer",
    photo: "images/ami.jpeg",
    profile: "profile-ami.html"
  },
  {
    id: "ilmiyah",
    name: "Ilmiyah",
    initial: "",
    status: "available",
    statusLabel: "Available 5 Aug 2026",
    line: "Indonesian &middot; 44 &middot; Chinese-speaking, childcare &amp; cooking",
    summary: "Chinese-speaking and an exceptional cook, recommended by her employer &mdash; experienced in childcare, elderly care and household&nbsp;cooking.",
    referredBy: "Referred by her employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cAn exceptional cook, very likely the best we have had in the past five&nbsp;years.\u201d",
    quoteCite: "&mdash; her employer",
    nationality: "Indonesian",
    yearsSG: "In Singapore since 2022",
    bestFit: "A Chinese-speaking home that loves good&nbsp;cooking",
    strengths: ["Speaks Chinese", "Exceptional cook", "Childcare &amp; elderly care"],
    skills: ["Cooking", "Childcare", "Elderly Care", "Housekeeping"],
    age: 44,
    availability: "transfer",
    photo: "images/ilmiyah.jpeg",
    profile: "profile-ilmiyah.html"
  },
  {
    id: "dewi",
    name: "Dewi",
    initial: "S.",
    status: "available",
    statusLabel: "Available now (in Indonesia)",
    line: "Indonesian &middot; 42 &middot; Elderly care, dementia &amp; stroke support",
    summary: "Four years with one Singapore family, confirmed against MOM records &mdash; an experienced elderly-care specialist with dementia and stroke&nbsp;experience.",
    referredBy: "",
    signal: "verified",
    verifiedYears: 4,
    quote: "",
    quoteCite: "",
    nationality: "Indonesian",
    yearsSG: "About 5 years",
    bestFit: "A family needing experienced elderly or dementia&nbsp;care",
    strengths: ["4 years, one family", "Dementia &amp; stroke care", "Elderly care specialist"],
    skills: ["Elderly Care", "Cooking", "Housekeeping"],
    age: 42,
    salary: "",
    availability: "overseas",
    photo: "images/dewi.jpeg",
    profile: "profile-dewi.html"
  },
  {
    id: "ngatini",
    name: "Ngatini",
    initial: "",
    status: "available",
    statusLabel: "Available from August",
    line: "Indonesian &middot; 46 &middot; Housekeeping, cooking &amp; childcare",
    summary: "Six years with one family, recommended by her employer &mdash; steady in housekeeping, home-style Chinese cooking, with earlier childcare&nbsp;experience.",
    referredBy: "Referred by her employer of six years, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "",
    quoteCite: "",
    nationality: "Indonesian",
    yearsSG: "Over 6 years",
    bestFit: "Housekeeping, cooking and light&nbsp;childcare",
    strengths: ["6 years, one family", "Housekeeping &amp; cooking", "Childcare, ages 2 to 7"],
    skills: ["Housekeeping", "Cooking", "Childcare"],
    age: 46,
    salary: "",
    availability: "transfer",
    photo: "images/ngatini.jpeg",
    profile: "profile-ngatini.html"
  },
  {
    id: "dynah",
    name: "Dynah Fe",
    initial: "M.",
    status: "placed",
    statusLabel: "Joined a new family &middot; 18 July&nbsp;2026",
    line: "Filipino &middot; 40 &middot; Household, cooking &amp; childcare",
    summary: "Recommended by two employers, both contactable &mdash; in Singapore since 2013, a confident cook, experienced across childcare from newborn to teens, elderly care and&nbsp;household.",
    referredBy: "Recommended by two employers, both happy to be&nbsp;contacted",
    signal: "referred",
    quote: "\u201cShe is trustworthy and reliable and of cheerful&nbsp;disposition.\u201d",
    quoteCite: "&mdash; her previous employer",
    nationality: "Filipino",
    yearsSG: "Since 2013",
    bestFit: "A home that values a capable helper for household, cooking and&nbsp;children",
    strengths: ["Two employer references", "Household &amp; cooking", "Good with children &amp; dogs"],
    skills: ["Housekeeping", "Cooking", "Childcare", "Pet care"],
    age: 40,
    salary: "",
    availability: "transfer",
    photo: "images/dynah.jpeg",
    profile: "profile-dynah.html"
  },
  {
    id: "nurhayati",
    name: "Nurhayati",
    initial: "",
    status: "available",
    statusLabel: "Available late Sep 2026",
    line: "Indonesian &middot; 43 &middot; Chinese-speaking, childcare &amp; cooking",
    summary: "Recommended by her current employer &mdash; Chinese-speaking, a wonderful cook, warm with children, with elder-care experience&nbsp;too.",
    referredBy: "Referred by her current employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cNur loves children, and it shows in how naturally they have all bonded with&nbsp;her.\u201d",
    quoteCite: "&mdash; her current employer",
    nationality: "Indonesian",
    yearsSG: "~5 years",
    bestFit: "A Chinese-speaking home that values warm childcare and good&nbsp;cooking",
    strengths: ["Chinese-speaking", "Wonderful cook", "Warm with children"],
    skills: ["Childcare", "Cooking", "Housekeeping", "Elderly Care"],
    age: 43,
    salary: "",
    availability: "transfer",
    photo: "images/nurhayati.jpeg",
    profile: "profile-nurhayati.html"
  },
  {
    id: "halinda",
    name: "Halinda",
    initial: "",
    status: "available",
    statusLabel: "Available now (until 18 Aug)",
    line: "Indonesian &middot; 37 &middot; Childcare, cooking &amp; household",
    summary: "Recommended by her employer of two years &mdash; warm and hardworking, experienced in childcare, cooking and household, with a heart for elderly&nbsp;care.",
    referredBy: "Referred by her employer of two years, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cShe cared for my critically ill mother like her&nbsp;own.\u201d",
    quoteCite: "&mdash; her employer",
    nationality: "Indonesian",
    yearsSG: "Around 8 years",
    bestFit: "A family wanting warm, companionship-level elderly care and a well-run&nbsp;home",
    strengths: ["Warm &amp; hardworking", "Childcare &amp; cooking", "A heart for elderly care"],
    skills: ["Childcare", "Cooking", "Housekeeping", "Pet care"],
    age: 37,
    salary: "",
    availability: "transfer",
    photo: "images/halinda.jpeg",
    profile: "profile-halinda.html"
  },
  {
    id: "kabyarmoe",
    name: "Ka Byar Moe",
    initial: "",
    status: "hidden",
    statusLabel: "Available now",
    line: "Myanmar &middot; 28 &middot; Elderly care, Mandarin-speaking",
    summary: "Recommended by her employer &mdash; Mandarin-speaking, experienced in elderly and bedridden care, patient and gentle with&nbsp;seniors.",
    referredBy: "Referred by her employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cWe are truly grateful for the care, patience and companionship she&nbsp;provided.\u201d",
    quoteCite: "&mdash; her employer",
    nationality: "Myanmar",
    yearsSG: "Around 4 years",
    bestFit: "Caring for an elderly family member, especially in a Mandarin-speaking&nbsp;home",
    strengths: ["Elderly &amp; bedridden care", "Mandarin-speaking", "Patient &amp; gentle"],
    skills: ["Elderly Care", "Cooking", "Housekeeping"],
    age: 28,
    salary: "",
    availability: "transfer",
    photo: "images/kabyarmoe.jpeg",
    profile: "profile-kabyarmoe.html"
  },
  {
    id: "leslee",
    name: "Leslee",
    initial: "",
    status: "hidden",
    statusLabel: "Available 20 Aug 2026",
    line: "Filipino &middot; 44 &middot; Infant &amp; toddler specialist, cooking",
    summary: "An infant-and-toddler specialist, recommended by past employers &mdash; a wonderful cook, thorough with a home, around seven years in&nbsp;Singapore.",
    referredBy: "Recommended by past employers, current employer reachable on&nbsp;return",
    signal: "referred",
    quote: "\u201cOur kids both love her, and she has been kind with&nbsp;them.\u201d",
    quoteCite: "&mdash; a previous employer",
    nationality: "Filipino",
    yearsSG: "Around 7 years",
    bestFit: "A family with a baby or toddler wanting an experienced, trusted&nbsp;carer",
    strengths: ["Infant &amp; toddler specialist", "Wonderful cook", "Clean, completed contracts"],
    skills: ["Childcare", "Infant Care", "Cooking", "Housekeeping"],
    age: 44,
    salary: "",
    availability: "transfer",
    photo: "images/leslee.jpeg",
    profile: "profile-leslee.html"
  },
  {
    id: "ana",
    name: "Ana",
    initial: "",
    status: "available",
    statusLabel: "Available now",
    line: "Myanmar &middot; 31 &middot; Household, cooking &amp; elderly care",
    summary: "Recommended by her employer &mdash; a warm, honest helper with over six years in Singapore in household work, cooking and elderly&nbsp;care.",
    referredBy: "Referred by her employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cI gave her $5 to buy food. She used $3 and returned me the&nbsp;$2.\u201d",
    quoteCite: "&mdash; her employer",
    nationality: "Myanmar",
    yearsSG: "6+ years",
    bestFit: "A small, simple family, with older children if&nbsp;any",
    strengths: ["Honest &amp; hardworking", "Household &amp; cooking", "Elderly-care experience"],
    skills: ["Housekeeping", "Cooking", "Elderly Care"],
    age: 31,
    salary: "",
    availability: "transfer",
    photo: "images/ana.jpeg",
    profile: "profile-ana.html"
  },
  {
    id: "sanday",
    name: "San Day",
    initial: "",
    status: "available",
    statusLabel: "Available from August",
    line: "Myanmar &middot; 40 &middot; Elderly care, housekeeping &amp; cooking",
    summary: "Recommended by her employer &mdash; hands-on elderly-care experience, an exceptional housekeeper, drawn to elderly care and running a&nbsp;home.",
    referredBy: "Referred by her employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cA super fast learner, bubbly, and she cleans beautifully and independently. We love&nbsp;her.\u201d",
    quoteCite: "&mdash; her employer",
    nationality: "Myanmar",
    yearsSG: "~5 years",
    bestFit: "A home needing warm elderly care and a beautifully kept&nbsp;house",
    strengths: ["Hands-on elderly care", "Cleans beautifully", "Hardworking &amp; a fast learner"],
    skills: ["Elderly Care", "Housekeeping", "Cooking"],
    age: 40,
    salary: "",
    availability: "transfer",
    photo: "images/sanday.jpeg",
    profile: "profile-sanday.html"
  },
  {
    name: "Eni",
    initial: "T.",
    status: "hidden",
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
    name: "Yi Yi",
    initial: "",
    status: "hidden",
    statusLabel: "Available mid-July&nbsp;2026",
    line: "Myanmar &middot; 41 &middot; Elderly care, cooking &amp; housekeeping",
    summary: "Six years with one Singapore family within thirteen years here, confirmed against MOM records &mdash; experienced in elderly care and running a home&nbsp;independently.",
    referredBy: "",
    signal: "verified",
    verifiedYears: 6,
    quote: "",
    quoteCite: "",
    nationality: "Myanmar",
    yearsSG: "13 years",
    bestFit: "Elderly care, cooking &amp; housekeeping",
    strengths: ["Elderly care", "13 years in Singapore", "Works independently"],
    skills: ["Elderly Care", "Cooking", "Housekeeping"],
    age: 41,
    availability: "transfer",
    photo: "images/yiyi.jpeg",
    profile: "profile-yiyi.html"
  },
  {
    id: "timunah",
    name: "Timunah",
    initial: "",
    status: "placed",
    statusLabel: "Joining a new family &middot; 1 Aug&nbsp;2026",
    line: "Indonesian &middot; 53 &middot; Cooking, household &amp;&nbsp;childcare",
    summary: "Seventeen years with one family, and adored by the children she helped&nbsp;raise.",
    referredBy: "Referred by Vera, her current employer of 17&nbsp;years",
    signal: "referred",
    quote: "\u201cShe does her housework well and efficiently, and is hardworking and&nbsp;independent.\u201d",
    quoteCite: "&mdash; Vera",
    nationality: "Indonesian",
    yearsSG: "28 years in SG",
    bestFit: "Cooking, household &amp; childcare",
    strengths: ["Cooking &mdash; 3 cuisines", "Warm with young children", "17 years with one&nbsp;family"],
    skills: ["Cooking", "Childcare (incl. young children)", "Housekeeping"],
    age: 53,
    availability: "transfer",
    photo: "images/timunah.jpeg",
    profile: "profile-timunah.html"
  },
  {
    id: "jenny",
    name: "Jenny",
    initial: "",
    status: "hidden",
    statusLabel: "Available mid-July&nbsp;2026",
    line: "Filipino &middot; 48 &middot; Household management &amp;&nbsp;childcare",
    summary: "Eight years with one family in Singapore, trusted across the whole household, warmly recommended by her current&nbsp;employer.",
    referredBy: "Referred by Stephen, her employer of eight&nbsp;years",
    signal: "referred",
    quote: "\u201cA trusted and dependable part of our home for eight&nbsp;years.\u201d",
    quoteCite: "&mdash; Stephen",
    nationality: "Filipino",
    yearsSG: "8 years with one family",
    bestFit: "Household management &amp; childcare, long&nbsp;term",
    strengths: ["8 years with one family", "Full household &amp; cooking", "Comfortable with cats &amp; dogs"],
    skills: ["Housekeeping", "Cooking", "Childcare"],
    age: 48,
    availability: "transfer",
    photo: "images/jenny.jpeg",
    profile: "profile-jenny.html"
  },
  {
    id: "mary",
    name: "Mary",
    initial: "",
    status: "hidden",
    statusLabel: "Available end of July&nbsp;2026",
    line: "Filipino &middot; 46 &middot; Childcare, cooking &amp;&nbsp;household",
    summary: "Seven years in Singapore, calm and independent, valued over the years by one family who recommends her&nbsp;directly.",
    referredBy: "Referred by Eugene, her long-time employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cI can send her a map and trust her to take the children somewhere new, on her&nbsp;own.\u201d",
    quoteCite: "&mdash; Eugene",
    nationality: "Filipino",
    yearsSG: "7 years in SG",
    bestFit: "Smaller, settled home; school-age&nbsp;children",
    strengths: ["Calm &amp; independent", "Trusted with children", "Proactive cook"],
    skills: ["Childcare", "Cooking", "Housekeeping"],
    age: 46,
    availability: "transfer",
    photo: "images/mary.jpeg",
    profile: "profile-mary.html"
  },
  {
    id: "belinda",
    name: "Belinda",
    initial: "",
    status: "hidden",
    statusLabel: "Available early July&nbsp;2026",
    line: "Filipino &middot; Cooking, household &amp;&nbsp;childcare",
    summary: "Over 16 years with families in Singapore, hospitality-trained, and warmly recommended by her current&nbsp;employer.",
    referredBy: "Referred by Warren, her current employer, who has known her three&nbsp;years",
    signal: "referred",
    quote: "\u201cMy children adore her, and we are deeply invested in helping her find the right long-term&nbsp;family.\u201d",
    quoteCite: "&mdash; Warren",
    nationality: "Filipino",
    yearsSG: "16 years in SG",
    bestFit: "Independent, international household",
    strengths: ["Over 16 years experience", "Western &amp; Asian cooking", "All ages, newborn to teen"],
    skills: ["Cooking", "Childcare", "Housekeeping"],
    availability: "transfer",
    photo: "images/belinda.jpeg",
    profile: "profile-belinda.html"
  },
  {
    id: "ayethidar",
    name: "Aye Thi Dar",
    initial: "",
    status: "hidden",
    statusLabel: "Joined a family",
    line: "Myanmar &middot; Childcare, household &amp; Indian&nbsp;cooking",
    summary: "Three and a half years with one family, exceptional with young children and quietly&nbsp;dependable.",
    referredBy: "Referred by Yash, her current employer of 3.5&nbsp;years",
    signal: "referred",
    quote: "\u201cWith a young child at home, what matters most is dependability, and she has never let us&nbsp;down.\u201d",
    quoteCite: "&mdash; Yash",
    nationality: "Myanmar",
    yearsSG: "3.5 years in SG",
    bestFit: "Smaller household, at home with Indian routines",
    strengths: ["Exceptional with young children", "Indian cooking (veg &amp; non-veg)", "Quietly dependable"],
    skills: ["Childcare", "Cooking", "Housekeeping"],
    availability: "transfer",
    photo: "images/ayethidar.jpeg",
    profile: "profile-ayethidar.html"
  },
  {
    id: "mariafe",
    name: "Maria Fe",
    initial: "T.",
    status: "placed",
    statusLabel: "Joined a new family &middot; 15 July&nbsp;2026",
    line: "Filipino &middot; 49 &middot; Cooking, household &amp;&nbsp;caregiving",
    summary: "Trustworthy and adaptable, with cooking a particular strength across her years in&nbsp;Singapore.",
    referredBy: "Referred by Anna, her current employer of 3.5&nbsp;years",
    quote: "\u201cOne of her greatest strengths is her cooking &mdash; she prepares a wide variety of meals, follows recipes well, and consistently produces tasty, well-presented&nbsp;dishes.\u201d",
    quoteCite: "&mdash; Anna",
    nationality: "Filipino",
    yearsSG: "10 years",
    bestFit: "Cooking, household &amp; caregiving",
    strengths: ["Cooking (wide variety)", "Housekeeping &amp; cleaning", "10 years in SG"],
    skills: ["Cooking", "Childcare (incl. young children)", "Elderly Care", "Housekeeping"],
    salary: "S$950",
    photo: "images/mariafe.jpeg",
    profile: "profile-mariafe.html"
  },
  {
    id: "amie",
    name: "Amie",
    initial: "",
    status: "hidden",
    statusLabel: "Joined a family",
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
    salary: "S$950&ndash;1,000",
    photo: "images/amie.jpg",
    profile: "profile-amie.html"
  },
  {
    id: "evelyn",
    name: "Evelyn",
    initial: "",
    status: "hidden",
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
    salary: "S$1,000",
    photo: "images/evelyn.jpeg",
    profile: "profile-evelyn.html"
  },
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
    name: "Liza",
    initial: "",
    status: "hidden",
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
    salary: "S$1,000",
    availability: "transfer",
    photo: "images/liza.jpeg",
    profile: "profile-liza.html"
  },
  {
    id: "siti",
    name: "Siti",
    initial: "",
    status: "available",
    statusLabel: "Available from end August&nbsp;2026",
    line: "Indonesian &middot; 49 &middot; Elderly &amp; medical&nbsp;care",
    summary: "Fifteen years across two Singapore families, confirmed against MOM records &mdash; deep stroke, dementia, diabetes and bedridden-care experience, with fluent English and some&nbsp;Mandarin.",
    referredBy: "",
    signal: "verified",
    verifiedSub: "15 years across two employers",
    quote: "",
    quoteCite: "",
    nationality: "Indonesian",
    yearsSG: "15 years",
    bestFit: "Elderly &amp; medical&nbsp;care",
    strengths: ["Elderly &amp; medical care", "15 years, two employers", "Fluent English"],
    skills: ["Elderly Care", "Caregiving", "Dementia Care"],
    age: 49,
    salary: "From&nbsp;S$950",
    availability: "transfer",
    photo: "images/siti.jpeg",
    profile: "profile-siti.html"
  },
  {
    id: "ayuni",
    name: "Ayuni",
    initial: "",
    status: "hidden",
    statusLabel: "Available from 19 July&nbsp;2026",
    line: "Indonesian &middot; 43 &middot; Cooking, household &amp;&nbsp;childcare",
    summary: "More than 18 years in Singapore, an experienced all-rounder warmly recommended by her former&nbsp;employer.",
    referredBy: "Referred by Rougeron, her former&nbsp;employer",
    signal: "referred",
    quote: "\u201cShe was extremely good to our family during our expat&nbsp;contract.\u201d",
    quoteCite: "&mdash; Rougeron",
    nationality: "Indonesian",
    yearsSG: "18+ years",
    bestFit: "Cooking, childcare &amp; large&nbsp;homes",
    strengths: ["Cooking &amp; baking", "Newborn to teen", "18+ years in SG"],
    skills: ["Cooking", "Childcare", "Infant Care", "Housekeeping", "Pets"],
    age: 43,
    salary: "S$1,000",
    availability: "transfer",
    photo: "images/ayuni.jpeg",
    profile: "profile-ayuni.html"
  },
  {
    id: "susana",
    name: "Susana",
    initial: "",
    status: "hidden",
    statusLabel: "Available now",
    line: "Filipino &middot; Cooking, household &amp;&nbsp;childcare",
    summary: "Around 20 years in Singapore, a capable cook and carer, recommended by her current&nbsp;employer.",
    referredBy: "Referred by Renata, her current employer since&nbsp;2024",
    signal: "referred",
    quote: "\u201cWe have complete confidence in her&nbsp;integrity.\u201d",
    quoteCite: "&mdash; Renata",
    nationality: "Filipino",
    yearsSG: "20 years",
    bestFit: "Home cooking &amp; childcare",
    strengths: ["Western &amp; Asian cooking", "Newborn to ~10 years", "20 years in SG"],
    skills: ["Cooking", "Childcare", "Infant Care", "Housekeeping"],
    salary: "S$900",
    availability: "transfer",
    photo: "images/susana.jpg",
    profile: "profile-susana.html"
  },
  {
    id: "katrine",
    name: "Katrine",
    initial: "",
    status: "hidden",
    statusLabel: "Available now",
    line: "Filipino &middot; Childcare specialist, cooking &amp;&nbsp;household",
    summary: "16 years in Singapore with an education degree and a teaching background &mdash; a warm childcare specialist from newborn onwards, recommended by her current&nbsp;employer.",
    referredBy: "Referred by Tanielle, her current employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cOur children adore her, and we have always felt complete trust and confidence in her&nbsp;care.\u201d",
    quoteCite: "&mdash; Tanielle",
    nationality: "Filipino",
    yearsSG: "16 years in SG",
    bestFit: "A family with young children",
    strengths: ["Childcare specialist", "Former teacher", "Newborn to preschool"],
    skills: ["Childcare", "Cooking", "Housekeeping"],
    age: 42,
    availability: "transfer",
    photo: "images/katrine.jpeg",
    profile: "profile-katrine.html"
  },
  {
    id: "kim",
    name: "Kim",
    initial: "",
    status: "hidden",
    statusLabel: "Available mid-July&nbsp;2026",
    line: "Myanmar &middot; 32 &middot; Housekeeping, cooking &amp;&nbsp;childcare",
    summary: "Nine years in Singapore with long, stable employment &mdash; now focused on housekeeping, cooking and childcare (ages&nbsp;5+).",
    referredBy: "",
    signal: "verified",
    verifiedSub: "Nearly 8 years in one home",
    verifiedYears: 8,
    quote: "",
    quoteCite: "",
    nationality: "Myanmar",
    yearsSG: "9 years",
    bestFit: "Housekeeping &amp; cooking; childcare 5+",
    strengths: ["6+ years, one employer", "Housekeeping &amp; cooking", "Childcare (ages 5+)"],
    skills: ["Housekeeping", "Cooking", "Childcare"],
    age: 32,
    availability: "transfer",
    photo: "images/kim.jpg",
    profile: "profile-kim.html"
  },
  {
    id: "annafel",
    name: "Annafel",
    initial: "",
    status: "available",
    statusLabel: "Available 1 Sep&nbsp;2026",
    line: "Filipino &middot; Childcare, cooking &amp;&nbsp;household",
    summary: "A warm childcare and cooking specialist with more than a decade of experience &mdash; recommended directly by her current family as they relocate&nbsp;abroad.",
    referredBy: "Referred by Trang, her current employer, who recommends her&nbsp;directly",
    signal: "referred",
    quote: "\u201cI have complete confidence in her ability to care for my young&nbsp;daughter.\u201d",
    quoteCite: "&mdash; Trang",
    nationality: "Filipino",
    yearsSG: "6 years in SG",
    bestFit: "A family with school-age children",
    strengths: ["Childcare (school-age)", "Multi-cuisine cook", "Honest &amp; trusted"],
    skills: ["Childcare", "Cooking", "Housekeeping"],
    age: 45,
    availability: "transfer",
    photo: "images/annafel.jpeg",
    profile: "profile-annafel.html"
  }

  // ─── TEMPLATE — copy this, remove the //'s, add a comma after the
  //     helper above, and fill in the values. Then delete this note. ───
  // ,{
  //   id: "firstname",                                  // short lowercase tag, no spaces
  //   name: "First name",                               // e.g. "Maria Fe"
  //   initial: "",                                      // surname initial e.g. "T." — or ""
  //   status: "available",                              // "available" or "placed"
  //   statusLabel: "Available from 1 Aug&nbsp;2026",    // her availability line
  //   // Sorting is automatic — soonest-available first — read from statusLabel.
  //   // If the label is vague, set the exact sort date:  availFrom: "2026-08-01"
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
       "referred" (default) → 🏆 Employer Recommended       (current/former employer recommendation)
       "verified"           → 📅 Long-Term Family Retention  (4+ yrs, same employer)
     For a verified helper: signal:"verified" + verifiedYears (e.g. 10) OR renewals (e.g. 3).
     (Legacy "recommended"/"retention" still map correctly.) */
  function signalKey(h) { return (h.signal === "verified" || h.signal === "retention") ? "verified" : "referred"; }
  function signalLabel(h) { return signalKey(h) === "verified" ? "Long-Term Family Retention" : "Employer Recommended"; }
  function signalSub(h) {
    if (signalKey(h) !== "verified") return "Recommended by current or former employer";
    if (h.verifiedSub) return h.verifiedSub;
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

  /* ── Sort by availability date (soonest first) ──
       Reads the date out of statusLabel automatically, so new helpers
       fall into the right spot with no manual reordering. Handles:
         "Available from 19 July 2026"      → 19 Jul 2026
         "Available early/mid/end July 2026" → 1 / 15 / 28 Jul 2026
         "Available from July / August 2026" → 1 Aug 2026 (uses the LATER month)
         "Available now"                     → sorts to the front
       Optional override: add  availFrom: "2026-08-01"  to a helper to set the
       exact sort date precisely (wins over the statusLabel guess). */
  var HC_MONTHS = { jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11 };
  function availSortKey(h) {
    if (h.availFrom) {
      var iso = Date.parse(h.availFrom);
      if (!isNaN(iso)) return iso;
    }
    var s = String(h.statusLabel || "")
      .replace(/&nbsp;|&middot;|&mdash;|&amp;/g, " ")
      .toLowerCase();
    var ym = s.match(/20\d{2}/);
    var year = ym ? +ym[0] : null;
    var month = null, bestIdx = -1;
    for (var key in HC_MONTHS) {
      var idx = s.lastIndexOf(key);            // LAST month wins ("July / August" → August)
      if (idx > bestIdx) { bestIdx = idx; month = HC_MONTHS[key]; }
    }
    if (month === null) {
      return /\bnow\b/.test(s) ? 0 : Number.MAX_SAFE_INTEGER;  // undated sinks to the bottom
    }
    if (year === null) year = new Date().getFullYear();
    var dayStr = s.replace(/20\d{2}/g, " ");   // drop the year so it isn't read as a day
    var dm = dayStr.match(/\b([0-3]?\d)\b/);
    var day;
    if (dm) day = +dm[1];
    else if (/\bearly\b/.test(s)) day = 1;
    else if (/\bmid\b/.test(s)) day = 15;
    else if (/\b(end|late)\b/.test(s)) day = 28;
    else day = 1;
    return new Date(year, month, day).getTime();
  }
  function sortByAvail(list) {
    return list.slice().sort(function (a, b) { return availSortKey(a) - availSortKey(b); });
  }
  // Home-page photo badge: green pill (referred) · blue pill (verified) — colour is the signal
  function homeBadge(h) {
    return signalKey(h) === "verified"
      ? '<span class="hc-badge hc-badge--ver"><span class="tsig-mark" aria-hidden="true">\uD83D\uDCC5</span> Long-Term Family Retention</span>'
      : '<span class="hc-badge hc-badge--ref"><span class="tsig-mark" aria-hidden="true">\uD83C\uDFC6</span> Employer Recommended</span>';
  }

  /* ── Home page: compact cards into #avail-grid (available only, max 3) ──
     When at least one helper is available, show the grid section and hide the
     "Introduced one at a time" pointer. When none are available, hide the grid
     section and reveal the pointer as the empty state. ── */
  function renderHome(grid) {
    var section = document.getElementById("helpers");   // the .avail section
    var pointer = document.getElementById("meet-circle"); // the empty-state pointer
    var accents = ["sage", "peach", "amber"];
    var list = sortByAvail(H.filter(function (h) { return h.status === "available"; })).slice(0, 3);

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
  function buildDots(grid, cardSelector) {
    // remove any previously injected dots (idempotent)
    var existing = grid.parentNode.querySelector(".avail-dots");
    if (existing) existing.parentNode.removeChild(existing);

    var cards = grid.querySelectorAll(cardSelector || ".hc-card");
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
    var v = (key === "verified");
    var skills = skillList(h);
    var ticks = skills.slice(0, 3).map(function (s) {
      return '<li><svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7.4l3 3 6-6.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' + s + '</li>';
    }).join("");
    var dataSkills = skills.map(function (s) { return s.toLowerCase(); }).join(" ");
    var placed = (h.status === "placed");
    var nameHtml = h.initial ? (h.name + ' <span class="mcard-init">' + h.initial + '</span>') : h.name;

    // Trust subline — for BOTH signals. Referred uses the specific referral
    // (who + how long); verified uses the duration with one employer.
    var trustLine = v ? signalSub(h) : (h.referredBy || signalSub(h));

    // The recommendation itself: an employer's own words (referred), or the
    // quiet MOM record (verified). This sits above skills by design.
    var recBlock = "";
    if (!v && h.quote) {
      recBlock = '          <blockquote class="mcard-quote">' + h.quote +
                 (h.quoteCite ? '<cite>' + h.quoteCite + '</cite>' : '') + '</blockquote>\n';
    } else if (v) {
      recBlock = '          <p class="mcard-verifyline">Confirmed against official MOM employment&nbsp;records.</p>\n';
    }

    // Availability pill on the photo (kept, per the marketplace cards).
    var availPill = placed
      ? '          <span class="mcard-avail mcard-avail--placed">' + (h.statusLabel || 'Joined a new family') + '</span>\n'
      : (h.statusLabel ? '          <span class="mcard-avail">' + h.statusLabel + '</span>\n' : '');

    return (
'    <div class="mcard-wrap ' + wrapClass + '" data-signal="' + key + '" data-skills="' + dataSkills + '" data-nat="' + natCountry(h) + '" data-avail="' + availOf(h) + '">\n' +
'      <a href="' + h.profile + '" class="mcard mcard--' + (v ? 'ver' : 'ref') + '" aria-label="View ' + plain(fullName(h)) + '\u2019s profile">\n' +
'        <div class="mcard-media">\n' +
'          <img src="' + h.photo + '" alt="" loading="lazy"/>\n' +
availPill +
'        </div>\n' +
'        <div class="mcard-body">\n' +
'          <div class="mcard-head">\n' +
'            <h3 class="mcard-name">' + nameHtml + '</h3>\n' +
'            <p class="mcard-nat">' + h.nationality + '</p>\n' +
'          </div>\n' +
'          <span class="mcard-badge mcard-badge--' + (v ? 'ver' : 'ref') + '"><span class="tsig-mark" aria-hidden="true">' + (v ? '\uD83D\uDCC5' : '\uD83C\uDFC6') + '</span> ' + signalLabel(h) + '</span>\n' +
'          <p class="mcard-trust">' + trustLine + '</p>\n' +
'          <p class="mcard-summary">' + h.summary + '</p>\n' +
recBlock +
'          <ul class="mcard-skills">' + ticks + '</ul>\n' +
'          <span class="mcard-cta">View profile &rarr;</span>\n' +
'        </div>\n' +
'      </a>\n' +
'    </div>'
    );
  }

  function renderBrowseRow(row, status, wrapClass, statusPhrase) {
    var list = H.filter(function (h) { return h.status === status; });
    if (status === "available") list = sortByAvail(list);
    row.innerHTML = list.map(function (h) {
      return fullCard(h, wrapClass, statusPhrase);
    }).join("\n");
    // Placed/"recently joined" row: swipe dots on mobile, prev/next arrows on desktop.
    if (status === "placed") {
      buildDots(row, ".mcard-wrap");
      buildArrows(row);
    }
  }

  /* Desktop prev/next arrows for the placed rail. Visible only when the row
     overflows; mobile uses swipe + dots instead. */
  function buildArrows(row) {
    var rail = row.closest ? row.closest(".success-rail") : row.parentNode;
    if (!rail) return;
    Array.prototype.forEach.call(rail.querySelectorAll(".success-arrow"), function (a) { a.parentNode.removeChild(a); });

    function arrow(dir) {
      var b = document.createElement("button");
      b.className = "success-arrow success-arrow--" + dir;
      b.type = "button";
      b.setAttribute("aria-label", dir === "prev" ? "Previous" : "Next");
      b.innerHTML = dir === "prev"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';
      return b;
    }
    var prev = arrow("prev"), next = arrow("next");
    rail.appendChild(prev); rail.appendChild(next);

    function step() {
      var card = row.querySelector(".mcard-wrap");
      return card ? card.getBoundingClientRect().width + 24 : row.clientWidth * 0.8;
    }
    prev.addEventListener("click", function () { row.scrollBy({ left: -step(), behavior: "smooth" }); });
    next.addEventListener("click", function () { row.scrollBy({ left: step(), behavior: "smooth" }); });

    function update() {
      var overflow = row.scrollWidth - row.clientWidth > 4;
      if (!overflow) { prev.classList.remove("is-visible"); next.classList.remove("is-visible"); return; }
      prev.classList.toggle("is-visible", row.scrollLeft > 2);
      next.classList.toggle("is-visible", row.scrollLeft < (row.scrollWidth - row.clientWidth - 2));
    }
    row.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    var raf = window.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };
    raf(update);
    setTimeout(update, 60);
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
