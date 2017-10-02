var input = require("./questions.js");
var keys = input.questions;
var inquirer = require('inquirer');


function start () {
console.log("What would you like to do now?");
}
start (); 

for (var i; i < questions.length; i++) {
}

 function trivia() {
 	inquirer.prompt([
 	{
 	name:"question",
 	message: questions.full[i]
 	}
 	]);
 }
 
 trivia ();