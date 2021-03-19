/* exported capitalize */
function capitalize(word) {
  var firstLetter = word[0];
  var lowerCase = word.slice(1);
  firstLetter = firstLetter.toUpperCase();
  lowerCase = lowerCase.toLowerCase();
  word = firstLetter + lowerCase;
  return word;
}
