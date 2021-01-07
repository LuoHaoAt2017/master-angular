"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator;
(function (Validator) {
    const numbersRegexp = /^[0-9]+$/;
    const lettersRegexp = /^[A-Za-z]+$/;
    class LettersValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validator.LettersValidator = LettersValidator;
    class ZipcodeValidator {
        isAcceptable(s) {
            return numbersRegexp.test(s);
        }
    }
    Validator.ZipcodeValidator = ZipcodeValidator;
})(Validator = exports.Validator || (exports.Validator = {}));
//# sourceMappingURL=validator.js.map