/* exported take */
function take(array, count) {
  if (array.length === 0) {
    return array;
  }
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
