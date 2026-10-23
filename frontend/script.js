/* Montessori Pre-Nursery Portal
   Phase 3: navbar interactions (mobile menu) + hero.
   No backend, no real language switching yet. */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Montessori Pre-Nursery Portal — navbar & hero ready.");

  // Today's Classroom Overview — dynamic date + time-accurate greeting
  var now = new Date();
  var dateEl = document.getElementById("overview-date");
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(undefined, {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  }
  var greetEl = document.getElementById("overview-greeting");
  if (greetEl) {
    var h = now.getHours();
    var part = h < 12 ? "morning" : (h < 17 ? "afternoon" : "evening");
    greetEl.textContent = "Good " + part + ", lovely families!";
  }

  // ---- Phase 5: Daily Classwork & Homework ----
  initClasswork();

  // ---- Phase 6: Gallery + Announcements ----
  initGallery();
  initAnnouncements();

  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("is-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  }

  function openMenu() {
    if (!menu) return;
    menu.classList.add("is-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }
  }

  // Hamburger open/close
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      if (menu.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close the mobile menu after a nav link is selected
  var navLinks = document.querySelectorAll(".nav__link, .nav__login");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  // Close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Close when clicking outside the navbar (mobile)
  document.addEventListener("click", function (e) {
    if (!menu || !menu.classList.contains("is-open")) return;
    var nav = e.target.closest("#navbar");
    if (!nav) closeMenu();
  });

  // Language switcher — selected-state interaction only (UI).
  // Full translation, persistence, and RTL/LTR come in Phase 10.
  var langButtons = document.querySelectorAll(".lang-switch__btn");
  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      langButtons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
    });
  });
});

/* ===========================================================
   Phase 5 — Daily Classwork & Homework
   Reusable data model (i18n-ready: field.en / field.ur).
   Only English is rendered now; language system is Phase 10.
   =========================================================== */
