"use strict";

const $ = selector => document.querySelector(selector);
let task_num = 6;
const todo = () => {
  const task = $("#task").value;
  const para = document.createElement("li");
  const node = document.createTextNode(task);
  const list = $("#list");
  const button = document.createElement("button");
  if (task != "") {
    para.appendChild(node);
    list.appendChild(para);
    para.setAttribute("id", "task" + task_num);
    $("#task" + task_num).appendChild(button);
    button.setAttribute("id", "btn" + task_num);
    button.setAttribute("class", "remove mx-1 align-self-center text-danger border border-0 bg-white")
    $("#btn" + task_num).innerHTML = "x";
    task_num++;
  }
  
};


document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", todo);
  for (i = 0; i < task_num, i++;) {
    
  }
  
});