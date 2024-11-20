"use strict";

const $ = selector => document.querySelector(selector);
let task_num = 0;
const todo = () => {
  const task = $("#task").value;
  const para = document.createElement("li");
  const node = document.createTextNode(task);
  const element = document.getElementById("list");
  const button = document.createElement("button",  )
  if (task != "") {
    task_num++;
    para.appendChild(node);
    element.appendChild(para);
    para.setAttribute("class", task_num);
    element.appendChild(button);
    button.setAttribute("class", task_num);
  }
};

const remove = () => {
  const elements = document.getElementsByClassName("1"); 
  elements.remove();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", todo);
  
});