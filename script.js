document.addEventListener("DOMContentLoaded", function () {

const hero = document.getElementById("hero");
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

hero.style.display = "flex";

startBtn.onclick = function () {

    music.play();

    let i = 0;

    function type() {
        if (i < message.length) {
            typing.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }

    typing.innerHTML = "";
    type();

    document.querySelector(".message").scrollIntoView({
        behavior: "smooth"
    });
};

});
