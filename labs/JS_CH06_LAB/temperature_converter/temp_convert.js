"use strict";

const $ = selector => document.querySelector(selector);

const toCelsius = $("#toCelsius");
const toFahrenheit = $("#toFahrenheit");
const enterDegrees = $("#enterDegrees");
const resultDegrees = $("#resultDegrees");

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
});