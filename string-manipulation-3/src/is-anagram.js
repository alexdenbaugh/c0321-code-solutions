/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var charCountFirst = [];
  var charCountSecond = [];
  var noSpace = firstString.split(' ');
  firstString = noSpace.join('');
  noSpace = secondString.split(' ');
  secondString = noSpace.join('');
  if (firstString.length !== secondString.length) {
    return false;
  }
  for (var i = 0; i < firstString.length; i++) {
    if (secondString.includes(firstString[i])) {
      charCountFirst = firstString.split(firstString[i]);
      charCountSecond = secondString.split(firstString[i]);
      if (charCountFirst.length !== charCountSecond.length) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
