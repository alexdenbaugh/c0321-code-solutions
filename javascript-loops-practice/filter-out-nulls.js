/* exported filterOutNulls */

function filterOutNulls(values) {
  var newArray = [];
  var i = values.length;
  while (i > 0) {
    if (values[i - 1] !== null) {
      newArray.unshift(values[i - 1]);
      i--;
    } else {
      i--;
    }
  }
  return newArray;
}
