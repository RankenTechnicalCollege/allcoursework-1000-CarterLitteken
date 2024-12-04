"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const scores_arr = [];
    let name = $("#name");
    let score = $("#score");
    let error1 = false;
    let error2 = false;

    $("#add_to_arr").addEventListener("click", () => {
        if (name == "") {
            $("#name_error").value = "Please enter a name";
            error1 = true;
        } else {
            $("#name_error").value = "";
            error1 = false;            
        }

        if (isNaN(score) == true || score < 0 && score > 100) {
            $("#score_error").value = "Score must be between 0 and 100";
            error2 = true;
        } else {
            $("#score_error").value = "";
            error2 = false;
        }


        if (error1 == false && error2 == false) {
            scores_arr.push(name,score);
            console.log(scores_arr);
        } else {
            $("#name").focus();
        }
    });

});