/* Carousel component */
const currentImg = document.querySelectorAll(".carousel-img");
const carouselBtn = document.querySelectorAll(".round");

carouselBtn.forEach((x, i) => {
  carouselBtn[i].addEventListener("click", function () {
    carouselBtn.forEach((x, i) => {
      currentImg[i].classList.add("not-displayed");
    });
    currentImg[i].classList.remove("not-displayed");
  });
});

/* Accordion component */
const item = document.querySelectorAll(".item");
const showText = document.querySelectorAll(".text-accordion");
const iconDown = document.querySelectorAll(".down");
const iconUp = document.querySelectorAll(".up");
const readMore = document.querySelectorAll(".read-more");

function accordion(place) {
  if (showText[place].classList.contains("hidden")) {
    showText[place].classList.remove("hidden");
    iconDown[place].classList.add("hidden");
    iconUp[place].classList.remove("hidden");
    readMore[place].classList.remove("hidden");
  } else {
    showText[place].classList.add("hidden");
    iconDown[place].classList.remove("hidden");
    iconUp[place].classList.add("hidden");
    readMore[place].classList.add("hidden");
  }
}
for (let o = 0; o < item.length; o++) {
  item[o].addEventListener("click", function () {
    accordion(o);
  });
}
