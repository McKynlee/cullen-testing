// Contains test code for year.js function
const year = require('./year');

describe('the year function', () => {

  // Happy Path test:
  test('should take year and determine if it is a leap year', () => {
    const result = year(1988);

    expect(result).toBe(true);
  });
})