"use strict";

const $ = selector => document.querySelector(selector);

const todo = () => {
  const task = $("#task").value;
  const para = document.createElement("li")
  const node = document.createTextNode(task);
  para.appendChild(node)

  const element = document.getElementById("list");
  element.appendChild(para)
};

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", todo)
});