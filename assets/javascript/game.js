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

var currentWord = "";
var lettersOfWord = [];
var blank = 0;
var correctChoices = [];
var wrongChoice = [];
var win = 0;
var loss = 0;
var livesRemain = 9;

function start() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    // console.log(currentWord);

    lettersOfWord = currentWord.split("");

    blank = lettersOfWord.length;

    for (var i = 0; i < blank; i++) {
        correctChoices.push("_");
    }

    document.getElementById("current-word").innerHTML = "  " + correctChoices.join("  ");
};

function reset() {
    livesRemain = 9;
    wrongChoice = [];
    correctChoices = [];
    start()
};

function checkChoices(letter) {
    var letterCorrect = false;
    for (var i = 0; i < blank; i++) {
        if (currentWord[i] === letter) {
            letterCorrect = true;
        }
    }
    if (letterCorrect) {
        for (var i = 0; i < blank; i++) {
            if (currentWord[i] === letter) {
                correctChoices[i] = letter;
            }
        }
    } else {
        wrongChoice.push(letter);
        livesRemain--;
    }; 
    // else if {
    //     wrongChoice
    // }


    // console.log(correctChoices);
};
// function to stop lives remaining from going down when they guess the same letter multiple times
// function userGuesses () {
//     if wrongChoice 
// }

function finish() {

    if (lettersOfWord.toString() === correctChoices.toString()) {
        win++
        reset()
        document.getElementById("winScore").innerHTML = " " + win;
    } else if (livesRemain === 0) {
        loss++;
        reset()
        document.getElementById("lossScore").innerHTML = " " + loss;
    }

    document.getElementById("current-word").innerHTML = "  " + correctChoices.join(" ");
    document.getElementById("lives-remain").innerHTML = " " + livesRemain;

};

start()
document.onkeyup = function(event) {
    document.getElementById("directions-text").style.cssText = "display: none"
    var choices = String.fromCharCode(event.keyCode).toLowerCase();
    checkChoices(choices);
    // if (event.keyCode >= 65 && event.keyCode <= 90)
    finish();
    // console.log(choices);
    document.getElementById("user-letters").innerHTML = "  " + wrongChoice.join(" ");
   
};
