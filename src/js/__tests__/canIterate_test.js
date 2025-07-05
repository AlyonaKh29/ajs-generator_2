import { canIterate } from "../canIterate";

describe('Tests for the canIterate() function', () => {
    
    const expected = [
        { item: canIterate(new Map()), result: true },
        { item: canIterate(new Set()), result: true },
        { item: canIterate("Netology"), result: true },
        { item: canIterate([1,2,3]), result: true },
        { item: canIterate(null), result: false },
        { item: canIterate(undefined), result: false },
        { item: canIterate(12), result: false },
    ];

    test.each(expected)('returns $result for input', ({ item, result }) => {
        expect(item).toBe(result);
    })
})
