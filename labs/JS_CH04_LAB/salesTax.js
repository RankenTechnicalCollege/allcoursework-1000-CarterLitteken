"use strict";

const $ = selector => document.querySelector(selector);

const calculateTax = () => {
  const subtotal = parseFloat($("#subtotal").value);
  const taxRate = parseFloat($("#taxRate").value);
  const salesTax = (subtotal * taxRate) / 100;
  const total = subtotal + salesTax;

  $("#salesTax").value = salesTax.toFixed(2);
  $("#total").value = total.toFixed(2);

};