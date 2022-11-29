const slidesContainer = document.getElementById("slides-container");
const slide99 = document.querySelector(".slide99");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide99.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide99.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
