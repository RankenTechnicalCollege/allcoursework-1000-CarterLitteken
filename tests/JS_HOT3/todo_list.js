"use strict";

const $ = selector => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", todo)

});

const todo = () => {
  const task = $("#task").value;
  const para = document.createElement("p")
  const node = document.createTextNode(task);
  para.appendChild(node);
  
};

