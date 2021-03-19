/* exported getKeys */
function getKeys(object) {
  var keyArray = [];
  for (var key in object) {
    keyArray.push(key);
  }
  return keyArray;
}
