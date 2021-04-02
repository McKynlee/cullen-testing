// Functions takes in a number and returns:
// If the number is divisible by 3, return "Fizz".
// If the number is divisible by 5, return "Buzz".
// If the number is divisible by both 3 and 5, return "FizzBuzz".
// Otherwise, just return the number that was passed into the function.

function fizzbuzz(number) {

  if (!number) {
    throw new Error('Must provide an argument!')
  }
  else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  else if (number % 3 === 0) {
    return "Fizz"
  }
  else if (number % 5 === 0) {
    return "Buzz"
  }
  else {
    return number;
  }

}

module.exports = fizzbuzz;  // node export format