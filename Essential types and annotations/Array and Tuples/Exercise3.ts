import { Equal, Expect } from '@total-typescript/helpers'

const setRange = (range: [number, number]) => {
    const x = range[0];
    const y = range[1];

    type tests = [
        Expect<Equal<typeof x, number>>,

        Expect<Equal<typeof y, number>>,

    ]
}