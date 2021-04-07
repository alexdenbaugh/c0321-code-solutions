/* exported reverseWords */
function reverseWords(string) {
  var stringArray = string.split(' ');
  var wordArray = [];
  var concatLetters = '';
  var j;
  for (var i = 0; i < stringArray.length; i++) {
    for (j = 0; j < stringArray[i].length; j++) {
      concatLetters = stringArray[i][j] + concatLetters;
    }
    wordArray.push(concatLetters);
    concatLetters = '';
  }
  return wordArray.join(' ');
}
