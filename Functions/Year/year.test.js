// Contains test code for year.js function
const year = require('./year');

describe('the year function', () => {

  // If year divisible by 4
  test('should return true, divisible by 4', () => {
    const result = year(1988);

    expect(result).toBe(true);
  });


  // If year divisible by 100
  test('should return false, divisible by 100', () => {
    const result = year(1900);

    expect(result).toBe(false);
  });


  // If year divisible by 400
  test('should return true, divisible by 400', () => {
    const result = year(2000);

    expect(result).toBe(true);
  });


  // If year not given, throw error
  test('should throw error, year not given', () => {
    expect(() => {
      year();
    }).toThrow('Must provide an argument!')
  });

})