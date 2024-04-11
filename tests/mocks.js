export const mockedInputValues = {
  inputBoardSizeY: '2',
  inputBoardSizeX: '3',
  inputColors: '2',
};

export const mockedInvalidInputValues = {
  inputBoardSizeY: '',
  inputBoardSizeX: '',
  inputColors: '',
};

export const bodyContent = `
  <form id="form">
    <input type="number" id="boardSizeX" max="50" min="1" />
    <input type="number" id="boardSizeY" class="form__input" max="50" min="1" />
    <input type="number" id="colors" class="form__input" max="9" min="2" />
    <p id="error-message"></p>
    <button type="submit" id="button-draw">Draw</button>
    <button type="button" id="button-reset">Reset</button>
  </form>
  <div id="result"></div>
`;

export const resultSnapshot = `
  <div class="result__row"><div class="result__color-box" style="background-color: red;"></div><div class="result__color-box" style="background-color: greenyellow;"></div></div><div class="result__row"><div class="result__color-box" style="background-color: red;"></div><div class="result__color-box" style="background-color: greenyellow;"></div></div><div class="result__row"><div class="result__color-box" style="background-color: red;"></div><div class="result__color-box" style="background-color: greenyellow;"></div></div>
`;
