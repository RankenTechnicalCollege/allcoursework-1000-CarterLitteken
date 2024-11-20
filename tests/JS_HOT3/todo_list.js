"use strict";

const $ = selector => document.querySelector(selector);
let task_num = 5;
const todo = () => {
  const task = $("#task").value;
  const para = document.createElement("li");
  const node = document.createTextNode(task);
  const element = document.getElementById("list");
  const button = document.createElement("button",)
  if (task != "") {
    task_num++;
    para.appendChild(node);
    element.appendChild(para);
    para.setAttribute("id", "task" + task_num);
    element.appendChild(button);
    button.setAttribute("id", "btn" + task_num);
    button.setAttribute("class", "remove m-0 align-self-center text-danger border border-0 bg-white")
  }
  document.getElementsByClassName("remove m-0 align-self-center text-danger border border-0 bg-white").innerHTML = "x";
};

const remove = () => {
  const elements = document.getElementsByClassName("1");
  elements.remove();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", todo);
  
});