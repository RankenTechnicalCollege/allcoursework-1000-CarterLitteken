"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const scores_arr = [];
    const name = $("#name");
    const score = $("#score");
    let name_error = false;
    let score_error = false;

    $("#add_to_arr").addEventListener("click", () => {
        if (!isNaN(name) || name == "") {
            $("#name_error").value = "Please enter a name";
            name_error = true;
        } else {
            $("#name_error").value = "";
            name_error = false;
        }

        if (isNaN(score) || score < 0 && score > 100) {
            $("#score_error").value = "Score must be between 0 and 100";
            score_error = true;
        } else {
            $("#score_error").value = "";
            score_error = false;
        }

        if (name_error == false && score_error == false) {
            scores_arr.push(name,score);
            console.log(scores_arr);
        }
        
        $("#name").focus();
    });

});