// ==========================
// ELEMENTS
// ==========================

const reliveBtn = document.getElementById("reliveBtn");

const homeScreen = document.getElementById("homeScreen");
const storyScreen = document.getElementById("storyScreen");

const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");

const nextStory = document.getElementById("nextStory");

// ==========================
// OPEN STORY
// ==========================

reliveBtn.addEventListener("click", openChapterOne);

function openChapterOne() {

    homeScreen.classList.add("fadeOut");

    setTimeout(() => {

        homeScreen.style.display = "none";

        storyScreen.classList.remove("hidden");

        storyScreen.style.display = "flex";

        storyScreen.classList.add("fadeIn");

        chapterTitle.innerHTML = "The Night Everything Changed";

        chapterText.innerHTML = `
        It all began with one tiny Instagram Note...<br><br>

        <b>💭 Ghumai.</b><br><br>

        <b>💙 Ghuman.</b><br><br>

        Neither of us knew that one simple reply
        would slowly become the most beautiful
        chapter of our lives.
        `;

    }, 800);

}

// ==========================
// NEXT BUTTON (Temporary)
// ==========================

nextStory.addEventListener("click", function () {

    chapterTitle.innerHTML = "Coming Soon ❤️";

    chapterText.innerHTML = `
    Chapter 2 will continue our story.<br><br>

    The Instagram Group.<br>
    Samuel.<br>
    Acting as a Couple.<br><br>

    To be continued...
    `;

});
