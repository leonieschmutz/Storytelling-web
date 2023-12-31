import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const n = 3;
var amplitudeX = (-100 * (n - 1)) / n;

let tl = gsap.timeline({});

const blockScroll = document.querySelector(".slider-mask-2");
const progressElement = document.querySelector(".progress-1");
const progressElement2 = document.querySelector(".progress-2");
const progressElement3 = document.querySelector(".progress-3");
const slider1Button = document.querySelector("#slider-1-button");
const slider2Button = document.querySelector("#slider-2-button");
const slider3Button = document.querySelector("#slider-3-button");

var headerButton = document.querySelector("#header-button");

headerButton.addEventListener("click", function (e) {
  e.preventDefault(); // Annulation de l'action par défaut
  document.querySelector("main").classList.remove("hidden");
  tl.to(".slider-track", {
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      // markers: true,
      onUpdate: function (self) {
        document.querySelector(".progress-bar").style.transform =
          "scaleX(" + self.progress + ")";
      },
      onLeave: function () {
        progressElement.classList.add("hidden");
        slider1Button.classList.remove("hidden");
      },
      onEnterBack: function () {
        progressElement.classList.remove("hidden");
        slider1Button.classList.add("hidden");
      },
      onComplete: function () {
        console.log("Scroll completed!");
      },
    },
    x: amplitudeX + "%",
    ease: "sine.inOut",
  });
  gsap.to(window, {
    scrollTo: "#first-img",
    duration: 1,
  });
});

slider1Button.addEventListener("click", function (e) {
  e.preventDefault(); // Annulation de l'action par défaut
  document.querySelector(".slider-mask-2").classList.remove("hidden");
  tl.to(".slider-track-2", {
    scrollTrigger: {
      trigger: ".slider-mask-2",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      // markers: true,
      onUpdate: function (self) {
        document.querySelector(".progress-bar-2").style.transform =
          "scaleX(" + self.progress + ")";
      },
      onLeave: function () {
        progressElement2.classList.add("hidden");
        slider2Button.classList.remove("hidden");
      },
      onEnterBack: function () {
        progressElement2.classList.remove("hidden");
        slider2Button.classList.add("hidden");
      },
      onComplete: function () {
        console.log("Scroll completed!");
      },
    },
    x: amplitudeX + "%",
    ease: "sine.inOut",
  });
  gsap.to(window, {
    scrollTo: "#chapter-2",
    duration: 1,
  });
});

slider2Button.addEventListener("click", function (e) {
  e.preventDefault(); // Annulation de l'action par défaut
  document.querySelector(".slider-mask-3").classList.remove("hidden");
  tl.to(".slider-track-3", {
    scrollTrigger: {
      trigger: ".slider-mask-3",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      // markers: true,
      onUpdate: function (self) {
        document.querySelector(".progress-bar-3").style.transform =
          "scaleX(" + self.progress + ")";
      },
      onLeave: function () {
        progressElement3.classList.add("hidden");
        slider3Button.classList.remove("hidden");
      },
      onEnterBack: function () {
        progressElement3.classList.remove("hidden");
        slider3Button.classList.add("hidden");
      },
      onComplete: function () {
        console.log("Scroll completed!");
      },
    },
    x: amplitudeX + "%",
    ease: "sine.inOut",
  });
  gsap.to(window, {
    scrollTo: "#chapter-3",
    duration: 1,
  });
});

slider3Button.addEventListener("click", function (e) {
  e.preventDefault(); // Annulation de l'action par défaut
  document.querySelector(".shop").classList.remove("hidden");
  document.querySelector("footer").classList.remove("hidden");
  gsap.to(window, {
    scrollTo: "#shop",
    duration: 1,
  });
});

// gsap.from(".img", {
//   scrollTrigger: {
//     trigger: ".img",
//     start: "top top",
//   },
//   x: "50px",
//   duration: 0.5,
//   opacity: 0,
// });

// gsap.from(".img-1", {
//   scrollTrigger: {
//     trigger: ".img-1",
//     start: "top top",
//   },
//   x: "50px",
//   duration: 0.5,
//   opacity: 0,
//   delay: 1,
// });

// gsap.from(".img-2", {
//   scrollTrigger: {
//     trigger: ".img-2",
//     start: "top top",
//   },
//   x: "50px",
//   duration: 0.5,
//   opacity: 0,
//   delay: 2,
// });

// gsap.from(".img-3", {
//   scrollTrigger: {
//     trigger: ".img-3",
//     start: "top top",
//   },
//   x: "50px",
//   duration: 0.5,
//   opacity: 0,
//   delay: 3,
// });

// gsap.from(".img-4", {
//   scrollTrigger: {
//     trigger: ".img-4",
//     start: "top top",
//   },
//   x: "50px",
//   duration: 0.5,
//   opacity: 0,
//   delay: 4,
// });
