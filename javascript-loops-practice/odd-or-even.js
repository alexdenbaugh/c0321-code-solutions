/* exported oddOrEven */
function oddOrEven(array) {
  var newArray = [];
  var i = array.length;
  while (i > 0) {
    if (array[i - 1] % 2 === 0) {
      newArray.unshift('even');
    } else {
      newArray.unshift('odd');
    }
    i--;
  }
  return newArray;
}
