(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const callOpenBtn = document.querySelector('.js-call-open');
    const callCloseBtn = document.querySelector('.js-call-close');
    const callBlock = document.querySelector('.js-call-block');

    callOpenBtn.addEventListener('click', () => {
      callBlock.classList.add('is-active');
    });
    callCloseBtn.addEventListener('click', () => {
      callBlock.classList.remove('is-active');
    });
  });
})();
