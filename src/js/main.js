import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);

const n = 3;
var amplitudeX = (-100 * (n - 1)) / n;

let tl = gsap.timeline({});

const blockScroll = document.querySelector(".slider-mask-2");

tl.to(".slider-track", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: true,
    onComplete: () => {
      // blockScroll.classList.add("slider-mask-2-hidden");
    },
  },
  x: amplitudeX + "%",
  ease: "sine.inOut",
});

var slider1Button = document.querySelector("#slider-1-button");

slider1Button.addEventListener("click", function () {
  document.querySelector(".slider-mask-2").classList.remove("hidden");
  tl.to(".slider-track-2", {
    scrollTrigger: {
      trigger: ".slider-mask-2",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      markers: true,
    },
    x: amplitudeX + "%",
    ease: "sine.inOut",
  });
});

var slider2Button = document.querySelector("#slider-2-button");

slider2Button.addEventListener("click", function () {
  document.querySelector(".slider-mask-3").classList.remove("hidden");
  tl.to(".slider-track-3", {
    scrollTrigger: {
      trigger: ".slider-mask-3",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      markers: true,
    },
    x: amplitudeX + "%",
    ease: "sine.inOut",
  });
});

var slider3Button = document.querySelector("#slider-3-button");

slider3Button.addEventListener("click", function () {
  document.querySelector(".shop").classList.remove("hidden");
});

gsap.from(".img", {
  scrollTrigger: {
    trigger: ".img",
    start: "top top",
  },
  x: "50px",
  duration: 0.5,
  opacity: 0,
});

gsap.from(".img-1", {
  scrollTrigger: {
    trigger: ".img-1",
    start: "top top",
  },
  x: "50px",
  duration: 0.5,
  opacity: 0,
  delay: 1,
});

gsap.from(".img-2", {
  scrollTrigger: {
    trigger: ".img-2",
    start: "top top",
  },
  x: "50px",
  duration: 0.5,
  opacity: 0,
  delay: 2,
});

gsap.from(".img-3", {
  scrollTrigger: {
    trigger: ".img-3",
    start: "top top",
  },
  x: "50px",
  duration: 0.5,
  opacity: 0,
  delay: 3,
});

gsap.from(".img-4", {
  scrollTrigger: {
    trigger: ".img-4",
    start: "top top",
  },
  x: "50px",
  duration: 0.5,
  opacity: 0,
  delay: 4,
});
