/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 */

// function reverseInPlace(arr) {
//   return arr.reverse();
// }

// function reverseInPlace(arr) {
//   let counter = 0;
//   let originalLength = arr.length
//   let arrLength = arr.length
//   while (arrLength > 0) {
//     arr.unshift('x')
//     arrLength--
//   }

//   for (let i = arr.length - 1; i >= originalLength; i--) {
//     let element = arr[i];
//     arr[counter] = element;
//     counter++;
//   }
//   return arr.slice(0, originalLength);
// }

console.log(reverseInPlace(["h", "e", "l", "l", "o"]));
//["o", "l", "l", "e", "h"]

// function reverseInPlace(strArr){
//   let counter = 1;
//   for(let i = 0; i < strArr.length / 2; i++){
//     let x = strArr[i];
//     let y = strArr[strArr.length - counter]
//     strArr[i] = y
//     strArr[strArr.length - counter] = x
//     counter++;
//   }
//   return strArr.join("");
// }

// function reverseInPlace(str) {
//   for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     const c = str[i];
//     str[i] = str[j];
//     str[j] = c;
//   }
//   return str;
// }


/**
 * @param {string} s
 * @return {string}
 * Write a function that takes a string as input and reverse only the vowels of a string.
 * Note: The vowels does not include the letter "y".
 */

function reverseVowels(str) {
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    let element = str[i];

    if (str.includes(vowels)) {

    }
  }
}

//holle
