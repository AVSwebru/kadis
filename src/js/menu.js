(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.js-menu-btn');
    const menu = document.querySelector('.js-menu');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });
})();
