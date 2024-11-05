"use strict";

let grade = 0;
do {
  grade = parseInt(prompt("Enter number grade from 0 to 100\n" + "Or enter 999 to end entries", 999))

  if (grade >= 88 && grade < 100) {
    document.write(`<p>Grade ${grade} = A`);
  }
  else if (grade >= 80 && grade < 88) {
    document.write(`<p>Grade ${grade} = B`);
  }
  else if (grade >= 68 && grade < 80) {
    document.write(`<p>Grade ${grade} = C`);
  }
  else if (grade >= 60 && grade < 68) {
    document.write(`<p>Grade ${grade} = D`);
  }
  else if (grade >= 0 && grade < 60) {
    document.write(`<p>Grade ${grade} = F`);
  }


}
while (grade != 999);