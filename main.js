(function () {
  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("mobile-menu");
  var overlay = document.querySelector(".menu-overlay");

  function setMenu(open) {
    burger.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    overlay.hidden = !open;
    document.body.classList.toggle("menu-open", open);
  }

  burger.addEventListener("click", function () {
    setMenu(burger.getAttribute("aria-expanded") !== "true");
  });
  overlay.addEventListener("click", function () { setMenu(false); });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 960) setMenu(false);
  });

  /* ---------- Count-up stats ---------- */
  var values = document.querySelectorAll(".stat-value");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function format(el, v) {
    var d = parseInt(el.dataset.decimals, 10) || 0;
    return v.toFixed(d) + (el.dataset.suffix || "");
  }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function run(el, i) {
    var target = parseFloat(el.dataset.target);
    var duration = 1500 + i * 80;
    var start = 480 + i * 90;
    if (reduce) { el.textContent = format(el, target); return; }
    setTimeout(function () {
      var t0 = performance.now();
      (function tick(now) {
        var p = Math.min((now - t0) / duration, 1);
        el.textContent = format(el, target * easeOutCubic(p));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }, start);
  }

  var statsEl = document.getElementById("stats");
  if (statsEl && values.length) {
    var started = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) {
          started = true;
          values.forEach(run);
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(statsEl);
  }
})();
