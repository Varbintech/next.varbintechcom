import { generatePopulate, populateAllFields } from '../api.common';

describe('generatePopulate', () => {
  it('returns object with populate entries for each field', () => {
    const result = generatePopulate(['a', 'b']);

    expect(result).toEqual({ a: populateAllFields, b: populateAllFields });
  });
});
