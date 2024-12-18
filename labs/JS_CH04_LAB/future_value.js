"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

document.addEventListener("DOMContentLoaded", () => {
  
  $("#calculate").addEventListener("click", () => {
    const investment = parseFloat($("#investment").value);
    const rate = parseFloat($("#rate").value);
    const years = parseFloat($("#years").value);
    var error = null;
    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
      futureValue += futureValue * rate / 100;
    }

    if (isNaN(investment) || investment <= 0 || investment > 100000) {
      error = "Investment must be a number greater than 0 and less then or equal to 100,000.";
      focusAndSelect("#investment");
    }
    else if (isNaN(rate) || rate <= 0 || rate > 15) {
      error = "Interest rate must be a number greater than 0 and less then or equal to 15.";
      focusAndSelect("#rate");
    }
    else if (isNaN(years) || years <= 0 || years > 50) {
      error = "Years must be a number greater than 0 and less then or equal to 50.";
      focusAndSelect("#years");
    }

    if (error != null) {
      alert(error.valueOf());
    }
    else {
      $("#futureValue").value = futureValue.toFixed(2);
    }
    
  });

  $("#investment").focus();

});