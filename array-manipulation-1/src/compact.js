/* exported compact */
// function compact(array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] !== false && array[i] !== '' && array[i] !== -0 && array[i] !== 0 && array[i] !== undefined && array[i] !== null) {
//       if (array[i] === array[i]) {
//         newArray.push(array[i]);
//       };
//     };
//   };
//   return newArray;
// };

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0 || array[i] < 0 || array[i] === true || (array[i] !== '' && typeof (array[i]) === typeof ('')) || (typeof (array[i]) === typeof ([]) && array[i] !== null)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
