"use strict";

const $ = selector => document.querySelector(selector);
/*
const login = () => {
  const email = $("#email").value;
  const password = $("#password").value;

  let errorMsg = "";
  let successMsg = "";

  if (email == "" || password == "") {
    errorMsg = "You seem to have forgotten your username and password";
  }
  else if (email != "admin@example.com" || password != "password") {
    errorMsg = "That email and password doesn't seem to be right. Try again.";
  }
  else {
    successMsg = "Welcome back Admin!";
  }

  if (errorMsg != "") {
    $("#errorMsg").value = errorMsg;
  }
  else {
    $("$successMsg").value = successMsg;
  }

}
*/
document.addEventListener("DOMContentLoaded", () => {
  $("#login").addEventListener("click", () => {
    const email = $("#email").value;
    const password = $("#password").value;
  
    let errorMsg = "";
    let successMsg = "";
  
    if (email == "" || password == "") {
      errorMsg = "You seem to have forgotten your username and password";
    }
    else if (email != "admin@example.com" || password != "password") {
      errorMsg = "That email and password doesn't seem to be right. Try again.";
    }
    else {
      successMsg = "Welcome back Admin!";
    }
  
    if (errorMsg != "") {
      $("#errorMsg").value = errorMsg;
    }
    else {
      $("#successMsg").value = successMsg;
    }
  
  });
});