/* exported includesSeven */
function includesSeven(array) {
  var checkStatus;
  var i = array.length;
  if (i > 0) {
    while (i > 0) {
      if (array[i - 1] === 7) {
        checkStatus = true;
        break;
      } else {
        checkStatus = false;
        i--;
      }
    }
  } else {
    checkStatus = false;
  }
  return checkStatus;
}
