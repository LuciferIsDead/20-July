const clock = document.getElementById("clock");
const date = document.getElementById("introDate");

const ghumai = document.getElementById("ghumai");
const ghuman = document.getElementById("ghuman");

const introSentence = document.getElementById("introSentence");

const introScreen = document.getElementById("introScreen");
const homeScreen = document.getElementById("homeScreen");

let seconds = 50;

function updateClock(){

    const current = seconds;

    const displaySeconds = current.toString().padStart(2,"0");

    clock.textContent = `11:59:${displaySeconds} PM`;

    seconds++;

    if(seconds > 59){

        clearInterval(timer);

        midnightSequence();

    }

}

const timer = setInterval(updateClock,1000);
function midnightSequence(){

    clock.textContent = "12:00:00 AM";

    date.textContent = "20 July 2025";

    setTimeout(()=>{

        ghumai.classList.remove("hidden");
        ghumai.classList.add("show");

    },1000);

    setTimeout(()=>{

        ghuman.classList.remove("hidden");
        ghuman.classList.add("show");

    },3000);

    setTimeout(()=>{

        introSentence.classList.remove("hidden");
        introSentence.classList.add("show");

    },5500);

    setTimeout(()=>{

        transitionToHome();

    },10000);

}function transitionToHome(){

    introScreen.classList.add("fadeOut");

    setTimeout(()=>{

        introScreen.style.display = "none";

        homeScreen.classList.remove("hidden");

        homeScreen.classList.add("fadeIn");

        document.body.style.overflow = "auto";

    },1000);

}
