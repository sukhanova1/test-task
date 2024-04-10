import { colorsList, resultCSSClasses } from './js/constants.js';

const resultBox = document.querySelector('#result');
const form = document.querySelector('#form');
const resetButton = document.querySelector('#button-reset');

const getChessBoardValues = () => ({
  inputBoardSizeY: document.querySelector('#boardSizeY').value,
  inputBoardSizeX: document.querySelector('#boardSizeX').value,
  inputColors: document.querySelector('#colors').value,
});

const drawChessBoard = (chessBoardValues) => {
  const { inputBoardSizeY, inputBoardSizeX, inputColors } = chessBoardValues;

  for (let i = 0; i < inputBoardSizeY; i++) {
    const row = document.createElement('div');

    row.className = resultCSSClasses.resultRow;

    for (let j = 0; j < inputBoardSizeX; j++) {
      let colorBox = document.createElement('div');

      colorBox.className = resultCSSClasses.resultColorBox;
      colorBox.style.backgroundColor = colorsList[(i + j) % inputColors];
      row.appendChild(colorBox);
    }

    resultBox.appendChild(row);
  }
};

const resetChessBoard = () => window.location.reload();

resetButton.addEventListener('click', resetChessBoard);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const chessBoardValues = getChessBoardValues();

  drawChessBoard(chessBoardValues);
});
