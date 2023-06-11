function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

const changeColor = () => {
  spanColorEl.textContent = bodyEl.style.backgroundColor = getRandomHexColor();
};
changeColorBtnEl.addEventListener("click", changeColor);
