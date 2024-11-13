"use strict";

const $ = selector => document.querySelector(selector);

const calcBMI = () => {
  const weight = parseFloat($("#weight").value);
  const height = parseFloat($("#height").value);

  let bmi = (weight * 703) / (height * height);

  $("#bmi").value = bmi.toFixed(2);
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calcBMI);
});