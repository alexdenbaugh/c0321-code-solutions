/* exported reverseWord */
function reverseWord(word) {
  var reverseW = '';
  for (var i = 0; i < word.length; i++) {
    reverseW = word[i] + reverseW;
  }
  return reverseW;
}
