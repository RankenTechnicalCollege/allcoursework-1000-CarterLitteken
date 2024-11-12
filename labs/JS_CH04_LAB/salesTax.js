"use strict";

const $ = selector => document.querySelector(selector);

const calculateTax = () => {
  const subtotal = parseFloat($("#subtotal").value);
  const taxRate = parseFloat($("#taxRate").value);
  const salesTax = (subtotal * taxRate) / 100;
  const total = subtotal + salesTax;

  if (subtotal <= 0 || subtotal > 10000) {
    alert("Subtotal must be a number greater then 0 and less than or equal to 10,000.");
  }
  else if (taxRate <= 0 || taxRate > 12) {
    alert("Tax Rate must be a number greater then 0 and less than or equal to 12.");
  }
  else {
    $("#salesTax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);
  }

};

document.addEventListener("DOMContentLoaded", () =>{
  $("#calculate").addEventListener("click", calculateTax);
});