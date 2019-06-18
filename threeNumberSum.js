//non-empty array of integers and an integer representing a target sum, function should find all triplets
//in the array that sum up to the target sum and return a 2D array of these triplets in ascending order
//return empty array if no 3 numbers sum up to target sum

function threeNumberSum(array, targetSum) {

	array.sort(function(a, b){return a - b});

	const result = [];

	for(let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;

		while (left < right) {
			const currentSum = array[i] + array[left] + array[right];

			if (currentSum === targetSum) {
				result.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currentSum < targetSum) {
				left++;
			} else if (currentSum > targetSum){
				right--;
			}
		}
	}
	return result;
}
