"use strict";

const $ = selector => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", todo)

});

const todo = () => {
  let key = event.key;
  const message = document.getElementById("message")
  const para = document.createElement("p")
  const node = document.createTextNode("message");
  if (key == "Enter") { 
  	para.appendChild(node);
    
  }
  
};

