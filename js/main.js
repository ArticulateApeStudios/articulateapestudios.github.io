// --- Custom Glowing Cursor Logic ---
const cursorGlow = document.querySelector('.cursor-glow');

// 1. Make the glow follow the mouse
document.addEventListener('mousemove', (e) => {
    // We use clientX and clientY to get the exact screen coordinates
    cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

// 2. Make it expand when hovering over anything clickable
const interactables = document.querySelectorAll('a, button');

interactables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursorGlow.classList.add('hover-active');
    });
    item.addEventListener('mouseleave', () => {
        cursorGlow.classList.remove('hover-active');
    });
});
