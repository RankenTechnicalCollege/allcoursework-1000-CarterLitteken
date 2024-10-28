let again = "y"

do {
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
  while ( isNaN(rate) || 0 <= rate < 15);

  let years = 0;
  do {
    years = parseInt(prompt("Enter number of years\n"
      + "(Must be valid positive number)", 10));
  }
  while ( isNaN(years) || years <= 0);

  document.write(`<h4><label>Investment amount:</label> ${investment}</h4>
    <h4><label>Interest rate:</label> ${rate}</h4>
    <h4><label>Years:</label> ${years}</h4>`);

  let futureValue = investment;
  let interest = 0;
  for (let i = 1; i <= years; i++ ) {
    interest = futureValue * rate / 100;
    document.write(`<p><label>Year:</label> ${i}</p>`);
    document.write(`<p><label>Interest:</label> ${interest}</p>`);
    futureValue += interest
    document.write(`<p><label>Value:</label> ${futureValue.toFixed(2)}</p>`);

  }

  again = prompt("Repeat entries? (y/n)", "y")

}
while (again == "y");