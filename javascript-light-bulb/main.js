var $lightBulb = document.querySelector('.light-bulb');
var $background = document.querySelector('.container');
var lightOn = false;
$lightBulb.addEventListener('click', function () {
  if (!lightOn) {
    $lightBulb.className = 'light-bulb light-on';
    $background.className = 'container light-on-background';
    lightOn = true;
  } else {
    $lightBulb.className = 'light-bulb light-off';
    $background.className = 'container light-off-background';
    lightOn = false;
  }
});
