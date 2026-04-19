"use strict";

// variables
const input = document.querySelector("input");
const button = document.querySelector("button");
const tip = document.querySelector(".game-tip");
const chancetext = document.querySelector(".game-chance");

// function Check the Number
function checkNumber() {
  let chance = 10;
  const randomNumber = Math.floor(Math.random() * 100);

  button.addEventListener("click", () => {
    if (randomNumber == input.value) {
      tip.textContent = "Well done you win the game";
    } else if (randomNumber > input.value) {
      tip.textContent = "your Guess is lower";
      chance--;
      chancetext.textContent = chance;
    } else if (randomNumber < input.value) {
      tip.textContent = "your Guess is higher";
      chance--;
      chancetext.textContent = chance;
    }
    console.log(randomNumber);
  });
  chancetext.textContent = chance;
}
checkNumber();
