var $letters = document.querySelectorAll('span');
var currentLetter = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $letters[currentLetter].textContent) {
    $letters[currentLetter].className = 'letters green';
    $letters[currentLetter + 1].className = 'letters underline';
    currentLetter++;
  } else {
    $letters[currentLetter].className = 'letters red underline-red';
  }
  if (event.key === $letters[$letters.length - 1]) {
    $letters[currentLetter + 1].classList.remove('underline');
  }
});
