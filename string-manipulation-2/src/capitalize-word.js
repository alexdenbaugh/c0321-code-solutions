/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var firstLetter = word[0].toUpperCase();
  var lowerCase = word.slice(1).toLowerCase();
  return firstLetter + lowerCase;
}
