var inquirer = require('inquirer');

function basiccard(front, back) {
    this.front = front,
        this.back = back
}

var front;
var back;

basiccard.prototype.full = function() {
    console.log(this.front);
    console.log(this.back);
}

var cardArr = [];
var anwArr = [];

cardCount = 0;
var count = 0;
var score = 0;

function begin() {
    console.log("\nIt's time to create your Basic Flash cards. You will be prompted to add in your Question, then the answer for your card. Don't worry, you'll get to play them later!\n");
    moreCards()
}

function restart() {
    inquirer.prompt([{
        name: "restart",
        message: "\nWhat would you like to do?\n",
        type: "list",
        choices: ["Play different game", "Play again", "Quit"]
    }]).then(function(answers) {
        if (answers.restart === "Play different game") {
            var flashcards = require("./flashcards.js");
            var connection = flashcards;
            var connection1 = new connection();
            connection1.test();
        }
        if (answers.restart === "Play again") {
            count = 0;
            score = 0;
            begin();
        } else { console.log("\nThanks for playing!"); }
    });
}

function moreCards() {
    if (cardCount < 5) {
        var inquirer = require('inquirer'); {
            inquirer.prompt([{
                    name: "front",
                    message: "Enter the your question\n",
                    validate: Boolean
                },
                {
                    name: "back",
                    message: "Enter the answer\n",
                    validate: Boolean

                }
            ]).then(function(answers) {
                cardArr.push(answers.front);
                anwArr.push(answers.back);
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
    }]).then(function(answers) {
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
                message: cardArr[count],
                validate: Boolean
            }]).then(function(answers) {
                if ((answers.question).toLowerCase() === anwArr[count]) {
                    console.log("\nCorrect, the answer was " + anwArr[count]);
                    score++;
                } else {
                    console.log("\nSorry, the answer was " + anwArr[count]);
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
module.exports = "BasicCard";