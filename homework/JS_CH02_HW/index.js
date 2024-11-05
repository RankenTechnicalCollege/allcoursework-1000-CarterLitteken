"use strict";

document.getElementById('btnClick').onclick = () => {
  let burger = parseInt(document.parseInt('#burger')) * 6;
  let fries = parseInt(document.getElementById('fries')) * 4;
  let soda = parseInt(document.getElementById('soda')) * 3;
  const total = burger + fries + soda;
  document.write(`<p>Total: \u0024${total}</p>`)
};