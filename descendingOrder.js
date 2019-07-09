//return digits in descending order

function descendingOrder (num) {
 var string = num.toString().split('');

 return Number(string.sort().reverse().join(''));
}

descendingOrder(325634639); //966543332
