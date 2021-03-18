/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  var i = array.length;
  while (i > 0) {
    indexes.unshift(i - 1);
    i--;
  }
  return indexes;
}
