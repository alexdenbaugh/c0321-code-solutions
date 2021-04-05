/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStringArray = firstString.split('');
  var secondStringArray = secondString.split('');
  var hasASpace = true;
  firstStringArray.sort();
  secondStringArray.sort();
  while (hasASpace) {
    if (firstStringArray[0] === ' ') {
      firstStringArray.shift();
    } else {
      hasASpace = false;
    }
  }
  hasASpace = true;
  while (hasASpace) {
    if (secondStringArray[0] === ' ') {
      secondStringArray.shift();
    } else {
      hasASpace = false;
    }
  }
  for (var i = 0; i < firstString.length; i++) {
    if (secondStringArray[i] !== firstStringArray[i]) {
      return false;
    }
  }
  return true;
}
