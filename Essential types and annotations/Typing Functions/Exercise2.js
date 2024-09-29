"use strict";
// default function parameters
Object.defineProperty(exports, "__esModule", { value: true });
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
it("should return the full name", () => {
    const result = concatName("John", "Doe");
    expect(result).toEqual("John Doe");
});
it("should return the first name", () => {
    const result = concatName("John");
    expect(result).toEqual("John Pocock");
});
