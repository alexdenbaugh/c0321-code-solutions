var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  var $dataView = event.target.getAttribute('data-view');
  for (var i = 0; i < $tabElements.length; i++) {
    if (event.target === $tabElements[i]) {
      $tabElements[i].className = 'tab active';
      $viewElements[i].className = 'view';
    } else {
      $tabElements[i].className = 'tab';
      $viewElements[i].className = 'view hidden';
    }
    if ($dataView === $viewElements[i].getAttribute('data-view')) {
      $viewElements[i].className = 'view';
    } else {
      $viewElements[i].className = 'view hidden';
    }
  }
});
