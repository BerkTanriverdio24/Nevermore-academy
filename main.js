/* Nevermore Academy — interacties (DP12) */
(function () {
  "use strict";

  /* ---- Mobiel hamburgermenu ---- */
  var burger = document.querySelector(".burger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); });
    });
  }

  /* ---- Scroll-reveal (IntersectionObserver) ---- */
  var io = ("IntersectionObserver" in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.12 })
    : null;
  document.querySelectorAll(".reveal").forEach(function (el, i) {
    el.style.transitionDelay = (Math.min(i, 6) * 70) + "ms";
    if (io) { io.observe(el); } else { el.classList.add("in"); }
  });

  /* ---- Opleidingen-filter ---- */
  var filters = document.querySelectorAll(".filter");
  var courseCards = document.querySelectorAll("[data-cat]");
  if (filters.length) {
    filters.forEach(function (f) {
      f.addEventListener("click", function () {
        filters.forEach(function (x) { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
        f.classList.add("active"); f.setAttribute("aria-pressed", "true");
        var cat = f.getAttribute("data-filter");
        courseCards.forEach(function (c) {
          var show = cat === "alle" || c.getAttribute("data-cat") === cat;
          c.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- Contactformulier: validatie + bevestiging (flow-eindpunt) ---- */
  var form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (input) {
        var field = input.closest(".field");
        var valid = input.value.trim() !== "" &&
          (input.type !== "email" || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value));
        field.classList.toggle("invalid", !valid);
        if (!valid) ok = false;
      });
      if (ok) {
        form.reset();
        var s = document.querySelector("#formSuccess");
        s.classList.add("show");
        s.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
    form.querySelectorAll("input,textarea").forEach(function (input) {
      input.addEventListener("input", function () {
        var field = input.closest(".field");
        if (field) field.classList.remove("invalid");
      });
    });
  }
})();
