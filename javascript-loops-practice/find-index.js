/* exported findIndex */
function findIndex(array, value) {
  var indexValue = -1;
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        indexValue = i;
        break;
      }
    }
  } else {
    indexValue = -1;
  }
  return indexValue;
}
