// Global Cursor Glow
(function () {
  var glow = document.getElementById('cursor-glow');
  if (!glow) return;
  var tx = -700, ty = -700, cx = -700, cy = -700;
  window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; });
  function lerp(a, b, t) { return a + (b - a) * t; }
  (function loop() {
    cx = lerp(cx, tx, 0.07);
    cy = lerp(cy, ty, 0.07);
    glow.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
    requestAnimationFrame(loop);
  })();
})();

// Navigation
var nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

var toggle = document.querySelector('.nav-toggle');
var links  = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
}

// Scroll fade-in
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(function (el) { observer.observe(el); });
