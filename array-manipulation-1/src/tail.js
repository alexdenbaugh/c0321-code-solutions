/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
}
