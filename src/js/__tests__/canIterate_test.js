import { canIterate } from "../canIterate";

describe('Tests for the canIterate() function', () => {
    
    test('function returns true', () => {
        expect(canIterate(new Map())).toBe(true);
        expect(canIterate(new Set())).toBe(true);
        expect(canIterate("Netology")).toBe(true);
        expect(canIterate([1,2,3])).toBe(true);
    })

    test('function returns false', () => {
        expect(canIterate(null)).toBe(false);
        expect(canIterate(undefined)).toBe(false);
        expect(canIterate(12)).toBe(false);
    })
})
