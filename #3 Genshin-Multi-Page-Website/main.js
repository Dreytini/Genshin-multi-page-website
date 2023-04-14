document.getElementById("btn-in1").addEventListener("click", btn1Clicked);
document.getElementById("btn-in2").addEventListener("click", btn2Clicked);
document.getElementById("btn-in3").addEventListener("click", btn3Clicked);
document.getElementById("btn-in4").addEventListener("click", btn4Clicked);
document.getElementById("btn-in5").addEventListener("click", btn5Clicked);
document.getElementById("btn-in6").addEventListener("click", btn6Clicked);
document.getElementById("btn-in7").addEventListener("click", btn7Clicked);
document.getElementById("btn-in8").addEventListener("click", btn8Clicked);
document.getElementById("btn-in9").addEventListener("click", btn9Clicked);
document.getElementById("btn-in0").addEventListener("click", btn10Clicked);

// HTML Variables
let ans = document.getElementById("results");
let ans2 = document.getElementById("results1");
let ans3 = document.getElementById("results2");
let ans4 = document.getElementById("results3");
let ans5 = document.getElementById("results4");
let ans6 = document.getElementById("results5");
let ans7 = document.getElementById("results6");
let ans8 = document.getElementById("results7");
let ans9 = document.getElementById("results8");
let ans0 = document.getElementById("results9");

function btn1Clicked() {
  let answer = document.getElementById("answer1").value.toLowerCase();
  // Get Answer Input
  if (answer === "natlan") {
    ans.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn2Clicked() {
  // Get Answer Input
  let answer2 = document.getElementById("answer2").value.toLowerCase();
  if (answer2 === "7" || answer2 === "seven") {
    ans2.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans2.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn3Clicked() {
  // Get Answer Input
  let answer3 = document.getElementById("answer3").value.toLowerCase();
  if (answer3 === "a god") {
    ans3.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans3.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn4Clicked() {
  // Get Answer Input
  let answer4 = document.getElementById("answer4").value.toLowerCase();
  if (answer4 === "electro/lightning" || answer4 === "electro and lightning") {
    ans4.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans4.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn5Clicked() {
  // Get Answer Input
  let answer5 = document.getElementById("answer5").value.toLowerCase();
  if (answer5 === "dendro archon" || answer5 === "god of wisdom") {
    ans5.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans5.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn6Clicked() {
  // Get Answer Input
  let answer6 = document.getElementById("answer6").value.toLowerCase();
  if (
    answer6 === "dvalin and stormterror" ||
    answer6 === "dvalin/stormterror"
  ) {
    ans6.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans6.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn7Clicked() {
  // Get Answer Input
  let answer7 = document.getElementById("answer7").value.toLowerCase();
  if (answer7 === "khaenri'ah") {
    ans7.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans7.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn8Clicked() {
  // Get Answer Input
  let answer8 = document.getElementById("answer8").value.toLowerCase();
  if (answer8 === "1600" || answer8 === "1600 primogems") {
    ans8.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans8.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn9Clicked() {
  // Get Answer Input
  let answer9 = document.getElementById("answer9").value.toLowerCase();
  if (answer9 === "70" || answer9 === "70 pity") {
    ans9.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans9.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
function btn10Clicked() {
  // Get Answer Input
  let answer0 = document.getElementById("answer0").value.toLowerCase();
  if (answer0 === "sunday") {
    ans0.innerHTML = `<p class="q1"> Correct! </p>`;
  } else {
    ans0.innerHTML = `<p class="q2"> Sorry that is Incorrect! </p>`;
  }
}