function initClasswork() {
  "use strict";

  var CURRENT_LANG = "en"; // Phase 10 will toggle this
  function L(field) { return field && (field[CURRENT_LANG] || field.en) || ""; }

  // Subjects (first is the "all" option)
  var SUBJECTS = [
    { key: "all",       label: "All Subjects" },
    { key: "english",   label: "English" },
    { key: "math",      label: "Mathematics" },
    { key: "urdu",      label: "Urdu" },
    { key: "practical", label: "Practical Life" },
    { key: "art",       label: "Art & Craft" }
  ];

  // Sample posts. dayOffset: 0 = today, -1 = yesterday, -2 = day before.
  // Dates are derived from dayOffset at load so the demo always has
  // "today" and past days with content, and future days stay empty.
  var POSTS = [
    {
      id: "p-eng-letter-a", subject: "english", dayOffset: 0, emoji: "🍎",
      title:     { en: "Letter A — Apple Adventures", ur: "حرف A — سیب کی سیر" },
      learned:   { en: "We met the letter A, its /a/ sound, and talked about juicy red apples.",
                   ur: "ہم نے حرف A، اس کی آواز اور لال سیب کے بارے میں سیکھا۔" },
      classwork: { en: "Recognised the letter A and traced it on sand trays and worksheets.",
                   ur: "حرف A کو پہچانا اور ریت کی ٹرے پر لکھنے کی مشق کی۔" },
      homework:  { en: "Trace the letter A three times and find one 'A' object at home (like an apple).",
                   ur: "حرف A تین بار لکھیں اور گھر میں A سے شروع ہونے والی ایک چیز ڈھونڈیں۔" },
      materials: { en: "Sand tray, A tracing sheet, crayons", ur: "ریت کی ٹرے، A تختی، کریون" },
      notes:     { en: "Encourage your child to softly say the /a/ sound while tracing.",
                   ur: "لکھتے وقت بچے سے آہستہ آہستہ A کی آواز نکلوائیں۔" }
    },
    {
      id: "p-math-count-5", subject: "math", dayOffset: 0, emoji: "🔢",
      title:     { en: "Counting 1 to 5 with Colourful Objects", ur: "رنگین چیزوں سے 1 تا 5 گنتی" },
      learned:   { en: "We counted from 1 to 5 using colourful buttons and beads.",
                   ur: "ہم نے رنگین بٹنوں اور موتیوں سے 1 تا 5 گنا۔" },
      classwork: { en: "Matched number cards 1–5 to the correct groups of objects.",
                   ur: "نمبر کارڈ 1 تا 5 کو درست چیزوں کے گروپ سے ملایا۔" },
      homework:  { en: "Count 5 small toys at home and line them up from 1 to 5.",
                   ur: "گھر میں 5 چھوٹے کھلونے گنیں اور 1 تا 5 ترتیب دیں۔" },
      materials: { en: "Number cards, counting beads, buttons", ur: "نمبر کارڈ، موتی، بٹن" },
      notes:     { en: "Counting fingers or snacks at the table is wonderful practice!",
                   ur: "کھانے کے وقت انگلیاں گننا بہترین مشق ہے!" }
    },
    {
      id: "p-urdu-alif", subject: "urdu", dayOffset: -1, emoji: "📖",
      title:     { en: "Urdu Letter Alif (ا)", ur: "اردو حرف الف (ا)" },
      learned:   { en: "We were introduced to the Urdu letter Alif and its simple shape.",
                   ur: "ہم نے اردو کا پہلا حرف الف اور اس کی سادہ شکل سیکھی۔" },
      classwork: { en: "Traced Alif in the air and on big dotted cards.",
                   ur: "الف کو ہوا میں اور نقطے والے بڑے کارڈ پر لکھا۔" },
      homework:  { en: "Point to the shape of Alif in a storybook with a grown-up.",
                   ur: "کسی بڑے کے ساتھ کہانی کی کتاب میں الف کی شکل تلاش کریں۔" },
      materials: { en: "Alif flashcard, dotted tracing card", ur: "الف فلیش کارڈ، نقطے والا کارڈ" },
      notes:     { en: "Say 'Alif' cheerfully together — happy repetition helps a lot!",
                   ur: "مل کر خوشی سے 'الف' کہیں — بار بار دہرانا مددگار ہے!" }
    },
    {
      id: "p-pl-sort-pour", subject: "practical", dayOffset: -1, emoji: "🫗",
      title:     { en: "Sorting & Pouring Fun", ur: "چھانٹنا اور انڈیلنا" },
      learned:   { en: "We practised sorting objects by colour and pouring water carefully.",
                   ur: "ہم نے رنگ کے حساب سے چیزیں چھانٹنا اور احتیاط سے پانی انڈیلنا سیکھا۔" },
      classwork: { en: "Sorted pom-poms by colour and poured water between two little jugs.",
                   ur: "پوم پوم رنگ کے حساب سے چھانٹے اور دو چھوٹے جگ میں پانی انڈیلا۔" },
      homework:  { en: "Let your child help pour water into cups at dinner time.",
                   ur: "کھانے پر بچے کو کپ میں پانی ڈالنے دیں۔" },
      materials: { en: "Pom-poms, small jugs, tray", ur: "پوم پوم، چھوٹے جگ، ٹرے" },
      notes:     { en: "Spills are part of learning — keep it relaxed and fun.",
                   ur: "تھوڑا بہت گرنا سیکھنے کا حصہ ہے — پرسکون اور خوشگوار رکھیں۔" }
    },
    {
      id: "p-art-butterfly", subject: "art", dayOffset: -2, emoji: "🦋",
      title:     { en: "Our Colourful Paper Butterfly", ur: "ہماری رنگین کاغذی تتلی" },
      learned:   { en: "We learned about butterfly shapes and symmetry while crafting.",
                   ur: "ہم نے تتلی کی شکل اور دونوں طرف کی یکسانیت سیکھی۔" },
      classwork: { en: "Folded and painted a symmetrical paper butterfly.",
                   ur: "کاغذ موڑ کر دونوں طرف ایک جیسی تتلی بنائی اور رنگ بھرا۔" },
      homework:  { en: "Find something at home with two matching sides (a symmetry hunt).",
                   ur: "گھر میں ایسی چیز ڈھونڈیں جس کے دونوں حصے ایک جیسے ہوں۔" },
      materials: { en: "Coloured paper, child-safe paint, glue", ur: "رنگین کاغذ، محفوظ رنگ، گوند" },
      notes:     { en: "Display the butterfly somewhere your child can feel proud!",
                   ur: "تتلی کو ایسی جگہ لگائیں جہاں بچہ فخر محسوس کرے!" }
    }
  ];

  // ---- date helpers (consistent keys, separate display formatting) ----
  function isoOf(date) {
    var m = ("0" + (date.getMonth() + 1)).slice(-2);
    var d = ("0" + date.getDate()).slice(-2);
    return date.getFullYear() + "-" + m + "-" + d;
  }
  function dateFromOffset(off) {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + off);
    return d;
  }
  // assign a stable dateKey to each post from its offset
  POSTS.forEach(function (p) { p.dateKey = isoOf(dateFromOffset(p.dayOffset)); });

  function formatDisplay(date) {
    return date.toLocaleDateString(undefined, {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function subjectLabel(key) {
    for (var i = 0; i < SUBJECTS.length; i++) if (SUBJECTS[i].key === key) return SUBJECTS[i].label;
    return key;
  }

  // ---- extra date helpers ----
  function addDays(date, n) {
    var d = new Date(date.getTime());
    d.setDate(d.getDate() + n);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  function parseIso(s) {
    var a = s.split("-");
    return new Date(+a[0], +a[1] - 1, +a[2]);
  }
  var MONTHS = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];

  // ---- state (concrete selected Date) ----
  var today = dateFromOffset(0);
  var state = { selected: dateFromOffset(0), subject: "all" };
  var calView = { year: today.getFullYear(), month: today.getMonth() };

  var listEl   = document.getElementById("cw-list");
  var labelEl  = document.getElementById("cw-date-label");
  var badgeEl  = document.getElementById("cw-today-badge");
  var filtersEl = document.getElementById("cw-filters");
  var prevBtn  = document.getElementById("cw-prev");
  var nextBtn  = document.getElementById("cw-next");
  var trigger  = document.getElementById("cw-date-trigger");
  var cal      = document.getElementById("cw-cal");
  var calTitle = document.getElementById("cal-title");
  var calGrid  = document.getElementById("cal-grid");
  if (!listEl) return; // section not present

  // ---- build filter buttons ----
  SUBJECTS.forEach(function (s) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "cw__filter" + (s.key === state.subject ? " is-active" : "");
    b.textContent = s.label;
    b.setAttribute("data-subject", s.key);
    b.setAttribute("aria-pressed", s.key === state.subject ? "true" : "false");
    b.addEventListener("click", function () {
      state.subject = s.key;
      updateFilterStates();
      renderPosts();
    });
    filtersEl.appendChild(b);
  });
  function updateFilterStates() {
    filtersEl.querySelectorAll(".cw__filter").forEach(function (b) {
      var on = b.getAttribute("data-subject") === state.subject;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  // ---- card builder ----
  function postCard(p) {
    return (
      '<article class="post post--' + p.subject + '">' +
        '<div class="post__top">' +
          '<span class="post__subject">' + escapeHtml(subjectLabel(p.subject)) + '</span>' +
          '<span class="post__emoji" aria-hidden="true">' + p.emoji + '</span>' +
        '</div>' +
        '<h3 class="post__title">' + escapeHtml(L(p.title)) + '</h3>' +
        '<p class="post__learned"><strong>What we learned:</strong> ' + escapeHtml(L(p.learned)) + '</p>' +
        '<div class="post__block post__block--classwork">' +
          '<h4 class="post__block-title"><span aria-hidden="true">✏️</span> Classwork</h4>' +
          '<p>' + escapeHtml(L(p.classwork)) + '</p>' +
        '</div>' +
        '<div class="post__block post__block--homework">' +
          '<h4 class="post__block-title"><span aria-hidden="true">🏠</span> Homework</h4>' +
          '<p>' + escapeHtml(L(p.homework)) + '</p>' +
        '</div>' +
        '<dl class="post__meta">' +
          '<div><dt>Materials</dt><dd>' + escapeHtml(L(p.materials)) + '</dd></div>' +
          '<div><dt>Teacher\'s notes</dt><dd>' + escapeHtml(L(p.notes)) + '</dd></div>' +
        '</dl>' +
      '</article>'
    );
  }

  function emptyState(isFuture) {
    var msg = isFuture
      ? "This day hasn't happened yet. Check back soon for new lessons!"
      : "No lessons were posted for this day.";
    return (
      '<div class="empty-state">' +
        '<span class="empty-state__icon" aria-hidden="true">🌼</span>' +
        '<p class="empty-state__title">Nothing here yet</p>' +
        '<p>' + msg + '</p>' +
      '</div>'
    );
  }

  // ---- render posts ----
  function renderPosts() {
    var selKey = isoOf(state.selected);
    labelEl.textContent = formatDisplay(state.selected);
    badgeEl.hidden = selKey !== isoOf(today);

    var matches = POSTS.filter(function (p) {
      return p.dateKey === selKey && (state.subject === "all" || p.subject === state.subject);
    });

    if (matches.length) {
      listEl.className = "cw__list cw__list--grid";
      listEl.innerHTML = matches.map(postCard).join("");
    } else {
      listEl.className = "cw__list";
      listEl.innerHTML = emptyState(state.selected.getTime() > today.getTime());
    }
  }

  // ---- calendar ----
  function renderCal() {
    calTitle.textContent = MONTHS[calView.month] + " " + calView.year;
    var startDay = new Date(calView.year, calView.month, 1).getDay();
    var daysInMonth = new Date(calView.year, calView.month + 1, 0).getDate();
    var selKey = isoOf(state.selected);
    var todayKey = isoOf(today);
    var html = "";
    for (var i = 0; i < startDay; i++) {
      html += '<span class="cw-cal__day cw-cal__day--empty" aria-hidden="true"></span>';
    }
    for (var d = 1; d <= daysInMonth; d++) {
      var date = new Date(calView.year, calView.month, d);
      var key = isoOf(date);
      var isSel = key === selKey;
      var cls = "cw-cal__day" +
        (isSel ? " is-selected" : "") +
        (key === todayKey ? " is-today" : "") +
        (POSTS.some(function (p) { return p.dateKey === key; }) ? " has-posts" : "");
      html += '<button type="button" class="' + cls + '" role="gridcell" ' +
        'data-date="' + key + '" aria-label="' + formatDisplay(date) + '" ' +
        (isSel ? 'aria-selected="true" ' : '') +
        'tabindex="' + (isSel ? "0" : "-1") + '">' + d + '</button>';
    }
    calGrid.innerHTML = html;
  }

  function focusCalDay() {
    var el = calGrid.querySelector(".cw-cal__day.is-selected") ||
             calGrid.querySelector(".cw-cal__day:not(.cw-cal__day--empty)");
    if (el) { el.tabIndex = 0; el.focus(); }
  }

  function openCal() {
    calView.year = state.selected.getFullYear();
    calView.month = state.selected.getMonth();
    renderCal();
    cal.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    document.addEventListener("click", onOutside, true);
    document.addEventListener("keydown", onCalKey, true);
    focusCalDay();
  }
  function closeCal(refocus) {
    if (cal.hidden) return;
    cal.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", onOutside, true);
    document.removeEventListener("keydown", onCalKey, true);
    if (refocus) trigger.focus();
  }
  function onOutside(e) {
    if (!cal.contains(e.target) && e.target !== trigger && !trigger.contains(e.target)) closeCal(false);
  }
  function onCalKey(e) {
    if (e.key === "Escape") { e.preventDefault(); closeCal(true); }
  }

  function selectDate(date) {
    state.selected = addDays(date, 0);
    renderPosts();
    closeCal(true);
  }

  // day click / keyboard nav inside the grid
  calGrid.addEventListener("click", function (e) {
    var b = e.target.closest("[data-date]");
    if (b) selectDate(parseIso(b.getAttribute("data-date")));
  });
  calGrid.addEventListener("keydown", function (e) {
    var b = e.target.closest("[data-date]");
    if (!b) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); b.click(); return; }
    var delta = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
    if (delta === undefined) return;
    e.preventDefault();
    var nd = addDays(parseIso(b.getAttribute("data-date")), delta);
    if (nd.getMonth() !== calView.month || nd.getFullYear() !== calView.year) {
      calView.year = nd.getFullYear(); calView.month = nd.getMonth(); renderCal();
    }
    var target = calGrid.querySelector('[data-date="' + isoOf(nd) + '"]');
    if (target) { target.tabIndex = 0; target.focus(); }
  });

  function shiftMonth(n) {
    var m = calView.month + n;
    calView.year += Math.floor(m / 12);
    calView.month = ((m % 12) + 12) % 12;
    renderCal();
  }

  // ---- wire controls ----
  trigger.addEventListener("click", function () { cal.hidden ? openCal() : closeCal(true); });
  document.getElementById("cal-prev-month").addEventListener("click", function () { shiftMonth(-1); });
  document.getElementById("cal-next-month").addEventListener("click", function () { shiftMonth(1); });
  document.getElementById("cal-prev-year").addEventListener("click", function () { calView.year -= 1; renderCal(); });
  document.getElementById("cal-next-year").addEventListener("click", function () { calView.year += 1; renderCal(); });
  document.getElementById("cal-today").addEventListener("click", function () { selectDate(today); });
  document.getElementById("cal-close").addEventListener("click", function () { closeCal(true); });

  prevBtn.addEventListener("click", function () {
    state.selected = addDays(state.selected, -1);
    if (!cal.hidden) { calView.year = state.selected.getFullYear(); calView.month = state.selected.getMonth(); renderCal(); }
    renderPosts();
  });
  nextBtn.addEventListener("click", function () {
    state.selected = addDays(state.selected, 1);
    if (!cal.hidden) { calView.year = state.selected.getFullYear(); calView.month = state.selected.getMonth(); renderCal(); }
    renderPosts();
  });

  renderPosts();
}

/* ===========================================================
   Phase 6 — Activities & Learning Gallery
   =========================================================== */
function galleryArt(kind) {
  var A = {
    butterfly:
      '<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect width="120" height="90" fill="#ffd4e2"/>' +
      '<ellipse cx="42" cy="38" rx="20" ry="16" fill="#f6a6b8"/><ellipse cx="42" cy="60" rx="17" ry="13" fill="#c9b8ec"/>' +
      '<ellipse cx="78" cy="38" rx="20" ry="16" fill="#a9d8ef"/><ellipse cx="78" cy="60" rx="17" ry="13" fill="#bfe3b0"/>' +
      '<rect x="58" y="30" width="4" height="40" rx="2" fill="#6d5544"/>' +
      '<circle cx="60" cy="28" r="4" fill="#6d5544"/>' +
      '<path d="M57 25 q-6 -8 -12 -6M63 25 q6 -8 12 -6" stroke="#6d5544" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    apple:
      '<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect width="120" height="90" fill="#bfe3f5"/>' +
      '<text x="30" y="56" font-family="Nunito, sans-serif" font-weight="800" font-size="40" fill="#2f7aa6">A</text>' +
      '<path d="M78 40 q-14 -2 -14 14 q0 16 14 20 q14 -4 14 -20 q0 -16 -14 -14z" fill="#e85d8a"/>' +
      '<path d="M78 40 q2 -8 8 -9" stroke="#6d5544" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="88" cy="34" rx="6" ry="4" fill="#8fbf6a"/></svg>',
    blocks:
      '<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect width="120" height="90" fill="#fff3c4"/>' +
      '<g font-family="Nunito, sans-serif" font-weight="800" font-size="20" text-anchor="middle">' +
      '<rect x="30" y="46" width="28" height="28" rx="6" fill="#f6a6b8"/><text x="44" y="66" fill="#fff">1</text>' +
      '<rect x="62" y="46" width="28" height="28" rx="6" fill="#a9d8ef"/><text x="76" y="66" fill="#2f6f93">2</text>' +
      '<rect x="46" y="16" width="28" height="28" rx="6" fill="#bfe3b0"/><text x="60" y="36" fill="#3f8d5e">3</text></g></svg>',
    sort:
      '<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect width="120" height="90" fill="#ddd3f5"/>' +
      '<circle cx="34" cy="40" r="12" fill="#f6a6b8"/>' +
      '<rect x="52" y="30" width="22" height="22" rx="4" fill="#a9d8ef"/>' +
      '<path d="M96 30 l12 22 -24 0z" fill="#bfe3b0"/>' +
      '<rect x="24" y="64" width="72" height="10" rx="5" fill="#8a6fd0" opacity="0.5"/></svg>',
    pour:
      '<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect width="120" height="90" fill="#c3ecd6"/>' +
      '<path d="M34 28 h22 v18 q0 10 -11 10 q-11 0 -11 -10z" fill="#a9d8ef"/>' +
      '<path d="M56 32 q14 2 14 12" stroke="#7cc1e8" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<path d="M70 44 l2 16" stroke="#7cc1e8" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M66 60 h24 v10 q0 6 -12 6 q-12 0 -12 -6z" fill="#bfe3b0"/></svg>',
    paint:
      '<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect width="120" height="90" fill="#ffe0c9"/>' +
      '<circle cx="40" cy="40" r="13" fill="#f6a6b8"/>' +
      '<rect x="60" y="30" width="22" height="22" rx="5" fill="#a9d8ef" transform="rotate(10 71 41)"/>' +
      '<path d="M86 60 l10 -18 8 18z" fill="#ffcf87"/>' +
      '<circle cx="30" cy="66" r="6" fill="#bfe3b0"/><circle cx="50" cy="68" r="5" fill="#c9b8ec"/></svg>'
  };
  return A[kind] || '';
}

function initGallery() {
  "use strict";
  var CATS = [
    { key: "all",       label: "All Activities" },
    { key: "art",       label: "Art & Craft" },
    { key: "alphabet",  label: "Alphabet" },
    { key: "numbers",   label: "Numbers" },
    { key: "practical", label: "Practical Life" },
    { key: "finemotor", label: "Fine Motor Skills" }
  ];
  var ITEMS = [
    { id: "a-butterfly", cat: "art",       art: "butterfly", title: "Colorful Paper Butterfly",
      desc: "Fold and paint a symmetrical butterfly bursting with color.",
      learn: "Shapes, symmetry and color mixing.", materials: "Coloured paper, washable paint, glue." },
    { id: "a-letter-a", cat: "alphabet",   art: "apple", title: "Letter A with Apple",
      desc: "Trace the letter A and match it with crunchy red apples.",
      learn: "Letter recognition and the /a/ sound.", materials: "Tracing card, apple cut-outs, crayons." },
    { id: "a-counting", cat: "numbers",    art: "blocks", title: "Counting with Colorful Blocks",
      desc: "Stack and count bright blocks from one to five.",
      learn: "Counting 1–5 and one-to-one matching.", materials: "Soft blocks, number cards." },
    { id: "a-sorting", cat: "finemotor",   art: "sort", title: "Sorting Shapes and Colors",
      desc: "Sort circles, squares and triangles by shape and color.",
      learn: "Sorting, classifying and hand control.", materials: "Shape tiles, sorting tray." },
    { id: "a-pouring", cat: "practical",   art: "pour", title: "Pouring and Transferring Practice",
      desc: "Carefully pour water and beans between little jugs.",
      learn: "Coordination, focus and independence.", materials: "Small jugs, beans, tray." },
    { id: "a-finger-paint", cat: "art",    art: "paint", title: "Finger Painting with Shapes",
      desc: "Make happy shapes using fingertips and washable paint.",
      learn: "Creativity, texture and fine motor skills.", materials: "Washable paint, paper, apron." }
  ];

  var grid = document.getElementById("gal-grid");
  var filtersEl = document.getElementById("gal-filters");
  var modal = document.getElementById("gal-modal");
  var modalBody = document.getElementById("gal-modal-body");
  if (!grid) return;

  var activeCat = "all";
  var lastFocused = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function catLabel(key) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].key === key) return CATS[i].label;
    return key;
  }

  // filters
  CATS.forEach(function (c) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "gal__filter" + (c.key === activeCat ? " is-active" : "");
    b.textContent = c.label;
    b.setAttribute("data-cat", c.key);
    b.setAttribute("aria-pressed", c.key === activeCat ? "true" : "false");
    b.addEventListener("click", function () {
      activeCat = c.key;
      filtersEl.querySelectorAll(".gal__filter").forEach(function (x) {
        var on = x.getAttribute("data-cat") === activeCat;
        x.classList.toggle("is-active", on);
        x.setAttribute("aria-pressed", on ? "true" : "false");
      });
      renderGrid();
    });
    filtersEl.appendChild(b);
  });

  function cardHtml(it) {
    return (
      '<button type="button" class="gal-card" data-id="' + it.id + '" aria-haspopup="dialog">' +
        '<span class="gal-card__art">' + galleryArt(it.art) + '</span>' +
        '<span class="gal-card__body">' +
          '<span class="gal-card__cat">' + esc(catLabel(it.cat)) + '</span>' +
          '<span class="gal-card__title">' + esc(it.title) + '</span>' +
          '<span class="gal-card__desc">' + esc(it.desc) + '</span>' +
        '</span>' +
      '</button>'
    );
  }

  function renderGrid() {
    var list = ITEMS.filter(function (it) { return activeCat === "all" || it.cat === activeCat; });
    if (!list.length) {
      grid.className = "gal__grid gal__grid--empty";
      grid.innerHTML =
        '<div class="empty-state"><span class="empty-state__icon" aria-hidden="true">🎨</span>' +
        '<p class="empty-state__title">No activities here yet</p>' +
        '<p>Try another category to see more fun!</p></div>';
      return;
    }
    grid.className = "gal__grid";
    grid.innerHTML = list.map(cardHtml).join("");
  }

  // modal
  function openModal(it) {
    modalBody.innerHTML =
      '<div class="modal__art">' + galleryArt(it.art) + '</div>' +
      '<span class="gal-card__cat">' + esc(catLabel(it.cat)) + '</span>' +
      '<h3 id="gal-modal-title" class="modal__title">' + esc(it.title) + '</h3>' +
      '<p class="modal__desc">' + esc(it.desc) + '</p>' +
      '<dl class="modal__meta">' +
        '<div><dt>What they learn</dt><dd>' + esc(it.learn) + '</dd></div>' +
        '<div><dt>Materials</dt><dd>' + esc(it.materials) + '</dd></div>' +
      '</dl>';
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal__close").focus();
    document.addEventListener("keydown", onModalKey, true);
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onModalKey, true);
    if (lastFocused) lastFocused.focus();
  }
  function onModalKey(e) { if (e.key === "Escape") { e.preventDefault(); closeModal(); } }

  grid.addEventListener("click", function (e) {
    var card = e.target.closest(".gal-card");
    if (!card) return;
    var it = ITEMS.filter(function (x) { return x.id === card.getAttribute("data-id"); })[0];
    if (it) openModal(it);
  });
  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) closeModal();
  });

  renderGrid();
}

