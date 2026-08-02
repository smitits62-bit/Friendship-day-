document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");
const intro = document.getElementById("introVideo");
const hero = document.querySelector(".hero");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

// Hide hero first
hero.style.display = "none";

// When intro video ends
intro.onended = () => {
    loader.style.display = "none";
    intro.style.display = "none";
    hero.style.display = "flex";
};

// Skip button
document.getElementById("skipBtn").onclick = () => {
    intro.pause();
    loader.style.display = "none";
    intro.style.display = "none";
    hero.style.display = "flex";
};

// Start music
startBtn.onclick = () => {
    music.play();
};

// Typing effect
const title = document.getElementById("typing");
const text = "Happy Friendship Day Kintalvi ❤️";
let i = 0;

function typeWriter() {
    if (title && i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 90);
    }
}

if (title) {
    title.innerHTML = "";
    typeWriter();
}

});
