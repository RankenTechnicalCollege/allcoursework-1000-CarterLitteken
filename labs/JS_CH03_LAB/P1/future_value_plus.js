let investment = 0;

do {
  investment = parseFloat(prompt("Enter investment amount as xxxxx.xx\n"
    + "(Must be valid positive number)", 10000));
}
while ( isNaN(investment) || investment <= 0);

let rate = 0;
do { 
  rate = parseFloat(prompt("Enter interest rate as xx.x\n"
    + "(Must be a number above 0 to 15)", 7.5));
}
while ( isNaN(rate) || 0 <= rate > 15);

let years = 0;
do {
  years = parseInt(prompt("Enter number of years\n"
    + "(Must be valid positive number)", 10));
}
while ( isNaN(years) || years <= 0);

let annualFutureValue = investment;
let monthlyFutureValue = investment;
let months = years * 12;
for (let i = 1; i <= years; i++ ) {
  annualFutureValue += annualFutureValue * rate / 100;
}
for (let i = 1; i <= months; i++ ) {
  monthlyFutureValue += monthlyFutureValue * (rate / 12) / 100;
}

document.write(`<h4>Future Value with Yearly Interest</h4>` +
  `<p><label>Investment amount:</label> ${investment}</p>` +
  `<p><label>Interest rate:</label> ${rate}</p>` +
  `<p><label>Years:</label> ${years}</p>` +
  `<p><label>Future Value:</label> ${annualFutureValue.toFixed(2)}</p>`);
document.write(`<h4>Future Value with Monthly Interest</h4>` +
  `<p><label>Investment amount:</label> ${investment}</p>` +
  `<p><label>Interest rate:</label> ${rate}</p>` +
  `<p><label>Years:</label> ${years}</p>` +
  `<p><label>Future Value:</label> ${monthlyFutureValue.toFixed(2)}</p>`);