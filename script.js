document.addEventListener("DOMContentLoaded",()=>{

const loader=document.getElementById("loader");
const intro=document.getElementById("introVideo");
const hero=document.getElementById("hero");
const skipBtn=document.getElementById("skipBtn");
const startBtn=document.getElementById("startBtn");
const music=document.getElementById("bgMusic");
const typing=document.getElementById("typing");

const message=`Dear Kintalvi ❤️,

Happy Friendship Day!

Thank you for always being there for me.

Every smile, every conversation and every memory with you is very special to me.

No matter where life takes us, I hope our friendship always stays the same.

Stay happy, stay blessed and keep smiling forever. ❤️

— Aa`;

function showWebsite(){
loader.style.display="none";
intro.style.display="none";
skipBtn.style.display="none";
hero.style.display="flex";
}

intro.onended=showWebsite;
skipBtn.onclick=showWebsite;

startBtn.onclick=()=>{
music.play();

let i=0;

function type(){
if(i<message.length){
typing.innerHTML+=message.charAt(i);
i++;
setTimeout(type,40);
}
}

typing.innerHTML="";
type();

document.querySelector(".message").scrollIntoView({
behavior:"smooth"
});
};

});
