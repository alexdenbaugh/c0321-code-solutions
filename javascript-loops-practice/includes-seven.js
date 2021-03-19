/* exported includesSeven */
function includesSeven(array) {
  var checkStatus;
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 7) {
        checkStatus = true;
        break;
      } else {
        checkStatus = false;
      }
    }
  } else {
    checkStatus = false;
  }
  return checkStatus;
}
