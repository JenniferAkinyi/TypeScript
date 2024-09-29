import { Equal, Expect } from '@total-typescript/helpers'

function calculateArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius
    } else {
        return shape.sideLength * shape.sideLength
    }
}
it('Should calculate the area of a circle when no kind is passed', () => {
    const result = calculateArea({
    kind: 'circle',
    radius: 5,
    })

    expect(result).toBe(78.53981633974483)

    type test = Expect<Equal<typeof result, number>>
})