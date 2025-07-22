// Global variables
let kebabLoveCount = parseInt(localStorage.getItem('kebabLoveCount')) || 0;
let loveLevel = 0;
let isDrawing = false;


// Add kebab love function
function addKebabLove() {
    kebabLoveCount++;
    localStorage.setItem('kebabLoveCount', kebabLoveCount);
    const counterElement = document.getElementById('kebabCounter');
    counterElement.textContent = kebabLoveCount;
    
    // Add celebration class for special effects
    counterElement.classList.add('celebrating');
    setTimeout(() => {
        counterElement.classList.remove('celebrating');
    }, 1000);
}

// Initialize counter on page load
window.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('kebabCounter');
    if (counterElement) {
        counterElement.textContent = kebabLoveCount;
    }
});



