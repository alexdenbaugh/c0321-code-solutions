var $h1 = document.querySelector('h1');
var text = 'Hello There';

function changeTextContent($element, textContent) {
  $element.textContent = textContent;
}

setTimeout(changeTextContent, 2 * 1000, $h1, text);
