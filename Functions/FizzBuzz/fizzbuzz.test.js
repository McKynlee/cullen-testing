// Contains test code for year.js function
const fizzbuzz = require('./fizzbuzz');

describe('the fizzbuzz function', () => {

  // If number divisible by 3, return "Fizz"
  test('should return Fizz', () => {
    const result = fizzbuzz(6);

    expect(result).toBe('Fizz');
  });


  // If number divisible by 5, return "Buzz"
  test('should return Buzz', () => {
    const result = fizzbuzz(20);

    expect(result).toBe('Buzz');
  });


  // If number divisible by 3 AND 5, return "FizzBuzz"
  test('should return FizzBuzz', () => {
    const result = fizzbuzz(15);

    expect(result).toBe('FizzBuzz');
  });


  // If not divisible by 3 nor 5, return argument
  test('should return number argument', () => {
    const result = fizzbuzz(11);

    expect(result).toBe(11);
  });


  // If number is not given, throw error:
  test('should throw error', () => {
    expect(() => {
      fizzbuzz();
    }).toThrow('Must provide an argument!')
  });

})