"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRectangleArea = (rectangle) => {
    return rectangle.width * rectangle.height;
};
const getRectanglePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
it("should return the area of a rectangle", () => {
    const result = getRectangleArea({
        width: 10,
        height: 20,
    });
    expect(result).toEqual(200);
});
it("should return the perimeter of a rectangle", () => {
    const result = getRectanglePerimeter({
        width: 10,
        height: 20,
    });
    expect(result).toEqual(60);
});
