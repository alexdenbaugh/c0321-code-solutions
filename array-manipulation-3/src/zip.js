/* exported zip */
function zip(first, second) {
  var newArray = [];
  var pairArray = [];
  for (var i = 0; first[i] && second[i]; i++) {
    pairArray = [];
    pairArray.push(first[i]);
    pairArray.push(second[i]);
    newArray.push(pairArray);
  }
  return newArray;
}
