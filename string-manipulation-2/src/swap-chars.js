/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  array[firstIndex] = string[secondIndex];
  array[secondIndex] = string[firstIndex];
  return array.join('');
}
