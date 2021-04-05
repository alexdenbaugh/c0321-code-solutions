/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sumNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumNumbers += numbers[i];
    }
    return sumNumbers;
  },
  getAverage: function (numbers) {
    var averageNumber = 0;
    for (var i = 0; i < numbers.length; i++) {
      averageNumber += numbers[i];
    }
    return averageNumber / numbers.length;
  }
};
