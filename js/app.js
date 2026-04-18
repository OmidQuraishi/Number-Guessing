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
      console.log("hello");
    } else if (randomNumber > input.value) {
      chance--;
      chancetext.textContent = chance;
    } else if (randomNumber < input.value) {
      chance--;
      chancetext.textContent = chance;
    }
  });
  chancetext.textContent = chance;
}
checkNumber();