/* ===========================================================
   Phase 6 — Announcements (sample data)
   =========================================================== */
function initAnnouncements() {
  "use strict";
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function dateFromNow(n) {
    var d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + n);
    return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  }

  // type -> visual style
  var TYPES = {
    important: { label: "Important", icon: "⚠️" },
    reminder:  { label: "Reminder",  icon: "📌" },
    event:     { label: "Event",     icon: "🎉" }
  };

  var ANN = [
    { id: "n-supplies", type: "reminder", dayOffset: 2, title: "Please Bring Art Supplies",
      desc: "Kindly send colored paper, glue and crayons for our craft days.",
      detail: "These help your child join every art activity comfortably. A small labeled pouch works great." },
    { id: "n-upcoming", type: "event", dayOffset: 4, title: "Upcoming Classroom Activity",
      desc: "We have a fun group activity planned this week.",
      detail: "Children will explore textures and colors together in small, friendly groups." },
    { id: "n-notebook", type: "reminder", dayOffset: 1, title: "Notebook Reminder",
      desc: "Please check that the practice notebook returns to class each day.",
      detail: "Daily practice helps little hands build confidence step by step." },
    { id: "n-holiday", type: "important", dayOffset: 7, title: "Holiday Notice",
      desc: "Our classroom will be closed for a short break.",
      detail: "We'll resume our usual fun routine right after. Enjoy the rest together!" },
    { id: "n-special", type: "event", dayOffset: 9, title: "Special Activity Day",
      desc: "A special hands-on discovery day is coming up.",
      detail: "Expect sensory play, music and lots of happy giggles." }
  ];

  var listEl = document.getElementById("ann-list");
  if (!listEl) return;

  if (!ANN.length) {
    listEl.innerHTML =
      '<div class="empty-state"><span class="empty-state__icon" aria-hidden="true">📭</span>' +
      '<p class="empty-state__title">No announcements right now</p>' +
      '<p>Check back soon for classroom updates.</p></div>';
    return;
  }

  listEl.innerHTML = ANN.map(function (a) {
    var t = TYPES[a.type];
    return (
      '<article class="ann-card ann-card--' + a.type + '">' +
        '<span class="ann-card__icon" aria-hidden="true">' + t.icon + '</span>' +
        '<div class="ann-card__body">' +
          '<div class="ann-card__top">' +
            '<span class="ann-card__label">' + esc(t.label) + '</span>' +
            '<span class="ann-card__date">' + esc(dateFromNow(a.dayOffset)) + '</span>' +
          '</div>' +
          '<h3 class="ann-card__title">' + esc(a.title) + '</h3>' +
          '<p class="ann-card__desc">' + esc(a.desc) + '</p>' +
          '<div class="ann-card__detail" id="detail-' + a.id + '" hidden><p>' + esc(a.detail) + '</p></div>' +
          '<button type="button" class="ann-card__toggle" aria-expanded="false" aria-controls="detail-' + a.id + '">Read more</button>' +
        '</div>' +
      '</article>'
    );
  }).join("");

  listEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".ann-card__toggle");
    if (!btn) return;
    var detail = document.getElementById(btn.getAttribute("aria-controls"));
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", open ? "false" : "true");
    detail.hidden = open;
    btn.textContent = open ? "Read more" : "Show less";
  });
}
