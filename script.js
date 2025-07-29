// a = 232;
// b = 2;

// function add(a,b) {
//     return a + b;
// }

// console.log(add(a,b));

// // document.getElementById("a").innerHTML = "Hello World!";

// one = document.getElementById("input").innerHTML;
// console.log(one);

// if (a%2 == 0) {
//     console.log("ok")
// } else {
//     console.log("Nah")
// }

// let text = ""
// for (let i = 0; i < 5; i++) {
//     text += "Iteration number: " + i + "<br>";
// }

// document.getElementById("heading").innerHTML = text;

// function myFunction (n) {
//     document.getElementById("heading").innerHTML = n;
// }

// function calc_input(n) {
//     document.getElementById("display").innerHTML += n;
// }

function calculate() {
    input = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(input);
}

function calc_input(n) {
    document.getElementById("display").innerHTML += n;
}

function all_clear() {
    document.getElementById("display").innerHTML = "";
}