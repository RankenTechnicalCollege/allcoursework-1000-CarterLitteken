"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

document.addEventListener("DOMContentLoaded", () => {

    const scores_arr = [];
    let name = $("#name");
    let score = $("#score");
    let error1 = false;
    let error2 = false;

    $("#add_to_arr").addEventListener("click", () => {
        if (name != "") {
            $("#name_error").value = "";
            error1 = false;
        } else {
            $("#name_error").value = "Please enter a name";
            error1 = true;
        }

        if (score >= 0 && score <= 100) {
            $("#score_error").value = "";
            error2 = false;
        } else {
            $("#score_error").value = "Score must be between 0 and 100";
            error2 = true;
        }

        if (error1 == false && error2 == false) {
            scores_arr.push(name,score);
        } else {
            $("#name").focus();
        }

    });

});