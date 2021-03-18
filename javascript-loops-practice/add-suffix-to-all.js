/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  var i = words.length;
  while (i > 0) {
    newArray.unshift(words[i - 1] + suffix);
    i--;
  }
  return newArray;
}
