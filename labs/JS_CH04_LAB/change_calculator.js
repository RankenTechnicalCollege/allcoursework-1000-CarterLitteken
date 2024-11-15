"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

const makeChange = () => {
  const change = parseInt($("#change").value);

  if (change < 0 || change > 99) {
    alert("Enter number between 0 and 99");
  }
  

};