function flatten (array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    if (Array.isArray(element)) {
      for (var j = 0; j < element.length; j++) {
        var currentElement = element[j];

        newArr.push(currentElement);
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

//flatten([[1,2,3,]]); //[1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
