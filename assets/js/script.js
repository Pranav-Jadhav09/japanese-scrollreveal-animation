// Common Reveal options to create reveal animations
const sr = ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// Specific Animations on each elements
sr.reveal(".main-title, .section-title", {
  delay: 500,
  origin: "left",
});
sr.reveal(".sec-01 .image, .info", {
  delay: 600,
  origin: "bottom",
});
sr.reveal(".text-box", { delay: 700, origin: "right" });
sr.reveal(".media-icons i", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
sr.reveal(".sec-02 .image, .sec-03 .image", {
  delay: 500,
  origin: "top",
});
sr.reveal(".media-info li", {
  delay: 500,
  origin: "left",
  interval: 200,
});
