var $hiddenContainer = document.querySelector('.hidden-container');
var $noButton = document.querySelector('#no_button');
var $modalButton = document.querySelector('#modal_button');
var modalPromptOn = false;

$modalButton.addEventListener('click', function () {
  if (!modalPromptOn) {
    $hiddenContainer.classList.remove('no-window');
    modalPromptOn = true;
  }
});

$noButton.addEventListener('click', function () {
  if (modalPromptOn) {
    $hiddenContainer.classList.add('no-window');
    modalPromptOn = false;
  }
});
