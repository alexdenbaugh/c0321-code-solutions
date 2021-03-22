/* exported titleCase */
function titleCase(string) {
  var stringArray = string.split(' ');
  var wordString = '';
  var firstLetter = '';
  var otherLetters = '';
  for (var i = 0; i < stringArray.length; i++) {
    wordString = stringArray[i];
    if (stringArray[i] !== 'and' && stringArray[i] !== 'or' && stringArray[i] !== 'nor' && stringArray[i] !== 'but' && stringArray[i] !== 'a' && stringArray[i] !== 'an' && stringArray[i] !== 'the' && stringArray[i] !== 'as' && stringArray[i] !== 'at' && stringArray[i] !== 'by' && stringArray[i] !== 'for' && stringArray[i] !== 'in' && stringArray[i] !== 'of' && stringArray[i] !== 'on' && stringArray[i] !== 'per' && stringArray[i] !== 'to') {
      firstLetter = wordString[0];
      otherLetters = wordString.slice(1);
      firstLetter = firstLetter.toUpperCase();
      wordString = firstLetter + otherLetters;
    }
    if (wordString.startsWith('Java')) {
      firstLetter = wordString[4];
      firstLetter = firstLetter.toUpperCase();
      otherLetters = wordString.slice(0, 4);
      otherLetters = otherLetters + firstLetter;
      firstLetter = wordString.slice(5);
      wordString = otherLetters + firstLetter;
    }
    if (wordString === 'Api') {
      wordString = wordString.toUpperCase();
    }
    if (wordString.includes(':')) {
      otherLetters = stringArray[i + 1];
      firstLetter = otherLetters[0];
      firstLetter = firstLetter.toUpperCase();
      otherLetters = otherLetters.slice(1);
      stringArray[i + 1] = firstLetter + otherLetters;
    }
    if (wordString.includes('-')) {
      firstLetter = wordString[wordString.indexOf('-') + 1];
      firstLetter = firstLetter.toUpperCase();
      otherLetters = wordString.slice(0, wordString.indexOf('-') + 1);
      wordString = otherLetters + firstLetter + wordString.slice(wordString.indexOf('-') + 2);
    }
    stringArray[i] = wordString;
  }
  return stringArray.join(' ');
}
