const isValidEmail = require('./emailValidator');

test('validates "cecylbahati@gmail.com" as a valid email', () => {
  expect(isValidEmail('cecylbahati@gmail.com')).toBe(true);
});

test('validates "invalid-email" as an invalid email', () => {
  expect(isValidEmail('invalid-email')).toBe(false);
});