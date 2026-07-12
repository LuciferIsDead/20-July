const reliveBtn = document.getElementById("reliveBtn");

const homeScreen = document.getElementById("homeScreen");
const storyScreen = document.getElementById("storyScreen");

const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");

const nextStory = document.getElementById("nextStory");

// Start Chapter 1
reliveBtn.addEventListener("click", () => {

    homeScreen.classList.add("fadeOut");

    setTimeout(() => {

        homeScreen.style.display = "none";

        storyScreen.classList.remove("hidden");

        storyScreen.classList.add("fadeIn");

        chapterTitle.textContent = "The Night Everything Changed";

        chapterText.innerHTML =
        `It all started with one little reply.<br><br>
        "Ghumai."<br><br>
        "Ghuman."<br><br>
        Neither of us knew that this tiny conversation
        would become the beginning of our favourite story.`;

    },800);

});

// Next button (temporary)
nextStory.addEventListener("click", () => {

    alert("Chapter 2 will be added in Version 1.2 ❤️");

});
