/* exported invert */
function invert(source) {
  var newObject = {};
  for (var x in source) {
    newObject[source[x]] = x;
  }
  return newObject;
}
