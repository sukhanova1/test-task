import {
  bodyContent,
  mockedInputValues,
  mockedInvalidInputValues,
} from './mocks';

describe('ChessBoard', () => {
  beforeAll(() => {
    document.body.innerHTML = bodyContent;
  });

  test('check whether the getChessBoardValues function returns the values of the inputs', () => {
    const { getChessBoardValues } = require('../index');

    document.querySelector('#boardSizeY').value = 2;
    document.querySelector('#boardSizeX').value = 3;
    document.querySelector('#colors').value = 2;

    expect(getChessBoardValues()).toEqual(mockedInputValues);
  });

  test('check whether the validateFormFields function returns true in case of valid input values', () => {
    const { validateFormFields } = require('../index');
    const errorMessageElement = document.querySelector('#error-message');

    validateFormFields(mockedInputValues);

    expect(errorMessageElement.innerHTML).toEqual('');
    expect(validateFormFields(mockedInputValues)).toEqual(true);
  });

  test('check whether the validateFormFields function returns error in case of invalid input values', () => {
    const { validateFormFields } = require('../index');
    const errorMessageElement = document.querySelector('#error-message');

    validateFormFields(mockedInvalidInputValues);

    expect(errorMessageElement.innerHTML).toEqual('Please fill in all fields');
    expect(validateFormFields(mockedInvalidInputValues)).toEqual(false);
  });

  test('check whether the drawChessBoard function draws chessboard', () => {
    const { drawChessBoard } = require('../index');
    const result = document.querySelector('#result');

    drawChessBoard(mockedInputValues);

    expect(result.innerHTML.toString()).toMatchSnapshot();
  });

  test.skip('check whether the submitForm function draw chessboard in case of valid input values', () => {
    const { submitForm } = require('../index');
    const getChessBoardValues = jest.fn(() => {});
    const validateFormFields = jest.fn(() => true);
    const drawChessBoard = jest.fn();
    const event = {
      preventDefault: jest.fn(),
    };

    submitForm(event);
    validateFormFields(mockedInputValues);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(validateFormFields).toEqual(true);
    expect(drawChessBoard).toHaveBeenCalled();
  });
});
