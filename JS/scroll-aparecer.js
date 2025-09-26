document.addEventListener('DOMContentLoaded', function() {
  function mostrarScroll() {
    document.querySelectorAll('.aparecer-scroll').forEach(function(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', mostrarScroll);
  mostrarScroll();
});