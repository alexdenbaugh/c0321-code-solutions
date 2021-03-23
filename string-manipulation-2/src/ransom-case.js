/* exported ransomCase */
function ransomCase(string) {
  var ransomWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomWord += string[i].toLowerCase();
    } else {
      ransomWord += string[i].toUpperCase();
    }
  }
  return ransomWord;
}
