var $image = document.querySelector('img');
var $iconDots = document.querySelectorAll('i.fa-circle')
var imageURLs = {
  currentImageIndex: 0,
  images: [
      {
        src: 'images/001.png',
        alt: 'Bulbasaur'
      },
      {
        src: 'images/004.png',
        alt: 'Charmander'
      },
      {
        src: 'images/007.png',
        alt: 'Squirtle'
      },
      {
        src: 'images/025.png',
        alt: 'Pikachu'
      },
      {
        src: 'images/039.png',
        alt: 'Jigglypuff'
      }
    ]
};

function changeView(dataView) {
  if (!Number(dataView)) {
    if (dataView === 'angle-right') {
      if (imageURLs.currentImageIndex === imageURLs.images.length - 1) {
        $image.setAttribute('src', imageURLs.images[0].src);
        $image.setAttribute('alt', imageURLs.images[0].alt);
        imageURLs.currentImageIndex = 0;
      } else {
        $image.setAttribute('src', imageURLs.images[imageURLs.currentImageIndex + 1].src);
        $image.setAttribute('alt', imageURLs.images[imageURLs.currentImageIndex + 1].alt);
        imageURLs.currentImageIndex++;
      }
    } else {
      if (imageURLs.currentImageIndex === 0) {
        $image.setAttribute('src', imageURLs.images[imageURLs.images.length - 1].src);
        $image.setAttribute('alt', imageURLs.images[imageURLs.images.length - 1].alt);
        imageURLs.currentImageIndex = imageURLs.images.length - 1;
      } else {
        $image.setAttribute('src', imageURLs.images[imageURLs.currentImageIndex - 1].src);
        $image.setAttribute('alt', imageURLs.images[imageURLs.currentImageIndex - 1].alt);
        imageURLs.currentImageIndex--;
      }
    }
  } else {
    dataView = Number(dataView);
    $image.setAttribute('src', imageURLs.images[dataView - 1].src);
    $image.setAttribute('alt', imageURLs.images[dataView - 1].alt);
    imageURLs.currentImageIndex = dataView - 1;
  }
}

function changeDot(dataView) {
  if (!Number(dataView)) {
    dataView = String(imageURLs.currentImageIndex + 1);
  }
  for (var i = 0; i < $iconDots.length; i++) {
    if ($iconDots[i].getAttribute('data-view') === dataView) {
      $iconDots[i].className = 'fas fa-circle';
    } else {
      $iconDots[i].className = 'far fa-circle';
    }
  }
}

document.addEventListener('click', function () {
  if (!event.target.getAttribute('data-view')) {
    return;
  } else {
    clearInterval(intervalID)
    changeView(event.target.getAttribute('data-view'));
    changeDot(event.target.getAttribute('data-view'));
    intervalID = setInterval(startCarousel, 3000);
  }
})

function startCarousel() {
  if (imageURLs.currentImageIndex === imageURLs.images.length - 1) {
    changeView('1')
    changeDot('1');
  } else {
    changeView('angle-right')
    changeDot('angle-right')
  }
}


var intervalID = setInterval(startCarousel, 3000);
