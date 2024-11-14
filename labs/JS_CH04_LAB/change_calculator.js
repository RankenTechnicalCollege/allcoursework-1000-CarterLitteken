"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

