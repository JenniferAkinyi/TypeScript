"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}
// hovering over response.json()
// Removed redundant declaration and ensured fetch call is awaited properly
// const response = await fetch("https://api.example.com/data");
const example = async () => {
    const data = await fetchData();
};
