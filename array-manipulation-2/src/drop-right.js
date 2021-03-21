/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count && array.length > 0; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
