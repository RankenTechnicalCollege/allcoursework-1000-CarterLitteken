"use strict";

const $ = selector => document.querySelector(selector);

const calculateAvg = () => {
  const number1 = parseFloat($("#number1").value);
  const number2 = parseFloat($("#number2").value);
  const number3 = parseFloat($("#number3").value);
  const number4 = parseFloat($("#number4").value);
  const number5 = parseFloat($("#number5").value);

  const avg = (number1 + number2 + number3 + number4 + number5) / 5;

  $("#result").innerHTML = avg.toFixed(2);
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calculateAvg);
});