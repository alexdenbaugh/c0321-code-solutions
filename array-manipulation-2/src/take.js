/* exported take */
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count && array.length > 0; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
