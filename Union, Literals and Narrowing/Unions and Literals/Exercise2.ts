type Direction = 'up' | 'down' | 'left' | 'right' | 'up-right' | 'up-left' | 'down-right' | 'down-left'

function move(direction:  Direction, distance: number) {
    // Move the specified distance in the given direction
}
move('up', 10)

move('left', 5)

move(
    'up-right',
    10,
)

move(
    'down-left',
    20,
)