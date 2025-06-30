// Global variables
let kebabLoveCount = 0;
let loveLevel = 0;
let isDrawing = false;

// Kebab testimonials
const testimonials = [
    "Kebabs are the perfect fusion of flavor, culture, and convenience! 💒",
    "Kebabs are proof that culinary excellence exists in this world! 🌟",
    "The aroma of grilling kebabs can transport you to flavor heaven! 😴",
    "Kebabs represent the perfect harmony of spices and cooking technique! 💓",
    "Scientists should study kebabs because they're clearly a perfect food! 🔬",
    "There's a kebab variety for every taste preference imaginable! 😍",
    "Kebabs are a universal language of deliciousness! 🗣️",
    "The only thing better than one kebab is exploring different regional styles! 🥙🥙",
    "Kebabs have set the gold standard for grilled perfection! 🙅‍♂️",
    "Restaurants are often judged by their kebab preparation skills! ⭐"
];

// Additional testimonials using spread operator
const moreTestimonials = [
    "Kebabs are the answer to satisfying hunger and cravings! 🌟",
    "Kebab preparation is a universal culinary art form! 🗣️",
    "The world of kebabs offers endless delicious possibilities! 💫"
];

const allTestimonials = [...testimonials, ...moreTestimonials];

// Kebab ingredients for random generation
const proteins = ['lamb', 'chicken', 'beef', 'mixed'];
const veggies = ['tomatoes', 'onions', 'lettuce', 'peppers'];
const sauces = ['garlic sauce', 'hot sauce', 'tzatziki', 'hummus'];

function generateRandomKebab() {
    const randomProtein = proteins[Math.floor(Math.random() * proteins.length)];
    const randomVeggies = [...veggies].sort(() => 0.5 - Math.random()).slice(0, 2);
    const randomSauce = sauces[Math.floor(Math.random() * sauces.length)];
    
    return `Perfect ${randomProtein} kebab with ${randomVeggies.join(' and ')} topped with ${randomSauce}! 🥙`;
}

// Add kebab love function
function addKebabLove() {
    kebabLoveCount++;
    const counterElement = document.getElementById('kebabCounter');
    counterElement.textContent = kebabLoveCount;
    
    // Add celebration class for special effects
    counterElement.classList.add('celebrating');
    setTimeout(() => {
        counterElement.classList.remove('celebrating');
    }, 1000);
    
    // Create floating kebab animation
    createFloatingKebab();
    
    // Add some sparkle effects
    if (kebabLoveCount % 5 === 0) {
        createSparkleEffect();
    }
    
    // Update testimonial every few clicks
    if (kebabLoveCount % 3 === 0) {
        updateTestimonial();
    }
    createSparkles();
    
    // Show random testimonial
    showRandomTestimonial();
}

function createFloatingKebab() {
    const kebab = document.createElement('div');
    kebab.textContent = '🥙';
    kebab.className = 'floating-kebab';
    kebab.style.left = Math.random() * window.innerWidth + 'px';
    kebab.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(kebab);
    
    setTimeout(() => {
        kebab.remove();
    }, 6000);
}

function shareTheJoy() {
    // Create heart rain effect
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
    
    // Show enthusiasm message
    alert("🎉 KEBAB JOY SHARED WITH THE WORLD! 🎉\n\nSpread the kebab appreciation! Tell everyone about the amazing world of kebabs! 🥙❤️");
}

function createHeart() {
    const heart = document.createElement('div');
    heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.className = 'heart-rain';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function startKebabRain() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createFloatingKebab();
        }, i * 50);
    }
}

function createSparkles() {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.fontSize = '2rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'fadeIn 0.5s ease-in, fadeOut 1s ease-out 1s forwards';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
}

function createSparkleEffect() {
    const counter = document.getElementById('kebabCounter');
    const rect = counter.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = (rect.left + rect.width/2 + (Math.random() - 0.5) * 100) + 'px';
        sparkle.style.top = (rect.top + rect.height/2 + (Math.random() - 0.5) * 80) + 'px';
        sparkle.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = `sparkleOut 1.5s ease-out forwards`;
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 1500);
    }
}

function updateTestimonial() {
    const testimonialElement = document.getElementById('randomTestimonial');
    const randomTestimonial = allTestimonials[Math.floor(Math.random() * allTestimonials.length)];
    
    // Fade out
    testimonialElement.style.opacity = '0';
    testimonialElement.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        testimonialElement.textContent = randomTestimonial;
        testimonialElement.style.opacity = '1';
        testimonialElement.style.transform = 'translateY(0)';
    }, 300);
}

function showRandomTestimonial() {
    const randomTestimonial = allTestimonials[Math.floor(Math.random() * allTestimonials.length)];
    document.getElementById('randomTestimonial').textContent = randomTestimonial;
}

