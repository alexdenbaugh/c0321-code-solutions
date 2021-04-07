/* exported titleCase */
function titleCase(string) {
  var stringArray = string.split(' ');
  var wordString = '';
  var exceptions = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < stringArray.length; i++) {
    wordString = stringArray[i];
    wordString = wordString.toLowerCase();
    if (wordString.startsWith('Java') || wordString.startsWith('java')) {
      wordString = capitalizeWord(wordString[0], wordString.slice(1, 4)) + capitalizeWord(wordString[4], wordString.slice(5));
    } else if (wordString.toLowerCase() === 'api') {
      wordString = capitalizeWord(wordString, '');
    } else if (!exceptions.includes(stringArray[i])) {
      wordString = capitalizeWord(wordString[0], wordString.slice(1));
    }
    if (wordString.includes(':')) {
      stringArray[i + 1] = capitalizeWord(stringArray[i + 1][0], stringArray[i + 1].slice(1));
    }
    if (wordString.includes('-')) {
      wordString = wordString.slice(0, wordString.indexOf('-') + 1) + capitalizeWord(wordString[wordString.indexOf('-') + 1], wordString.slice(wordString.indexOf('-') + 2));
    }
    stringArray[i] = wordString;
  }
  return stringArray.join(' ');
}

function capitalizeWord(firstLetter, otherLetters) {
  firstLetter = firstLetter.toUpperCase();
  return firstLetter + otherLetters;
}
