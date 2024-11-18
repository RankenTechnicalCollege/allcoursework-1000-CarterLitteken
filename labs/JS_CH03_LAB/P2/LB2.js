"use strict";

const $ = selector => document.querySelector(selector);

const calculate = () => {
  const price = parseFloat($("#price").value);
  let fee = 0;
  let total = 0;

  if (price <= 25.00) {
    fee = 1.50;
  }
  else {
    fee = (price * 10) / 100;
  }

  total = price + fee;
  alert("Total cost with shipping and handling: $" + total.toFixed(2));

};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calculate);
});