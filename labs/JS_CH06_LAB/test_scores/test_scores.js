"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    const scores_arr = [,]
    let name = $("#name");
    let score = $("#score");

    $("#add_to_arr").addEventListener("click", () => {
        if (name == "") {
            $("#name_error").value = "Please enter a name";
        } else 

    });

});