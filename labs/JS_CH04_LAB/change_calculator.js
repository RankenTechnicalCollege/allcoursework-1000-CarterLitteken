"use strict";

const $ = selector => document.querySelector(selector);

const makeChange = () => {
  let change = parseInt($("#change").value);
  let quarters = 0;
  let dimes = 0;
  let nickles = 0;
  let pennies = 0;

  if (change < 0 || change > 99) {
    alert("Enter number between 0 and 99");
  }
  else {
    do {
      if (change >= 25) {
        change -= 25;
        quarters++;
      }
      else if (change < 25 && change >= 10) {
        change -= 10;
        dimes++;
      }
      else if (change < 10 && change >= 5) {
        change -= 5;
        nickles++;
      }
      else if (change < 5 && change >= 1) {
        change -= 1;
        pennies++;
      }
    }
    while (change > 0);

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickles").value = nickles;
    $("#pennies").value = pennies;
  }

};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", makeChange);
});