// Function to take in a year and return a boolean
// true if leap year, else false

function year(inputYear) {
  if (inputYear % 400 === 0) {
    return true;
  }
  else if (inputYear % 100 === 0) {
    return false;
  }
  else if (inputYear % 4 === 0) {
    return true;
  }
  else if (!inputYear) {
    throw new Error('Must provide an argument!')
  }
  else {
    return false;
  }
}

module.exports = year;