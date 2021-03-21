/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  var chunkArray = [];
  for (var i = 0; i < array.length; i++) {
    if (chunkArray.length < size) {
      chunkArray.push(array[i]);
    } else if (chunkArray.length === size) {
      newArray.push(chunkArray);
      chunkArray = [];
      chunkArray.push(array[i]);
    }
    if (i === array.length - 1) {
      newArray.push(chunkArray);
    }
  }
  return newArray;
}
