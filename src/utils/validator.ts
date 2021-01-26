export namespace Validator {
  
  const numbersRegexp = /^[0-9]+$/;
  const lettersRegexp = /^[A-Za-z]+$/;

  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  export class LettersValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipcodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return numbersRegexp.test(s);
    }
  }
}
