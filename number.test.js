const isEven = require('./number');

test('4 is even', () => {
  expect(isEven(4)).toBe(true);
});

test('7 is not even', () => {
  expect(isEven(7)).toBe(false);
});