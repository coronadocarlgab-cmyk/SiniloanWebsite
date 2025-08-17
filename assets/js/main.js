// Minimal JS: mobile menu toggle, active link highlighting
(function(){
  const toggle = document.querySelector('#menuToggle');
  const menu = document.querySelector('#menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
  // set active nav by pathname
  const path = location.pathname.replace(/\/index\.html$/, '/');
  const links = document.querySelectorAll('nav a');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const normalized = href.replace(/\/index\.html$/, '/');
    if (path.endsWith(normalized)) a.classList.add('active');
  });
})();