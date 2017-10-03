var inquirer = require('inquirer');
var front = ["What color is Luke's Lightsaber in a New Hope? \n <Blue, Red, or Green>", "Where did Luke first meet Han Solo? \n <Alderaan, Tatooine, or Dagobah>", "Chewbacca comes from what planet? \n <Alderaan, Kashykk, or Tatooine>", "What character was voiced by Frank Oz? \n <C3PO, Chewbacca, or Yoda>", "Mark Hamill is the voice of what other character? \n <Batman, Joker, or The Jawas>"];

var back = ["blue", "tatooine", "kashykk", "yoda", "joker"];
var log = ["Blue", "Tatooine", "Kashykk", "Yoda", "Joker"];
var count = 0;
var score = 0

function restart() {
    inquirer.prompt([{
        name: "restart",
        message: "\nWhat would you like to do?\n",
        type: "list",
        choices: ["Play different game", "Play again", "Quit"]
    }]).then(function (answers) {
        if (answers.restart === "Play different game") {
            var flashcards = require("./flashcards.js");
            var connection = flashcards;
            var connection1 = new connection();
            connection1.test();
        } if (answers.restart === "Play again") {
           count = 0;
            score = 0;
            makeCards();
        } else { console.log("\nThanks for playing!"); }
    });
}

function makeCards() {
    if (count < 5) {
        var inquirer = require('inquirer'); {
            inquirer.prompt([{
                name: "question",
                message: front[count],
                validate: Boolean
            }]).then(function (answers) {
                if ((answers.question).toLowerCase() === back[count]) {
                    console.log("\nCorrect, the answer was " + log[count]);
                    score++;
                } else {
                    console.log("\nSorry, the answer was " + log[count]);
                }
                console.log("\n" + "--------------------------------------------------------------------------------" + "\n");
                count++;
                makeCards();
            });
        }
    } else {
        if (score === 5) { console.log("Rank: Jedi Master \nYour score is " + score) }
        if (score === 4) { console.log("Rank: A New Hope \nYour score is " + score) }
        if (score < 4) { console.log("Rank: Rebel Scum \nYour score is " + score) };
        restart();
    }
}
makeCards();

module.exports = "DemoBasic";