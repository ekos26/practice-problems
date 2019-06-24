// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
  let result = [];

    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];

        for(let j = i + 1; j < nums.length; j++) {
            let nextElement = nums[j];

            if(element + nextElement === target) {
                result.push(i, j)
            }
        }
    }
    return result;
}

//o(n^2) time complexity


// const twoSum = function(nums, target) {
//     const result = {};
//     for(let i = 0; i < nums.length; i++) {
//         if(result[nums[i]]) {
//             return [result[nums[i]] , i]
//         }
//         result[target-nums[i]] = i
//     }
// }

//o(n) time complexity
