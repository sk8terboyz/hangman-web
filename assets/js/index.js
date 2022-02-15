/**
 * Author: Shane Kennedy
 * Purpose: This program will listen for inputs from the webpage and then display the results of each input
 * It's Hangman, but made to work for only one word.
 */

// Listen for the "Guess" button to be pressed
document.querySelector(".input-btn").addEventListener("click", guessLetter);
// Listen for the Enter key to be pressed (accepted the same as clicking the "Guess" button)
document.addEventListener("keydown", function(e) {
    if(e.key === 'Enter') {
        guessLetter();
    }
});

// Checks for each correct letter to keep track of when the user wins
var one, two, three, four = false;

function guessLetter() {
    // Get the input when the button is pressed
    const input = document.querySelector("#input");
    // Check for special characters as input
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    //             ^                                       ^
    // Check if the input is any of the 4 letters (hardcoded instead of a database of words due to instructions)
    if(isNaN(input.value) && !format.test(input.value)){
        if(input.value == 'f' || input.value == 'i' || input.value == 'r' || input.value == 'e') {
            correctGuess(input.value);
        } else {
            failedGuess(input.value);
        }
    } else {
        alert("You can only guess letters. Numbers & special characters are not allowed.")
    }
    input.value = "";
}


// Called each time a correct letter is guessed (Unfinished)
function correctGuess(letter) {
    if(letter == 'f') {
        // display f
        const correctLetter = document.querySelector('#first-letter');
        correctLetter.classList.remove('hidden');
        one = true;
    } else if(letter == 'i') {
        // display i
        const correctLetter = document.querySelector('#second-letter');
        correctLetter.classList.remove('hidden');
        two = true;
    } else if(letter == 'r') {
        // display r
        const correctLetter = document.querySelector('#third-letter');
        correctLetter.classList.remove('hidden');
        three = true;
    } else if (letter == 'e') {
        //display e
        const correctLetter = document.querySelector('#fourth-letter');
        correctLetter.classList.remove('hidden');
        four = true;
    } else {
        alert("Somehow you have broken the system and it requires to be started to work properly agains.")
    }
    if(one == true && two == true && three == true && four == true) {
        gameOver(true);
    }
}

// Called each time an incorrect letter is guessed
function failedGuess(letter) {
    var change;
    const letters = document.querySelector(".wrong-letters");
    if(change = document.querySelector(".hidden-img")) {
        // display the next part of the hangman
        change.classList.remove("hidden-img");
        // Create list element to add to ul of wrong letters
        var wrong = document.createElement('li')
        wrong.textContent = letter.toUpperCase();
        // display incorrectly guessed letters
        letters.appendChild(wrong);
    }
    else {
        gameOver(false);
    }
}

// Called at the end of each game (may switch up from an alert to displaying on the page)
function gameOver(result) {
    const results = document.querySelector('.results');
    if(result) {
        // Display "You Win!" in the blue area (Unfinished - needs a "You Win" image to bring visible) 
        document.querySelector('.winner').classList.remove('hidden');
    } else {
        // Display "You Lose!" in the blue area (Unfinished - needs a "You Lose" image to bring visible)
        document.querySelector('.loser').classList.remove('hidden');
    }
    document.querySelector('input').parentNode.removeChild(input);
}