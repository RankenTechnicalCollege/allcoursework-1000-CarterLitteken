"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

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
  $("#subtotal").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#subtotal").focus();
  $("#calculate").addEventListener("click", calculateTax);
});

const clearEntries = () => {
  $("#subtotal").value = null;
  $("#taxRate").value = null;
  $("#salesTax").value = null;
  $("#total").value = null;
  focusAndSelect("#subtotal");
};

document.addEventListener("DOMContentLoaded", () => {
  $("#clear").addEventListener("click", clearEntries);
});

/*
Add event handlers for the /onfocus\ events of the Subtotal and Tax Rate text boxes.
Each handler should clear the data from the text box.
*/
const clearSubtotal = () => {
  $("#subtotal").value = null;
};

const clearTaxRate = () => {
  $("#taxRate").value = null;
};

$("#subtotal").addEventListener("focus", clearSubtotal);
/*
document.addEventListener("DOMContentLoaded", () => {
  $("#subtotal").addEventListener("focus", clearSubtotal);
});
*/