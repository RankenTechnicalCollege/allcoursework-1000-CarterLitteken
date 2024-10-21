"use strict";

const fahr = parseInt(prompt("Enter Fahrenheit temperature"));

const cels = parseFloat((fahr - 32) * (5/9))

const html = `<p>${fahr.toFixed(1)}°F = ${cels.toFixed(1)}°C`;
document.write(html);