/* exported getValues */
function getValues(object) {
  var valueArray = [];
  for (var key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}
