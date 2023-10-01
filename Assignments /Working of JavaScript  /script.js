// Function "addNumbers" to demonstrate hoisting:
addNumbers(5, 7);

function addNumbers(a, b) {
  return a + b;
}
// -------------------------------------------------------------------------
// Function "multiplyNumbers" using function expression and hoisting:
multiplyNumbers(3, 4);

const multiplyNumbers = function (a, b) {
  return a * b;
};
// --------------------------------------------------------------------------
// Function with variable hoisting:
function subtractNumbers(a, b) {
  console.log(result); // undefined (hoisting)
  var result = a - b;
  console.log(result); // actual result
  return result;
}
subtractNumbers(10, 4);
// --------------------------------------------------------------------------
// Variable declarations in different scopes:
{
  let variableLet = "I'm using let";
  var variableVar = "I'm using var";
  const variableConst = "I'm using const";

  console.log(variableLet);
  console.log(variableVar);
  console.log(variableConst);
}

// Attempting to access the variables outside the block will result in ReferenceError for 'variableLet'
console.log(variableVar);
console.log(variableConst);
// --------------------------------------------------------------------------
// Temporal Dead Zone with let:
{
  console.log(variableLet); // ReferenceError
  let variableLet = "I'm using let";
}
