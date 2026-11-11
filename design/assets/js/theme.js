/* Dark-mode toggle for the KL4E site.
   - Defaults to the visitor's OS setting (prefers-color-scheme).
   - A manual choice is stored in localStorage and wins over the OS setting.
   - Load this in <head> (not deferred) so the stored theme is applied before
     first paint, avoiding a flash. The button is wired on DOMContentLoaded.

   Markup contract: a button with id="theme-toggle" containing a .ic-moon and
   a .ic-sun SVG. CSS shows the moon in light mode and the sun in dark mode. */
(function () {
  var root = document.documentElement;

  // Apply any stored preference immediately (runs before body paints).
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      root.setAttribute('data-theme', stored);
    }
  } catch (e) { /* storage blocked — fall back to OS setting via CSS */ }

  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') return t;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.setAttribute('aria-pressed', String(t === 'dark'));
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(currentTheme() === 'dark'));
    btn.addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  });
})();
