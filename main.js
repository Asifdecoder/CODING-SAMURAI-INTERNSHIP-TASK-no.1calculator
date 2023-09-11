//targetting all the necessary elements
let clear = document.getElementById("clear");
let answer = document.getElementById("answer");
let input = document.querySelector("#inputField");
let buttonInput = document.querySelectorAll(".allbtn");
let body = document.querySelector('body')
//answer calculate krna hai
function calculateKaro() {
  if (input.value != "") {
    let ans = eval(input.value);
    input.value = ans;
  } else {
    input.value = "Enter a digit";
  }
}
// screen ko clear kro
function screenClearKaro() {
  input.value = "";
}
// button ki value print kro input field me
function getButtonKiValue(e) {
  let btnval = e.target.defaultValue;
  input.value = input.value + btnval;
}
//event listener to calculate answer after clicking '='
answer.addEventListener("click", () => {
  calculateKaro();
});
// event listener to clear the screen after clicking 'C'
clear.addEventListener("click", () => {
  screenClearKaro();
});
// iterating over each button of input as it is a nodelist and taking input on the inputField after calling the function getbuttonvalue.
for (let i of buttonInput) {
  i.addEventListener("click", (e) => {
    getButtonKiValue(e);
  });
}

// code for particles.js
window.
onload
= function() {
  Particles.
init
({
    selector: 
'.background',
 sizeVariations: 7,
 connectParticles: true
,
 color: '#5ADC9C',
 speed: 0.5
  },
  )
  

}


