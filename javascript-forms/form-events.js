function handleFocus(event) {
  console.log('focus event fired');
  console.log('Event Target Name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('Event Target Name:', event.target.name);
}

function handleInput(event) {
  console.log('Event Target Name:', event.target.name);
  console.log('Event Target Value:', event.target.value);
}

var $inputName = document.querySelector('#user-name');
var $inputEmail = document.querySelector('#user-email');
var $inputMessage = document.querySelector('#user-message');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$inputMessage.addEventListener('focus', handleFocus);
$inputMessage.addEventListener('blur', handleBlur);
$inputMessage.addEventListener('input', handleInput);
