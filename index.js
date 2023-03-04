var data = document.querySelector("#data");
var A = document.querySelector("#a");
var B = document.querySelector("#b");
var C = document.querySelector("#c");
var D = document.querySelector("#d");
var E = document.querySelector("#e");
var F = document.querySelector("#f");
var G = document.querySelector("#g");
var H = document.querySelector("#h");
var I = document.querySelector("#i");
var J = document.querySelector("#j");
var K = document.querySelector("#k");

var n = 2500;
var sampling = [];

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

var column = document.querySelector("#max");

function rowToColumn(success) {
  clone = data.cloneNode(true);
  clone.style.display = "block";

  if (success == 0) {
    A.after(clone);
  }
  if (success == 1) {
    B.after(clone);
  }
  if (success == 2) {
    C.after(clone);
  }
  if (success == 3) {
    D.after(clone);
  }
  if (success == 4) {
    E.after(clone);
  }
  if (success == 5) {
    F.after(clone);
  }
  if (success == 6) {
    G.after(clone);
  }
  if (success == 7) {
    H.after(clone);
  }
  if (success == 8) {
    I.after(clone);
  }
  if (success == 9) {
    J.after(clone);
  }
  if (success == 10) {
    K.after(clone);
  }
}

for (var i = 0; i < n; i++) {
  var sample = 0;

  for (var j = 0; j < 10; j++) {
    if (randomInt(2) == 1) {
      sample += 1;
    }
  }

  sampling.push(sample);
  setTimeout(rowToColumn, 1000 - 10 * i, sampling[i]);
}

console.log(sampling);