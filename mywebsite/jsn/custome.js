gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.service_hold');

console.log(horizontalSection.scrollWidth);

gsap.to('.service_hold', {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
        trigger: '.service_hold',
        start: 'center center',
        end: '+=1500px',
        pin: '#grow_traffic',
        scrub: true,
        invalidateOnRefresh: true,
        // start:"top 0%"
    }
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pinned",
    pin: ".main",
    // pinSpacing: false,
    start: "top top",
    endTrigger: ".anchor.next.container",
    end: "bottom top",
    scrub: 1,
    ease: "power1.inOut",
    // markers: true
  }
});

tl.to(".image", {
  width: "+=100vw",
  scrollTrigger: {
    trigger: ".image",
    // start: "top top",
    start:"top 15%",
    // end: "bottom top",
    end: "+=" + (window.innerHeight * 2),
    scrub: 2,
    ease: "power1.inOut",
    // markers: true
  }
});

tl.to(".image--before", {
  width: 0,
  scrollTrigger: {
    trigger: ".image",
    start: "top center",
    // end: "bottom center",
    end: "+=" + (window.innerHeight * 2),
    scrub: 2,
    ease: "power1.inOut",
    // markers: true
  }
});

tl.to(".image--after", {
  width: 0,
  scrollTrigger: {
    trigger: ".image",
    start: "top center",
    // end: "bottom center",
    end: "+=" + window.innerHeight * 2,
    scrub: 2,
    ease: "power1.inOut",
    // markers: true
  }
});

var video = document.getElementById("video");

video.addEventListener("click", function () {
  if (this.classList.contains("is-playing")) {
    this.classList.toggle("is-playing");
    video.pause();
  } else {
    this.classList.toggle("is-playing");
    video.play();
  }
});
// ===========
gsap.registerPlugin(ScrollTrigger);

// Select all top-level sections that have a background color
const sections = document.querySelectorAll("section[data-bg]");

// Helper function to tween the body background
function changeBg(color) {
  gsap.to("body", {
    backgroundColor: color,
    duration: 1,
    ease: "power2.out"
  });
}

// Create a ScrollTrigger for each section
sections.forEach((section) => {
  const bg = section.getAttribute("data-bg");
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => changeBg(bg),
    onEnterBack: () => changeBg(bg),
  });
});

// Optional: set initial background to first section color
document.addEventListener("DOMContentLoaded", () => {
  const firstColor = sections[0]?.getAttribute("data-bg");
  if (firstColor) document.body.style.backgroundColor = firstColor;
});
// =================



