/* exported isPalindromic */
function isPalindromic(string) {
  var reverseString = '';
  var stringArray = string.split(' ');
  var stringNoSpaces = '';
  for (var i = 0; i < string.length; i++) {
    if (string[string.length - 1 - i] !== ' ') {
      reverseString = reverseString + string[string.length - 1 - i];
    }
  }
  for (i = 0; i < stringArray.length; i++) {
    stringNoSpaces = stringNoSpaces + stringArray[i];
  }
  return reverseString === stringNoSpaces;
}
