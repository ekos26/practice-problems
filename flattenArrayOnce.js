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
