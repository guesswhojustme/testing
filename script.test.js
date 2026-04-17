import { capitalize, reverseString } from "./script";

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
