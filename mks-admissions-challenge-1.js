// MakerSquare Admissions Challenge
// 
// Submission by: Stephen Torrence
//
// stephen.torrence@gmail.com
//
//_________________________________


// Phase 1

var decryptA = function(message) {
	var words = message.split(' ');
	var lastLetters = [];

	for (var key in words) {
		lastLetters.push(words[key][words[key].length-1]);
	};

	return lastLetters.join('');
}

var result1 = decryptA("laugh ride lol hall bozo")
console.log(result1) // This should be "hello"

var result2 = decryptA("dog polo boo sudd noob smiley ride")
console.log(result2) // This should be "goodbye"


// Phase 2

var decryptB = function(message) {
	var words = message.split(' ');
	var cryptLetters = [];

	for (var key in words) {
		var firstLetter = words[key][0];
		var lastLetter = words[key][words[key].length - 1];

		if (firstLetter >= lastLetter) {
			cryptLetters.push(firstLetter);
		} else {
			cryptLetters.push(lastLetter);
		}
	};

	return cryptLetters.join('');
}

var result1 = decryptB("wazdee apple love bic nooo more end")
console.log(result1) // This should be "welcome"

var result2 = decryptB("bria loud fuzu antidote")
console.log(result2) // This should be "blue"
