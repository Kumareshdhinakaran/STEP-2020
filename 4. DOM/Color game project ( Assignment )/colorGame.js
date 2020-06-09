var numSquares;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#textContent");
var h1Element = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var buttons = document.querySelectorAll(".buttons");

init();

function init() {
  gameModesSetup();
  gamePageSetup();
  resetButton.addEventListener("click", function () {
    reset();
  });
}

//Easy and hard mode's squares setup
function gameModesSetup() {
  for (var i = 0; i < buttons.length; i++) {
    numSquares = 6; //default mode
    buttons[i].addEventListener("click", function () {
      buttons[0].classList.remove("selected");
      buttons[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
    reset();
  }
}

//Random Colors are given to sqaures
function reset() {
  colors = generateRandomColor(numSquares);
  pickedColor = randomColor();
  colorDisplay.textContent = pickedColor;
  h1Element.style.background = "steelblue";
  message.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New Colors";
}

//Events are added to squares and values updated
function gamePageSetup() {
  for (var i = 0; i < squares.length; i++) {
    //To set the random colors for square
    squares[i].style.background = colors[i];

    //To get the color of the selected box
    squares[i].addEventListener("click", function () {
      var selectedColor = this.style.background;

      //Checking selected color and desired color
      if (selectedColor === pickedColor) {
        message.textContent = "Success!!";
        //if it matches, changes all colors to desired color
        changeColor(pickedColor);
        //Change background color of heading element too
        h1Element.style.background = selectedColor;
        //change the text displayed
        resetButton.textContent = "Play again";
      } else {
        //fade out
        this.style.background = "#232323";
        message.textContent = "Try again!!";
      }
    });
  }
}

//While getting correct changing the color of all squares to desired color
function changeColor(color) {
  //loop through squares to change the color
  for (var i = 0; i < squares.length; i++) {
    //changing color of the all sqaures to desired color
    squares[i].style.background = color;
  }
}

//generate random color array
function generateRandomColor(count) {
  var arr = [];
  for (var i = 0; i < count; i++) {
    arr.push(generateColor());
  }
  return arr;
}

// Get random element for desired color
function randomColor() {
  //Generating random index number to get random color as a desired color
  var number = Math.floor(Math.random() * colors.length);
  return colors[number];
}

//Generate RGB color value using Math.random function
function generateColor() {
  //To get random number between 0 to 255 since background color must be given like rgb(234, 89, 98)
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
