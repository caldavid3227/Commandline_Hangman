const inquirer = require('inquirer');
const Word = require('./Word');


const questions = [{
	type: 'input',
	name: 'letter',
	message: "Guess a letter!"
}]


var lives = 10;
var solution = new Word('Tree', 'Planet', 'Cayman', 'Tacoma');

game();
// for (var i = 0; i < solution.seed.length; i++){
// 	var newstrn = solution.seed.replace("", '_');
// 	console.log(newstrn);
// }

function game(){
		inquirer.prompt(questions).then(({letter}) => {
			const guessedCorrectly = (solution.hasCharacter(letter));
			if (guessedCorrectly === true) {
				console.log("Correct!");
			}
			if (guessedCorrectly === false){
				console.log("Incorrect!");
				--lives;
				console.log(lives+" Lives left");
			}
			if (lives === 0){
				console.log('You have died!');	
			}
			else {
				game();
			}

			
		});
}

