var clickNumber = 0;
var hotButton = document.querySelector('.hot-button');
var clickCounter = document.querySelector('.click-count');

hotButton.addEventListener('click', function () {
  clickNumber++;
  clickCounter.textContent = 'Clicks: ' + clickNumber;
  if (clickNumber < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clickNumber < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clickNumber < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clickNumber < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clickNumber < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
});
