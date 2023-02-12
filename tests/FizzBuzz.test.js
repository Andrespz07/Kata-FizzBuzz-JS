import { FizzBuzzFunction } from "../src/scripts/FizzBuzz.js"

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
        let testeo = FizzBuzzFunction(43);
        expect(testeo).toBe("Fizz")
    });
    test('should return Buzz', () => {
        let testeo = FizzBuzzFunction(5);
        expect(testeo).toBe("Buzz")
    });
    test('should return FizzBuzz', () => {
        let testeo = FizzBuzzFunction(15);
        expect(testeo).toBe("FizzBuzz")
    });
    test('should return index', () => {
        let parametro = 4;
        let testeo = FizzBuzzFunction(parametro);
        expect(testeo).toBe(parametro.toString())
    });
});