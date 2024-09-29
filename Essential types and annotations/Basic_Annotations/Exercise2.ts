import { Equal, Expect } from '@total-typescript/helpers'
const concatTwoStrings = (a: string, b:string) => {
    return [a, b].join('');
}
const result = concatTwoStrings("Hello", "World");

type test = Expect<Equal<typeof result, string>>;