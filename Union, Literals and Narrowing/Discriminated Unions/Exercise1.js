"use strict";
function calculateArea1(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.sideLength * shape.sideLength;
    }
}
