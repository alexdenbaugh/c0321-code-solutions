/* exported capitalizeWords */
function capitalizeWords(string) {
  var stringArray = string.split(' ');
  var firstLetter;
  var lowerCase;
  for (var i = 0; i < stringArray.length; i++) {
    firstLetter = stringArray[i][0].toUpperCase();
    lowerCase = stringArray[i].slice(1).toLowerCase();
    stringArray[i] = firstLetter + lowerCase;
  }
  return stringArray.join(' ');
}
