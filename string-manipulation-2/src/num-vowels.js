/* exported numVowels */
function numVowels(string) {
  var vowels = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      vowels += 1;
    }
  }
  return vowels;
}
