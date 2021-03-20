/* exported ransomCase */
function ransomCase(string) {
  var ransomWord = '';
  var currentLetter = '';
  var stringHolder = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      stringHolder = string.toLowerCase();
    } else {
      stringHolder = string.toUpperCase();
    }
    currentLetter = stringHolder.slice(i, i + 1);
    ransomWord = ransomWord + currentLetter;
  }
  return ransomWord;
}
