

document.querySelector(".input-btn").addEventListener("click", guessLetter);

function guessLetter() {
    // Get the input when the button is pressed
    const input = document.querySelector("#input");
    // Check if the input is any of the 4 letters (hardcoded instead of a library due to instructions)
    if(input.value == 'f' || input.value == 'i' || input.value == 'r' || input.value == 'e') {
        console.log(input.value);   //temp
        alert("good guess")
    } else {
        failedGuess(input.value);
    }
    input.value = "";
}

// Called each time an incorrect letter is guessed
function failedGuess(letter) {
    var change;
    if(change= document.querySelector(".hidden")) {
        // display the next part of the hangman
        change.classList.remove("hidden");
        // display incorrectly guessed letters
    }
    else {
        gameOver(false);
    }
}

// Called at the end of each game (may switch up from an alert to displaying on the page)
function gameOver(result) {
    if(result) {
        alert("You Win!");
    } else {
        alert("You Lose!")
    }
}