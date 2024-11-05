"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

let quarterly_sales = 0;
let quarter = 1;
let regional_sales = 0;
let total_sales = 0;

document.write(`<h2>Sales by Quarter</h2>`);
for (let i in region1) {
  quarterly_sales = region1[i] + region2[i] + region3[i] + region4[i] + region5[i]
  document.write(`<p>Q${quarter}: $${quarterly_sales}</p>`);
  quarter++;
}

document.write(`<h2>Sales by Region</h2>`);
for (let val of region1) {
  regional_sales += val;
  total_sales += val;
}
document.write(`<p>Region 1: $${regional_sales}</p>`);
regional_sales = 0;
for (let val of region2) {
  regional_sales += val;
  total_sales += val;
}
document.write(`<p>Region 2: $${regional_sales}</p>`);
regional_sales = 0;
for (let val of region3) {
  regional_sales += val;
  total_sales += val;
}
document.write(`<p>Region 3: $${regional_sales}</p>`);
regional_sales = 0;
for (let val of region4) {
  regional_sales += val;
  total_sales += val;
}
document.write(`<p>Region 4: $${regional_sales}</p>`);
regional_sales = 0;
for (let val of region5) {
  regional_sales += val;
  total_sales += val;
}
document.write(`<p>Region 5: $${regional_sales}</p>`);
document.write(`<h2>Total Sales</h2>`)
document.write(`<p>$${total_sales}</p>`)