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

  if (investment <= 0 || investment > 100000) {
    alert("Investment must be greater than 0 and less then or equal to 100,000.");
    focusAndSelect("#investment");
  }
  else if (rate <= 0 || rate > 15) {
    alert("Interest rate must be greater than 0 and less then or equal to 15.");
    focusAndSelect("#rate");
  }
  else if (years <= 0 || years > 50) {
    alert("Years must be greater than 0 and less then or equal to 50.");
    focusAndSelect("#years");
  }
  else {
    $("#futureValue").value = calculateFV(investment, rate, years).toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#investment").focus();
});









/*
let investment = 0;
do {
  investment = parseFloat(
    prompt("Enter investment amount as xxxx.xx", 10000));
}
while ( isNaN(investment) );

let rate = 0;
do {
  rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

let years = 0;
do {
  years = parseFloat(prompt("Enter number of years", 10));
}
while ( isNaN(years) );

let futureValue = investment;
for (let i = 1; i <= years; i++ ) {
  futureValue += futureValue * rate / 100;
}

document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);
*/