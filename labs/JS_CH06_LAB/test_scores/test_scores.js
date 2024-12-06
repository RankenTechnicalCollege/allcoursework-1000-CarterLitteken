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
    /*
    <h2>Results</h2>
    <div>
        <output name="avg_score" id="avg_score"></output>
        <br>
        <output name="high_score" id="high_score"></output>
    </div>
    <h2>Scores</h2>
    <div>
        <output name="scores" id="scores"></output>
    </div>
    */
    $("#display_results").addEventListener("click", () => {
        const container = $("#results_container");
        const h2 = document.createElement("h2");
        const results = document.createTextNode("Results");
        const div = document.createElement("div");
        const output = document.createElement("output");
        let total = 0;
        let avg_score = 0;
        let high_score_name = "";
        let high_score = 0;

        if (!container) {
            $("#buttons_container").insertAdjacentElement("afterend", h2);
            h2.appendChild(results);
            $("#buttons_container").nextElementSibling.setAttribute("id", "results_h2");
            $("#results_h2").insertAdjacentElement("afterend", div);
            $("#results_h2").nextElementSibling.setAttribute("id", "results_container");
            $("#results_container").appendChild(output);
            $("#results_container").firstChild.setAttribute("id", "avg_score");
            $("#results_container").appendChild(output);
            $("#results_container").lastChild.setAttribute("id", "high_score");
            
        } else {
            
        }
        for (let i = 1; i <= scores_arr.length; i += 2) {
            let score = scores_arr[i];
            total += score;
            let scores = (scores_arr.length)/2;
            let avg = total/scores;
            avg_score = avg;
            if (scores_arr[i] > high_score) {
                high_score = scores_arr[i];
                high_score_name = scores_arr[i-1];
            }

        }
        $("#results_container").firstChild.value = "Average score = " + avg_score;
        $("#results_container").lastChild.value = "High score = " + high_score_name + " with a score of " + high_score;

    });

});