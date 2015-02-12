var findSmallestDifference = function(arr) {
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