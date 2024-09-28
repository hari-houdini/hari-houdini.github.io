import { describe, expect, test } from '@jest/globals';
import { hasItemsInList } from '../src/common.util';

describe('hasItemsInList module', () => {
    test('null value should return false', () => {
        const result = hasItemsInList(null)
        const expected = false;
        expect(result).toBe(expected);
    });
    
    test('object list should return true', () => {
        const result = hasItemsInList([{ a: "apple" }, { b: "ball" }])
        const expected = true;
        expect(result).toBe(expected);
    });

    test('string list should return true', () => {
        const result = hasItemsInList(["apple", "ball"])
        const expected = true;
        expect(result).toBe(expected);
    });;

    test('empty list should return false', () => {
        const result = hasItemsInList([])
        const expected = false;
        expect(result).toBe(expected);
    });
});