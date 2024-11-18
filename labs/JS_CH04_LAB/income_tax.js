"use strict";

const $ = selector => document.querySelector(selector);

// (Income - Over)* tax_percent + tax_num = income_tax

const calcTax = () => {
  const income = parseFloat($("#income").value);
  let owed = 0;

  if (income < 0) {
    alert("Please enter a valid number")
  }
  else if (income >= 0 && income < 9875) {
    owed = ((income - 0) * 0.10) + 0;
  }
  else if (income >= 9875 && income < 40125) {
    owed = ((income - 9875) * .12) + 987.5;
  }
  else if (income >= 40125 && income < 85525) {
    owed = ((income - 40125) * .22) + 4617.5;
  }
  else if (income >= 85525 && income < 163300) {
    owed = ((income - 85525) * .24) + 14605.5;
  }
  else if (income >= 163300 && income < 207350) {
    owed = ((income - 163300) * .32) + 33271.5;
  }
  else if (income >= 207350 && income < 518400) {
    owed = ((income - 207350) * .35) + 47357.5;
  }
  else if (income >= 518400) {
    owed = ((income - 518400) * .37) + 156235;
  }

  $("#owed").value = owed.toFixed(2);

};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calcTax);
});