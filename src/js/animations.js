import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const controller = new ScrollMagic.Controller();

    //Главная
    if (document.querySelector('.js-statistics')) {

      const aboutTween = new TimelineMax();
      aboutTween
        .staggerFrom('.js-statistics-vertical-line', 1.0, {height: '0%'}, 0.25)
        .from('.js-statistics-horizontal-line', 1.0, {width: '0%'})
        .from('.js-top-left-branch', 0.5, {opacity: 0, rotation: -35})
        .from('.js-top-right-branch', 0.5, {opacity: 0, rotation: 35}, '-=0.5');

      const statisticsScene = new ScrollMagic.Scene({
        triggerElement: '.js-statistics',
        reverse: false
      })
      .addTo(controller)
      .setTween(aboutTween);

    }

    //Школа бухгалтеров
    if (document.querySelector('.js-quote')) {

      const quoteTween = new TimelineMax();
      quoteTween
        .from('.js-person-image', 1, {opacity: 0, x: -500,  ease:
  Power2. easeInOut})
        .from('.js-person-name', 0.5, {opacity: 0})
        .from('.js-person-position', 0.5, {opacity: 0})
        .from('.js-quote-text', 1, {opacity: 0})
        .from('.js-left-quote', 0.25, {opacity: 0, x: -50}, '-=1')
        .from('.js-right-quote', 0.25, {opacity: 0, x: 50}, '-=1');

      const quoteScene = new ScrollMagic.Scene({
        triggerElement: '.js-quote',
        reverse: false
      })
      .addTo(controller)
      .setTween(quoteTween);

  }

});
})();
