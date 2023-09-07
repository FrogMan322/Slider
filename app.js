const images = document.querySelectorAll(".imgEl");
const slide = document.querySelector(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let value = 0;
const duzina = images.length - 1;
function sliderMove(param) {
  if (param === "next") {
    if (value === 100 * duzina) {
      slide.style["transition"] = "none";
      value = 0;
    } else {
      slide.style["transition"] = "all ease-in 300ms";
      value += 100;
    }
  } else if (param === "prev") {
    if (value >= 0) {
      slide.style["transition"] = "all ease-in 300ms";
      value -= 100;
    } else if (value < 0) {
      slide.style["transition"] = "none";
      value = 100 * duzina;
    }
  }
  slide.style.transform = `translateX(-${value}%)`;
}

nextBtn.addEventListener("click", sliderMove.bind(null, "next"));

prevBtn.addEventListener("click", sliderMove.bind(null, "prev"));
