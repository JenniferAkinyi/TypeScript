"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concatName = (user) => {
    return `${user.first} ${user.last}`;
};
it("should return the full name", () => {
    const result = concatName({
        first: "John",
        last: "Doe",
    });
    expect(result).toEqual("John Doe");
});
