/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length && array.length > 0; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
