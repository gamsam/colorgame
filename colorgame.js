var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.getElementById("colordisp");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")

// replaces bothe easy and hard button
for( var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        // alternative for the if statement
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares)
    // pick new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisp.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change color of squares
    for (var i = 0; i < squares.length; i++) {
         if(colors[i]) {
             squares[i].style.display = "block";
             squares[i].style.background = colors[i];
         }
         else {
             squares[i].style.display = "none";
         }
        // add initial colors to squares
        squares[i].style.background = colors[i];
    }
    // reset h1 background
    h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected")
//     hardBtn.classList.remove("selected")
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisp.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.background = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     hardBtn.classList.add("selected")
//     easyBtn.classList.remove("selected")
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisp.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function() {
    reset();
});

colorDisp.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.background = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked sqaure
        var clickedColor = this.style.background;
        // compare color to picked color
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColor(clickedColor);
            // changing color of h1 background to match correct color
            h1.style.background = clickedColor;
        }
        else {
            this.style.background = "#232323"
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColor(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
    // change all colors to match correct color
    squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an arr
    var arr =[]
    // repeat num times
    for(var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor())
    }
    // return array
    return arr;
}

function randomColor() {
    // pick red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    // "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}