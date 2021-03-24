var $contactForm = document.querySelector('form');
var $formControls = {};

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  $formControls.name = $contactForm.elements.name.value;
  $formControls.email = $contactForm.elements.email.value;
  $formControls.message = $contactForm.elements.message.value;
  console.log('Form Controls Object:', $formControls);
  $contactForm.reset();
});
