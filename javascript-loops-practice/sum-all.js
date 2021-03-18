/* exported sumAll */
function sumAll(numbers) {
  var i = numbers.length;
  var sum = 0;
  while (i > 0) {
    sum += numbers[i - 1];
    i--;
  }
  return sum;
}
