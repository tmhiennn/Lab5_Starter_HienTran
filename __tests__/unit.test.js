// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber ()
test('valid number with no area code but with dashes', () => {
  expect(isPhoneNumber('123-4567')).toBe(true);
});

test('valid number with area code and dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid number with no dashes', () => {
  expect(isPhoneNumber('4567890')).toBe(false);
});

test('invalid number with characters', () => {
  expect(isPhoneNumber('123-acbd')).toBe(false);
});

// isEmail
test('valid email', () => {
  expect(isEmail('hien123@gmail.com')).toBe(true);
});

test('valid email', () => {
  expect(isEmail('hien_321@ucsd.edu')).toBe(true);
});

test('invalid email with the top level domain less than 2 characters', () => {
  expect(isEmail('hien_321@ucsd.e')).toBe(false);
});

test('valid email missing the @ symbol', () => {
  expect(isEmail('hienyahoo.edu')).toBe(false);
});

// isStrongPassword
test('valid strong pass ', () => {
  expect(isStrongPassword('Hien123')).toBe(true);
});

test('valid strong pass ', () => {
  expect(isStrongPassword('hienHien_123')).toBe(true);
});

test('invalid strong pass first symbol is not a character', () => {
  expect(isStrongPassword('1Hello')).toBe(false);
});

test('invalid strong pass contains space', () => {
  expect(isStrongPassword('Hello Hello@')).toBe(false);
});

// isDate
test('valid date with 2 digits for XX', () => {
  expect(isDate('02/29/2003')).toBe(true);
});

test('valid date with 1 digits for XX', () => {
  expect(isDate('2/4/1999')).toBe(true);
});

test('invalid date with less than 4 digits for the year', () => {
  expect(isDate('2/4/200')).toBe(false);
});

test('invalid date with dashes separator', () => {
  expect(isDate('2-0-1994')).toBe(false);
});

// isHexColor
test('valid hex color ', () => {
  expect(isHexColor('C0C0C0')).toBe(true);
});

test('valid hex color with exactly 3 characters', () => {
  expect(isHexColor('FFF')).toBe(true);
});

test('invalid hex color with less than 3 characters', () => {
  expect(isHexColor('4F')).toBe(false);
});

test('invalid hex color start with an underscore', () => {
  expect(isHexColor('_C00C0')).toBe(false);
});