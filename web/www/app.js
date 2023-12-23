// script.js

// document.querySelectorAll('.bubble').forEach(bubble => {
//     bubble.addEventListener('click', () => {
//         alert("Bubble clicked: " + bubble.textContent);
//     });
// });

// Add this to your existing script.js

const bubbles = document.querySelectorAll('.bubble');
const centralIndex = Math.floor(bubbles.length / 2); // Get the index of the central bubble

bubbles.forEach((bubble, index) => {
    bubble.addEventListener('click', () => {
        alert("Bubble clicked: " + bubble.textContent);
    });

    bubble.addEventListener('mousemove', (e) => {
        const rect = bubble.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        bubble.style.transform = `translate(${(x - rect.width / 2) * 0.1}px, ${(y - rect.height / 2) * 0.1}px) scale(0.8)`;
    });

    bubble.addEventListener('mouseleave', () => {
        bubble.style.transform = bubble.classList.contains('central') ? 'scale(1.5)' : 'scale(1)';
    });

    // Add the 'central' class to the central bubble
    if (index === centralIndex) {
        bubble.classList.add('central');
    }
});
