"use strict";

const $ = selector => document.querySelector(selector);

const toCelsius = $("#toCelsius");
const toFahrenheit = $("#toFahrenheit");
const enterDegrees = parseFloat($("#enterDegrees").value);
let resultDegrees = $("#resultDegrees");

const convert = () => {
	if (isNaN(enterDegrees) = false) {
		$("#message").value = "You must enter a valid number for degrees";
	}
	else {
		$("#message").value = "";
	}
	
	if (toCelsius.checked == true) {
		resultDegrees = (enterDegrees - 32) * (5/9);
		$("#resultDegrees").value = resultDegrees.toFixed(2);
	} else if (toFahrenheit.checked == true) {
		resultDegrees = (enterDegrees * (9/5)) +32;
		$("#resultDegrees").value = resultDegrees;
	}
};

document.addEventListener("DOMContentLoaded", () => {

  $("#toCelsius").addEventListener("change", () => {
		if (toCelsius.checked == true){
			enterDegrees.previousElementSibling.textContent = "Enter F degrees:";
			resultDegrees.previousElementSibling.textContent = "Degrees Celsius:";
		} else {
			enterDegrees.previousElementSibling.textContent = "Enter C degrees:";
			resultDegrees.previousElementSibling.textContent = "Degrees Fahrenheit:";
		}
    });

	$("#toFahrenheit").addEventListener("change", () => {
		if (toFahrenheit.checked == true){
			enterDegrees.previousElementSibling.textContent = "Enter C degrees:";
			resultDegrees.previousElementSibling.textContent = "Degrees Fahrenheit:";
		} else {
			enterDegrees.previousElementSibling.textContent = "Enter F degrees:";
			resultDegrees.previousElementSibling.textContent = "Degrees Celsius:";
		}
	});

	$("#convert").addEventListener("click", convert);

});