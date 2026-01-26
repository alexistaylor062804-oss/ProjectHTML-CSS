new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,

  // Core interaction
  grabCursor: true,
  allowTouchMove: true,
  simulateTouch: true,
  touchStartPreventDefault: false,

  // Sensitivity control
  threshold: 10,              // minimum swipe distance
  resistance: true,
  resistanceRatio: 0.65,

  // Prevent accidental multi-slide
  longSwipes: true,
  longSwipesRatio: 0.3,
  longSwipesMs: 300,
  shortSwipes: true,

  // One gesture = one slide
  slidesPerGroup: 1,

  mousewheel: {
    forceToAxis: true,   // only horizontal wheel movement
    sensitivity: 0.6,
    releaseOnEdges: true,
    thresholdDelta: 20,
  },
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
