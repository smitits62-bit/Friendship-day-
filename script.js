document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");
const intro = document.getElementById("introVideo");
const hero = document.getElementById("hero");
const skipBtn = document.getElementById("skipBtn");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");
const typing = document.getElementById("typing");

const message = `Dear Kintalvi ❤️,

Happy Friendship Day!

Thank you for always being there for me.

Every smile, every conversation and every memory with you is very special to me.

No matter where life takes us, I hope our friendship always stays the same.

Stay happy, stay blessed and keep smiling forever. ❤️

— Aa`;

function showWebsite() {
    loader.style.display = "none";

    if (intro) intro.style.display = "none";
    if (skipBtn) skipBtn.style.display = "none";

    if (hero) hero.style.display = "flex";
}

if (hero) hero.style.display = "none";

if (intro) {
    intro.onended = showWebsite;
    intro.onerror = showWebsite;
}

if (skipBtn) {
    skipBtn.onclick = showWebsite;
}

setTimeout(showWebsite, 5000);

if (startBtn) {
    startBtn.onclick = () => {

        if (music) {
            music.play().catch(() => {});
        }

        let i = 0;
        typing.innerHTML = "";

        function type() {
            if (i < message.length) {
                typing.innerHTML += message.charAt(i);
                i++;
                setTimeout(type, 40);
            }
        }

        type();

        document.querySelector(".message").scrollIntoView({
            behavior: "smooth"
        });
    };
}

});
