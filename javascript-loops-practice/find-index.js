/* exported findIndex */
function findIndex(array, value) {
  var i = array.length;
  var j = 0;
  var indexValue = -1;
  if (i > 0) {
    while (i > 0) {
      if (array[j] === value) {
        indexValue = j;
        break;
      } else {
        i--;
        j++;
      }
    }
  } else {
    indexValue = -1;
  }
  return indexValue;
}
