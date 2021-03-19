/* exported isVowel */
function isVowel(char) {
  var checkChar = char.toLowerCase();
  if (checkChar === 'a' || checkChar === 'e' || checkChar === 'i' || checkChar === 'o' || checkChar === 'u') {
    return true;
  } else {
    return false;
  }
}
