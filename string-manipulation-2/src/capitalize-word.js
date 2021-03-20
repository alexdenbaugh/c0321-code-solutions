/* exported capitalizeWord */
function capitalizeWord(word) {
  var firstLetter = word[0];
  var lowerCase = word.slice(1);
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    firstLetter = firstLetter.toUpperCase();
    lowerCase = lowerCase.toLowerCase();
    word = firstLetter + lowerCase;
    return word;
  }
}
