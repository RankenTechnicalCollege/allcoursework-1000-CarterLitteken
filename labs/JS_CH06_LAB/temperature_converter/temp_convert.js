"use strict";

const $ = selector => document.querySelector(selector);

const toCelsius = $("#toCelsius");
const toFahrenheit = $("#toFahrenheit");

const enterDegrees = $("#enterDegrees");


document.addEventListener("DOMContentLoaded", () => {


    $("#toCelsius").addEventListener("change", () => {
		if (toCelsius.checked == true){
			enterDegrees.previousElementSibling.textContent = "Enter F degrees:";
		}
    });
});