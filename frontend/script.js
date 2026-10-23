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
