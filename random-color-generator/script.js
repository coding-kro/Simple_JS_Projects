const containerEl = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
  const colorcontainerEl = document.createElement('div');
  colorcontainerEl.classList.add('color-container');
  containerEl.appendChild(colorcontainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container');

generateColors();

function generateColors() {
  colorContainerEls.forEach((colorcontainerEl) => {
    const newColorCode = randomColor();
    colorcontainerEl.style.backgroundColor = '#' + newColorCode;
    colorcontainerEl.innerText = '#' + newColorCode;
  });
}

function randomColor() {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let colorCode = '';
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode = colorCode + chars[randomNum];
    // colorCode = colorCode + chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
