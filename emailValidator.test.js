const isValidEmail = require('./emailValidator');

test('validates "test@example.com" as a valid email', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
});

test('validates "invalid-email" as an invalid email', () => {
  expect(isValidEmail('invalid-email')).toBe(false);
});