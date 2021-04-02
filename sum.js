// Adds two numbers together and returns the sum:

function sum(numberOne, numberTwo) {
  if (!numberOne || !numberTwo) {
    throw new Error('Must provide a second argument!')
  }
  else {
    return Number(numberOne) + Number(numberTwo);
  }

}

module.exports = sum;  // node export format