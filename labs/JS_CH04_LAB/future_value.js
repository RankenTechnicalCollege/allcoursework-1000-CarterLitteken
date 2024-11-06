"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investment, rate, years) => {
  let futureValue = investment;
  for (let i = 1; i <= years; i++) {
    futureValue += futureValue * rate / 100;
  }
  return futureValue;
};

const processEntries = () => {
  const investment = parseFloat($("#investment").value);
  const rate = parseFloat($("#rate").value);
  const years = parseFloat($("#years").value);

  $("#futureValue").value = calculateFV(investment, rate, years).toFixed(2);
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