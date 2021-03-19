/* exported isLowerCased */
function isLowerCased(word) {
  var lowerCaseCheck = word.toLowerCase();
  if (lowerCaseCheck === word) {
    return true;
  } else {
    return false;
  }
}
