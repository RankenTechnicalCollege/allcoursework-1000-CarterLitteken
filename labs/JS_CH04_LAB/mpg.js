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
    
    if (isNaN(miles)) {
      alert(getErrorMsg("Use numeric characters\nMiles driven"));
      focusAndSelect("#miles");
    }
    else {
      alert(getErrorMsg("Must not be equal to 0 or a number below 0\nMiles driven"));
      focusAndSelect("#miles");
    }
  } else if (isNaN(gallons) || gallons <= 0) {
    if (isNaN(gallons)) {
      alert(getErrorMsg("Use numeric characters\nGallons of gas used"));
      focusAndSelect("#gallons");
    }
    else {
      alert(getErrorMsg("Must not be equal to 0 or a number below 0\nGallons of gas used"));
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