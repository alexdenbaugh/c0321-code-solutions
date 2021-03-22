/* exported ransomCase */
function ransomCase(string) {
  var ransomWord = '';
  var stringHolder;
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      stringHolder = string.toLowerCase();
      ransomWord = ransomWord + stringHolder.slice(i, i + 1);
    } else {
      stringHolder = string.toUpperCase();
      ransomWord = ransomWord + stringHolder.slice(i, i + 1);
    }
  }
  return ransomWord;
}
