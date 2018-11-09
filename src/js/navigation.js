(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.js-nav-toggler');
    const nav = document.querySelector('.js-nav');

    toggler.addEventListener('click', () => {
      toggler.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });
  });
})();
