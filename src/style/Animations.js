import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animationMoveX = (element) => {
  gsap.fromTo(element, { autoAlpha: 0, x: "-=100", duration: 1 }, { autoAlpha: 1, x: 0 });
};

export const animationMoveY = (element, toTop) => {
  if (toTop)
    gsap.fromTo(element, { autoAlpha: 0, y: "+=100", duration: 1 }, { autoAlpha: 1, y: 0 });
  else gsap.fromTo(element, { autoAlpha: 0, y: "-=100", duration: 1 }, { autoAlpha: 1, y: 0 });
};

export const animationScrollBottom = (element) => {
  gsap.fromTo(
    element,
    { autoAlpha: 0, y: "+=100" },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
      },
    }
  );
};

export const animationOpacity = (element, durationTime) => {
  gsap.fromTo(
    element,
    { autoAlpha: 0, duration: `${durationTime}` },
    {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
    }
  );
};

export const animationMoveXScroll = (element, translate) => {
  gsap.fromTo(
    element,
    { autoAlpha: 0, x: `${translate}`, duration: 1 },
    {
      autoAlpha: 1,
      x: 0,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
    }
  );
};
