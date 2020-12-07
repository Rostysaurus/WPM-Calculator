"use strict";

// Variables *//

// const percentage = document.querySelector(".percentage");

// const final = document.querySelector(".final");

// Btn *//
const calculate = document.querySelector(".btn");

// Needed rate *//
const calculations = document.querySelector(".result");
const results = "0";
calculations.textContent = results;

// Starting conditions *//

calculate.addEventListener("click", function () {
  console.log("btn clicked");
  const percentage = Number(document.querySelector(".percentage").value);
  console.log(percentage, typeof percentage);
  const final = Number(document.querySelector(".final").value);
  console.log(final, typeof final);
  const rate = final / (percentage / 100 + 1);
  calculations.textContent = Math.round((rate + Number.EPSILON) * 100) / 100;
  console.log(rate, typeof rate);
});
