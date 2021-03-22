/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var x in source) {
    if (!keys.includes(x)) {
      newObject[x] = source[x];
    }
  }
  return newObject;
}
