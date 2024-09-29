"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.sideLength * shape.sideLength;
    }
}
it('Should calculate the area of a circle when no kind is passed', () => {
    const result = calculateArea({
        kind: 'circle',
        radius: 5,
    });
    expect(result).toBe(78.53981633974483);
});
