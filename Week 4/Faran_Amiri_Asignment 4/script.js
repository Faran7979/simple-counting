function getNonNegativeNumber(promptMessage) {
  let userInput = prompt(promptMessage);
  let number = parseInt(userInput); // in this line we want to parse number.

  if (isNaN(number) || number < 0) {
    // in this line we want to confident that user enter a valid number not negative or decimal.
    alert("Error: Please enter a non-negative numeric value.");
    return "no number";
  }

  return number;
}

function getOperator() {
  let operator = prompt(
    "Enter an operator (+, -, *, /,% ,> ,< ,** ,>= ,<= ,=== ,!==):"
  ).trim(); // with prompt we get our own operator and with trim we confirm that user enter operator without any spaces.

  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/" ||
    operator === "%" ||
    operator === ">" ||
    operator === "<" ||
    operator === "**" ||
    operator === ">=" ||
    operator === "<=" ||
    operator === "===" ||
    operator === "!=="
  ) {
    return operator;
  } else {
    alert(" Error: Invalid operator.");
    return "no operator";
  }
}

function calculate(firstNumber, operator, secondNumber) {
  // in this function we introduce 3 parameters.
  switch (
    operator // with switch like if we put condition that get our numbers and operators together.
  ) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      if (secondNumber === 0) {
        alert("Error: Division by zero is not allowed.");
        return "infinitive";
      }
      return firstNumber / secondNumber;
    case "%":
      return firstNumber % secondNumber;
    case ">":
      return firstNumber > secondNumber;
    case "<":
      return firstNumber < secondNumber;
    case "**":
      return firstNumber ** secondNumber;
    case ">=":
      return firstNumber >= secondNumber;
    case "<=":
      return firstNumber <= secondNumber;
    case "===":
      return firstNumber === secondNumber;
    case "!==":
      return firstNumber !== secondNumber;
  }
}

function final() {
  // now in final part we call our last functions.
  let firstNumber = getNonNegativeNumber("Enter the first number:");
  if (firstNumber === "no number") return;

  let secondNumber = getNonNegativeNumber("Enter the second number:");
  if (secondNumber === "no number") return;

  let operator = getOperator();
  if (operator === "no operator") return;

  let result = calculate(firstNumber, operator, secondNumber);
  if (result !== "no answer") {
    alert(firstNumber + operator + secondNumber + " = " + result);
  }
}
final();
