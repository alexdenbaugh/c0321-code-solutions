var $contactForm = document.querySelector('form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var $formControls = {};
  $formControls.name = $contactForm.elements.name.value;
  $formControls.email = $contactForm.elements.email.value;
  $formControls.message = $contactForm.elements.message.value;
  console.log('Form Controls Object:', $formControls);
  $contactForm.reset();
});
