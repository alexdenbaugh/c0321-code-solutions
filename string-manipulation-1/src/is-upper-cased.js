/* exported isUpperCased */
function isUpperCased(word) {
  var upperCaseCheck = word.toUpperCase();
  if (upperCaseCheck === word) {
    return true;
  } else {
    return false;
  }
}
