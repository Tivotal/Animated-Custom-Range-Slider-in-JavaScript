/* Created by Tivotal */

const slideValue = document.querySelector("span");
const input = document.querySelector("input");

input.oninput = () => {
  let value = input.value;
  slideValue.textContent = value;
  slideValue.style.left = value / 3 + 2 + "%";
  slideValue.classList.add("show");
};

input.onblur = () => {
  slideValue.classList.remove("show");
};
