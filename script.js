"use strict";

let makeColorButton = document.querySelector(".make-colors");
let randomContainer = document.querySelector(".random-colors");
let savedContainer = document.querySelector(".saved-colors");
let allColors = document.querySelector(".colors");
let displayColor = document.querySelector(".display-color");
let displayTextRed = document.querySelector(".display-text-red");
let displayTextBlue = document.querySelector(".display-text-blue");
let displayTextGreen = document.querySelector(".display-text-green");

const makeColors = (e) => {
  let newColor = document.createElement("div");
  newColor.classList.add("color");
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  let randomRGB = `rgb(${randomR}, ${randomG}, ${randomB})`;
  newColor.style.backgroundColor = randomRGB;
  e.target.style.backgroundColor = randomRGB;
  newColor.setAttribute("data-red", randomR);
  newColor.setAttribute("data-green", randomG);
  newColor.setAttribute("data-blue", randomB);
  randomContainer.append(newColor);
  if (randomR > 150 && randomG > 170) {
    e.target.style.color = "black";
  } else {
    e.target.style.color = "white";
  }
};

const saveColors = (e) => {
  if (e.target.classList.contains("color")) {
    e.target.classList.add("saved");
    savedContainer.append(e.target);
  }
};

const unsave = (e) => {
  if (e.target.classList.contains("color")) {
    e.target.classList.remove("saved");
    randomContainer.append(e.target);
  }
};

const displayStats = (e) => {
  if (e.target.classList.contains("color")) {
    displayColor.style.backgroundColor = e.target.style.backgroundColor;
    console.dir(e.target);
    let red = e.target.attributes[1].value;
    let green = e.target.attributes[2].value;
    let blue = e.target.attributes[3].value;
    displayTextRed.innerText = `red: ${red}`;
    displayTextGreen.innerText = `green: ${green}`;
    displayTextBlue.innerText = `blue: ${blue}`;
    // displayText.innerText = e.target.style.backgroundColor;
  }
  //   else {
  //     displayText.innerText = "";
  //   }
};

makeColorButton.addEventListener("click", makeColors);
randomContainer.addEventListener("click", saveColors);
savedContainer.addEventListener("click", unsave);
allColors.addEventListener("mouseover", displayStats);
