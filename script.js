// Detect the active language from the HTML file's lang attribute
const currentLang = document.documentElement.lang;

// --- 1. THE CLASSIC ALERT ---
const alertBtn = document.getElementById('alertBtn');
alertBtn.addEventListener('click', function() {
    if (currentLang === 'en') {
        alert('Hello! Thank you for visiting my portfolio. 🏓');
    } else {
        // Formal German Update applied here
        alert('Hallo! Danke, dass Sie mein Portfolio besuchen. 🏓'); 
    }
});

// --- 2. THE THEME SWITCHER ---
const themeBtn = document.getElementById('themeBtn');
const bodyElement = document.body;

themeBtn.addEventListener('click', function() {
    bodyElement.classList.toggle('light-mode');
    
    if (bodyElement.classList.contains('light-mode')) {
        themeBtn.textContent = currentLang === 'en' ? 'Dark Mode' : 'Dark Mode'; 
    } else {
        themeBtn.textContent = currentLang === 'en' ? 'Light Mode' : 'Light Mode';
    }
});

// --- 3. THE HOBBY GENERATOR ---
const hobbyBtn = document.getElementById('hobbyBtn');
const hobbyText = document.getElementById('hobbyText');

const tipsDE = [
    "Tipp: Halte den Schläger locker, nicht zu fest verkrampfen!",
    "Regel: Der Ball muss beim Aufschlag hochgeworfen werden.",
    "Tipp: Die Beinarbeit ist genauso wichtig wie der Schlag.",
    "Fakt: Tischtennis ist die schnellste Rückschlagsportart der Welt!",
    "Tipp: Konzentriere dich immer auf den Ball, nicht auf den Gegner."
];

const tipsEN = [
    "Tip: Hold the paddle loosely, don't grip too tightly!",
    "Rule: The ball must be thrown upwards during the serve.",
    "Tip: Footwork is just as important as the stroke.",
    "Fact: Table tennis is the fastest racket sport in the world!",
    "Tip: Always focus on the ball, not the opponent."
];

// Assign the correct array based on the current HTML language
const activeTips = currentLang === 'en' ? tipsEN : tipsDE;

hobbyBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * activeTips.length);
    hobbyText.textContent = activeTips[randomIndex];
    hobbyText.style.color = "#00ffcc";
});