var inquirer = require('inquirer');

function clozecard (text, cloze) {
    this.text = text,
    this.cloze = cloze
}

clozecard.prototype.full = function () {
    clozeDeleted = this.cloze,
    clozeText = this.text

    closeText = clozeText.replace("....", clozeDeleted);
}

var card1 = new clozecard("Poe Dameran has his X-wing crash on ....", "jakku"); 
var card2 = new clozecard("On the planet Jakku, .... lives in the remains on an AT-AT", "rey");
var card3 = new clozecard(".... was Kylo Ren's original name before he changed it", "ben");
var card4 = new clozecard(".... was Finn's job on StarKiller Base", "sanitation");
var card5 = new clozecard("Daniel Craig plays a .... in Force Awakens  ", "storm trooper");

var cardArr = [];
cardArr.push(card1, card2, card3, card4, card5);

var count = 0;
var score = 0;

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
    if (count < 5) {
        var inquirer = require('inquirer'); {
            inquirer.prompt([{
                name: "question",
                message: cardArr[count].text,
                validate: Boolean
            }]).then(function(answers) {
                if ((answers.question).toLowerCase() === cardArr[count].cloze) {
                    console.log("\nCorrect, the answer was " + cardArr[count].cloze);
                    score++;
                } else {
                    console.log("\nSorry, the answer was " + cardArr[count].cloze);
                }
                console.log("\n" + "--------------------------------------------------------------------------------" + "\n");
                count++;
                moreCards();
            });
        }
    } else {
        if (score === 5) { console.log("Rank: Jedi Master \nYour score is " + score) }
        if (score === 4) { console.log("Rank: A New Hope \nYour score is " + score) }
        if (score < 4) { console.log("Rank: Rebel Scum \nYour score is " + score) };
        restart ();
    }
}

moreCards();
module.exports = "DemoCloze";