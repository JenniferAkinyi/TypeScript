import { Equal, Expect } from '@total-typescript/helpers'

type Data = {
    id: string;
    name: string;
};

async function fetchData() {
    const response = await fetch("https://api.example.com/data");

    const data: Data = await response.json();

    return data;
}

// hovering over response.json()

// Removed redundant declaration and ensured fetch call is awaited properly
// const response = await fetch("https://api.example.com/data");

const example = async () => {
    const data = await fetchData();

    type test = Expect<Equal<typeof data, Data>>;

};