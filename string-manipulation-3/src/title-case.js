/* exported titleCase */
function titleCase(string) {
  var stringArray = string.split(' ');
  var wordString = '';
  var firstLetter = '';
  var otherLetters = '';
  var exceptions = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < stringArray.length; i++) {
    wordString = stringArray[i];
    if (wordString.startsWith('Java') || wordString.startsWith('java')) {
      firstLetter = wordString[4];
      firstLetter = firstLetter.toUpperCase();
      otherLetters = wordString.slice(0, 4);
      otherLetters = otherLetters + firstLetter;
      firstLetter = wordString.slice(5);
      wordString = otherLetters + firstLetter;
      firstLetter = wordString[0];
      otherLetters = wordString.slice(1);
      firstLetter = firstLetter.toUpperCase();
      wordString = firstLetter + otherLetters;
    } else if (wordString.toLowerCase() === 'api') {
      wordString = wordString.toUpperCase();
    } else if (!exceptions.includes(stringArray[i])) {
      firstLetter = wordString[0];
      otherLetters = wordString.slice(1);
      firstLetter = firstLetter.toUpperCase();
      wordString = firstLetter + otherLetters;
    }
    if (wordString.includes(':')) {
      firstLetter = wordString[0];
      otherLetters = wordString.slice(1);
      firstLetter = firstLetter.toUpperCase();
      wordString = firstLetter + otherLetters;
      otherLetters = stringArray[i + 1];
      firstLetter = otherLetters[0];
      firstLetter = firstLetter.toUpperCase();
      otherLetters = otherLetters.slice(1);
      stringArray[i + 1] = firstLetter + otherLetters;
    }
    if (wordString.includes('-')) {
      firstLetter = wordString[0];
      otherLetters = wordString.slice(1);
      firstLetter = firstLetter.toUpperCase();
      wordString = firstLetter + otherLetters;
      firstLetter = wordString[wordString.indexOf('-') + 1];
      firstLetter = firstLetter.toUpperCase();
      otherLetters = wordString.slice(0, wordString.indexOf('-') + 1);
      wordString = otherLetters + firstLetter + wordString.slice(wordString.indexOf('-') + 2);
    }
    stringArray[i] = wordString;
  }
  return stringArray.join(' ');
}
