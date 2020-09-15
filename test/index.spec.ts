import { Validator } from '../src/namespace/validator';

describe('命名空间', () => {
  test('ZipcodeValidator', () => {
    const validator = new Validator.ZipcodeValidator();
    expect(validator.isAcceptable('23456')).toBeTruthy();
  });

  test('LettersValidator', () => {
    const validator = new Validator.LettersValidator();
    expect(validator.isAcceptable('abcsd')).toBeTruthy();
  })
});