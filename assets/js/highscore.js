//global variables listed below for future reference

let goBack = document.querySelector('#go-back');

let clearHighScores = document.querySelector('#clear-high-scores');

let listOfScores = document.querySelector('#high-scores-list');

///Event listener for when the user wants to return to the index page from the highscore page
goBack.addEventListener("click", function () {
    window.location.href = "index.html";
})

////function for loading the highscores/names on the highscore page
let loadScores = function () {
    let scores = JSON.stringify(localStorage);
    return scores.replace(/[{}]/gi, '');
}

///function to clear the high scores internally and externally
clearHighScores.onclick = function () {
  localStorage.clear();
  listOfScores.value = '';
}

////the input bar should reflect the loaded scores
listOfScores.value = loadScores();
