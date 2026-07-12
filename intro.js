const clock = document.getElementById("clock");
const date = document.getElementById("introDate");

const ghumai = document.getElementById("ghumai");
const ghuman = document.getElementById("ghuman");

const introSentence = document.getElementById("introSentence");

const introScreen = document.getElementById("introScreen");
const homeScreen = document.getElementById("homeScreen");

// Start time
let hour = 11;
let minute = 59;
let second = 50;

// Update clock every second
const timer = setInterval(() => {

    second++;

    if (second > 59) {
        clearInterval(timer);

        clock.textContent = "12:00:00 AM";
        date.textContent = "20 July 2025";

        startSequence();
        return;
    }

    clock.textContent =
        `11:59:${String(second).padStart(2, "0")} PM`;

}, 1000);

function startSequence() {

    // Show "Ghumai."
    setTimeout(() => {
        ghumai.classList.remove("hidden");
        ghumai.classList.add("show");
    }, 1000);

    // Show "Ghuman."
    setTimeout(() => {
        ghuman.classList.remove("hidden");
        ghuman.classList.add("show");
    }, 3000);

    // Show intro text
    setTimeout(() => {
        introSentence.classList.remove("hidden");
        introSentence.classList.add("show");
    }, 5000);

    // Go to home screen
    setTimeout(() => {

        introScreen.style.opacity = "0";

        setTimeout(() => {

            introScreen.style.display = "none";

            homeScreen.classList.remove("hidden");

            homeScreen.style.opacity = "1";

        }, 1000);

    }, 9000);

}
