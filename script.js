// GSAP Animations for Solar Explorer

// Animate logo on load
gsap.from(".logo", {
  duration: 2,
  y: -100,
  opacity: 0,
  ease: "bounce.out"
});

// Animate planets when they appear
gsap.from(".planet", {
  duration: 2,
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  ease: "elastic.out(1, 0.5)"
});

// Animate moons
gsap.from(".moon", {
  duration: 1.5,
  scale: 0,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.7)",
  delay: 1
});

// Animate overlay background
gsap.to(".overlay", {
  duration: 5,
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Animate planet descriptions on hover
document.querySelectorAll(".planet_description").forEach(desc => {
  desc.addEventListener("mouseenter", () => {
    gsap.to(desc, { scale: 1.05, duration: 0.5, ease: "power1.out" });
  });
  desc.addEventListener("mouseleave", () => {
    gsap.to(desc, { scale: 1, duration: 0.5, ease: "power1.in" });
  });
});
