import { describe, expect, test } from '@jest/globals';
import { getIdFromUrl } from '../src/common.util';

describe('getIdFromURL module', () => {
    test('should return true when proper url with character id is passed', () => {
        const _id = "1";
        const url = `https://swapi.dev/api/people/${_id}/`;

        const result = getIdFromUrl(url, "");
        const expected = _id;
        expect(result).toBe(expected);
    });
    
    test('should return true when id couldnt be found and fallback string is returned', () => {
        const _id = "1";
        const fallback_str = "";
        const url = `https://swapi.dev/api/starships/${_id}/`;

        const result = getIdFromUrl(url, fallback_str)
        const expected = fallback_str;
        expect(result).toBe(expected);
    });

    test('should return false when id couldnt be found and fallback string is not passed', () => {
        const _id = "1";
        const fallback_str = "";
        const url = `https://swapi.dev/api/starships/${_id}/`;

        const result = getIdFromUrl(url)
        const expected = fallback_str;
        expect(result).not.toBe(expected);
    });;
});