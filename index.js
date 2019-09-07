
//Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage ="dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage ="dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

// Result
if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h2").innerHTML = "Play 2 Wins! 🚩";
} else {
document.querySelector("h2").innerHTML = "Draw!";
}
