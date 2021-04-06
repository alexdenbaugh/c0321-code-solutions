/* exported flatten */
function flatten(array) {
  var newArray = [];
  var j;
  if (array.length === 0) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      if (array[i].length > 1) {
        for (j = 0; j < array[i].length; j++) {
          newArray.push(array[i][j]);
        }
      } else {
        newArray.push(array[i][0]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
