// The Seer's S.I.G.H.T. — front-end behavior
(function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Live field clock (hero)
  var liveEl = document.querySelector('.live-field');
  function tick() {
    if (!liveEl) return;
    var now = new Date();
    function pad(n) { return String(n).padStart(2, '0'); }
    liveEl.textContent = 'LIVE FIELD / ' + pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  }
  if (liveEl) {
    tick();
    setInterval(tick, 1000);
  }

  // Mobile menu toggle (reveals the social/connect panel on small screens)
  var menuBtn = document.querySelector('.menu-button');
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close the menu when a link inside it is tapped
    document.addEventListener('click', function (e) {
      if (document.body.classList.contains('menu-open') && e.target.closest('.social-nav a')) {
        document.body.classList.remove('menu-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
