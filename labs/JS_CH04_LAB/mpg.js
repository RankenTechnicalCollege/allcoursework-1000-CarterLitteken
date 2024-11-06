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

  if (isNaN(miles) || miles <= 0) {
    
    if (miles <= 0) {
      alert(getErrorMsg("Use numeric characters"));
      focusAndSelect("#miles");
    }
    else {
      alert(getErrorMsg("No 0 or number below 0"));
      focusAndSelect("#miles");
    }
  } else if (isNaN(gallons) || gallons <= 0) {
    if (isNaN(gallons)) {
      alert(getErrorMsg("Use numeric characters"));
      focusAndSelect("#gallons");
    }
    else {
      alert(getErrorMsg("No 0 or number below 0"));
      focusAndSelect("#gallons");
    }
    
  } else {
    $("#mpg").value = (miles / gallons).toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#miles").focus();
});