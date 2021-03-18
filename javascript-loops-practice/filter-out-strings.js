/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArray = [];
  var i = values.length;
  while (i > 0) {
    if (typeof (values[i - 1]) === typeof (7)) {
      newArray.unshift(values[i - 1]);
      i--;
    } else {
      i--;
    }
  }
  return newArray;
}
