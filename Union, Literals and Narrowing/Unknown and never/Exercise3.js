"use strict";
// Reusable type guard
function isValidValueWithId(value) {
    return (typeof value === 'object' &&
        value !== null &&
        'data' in value &&
        typeof value.data === 'object' &&
        value.data !== null &&
        'id' in value.data &&
        typeof value.data.id === 'string');
}
const parseValue = (value) => {
    if (isValidValueWithId(value)) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
const parseValueAgain = (value) => {
    if (isValidValueWithId(value)) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
