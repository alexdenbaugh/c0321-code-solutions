var $letters = document.querySelectorAll('span');
var $spanLetter = [];
for (var i = 0; i < $letters.length; i++) {
  $spanLetter.push($letters[i].textContent);
}
var currentLetter = 0;

document.addEventListener('keydown', function (event) {
  if (currentLetter >= $spanLetter.length) {
    return;
  }
  if (event.key === $spanLetter[currentLetter] || (event.code === 'Space' && (currentLetter === 6 || currentLetter === 14 || currentLetter === 19 || currentLetter === 25))) {
    $letters[currentLetter].className = 'letters green';
    $letters[currentLetter + 1].className = 'letters underline';
    currentLetter++;
  } else {
    $letters[currentLetter].className = 'letters red underline-red';
  }
  if (event.key === $spanLetter[$spanLetter.length - 1]) {
    $letters[currentLetter + 1].classList.remove('underline');
  }
});
