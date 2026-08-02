ebsite
document.addEventListener("DOMContentLoaded", () => {

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

    // Fade animation
    const cards = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    cards.forEach(card => observer.observe(card));

    // Floating hearts
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "-20px";
        heart.style.fontSize = "24px";
        heart.style.opacity = "0.8";
        heart.style.pointerEvents = "none";
        heart.style.transition = "all 5s linear";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.bottom = "100vh"
