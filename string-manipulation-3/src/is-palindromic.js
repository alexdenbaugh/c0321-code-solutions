/* exported isPalindromic */
function isPalindromic(string) {
  var stringArray = string.split(' ');
  var stringNoSpaces = stringArray.join('');
  for (var i = 0; i < stringNoSpaces.length; i++) {
    if (stringNoSpaces[i] !== stringNoSpaces[stringNoSpaces.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
