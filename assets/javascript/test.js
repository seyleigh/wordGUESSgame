
var words = [
    "heart",
    "cornea",
    "stomach",
    "pancreas",
    "hypothalamus",
    "phalanges",
    "trachea",
    "sclera",
    "pharynx",
    "uterus",
    "femur",
    "cerebrum",
    "blood",
    "tongue",
    "epidermis"
];

var totalGuess = 9;         // Total guesses user gets
var userGuesses = [];       // Where the users guesses go
var activeWordIndex
var usersWord = [];          // I dont know
var lettersRemaining = 0;   // Number of guesses remaining
var winText = 0;            // Number of wins
var lossText = 0;           // Number of losses
var gameOver = false;

function start() {
    lettersRemaining = totalGuess;

    userGuesses = [];
    userWord = [];

    activeWordIndex = Math.floor(Math.random() * (words.length));

    for (var i = 0; i < words[activeWordIndex].length; i++) {
        usersWord.push("_");
        
    }

    document.getElementById("directions-text").style.cssText = "display: none";

    newGame();
};

function newGame() {
    
    document.getElementById("win-text").innerText = winText;
    
    var usersWordText = "";

    for (var i = 0; i < usersWord.length; i++) {
        usersWordText += usersWord[i];
    }

    document.getElementById("activeWord").innerText = usersWordText;
    document.getElementById("letters-remaining").innerText = lettersRemaining;
    document.getElementById("user-guesses").innerText = userGuesses;

};

function isitright(letter) {

    var location = [];

    for (var i = 0; i < words[activeWordIndex].length; i++) {
        if (words[activeWordIndex][i] === letter) {
            location.push(i);
        }
    }

    if (location.length === 0) {
        lettersRemaining--;
    } else {
        for(var i = 0; i < location.length; i++) {
            usersWord[location[i]] = letter;
        }
    }
};

function winGame() {
    if (usersWord.indexOf("_") === -1) {
        winText++;
        gameOver = true;
    }
};

function loseGame() {
    if (lettersRemaining === 0) {
        gameOver = true;
    }
};

function guessing(letter) {
    if (lettersRemaining > 0) {
        if (userGuesses.indexOf(letter) === -1) {
            userGuesses.push(letter);
            isitright(letter);
        }
    }
};

document.onkeydown = function(event) {
    if(gameOver) {
        start();
        gameOver = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            guessing(event.key.toUpperCase());
            newGame();
            winGame();
            loseGame();
        }
    }
};