"use strict";

const $ = selector => document.querySelector(selector);

const todo = () => {
  const task = $("#task").value;
  const para = document.createElement("li")
  const node = document.createTextNode(task);
  para.appendChild(node)
};

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", todo)
});