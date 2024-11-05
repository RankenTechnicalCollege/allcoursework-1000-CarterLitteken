"use strict";

let grade = 0;
do {
  grade = parseFloat(prompt("Enter number grade from 0 to 100\n" + "Or enter 999 to end entries", 999))

  if (grade >= 88 && grade < 100) {
    document.write(`<p>Grade ${grade} = A`);
  }
  


}
while (grade != 999);