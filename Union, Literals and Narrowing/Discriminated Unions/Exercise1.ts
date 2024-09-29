type Circle = {
    kind: 'circle'
    radius: number
}

type Square = {
    kind: 'square'
    sideLength: number
}

type Shape = Circle | Square

function calculateArea1(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius
      } else {
        return shape.sideLength * shape.sideLength
      }
    }