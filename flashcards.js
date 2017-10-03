
var inquirer = require('inquirer');

 function connect () {
	inquirer.prompt([{
		type: "list",
		name: "begin",
		message: "\nPlease choose a game",
		choices: ["Play Cloze Game", "Play Basic Card Game", "Demo Cloze Game", "Demo Basic Game"]
	}]).then( function (answers) {
		if (answers.begin === "Play Cloze Game") {
			var clozeKeys = require("./ClozeCard.js"); 	
		} if (answers.begin === "Play Basic Card Game") {
			var basicKeys = require("./BasicCard.js");
		} if (answers.begin === "Demo Basic Game") {
			var basicKeys = require("./DemoBasic.js");
		} if (answers.begin === "Demo Cloze Game") {
			var basicKeys = require("./DemoCloze.js");
		}
	})
}

connect ();


var connection = function () {
	this.test = function (){
		return connect();
}
}
module.exports = "flashcards";
module.exports = connection;

