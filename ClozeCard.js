
var inquirer = require('inquirer');

function clozecard(text, cloze, fullText) {
    this.text = text,
        this.cloze = cloze,
        this.fullText = fullText
}

clozecard.prototype.full = function () {
    clozeDeleted = this.cloze,
        clozeText = this.text,
        clozeFull = this.fullText
    closeText = clozeText.replace("....", clozeDeleted);
}

var cardArr = [];
var anwArr = [];

cardCount = 0;
var count = 0;
var score = 0;

function begin() {
    console.log("\nIt's time to create your Cloze Flash cards. You will be prompted to add in your Question, then the answer for your card. Don't worry, you'll get to play them later!\n");
    moreCards()
}

function restart() {
    inquirer.prompt([{
        name: "restart",
        message: "\nWant to play again?\n",
        type: "list",
        choices: ["Yes", "No"]
    }]).then(function (answers) {
        if (answers.restart === "Yes") {
            count = 0;
            score = 0;
            var flashcards = require("./flashcards.js");
            var connection = flashcards;
            var connection1 = new connection();
            connection1.test();
        } else { console.log("\nThanks for playing!"); }
    });
}

function moreCards() {
    if (cardCount < 5) {
        var inquirer = require('inquirer');
        {
            inquirer.prompt([{
                name: "partial",
                message: "Please enter your question with <....> in place of the hidden word?\n",
                validate: Boolean
            },
            {
                name: "cloze",
                message: "Enter the word you would like to hide\n",
                validate: Boolean
            },
            {
                name: "fullText",
                message: "Enter the completed answer\n",
                validate: Boolean

            }]).then(function (answers) {
                var NewCard = new clozecard(
                    answers.partial,
                    answers.cloze,
                    answers.fullText
                );
                cardArr.push(NewCard);
                cardArr.push
                cardCount++;
                console.log("\n");
                moreCards();
            });
        }
    } else {
        console.log("\n" + "--------------------------------------------------------------------------------" + "\n");
        startGame();
    }
}
function startGame() {
    inquirer.prompt([{
        name: "start",
        message: "Ready to play?\n",
        type: "list",
        choices: ["Play", "Make more cards"]
    }]).then(function (answers) {
        if (answers.start === "Play") {
            playGame();
        } else {
            console.log("\nYou have choosen to make more cards\n");
            cardCount = 0;
            moreCards();
        }
    });
}

function playGame() {
    if (count < 5) {
        var inquirer = require('inquirer'); {
            inquirer.prompt([{
                name: "question",
                message: cardArr[count].text,
                validate: Boolean
            }]).then(function (answers) {
                if ((answers.question).toLowerCase() === cardArr[count].cloze) {
                    console.log("\nCorrect, the answer is:\n " + cardArr[count].fullText);
                    score++;
                } else {
                    console.log("\nSorry, the answer is:\n " + cardArr[count].fullText);
                }
                console.log("\n" + "--------------------------------------------------------------------------------" + "\n");
                count++;
                playGame();
            });
        }
    } else {
        console.log("Game Over \nYour score is " + score);
        restart();
    };
}

begin();
module.exports = "ClozeCards";