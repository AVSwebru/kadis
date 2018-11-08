import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

document.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller();

  const aboutTween = new TimelineMax();
  aboutTween
    .staggerFrom('.js-statistics-vertical-line', 1.0, {height: '0%'}, 0.25)
    .from('.js-statistics-horizontal-line', 1.0, {width: '0%'})
    .from('.js-top-left-branch', 0.5, {opacity: 0, rotation: -35})
    .from('.js-top-right-branch', 0.5, {opacity: 0, rotation: 35}, '-=0.5');

  const statisticsScene = new ScrollMagic.Scene({
    triggerElement: '.home-about__statistics',
    reverse: false
  })
  .addTo(controller)
  .setTween(aboutTween);

});
