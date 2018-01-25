const inquirer = require('inquirer');
const Word = require('./Word');


const questions = [{
	type: 'input',
	name: 'letter',
	message: "Guess a letter!"
}]


var lives = 10;
var solution = new Word('Tree', 'Planet', 'Cayman', 'Tacoma');

// for (var i = 0; i < solution.seed.length; i++){
// 	var newstrn = solution.seed.replace("", '_');
// 	console.log(newstrn);
// }

inquirer.prompt(questions).then(({letter}) => {
	const guessedCorrectly = (solution.hasCharacter(letter));
	if (guessedCorrectly === true) {
		console.log("Correct!");
	}
	if (guessedCorrectly === false){
		console.log("Incorrect!");
		--lives;
	}
	
});

// while (lives > 0) {


// }

