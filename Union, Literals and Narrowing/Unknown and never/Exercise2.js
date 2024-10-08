"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasDataWithId(value) {
    return (typeof value === 'object' &&
        value !== null &&
        'data' in value &&
        typeof value.data === 'object' &&
        value.data !== null &&
        'id' in value.data &&
        typeof value.data.id === 'string');
}
const parseValue = (value) => {
    if (hasDataWithId(value)) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
it('Should handle a { data: { id: string } }', () => {
    const result = parseValue({
        data: {
            id: '123',
        },
    });
    expect(result).toBe('123');
});
it('Should error when anything else is passed in', () => {
    expect(() => parseValue('123')).toThrow('Parsing error!');
    expect(() => parseValue(123)).toThrow('Parsing error!');
});
