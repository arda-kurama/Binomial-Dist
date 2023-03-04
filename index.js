var slider = document.getElementById("myRange");
var output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  N = this.value;
};

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
var sampling = [];
var N = 1000;
var n = 10;
var p = 2;
var repeat = false;

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function rowToColumn(success) {
  clone = data.cloneNode(true);
  clone.style.display = "block";
  var height = 56 / N;
  console.log(height);
  clone.style.height = height + "vh";

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

function compute() {
  for (var i = 0; i < N; i++) {
    var sample = 0;

    for (var j = 0; j < n; j++) {
      if (randomInt(p) == 1) {
        sample += 1;
      }
    }

    sampling.push(sample);
    setTimeout(rowToColumn, N - i, sampling[i]);
  }
}
