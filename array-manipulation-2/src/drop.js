/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length && array.length !== 0; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
