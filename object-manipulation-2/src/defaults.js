/* exported defaults */
function defaults(target, source) {
  var targetKeys = [];
  for (var x in target) {
    targetKeys.push(x);
  }
  for (var y in source) {
    if (!targetKeys.includes(y)) {
      target[y] = source[y];
    }
  }
}
