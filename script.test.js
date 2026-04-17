import { capitalize, reverseString, calc } from "./script";

test('nasus should be Nasus', () => {
 expect(capitalize('nasus')).toBe('Nasus')
})


test('sadfdsafdsfa should be Sadfdsafdsfa', () => {
 expect(capitalize('sadfdsafdsfa')).toBe('Sadfdsafdsfa')
})

test('nasus should be susan', () => {
 expect(reverseString('nasus')).toBe('susan')
})

test('ginger should be regnig', () => {
 expect(reverseString('ginger')).toBe('regnig')
})

test('1 * 1 should be 1', () => {
 expect(calc.multiply(1, 1)).toBe(1)
})

test('2 * 2 should be 4', () => {
 expect(calc.multiply(2, 2)).toBe(4)
})

test('1 + 1 should be 2', () => {
 expect(calc.add(1, 1)).toBe(2)
})

test('2 + 2 should be 4', () => {
 expect(calc.add(2, 2)).toBe(4)
})

test('3 + 2 should be 5', () => {
 expect(calc.add(3, 2)).toBe(5)
})

test('1 - 1 should be 0', () => {
 expect(calc.subract(1, 1)).toBe(0)
})

test('4 - 2should be 2', () => {
 expect(calc.subract(4, 2)).toBe(2)
})

test('3 - 2 should be 1', () => {
 expect(calc.subract(3, 2)).toBe(1)
})

test('1 / 1 should be 1', () => {
 expect(calc.divide(1, 1)).toBe(1)
})

test('5 / 2 should be 2.5', () => {
 expect(calc.divide(5, 2)).toBe(2.5)
})

test('0 / 8 should be 0', () => {
 expect(calc.divide(0, 8)).toBe(0)
})