/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStringArray = firstString.split('');
  var secondStringArray = secondString.split('');
  firstStringArray.sort();
  secondStringArray.sort();
  firstString = firstStringArray.join('');
  secondString = secondStringArray.join('');
  firstString = firstString.trim();
  secondString = secondString.trim();
  if (secondString === firstString) {
    return true;
  } else {
    return false;
  }
}
