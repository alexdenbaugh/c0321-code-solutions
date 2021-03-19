/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) === typeof (7)) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
