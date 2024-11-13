"use strict";

const $ = selector => document.querySelector(selector);

const calcBMI = () => {
  const weight = parseFloat($("#weight").value);
  const height = parseFloat($("#height").value);

  let bmi = (weight * 703) / (height * height);

  $("#result").value = bmi.toFixed(1);
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calcBMI);
});