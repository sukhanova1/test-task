const resultBox = document.querySelector('#result');
const form = document.querySelector('#form');
const resetButton = document.querySelector('#button-reset');

const colorsList = ['red', 'greenyellow', 'yellow', 'black', 'royalblue', 'violet', 'purple', 'pink', 'lightsalmon'];

resetButton.addEventListener('click', () => window.location.reload());

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputBoardSizeX = document.querySelector('#boardSizeX');
  const inputBoardSizeY = document.querySelector('#boardSizeY');
  const inputColors = document.querySelector('#colors');

  for (let i = 0; i < inputBoardSizeY.value; i++) {
    const row = document.createElement('div');

    row.className = 'result__row';

    for(let j = 0; j < inputBoardSizeX.value; j++) {
      let colorBox = document.createElement('div');

      colorBox.className = 'result__color-box';
      colorBox.style.backgroundColor = colorsList[(i + j) % inputColors.value];
      row.appendChild(colorBox);
    }

    resultBox.appendChild(row);
  }

  inputBoardSizeX.value = null;
  inputBoardSizeY.value = null;
  inputColors.value = null;
})
