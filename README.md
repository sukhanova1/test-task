# Chessboard Generator

![image](https://github.com/sukhanova1/test-task/assets/102801240/1cacc8bf-4a59-499b-883d-5f666b6eb9e4)

## Overview

Chessboard Generator is a simple web application that allows users to generate a chessboard based on the dimensions they specify. 
Used technologies: HTML, CSS, JavaScript, Jest. Application covered with unit tests. 

## Features 

* Input fields for specifying the number of rows, columns, colors of the future chessboard.
* "Generate" button to create the chessboard based on the specified dimensions.
* "Reset" button to clear the input fields and generated chessboard.
* If the user enters incorrect data, a message about this appears and the board is not drawn.

## Running Application

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser. (To avoid errors in console due to the browser's security restrictions for the `file://` protocol and for the application to work correctly, please use `LiveServer` extention in VSCode or use a local server (e.g. ` http-server`).
3. To download all necessary dependencies run `npm install` and then to launch the test runner run `npm test`. 
