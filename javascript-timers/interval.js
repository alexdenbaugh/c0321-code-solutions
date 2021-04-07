var $h1 = document.querySelector('h1');
var countdown = {
  array: ['3', '2', '1', '~Earth Beeeelooowww Us~'],
  count: 0
};

function destroyEarth($element, countdownObject) {
  $element.textContent = countdownObject.array[countdownObject.count];
  countdownObject.count++;
  if (countdownObject.count === countdownObject.array.length) {
    clearInterval(intervalID);
  }
}

var intervalID = setInterval(destroyEarth, 1000, $h1, countdown);
