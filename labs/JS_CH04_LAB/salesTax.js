"use strict";

const $ = selector => document.querySelector(selector);

const calculateTax = () => {
  const subtotal = parseFloat($("#subtotal").value);
  const taxRate = parseFloat($("#taxRate").value);
  const salesTax = (subtotal * taxRate) / 100;
  const total = subtotal + salesTax;

  if (subtotal <= 0 || subtotal > 10000) {
    alert("Subtotal must be a positive number ")
  }

  $("#salesTax").value = salesTax.toFixed(2);
  $("#total").value = total.toFixed(2);

};

document.addEventListener("DOMContentLoaded", () =>{
  $("#calculate").addEventListener("click", calculateTax);
});