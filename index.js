var flexImg = document.querySelector(".flex-img");
var images = flexImg.querySelectorAll(".img");

var initialPosition = 0;

function scrollImages(event) {
  if (event.clientX > window.innerWidth / 5) {
    initialPosition += 15;
  } else {
    initialPosition -= 15;
  }

  if (initialPosition > 0) {
    initialPosition = 0;
  } else if (initialPosition < -(images.length * images[0].offsetWidth)) {
    initialPosition = -(images.length * images[0].offsetWidth);
  }

  flexImg.style.transform = "translateX(" + initialPosition + "px)";
}

flexImg.addEventListener("mouseover", function (e) {
  scrollImages(e);
});

flexImg.addEventListener("touchmove", function (e) {
  e.preventDefault();

  var touch = e.touches[0];

  scrollImages(touch);
});

const btns = document.querySelectorAll(".question__block-flex_btn");
btns.forEach((btn) => {
  const openBtn = btn.querySelector(".question__btn-img_open");
  const answerBlock = btn.nextElementSibling;

  openBtn.addEventListener("click", () => {
    openBtn.style.display = "none";
    btn.querySelector(".question__btn-img_close").style.display = "block";
    answerBlock.style.display = "block";
  });

  const closeBtn = btn.querySelector(".question__btn-img_close");
  closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    btn.querySelector(".question__btn-img_open").style.display = "block";
    answerBlock.style.display = "none";
  });
});
