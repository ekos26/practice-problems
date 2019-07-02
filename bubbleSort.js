function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}
//api : application programming interface

//[1, 2, 4], i = 0; j = 1 //arrays are zero index in JS
//(0, 1, [1, 2, 4])

bubbleSort([9, 5, 1, 8]);
