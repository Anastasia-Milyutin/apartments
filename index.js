var flexImg = document.querySelector('.flex-img');
var images = flexImg.querySelectorAll('.img');

var initialPosition = 0;

function scrollImages(event) {
  if (event.clientX > (window.innerWidth / 5)) {
    initialPosition += 15;
  } else {
    initialPosition -= 15;
  }
  
  if (initialPosition > 0) {
    initialPosition = 0;
  } else if (initialPosition < -(images.length * images[0].offsetWidth)) {
    initialPosition = -(images.length * images[0].offsetWidth);
  }
  
  flexImg.style.transform = 'translateX(' + initialPosition + 'px)';
}

flexImg.addEventListener('mouseover', function(e) {
  scrollImages(e);
});

flexImg.addEventListener('touchmove', function(e) {
  e.preventDefault();
  
  var touch = e.touches[0];
  
  scrollImages(touch);
});