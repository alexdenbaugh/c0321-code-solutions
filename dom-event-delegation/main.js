var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('Event target:', event.target, 'Event Target Tag Name:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $closestAncestor = event.target.closest('.task-list-item');
    console.log('closest ansestor:', $closestAncestor);
    $closestAncestor.remove();
  }
});
