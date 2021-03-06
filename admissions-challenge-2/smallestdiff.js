// MakerSquare Admissions Challenge 2 - Algorithm
// 
// Submission by: Stephen Torrence
//
// stephen.torrence@gmail.com
//
//_________________________________

var findSmallestDifference = function(arr) {
	
	// Use Array's built-in sort method
	// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	function compareNumbers(a, b) {
  		return a - b;
	};

	var arr = arr.sort(compareNumbers);
	var diffs = [];

	for (var i = 1; i < (arr.length); i++) {
		diffs.push(arr[i]-arr[i-1]);
	};

	return diffs.sort(compareNumbers)[0];
};
var result = findSmallestDifference([100, 500, 300, 1000, -200, 990]);
console.log(result); // The answer is 10 for this example because the difference between 1000 and 990 is 10

// Test using a series of random number arrays
// generated by (Math.floor((Math.random() * 1000) + 1) - 500)

var arr1 = [409, 346, -88, 154, -273, 410];
var arr2 = [-420, -209, 165, -390, 228, -81];
var arr3 = [303, 12, -494, 328, -275, -78];
var arr4 = [-274, 259, -199, -265, 319, 149];
var arr5 = [-421, 327, 373, 418, 221, 78];

console.log(findSmallestDifference(arr1)); // returns 1 - correct
console.log(findSmallestDifference(arr2)); // returns 30 - correct
console.log(findSmallestDifference(arr3)); // returns 25 - correct
console.log(findSmallestDifference(arr4)); // returns 9 - correct
console.log(findSmallestDifference(arr5)); // returns 45 - correct