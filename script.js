"use strict";

console.log("Bismillahi");
// container
const getContainer = document.querySelector("#container");
const getUserComp = document.querySelector(".user-comp-section");
const buttonContainer = document.querySelector(".btn--section");
const renderScreen = document.querySelector(".render");
// computer DOM
const showComp = document.querySelector(".show-comp");
const countText = document.querySelector(".count-text");

// player DOM
const showUser = document.querySelector(".show-user");
const userInput = document.querySelector(".user--input");

// buttons
const submitBtn = document.querySelector(".submit");
const clearBtn = document.querySelector(".clear");
const resetBtn = document.querySelector(".reset");
const restartBtn = document.querySelector(".restart");
const tryBtn = document.querySelector(".try");

let nCount = 0;
let randomNumber;

const text = "You can see your count here!";
countText.textContent = text;

const greaterThanZero = () => Number(userInput.value) > 0;
const lengthLessThanTwo = () => userInput.value.length <= 2;
const removeBtn = () => buttonContainer.classList.add("hidden");
const hidden = () => {
  getUserComp.classList.add("hidden");
  countText.classList.add("hidden");
};

const checkResult = () => {
  if (Number(userInput.value) === randomNumber) {
    renderScreen.textContent = "Congrats 🎉🎉";
    restartBtn.classList.remove("hidden");
    hidden();
    removeBtn();
  }
};

const trialOver = () => {
  renderScreen.textContent = "Wrong Guess. Try Again!";
  tryBtn.classList.remove("hidden");
  hidden();
  removeBtn();
};

const gatherVal = () => {
  showUser.textContent = userInput.value;
  showComp.textContent = randomNumber;
};

const clearGuess = () => {
  countText.textContent = text;
  userInput.value = "";
  showComp.textContent = "";
  showUser.textContent = "";
};

const resetGuess = () => {
  nCount = 0;
  clearGuess();
};

function startGuessing(e) {
  if (greaterThanZero() && lengthLessThanTwo()) {
    e.preventDefault();
    nCount += 1;

    switch (nCount) {
      case 1:
        randomNumber = Math.floor(Math.random() * 12) + 1;
        countText.textContent =
          "Oops, two more trials to go!! TRIAL: " + nCount;
        gatherVal();
        checkResult();

        break;
      case 2:
        randomNumber = Math.floor(Math.random() * 12) + 1;
        countText.textContent = "Oops, one more trial to go!! TRIAL: " + nCount;
        gatherVal();
        checkResult();

        break;
      case 3:
        randomNumber = Math.floor(Math.random() * 12) + 1;
        countText.textContent = "Oops, think hard!! TRIAL: " + nCount;
        gatherVal();
        checkResult();

        break;
      default:
        trialOver();
    }
  }
}

const newGuess = () => {
  renderScreen.classList.add("hidden");
  tryBtn.classList.add("hidden");
  restartBtn.classList.add("hidden");
  countText.classList.remove("hidden");
  getUserComp.classList.remove("hidden");
  buttonContainer.classList.remove("hidden");
  resetGuess();
};

// add eventListener to work on button

submitBtn.addEventListener("click", startGuessing);

clearBtn.addEventListener("click", clearGuess);

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  resetGuess();
});

restartBtn.addEventListener("click", newGuess);

tryBtn.addEventListener("click", newGuess);
