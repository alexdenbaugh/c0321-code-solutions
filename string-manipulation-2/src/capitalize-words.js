/* exported capitalizeWords */
function capitalizeWords(string) {
  var stringArray = string.split(' ');
  string = '';
  var firstLetter = '';
  var lowerCase = '';
  var wordAtI = '';
  for (var i = 0; i < stringArray.length; i++) {
    wordAtI = stringArray[i];
    firstLetter = wordAtI[0];
    lowerCase = wordAtI.slice(1);
    firstLetter = firstLetter.toUpperCase();
    lowerCase = lowerCase.toLowerCase();
    wordAtI = firstLetter + lowerCase;
    string = string + ' ' + wordAtI;
  }
  string = string.slice(1);
  return string;
}
