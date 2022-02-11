

document.querySelector(".input-btn").addEventListener("click", guessLetter);
document.addEventListener("keydown", function(e) {
    if(e.key === 'Enter') {
        guessLetter();
    }
});


function guessLetter() {
    // Get the input when the button is pressed
    const input = document.querySelector("#input");
    // Check for special characters as input
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    //             ^                                       ^
    console.log(format.test(input.value)); 
    // Check if the input is any of the 4 letters (hardcoded instead of a library due to instructions)
    if(isNaN(input.value) && !format.test(input.value)){
        if(input.value == 'f' || input.value == 'i' || input.value == 'r' || input.value == 'e') {
            console.log(input.value);   //temp
            alert("good guess")
        } else {
            failedGuess(input.value);
        }
    } else {
        alert("You can only guess letters. Numbers & special characters are not allowed.")
    }
    input.value = "";
}

// Called each time an incorrect letter is guessed
function failedGuess(letter) {
    var change;
    if(change = document.querySelector(".hidden-img")) {
        // display the next part of the hangman
        change.classList.remove("hidden-img");
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