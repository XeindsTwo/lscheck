import {header} from './header.js';
import {mechanism} from './mechanism.js';
import {footer} from './footer.js';

header();
mechanism();
footer();

new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
  speed: 600,
  allowTouchMove: false,
  navigation: {
    prevEl: '.cases__btn--prev',
    nextEl: '.cases__btn--next'
  },
});