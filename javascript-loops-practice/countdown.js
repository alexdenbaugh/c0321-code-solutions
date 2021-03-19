/* exported countdown */
function countdown(number) {
  var array = [];
  for (var i = 0; i <= number; i++) {
    array.unshift(i);
  }
  return array;
}