function enlargeImage(img) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        cursor: pointer;
    `;
    
    const enlargedImg = img.cloneNode();
    enlargedImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 15px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    
    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);
    
    overlay.onclick = () => overlay.remove();
    
    // Add confetti effect
    createKebabConfetti();
}

function createKebabConfetti() {
    const confettiElements = ['🥙', '🎉', '✨', '🌟', '💫'];
    
    [...Array(30)].forEach((_, i) => {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = confettiElements[Math.floor(Math.random() * confettiElements.length)];
            confetti.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}%;
                font-size: 2rem;
                pointer-events: none;
                z-index: 10000;
                animation: confettiFall 3s linear forwards;
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 100);
    });
}

function titleClick() {
    const title = document.querySelector('.main-title');
    title.style.animation = 'none';
    setTimeout(() => {
        title.style.animation = 'bounceIn 0.5s ease-out';
    }, 10);
    
    showRandomTestimonial();
    createSparkles();
}

function increaseLove() {
    loveLevel = Math.min(loveLevel + 10, 100);
    document.getElementById('loveLevel').style.width = loveLevel + '%';
    
    if (loveLevel >= 100) {
        setTimeout(() => {
            alert("🚀 MAXIMUM KEBAB APPRECIATION ACHIEVED! 🚀\n\nYou have reached the ultimate level of kebab appreciation! The universe acknowledges this dedication! 🌟");
            startKebabRain();
        }, 500);
    }
}

function maxLove() {
    loveLevel = 100;
    document.getElementById('loveLevel').style.width = '100%';
    startKebabRain();
    
    setTimeout(() => {
        alert("💯 INSTANT MAX KEBAB APPRECIATION! 💯\n\nKebab passion is off the charts! 🚀");
    }, 1000);
}

function showRandomKebab() {
    const randomKebab = generateRandomKebab();
    document.getElementById('randomTestimonial').textContent = randomKebab;
    
    // Add special effect for random kebab
    createKebabConfetti();
    createSparkles();
}

// Canvas drawing functionality
function initializeCanvas() {
    const canvas = document.getElementById('kebabCanvas');
    const ctx = canvas.getContext('2d');

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function draw(e) {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#e74c3c';

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function stopDrawing() {
        if (isDrawing) {
            isDrawing = false;
            ctx.beginPath();
        }
    }

    // Make clearCanvas and saveKebabArt available globally
    window.clearCanvas = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    window.saveKebabArt = function() {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'my-kebab-masterpiece.png';
        link.href = dataURL;
        link.click();
        
        alert("🎨 Your kebab art has been saved! 🎨\n\nA true masterpiece worthy of any kebab enthusiast! 👨‍🎨");
    };
}

// Scroll animations
function animateOnScroll() {
    const cards = document.querySelectorAll('.fact-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = cardTop < window.innerHeight - 100;
        
        if (cardVisible) {
            card.classList.add('visible');
        }
    });
}

// Initialize dynamic CSS animations
function initializeDynamicStyles() {
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.textContent = `
        @keyframes fadeOut {
            to {
                opacity: 0;
                transform: scale(1.5);
            }
        }
        
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        .fact-card:hover .fact-emoji {
            animation: bounce 0.6s ease infinite alternate;
        }
        
        @keyframes bounce {
            to {
                transform: scale(1.3) translateY(-5px);
            }
        }
    `;
    document.head.appendChild(fadeOutStyle);
}

// Enhanced fact card interactions
function initializeFactCards() {
    document.querySelectorAll('.fact-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const facts = [
                "🥙 Fun fact: Some people have eaten 12 kebabs in one day and felt amazing!",
                "🌟 Amazing: The smell of kebabs cooking can be detected from 3 blocks away!",
                "💖 True story: Perfect kebabs have been known to bring tears of joy!",
                "🚀 Incredible: Kebab passion has inspired countless people to try new cuisines!",
                "⚡ Super fact: Kebab experts can identify 15+ different spice blends by smell!",
                "🎭 Life truth: Every problem in life can be improved with the right kebab!"
            ];
            
            alert(facts[index] || "🥙 Every kebab tells a beautiful story! 🥙");
            createKebabConfetti();
        });
    });
}

// Global click listener for random testimonial
function initializeGlobalClickListener() {
    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'CANVAS') {
            showRandomTestimonial();
            if (Math.random() > 0.7) {
                createSparkles();
            }
        }
    });
}

// Random kebab facts popup
function initializeRandomFacts() {
    setInterval(() => {
        if (Math.random() > 0.95) { // 5% chance every interval
            const facts = [
                "🥙 Did you know? The word 'kebab' comes from Arabic 'kabāb' meaning 'to burn'!",
                "🔥 Fun fact: The first kebab was probably invented by soldiers cooking meat on their swords!",
                "🌟 Amazing: There are over 40 different types of kebabs worldwide!",
                "💡 Cool fact: Kebabs are basically the original fast food - portable and delicious!"
            ];
            
            if (Math.random() > 0.8) {
                setTimeout(() => {
                    alert(facts[Math.floor(Math.random() * facts.length)]);
                }, 1000);
            }
        }
    }, 30000); // Check every 30 seconds
}

// Main initialization function
function initializeApp() {
    initializeCanvas();
    initializeDynamicStyles();
    initializeFactCards();
    initializeGlobalClickListener();
    initializeRandomFacts();
    showRandomTestimonial();
    animateOnScroll();
}

// Initialize everything when the page loads
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', initializeApp);
