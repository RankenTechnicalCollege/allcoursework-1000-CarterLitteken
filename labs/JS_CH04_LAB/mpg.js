"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl =>
  `${lbl} must a valid number greater than zero.`;

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

const processEntries = () => {
  const miles = parseFloat($("#miles").value);
  const gallons = parseFloat($("#gallons").value);

  if (isNaN(miles)) {
    alert(getErrorMsg("Use numbers not words"));
    focusAndSelect("#miles");
  } else if (miles <= 0) {
    alert(getErrorMsg("No 0 or numbers below"));
    focusAndSelect("#miles");
  } else if (isNaN(gallons)) {
    alert(getErrorMsg("Use numbers not words"));
    focusAndSelect("#gallons");
  } else if (gallons <= 0) {
    alert(getErrorMsg("No 0 or numbers below"));
    focusAndSelect("#gallons");
  } else {
    $("#mpg").value = (miles / gallons).toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#miles").focus();
});