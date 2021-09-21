const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);

let firstNumber = prompt(`Please enter the first number`);
let secondNumber = prompt(`Please enter the second number`);
let operation = prompt(`Please choose the operation (+, -, /, *): *`);

firstNumber = +firstNumber;
secondNumber = +secondNumber;

if (isNaN(firstNumber) && isNaN(secondNumber)) {
  console.log(" the numbers were invalid");
} else {
  if (operation === "+") {
    let result = firstNumber + secondNumber;
    console.log(`${firstNumber} + ${secondNumber}= ${result}`);
  } else if (operation === "-") {
    let result = firstNumber - secondNumber;
    console.log(`${firstNumber} - ${secondNumber}= ${result}`);
  } else if (operation === "*") {
    let result = firstNumber * secondNumber;
    console.log(`${firstNumber} * ${secondNumber}= ${result}`);
  } else if (operation === "%") {
    let result = firstNumber % secondNumber;
    console.log(`${firstNumber} % ${secondNumber}= ${result}`);
  } else {
    console.log("operation is not valid");
  }
}
