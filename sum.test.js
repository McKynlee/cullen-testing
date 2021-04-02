// Contains test code for sum.js function

const sum = require('./sum.js');

// built-in test() gets two arguments:
// 1) string to explain what you're testing ("tacos")
// 2) function where you write test code
test('should add two numbers together, and return the sum', () => {
  // this is where test code is written
  const result = sum(83, 6);

  // used to do this:
  // console.log('sum of 83 and 6 should be 89:', result);

  // But we jest we do this:
  expect(result).toBe(89);
});

test('should add positive to negative', () => {
  const result = sum(83, -6);

  expect(result).toBe(77)
});

test('should add two negative numbers', () => {
  const result = sum(-83, -6);

  expect(result).toBe(-89)
});

test('should fail if only given one argument', () => {

});

test('should convert number strings to numbers ex: ("9" + "3")', () => {
  const result = sum("9", "3");

  expect(result).toBe(12)
});