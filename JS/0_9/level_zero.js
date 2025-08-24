const levelZeroText = document.getElementById("level_zero_txt");
const levelZeroKey = document.getElementById("level_zero_key");
const levelZeroInput = document.getElementById("level_zero_input");

const encrypted = "BEDFAYIKMZEAYGK"; // hardcoded ciphered text
const key = "MOSS";

// Display the encrypted text
levelZeroText.innerText = encrypted;

function placeKeyRandomly() {
    const section = document.querySelector('section[data-level="0"]');
    const maxX = section.clientWidth - levelZeroKey.offsetWidth;
    const maxY = section.clientHeight - levelZeroKey.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    levelZeroKey.style.left = `${randomX}px`;
    levelZeroKey.style.top = `${randomY}px`;
}
placeKeyRandomly();

// Check answer when Enter pressed
levelZeroInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        if (levelZeroInput.value.trim().toUpperCase() === key) {
            // Smoothly fade out encrypted text
            levelZeroText.style.transition = "opacity 0.5s";
            levelZeroText.style.opacity = 0;

            setTimeout(() => {
                // Change to plaintext
                levelZeroText.innerText = "PondScumandMoss";

                // Fade back in
                levelZeroText.style.opacity = 1;
            }, 500);
        }
    }
});

