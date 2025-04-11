import {header} from './header.js';
import {mechanism} from './mechanism.js';

header();
mechanism();

new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  speed: 600,
  navigation: {
    prevEl: '.cases__btn--prev',
    nextEl: '.cases__btn--next'
  },
});