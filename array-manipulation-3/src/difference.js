/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
