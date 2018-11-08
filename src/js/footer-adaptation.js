document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(max-width: 960px)').matches) {
    document.querySelector('.js-footer-main-wrapper').appendChild(document.querySelector('.js-footer-short-menu'));
  }
  if (window.matchMedia('(max-width: 640px)').matches) {
    document.querySelector('.js-footer-bottom-wrapper').appendChild(document.querySelector('.js-to-top'));
  }
});
