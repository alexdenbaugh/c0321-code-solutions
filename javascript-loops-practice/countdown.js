/* exported countdown */
function countdown(number) {
  var array = [];
  while (number >= 0) {
    array.push(number);
    number -= 1;
  }
  return array;
}
