var $ul = document.querySelector('#user-list');
var xhrNew = new XMLHttpRequest();
xhrNew.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhrNew.responseType = 'json';
xhrNew.addEventListener('load', function () {
  console.log('xhr status:', xhrNew.status);
  console.log('xhr response:', xhrNew.response);
  for (var i = 0; i < xhrNew.response.length; i++) {
    createLi(xhrNew.response[i].name);
  }
});

xhrNew.send();

function createLi(textcontent) {
  var $li = document.createElement('li');
  $li.textContent = textcontent;
  $ul.appendChild($li);
}
