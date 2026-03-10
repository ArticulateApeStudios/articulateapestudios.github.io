// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2, // Controls the "weight" and momentum of the scroll
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    smoothWheel: true
});

// Create the animation loop to keep it running smoothly
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

// Start the loop
requestAnimationFrame(raf);
