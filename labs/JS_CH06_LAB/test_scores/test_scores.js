"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const scores_arr = [];

    $("#add_to_arr").addEventListener("click", () => {
        
        const name = $("#name").value;
        const score = parseFloat($("#score").value);

        let name_error = false;
        let score_error = false;

        if (!isNaN(name) || name == "") {   
            $("#name_error").value = "Please enter a name";
            name_error = true;
        } else {
            $("#name_error").value = "";
            name_error = false;
        }

        if (isNaN(score) || score < 0 || score > 100) {
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
    //for scores_arr all names are even numbers and all scores are odd numbers
    $("#display_results").addEventListener("click", () => {
        const buttons = $("#buttons")
        const title = $("#results")

        if (!title) {
            const h2 = document.createElement("h2");
            const results = document.createTextNode("Results");
            buttons.insertAdjacentElement("afterend", h2);
            h2.appendChild(results);
            $("h2").setAttribute("id", "results")
            const div = document.createElement("div")
            
        } else {
            
        }
        
        

    });

});