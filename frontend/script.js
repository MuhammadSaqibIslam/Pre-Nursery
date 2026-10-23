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
