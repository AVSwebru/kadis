(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const searchOpenBtn = document.querySelector('.js-search-open');
    const searchCloseBtn = document.querySelector('.js-search-close');
    const searchForm = document.querySelector('.js-search-form');
   
    searchOpenBtn.addEventListener('click', () => {
      searchForm.classList.add('is-active');
    });
    searchCloseBtn.addEventListener('click', () => {
      searchForm.classList.remove('is-active');
    });
  });
})();
