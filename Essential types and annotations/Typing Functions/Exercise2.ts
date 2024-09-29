// default function parameters

import { Equal, Expect } from "@total-typescript/helpers";

const concatName = (first: string, last?: string) => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
};
it("should return the full name", () => {
    const result = concatName("John", "Doe");

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toEqual("John Doe");
});
it("should return the first name", () => {
    const result = concatName("John");

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toEqual("John Pocock");
});