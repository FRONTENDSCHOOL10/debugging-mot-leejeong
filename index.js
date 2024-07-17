/* global Swiper, ScrollTrigger */
import '@/styles/style.scss';
import gsap from 'gsap';
import '@/layouts/footer/footer.js';

/* --------------------- Swiper -------------------- */

new Swiper('.swiper', {
  loop: false,
  speed: 1000,
  parallax: true,
});

/* ---------------- Scroll animation --------------- */

gsap.utils.toArray('.reveal').forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 80%',
    end: 'bottom 20%',
    // markers: true,
    onEnter: () => {
      animate(item);
    },
  });

  item.style.opacity = '0';
});

const animate = (item) => {
  let x = 0;
  let y = 0;

  if (item.classList.contains('reveal_RTL')) {
    (x = 200), (y = 0);
  } else {
    (x = 0), (y = 100);
  }

  gsap.fromTo(
    item,
    { autoAlpha: 0, x: x, y: y },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      duration: 1.25,
      overwrite: 'auto',
      ease: 'expo',
    }
  );
};
