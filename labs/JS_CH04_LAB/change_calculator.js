"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

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
      change -= 25;
      quarters++;
    }
    while (change >= 25);
    do {
      change -= 10;
      dimes++;
    }
    while (change >= 10);
    do {
      change -= 5;
      nickles++;
    }
    while (change >= 5);
    do {
      change -= 1;
      pennies++;
    }
    while (change >= 1);

    $("#quarters")
  }

};