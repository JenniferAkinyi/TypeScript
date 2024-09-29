import { Equal, Expect } from '@total-typescript/helpers'

const parsedData = JSON.parse('{"name": "Alice", "age": 30}') as {
    name: string;
    age: number;
  };

type test = Expect<
  Equal<

    typeof parsedData,
    {
      name: string;
      age: number;
    }
  >
>;