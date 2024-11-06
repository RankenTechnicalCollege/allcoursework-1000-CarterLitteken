"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investment, rate, years) => {
  let futureValue = investment;
  for (let i = 1; i <= years; i++) {
    futureValue += futureValue * rate / 100;
  }
  return futureValue;
};

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

const processEntries = () => {
  const investment = parseFloat($("#investment").value);
  const rate = parseFloat($("#rate").value);
  const years = parseFloat($("#years").value);
  var error = null;

  if (isNaN(investment) || investment <= 0 || investment > 100000) {
    error = "Investment must be greater than 0 and less then or equal to 100,000.";
    focusAndSelect("#investment");
  }
  else if (isNaN(rate) || rate <= 0 || rate > 15) {
    error = "Interest rate must be greater than 0 and less then or equal to 15.";
    focusAndSelect("#rate");
  }
  else if (isNaN(years) || years <= 0 || years > 50) {
    error = "Years must be greater than 0 and less then or equal to 50.";
    focusAndSelect("#years");
  }
  if (error != null) {
    alert(error.valueOf());
  }
  else {
    $("#futureValue").value = calculateFV(investment, rate, years).toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries /*function () {
    const investment = parseFloat($("#investment").value);
    const rate = parseFloat($("#rate").value);
    const years = parseFloat($("#years").value);
    var error = null;
  
    if (investment <= 0 || investment > 100000) {
      error = "Investment must be a number greater than 0 and less then or equal to 100,000.";
      focusAndSelect("#investment");
    }
    else if (rate <= 0 || rate > 15) {
      error = "Interest rate must be a number greater than 0 and less then or equal to 15.";
      focusAndSelect("#rate");
    }
    else if (years <= 0 || years > 50) {
      error = "Years must be a number greater than 0 and less then or equal to 50.";
      focusAndSelect("#years");
    }

    if (error != null) {
      alert(error.valueOf());
    }
    else {
      $("#futureValue").value = calculateFV(investment, rate, years).toFixed(2);
    }
  }()*/);
  $("#investment").focus();
});