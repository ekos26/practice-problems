// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num){
//   var numString = num.toString();
//   var results = [];

//   for (var i = 0; i < numString.length; i++) {
//     results.push(Math.pow(numString[i], 2));
//   }
//   return Number(results.join(''));
// }


squareDigits(9119);


function squareDigits (num) {
  var string = num.toString();
  var results = [];

  for (var i = 0; i < string.length; i++) {
    var element = string[i];

    results.push(element * element);
  }
  return Number(results.join(''));
}

//Mitch way, not changing to string

// function squareDigits(num) {
//   var result = 0;
//   var power = 0;
//   while (num) {
//     var digit = num % 10;
//     var square = digit * digit;
//     result += square * Math.pow(10, power);

//     square > 10 ? power += 2 : power += 1;

//     num = Math.floor(num / 10);
//   }

//   return result;
// }
