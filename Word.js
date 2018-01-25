function Word (seed){
	this.seed = seed.toUpperCase();
}

Word.prototype.hasCharacter = function(char) {
	let guessedCorrectly = (this.seed.indexOf(char.toUpperCase()) > -1);
	return guessedCorrectly;
};




module.exports = Word;