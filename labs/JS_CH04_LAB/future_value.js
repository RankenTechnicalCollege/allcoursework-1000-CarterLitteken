let investment = 0;
do {
  investment = parseFloat(
    prompt("Enter investment amount as xxxx.xx", 10000));
}
while ( isNaN(investment) );
