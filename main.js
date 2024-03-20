const colorCode = document.querySelector("#color-code");
const btn = document.querySelector("#change-color-btn");
const background = document.querySelector("#container");
const color = btn.addEventListener("click", randomHexColorCode);

function randomHexColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  const colorHex = "#" + n.slice(0, 6);
  colorCode.textContent = colorHex;
  background.style.backgroundColor = colorHex;
  colorCode.style.color = colorHex;
}
