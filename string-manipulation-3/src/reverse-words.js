/* exported reverseWords */
function reverseWords(string) {
  var stringArray = string.split(' ');
  var wordArray = [];
  var wordString = '';
  var concatLetters = '';
  var j;
  for (var i = 0; i < stringArray.length; i++) {
    wordString = (stringArray[i]);
    for (j = 0; j < wordString.length; j++) {
      concatLetters = wordString[j] + concatLetters;
    }
    wordArray.push(concatLetters);
    concatLetters = '';
  }
  return wordArray.join(' ');
}
