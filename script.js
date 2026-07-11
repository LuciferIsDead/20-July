const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        alert("✨ Welcome to our journey...\n\nVersion 1.0 Complete ❤️");

        document.body.style.opacity = "1";
    },1000);

});
